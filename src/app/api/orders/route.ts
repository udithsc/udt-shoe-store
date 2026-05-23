import { NextResponse } from 'next/server';
import { getOrders, getProducts, saveOrders, saveProducts, StoreOrder } from '../../../lib/store';

interface OrderRequestItem {
  slug: string;
  quantity: number;
}

interface OrderRequestBody {
  customer?: Record<string, string>;
  paymentMethod?: string;
  items?: OrderRequestItem[];
}

const requiredCustomerFields = ['name', 'email', 'address', 'city', 'postalCode'];

const validateOrderPayload = (body: OrderRequestBody) => {
  if (!body || typeof body !== 'object') {
    return 'Order payload is required.';
  }

  if (!body.customer || requiredCustomerFields.some((field) => !String(body.customer?.[field] || '').trim())) {
    return 'Customer name, email, address, city, and postal code are required.';
  }

  if (!Array.isArray(body.items) || body.items.length === 0) {
    return 'At least one cart item is required.';
  }

  if (body.items.some((item) => !item.slug || !Number.isInteger(item.quantity) || item.quantity < 1)) {
    return 'Each item requires a slug and a positive integer quantity.';
  }

  return null;
};

export const GET = async () => {
  const orders = await getOrders();
  return NextResponse.json(orders);
};

export const POST = async (request: Request) => {
  const body = (await request.json()) as OrderRequestBody;
  const validationError = validateOrderPayload(body);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const products = await getProducts();
  const orders = await getOrders();
  const items = body.items ?? [];

  for (const item of items) {
    const product = products.find((entry) => entry.slug === item.slug);

    if (!product) {
      return NextResponse.json({ error: `${item.slug} is not available.` }, { status: 400 });
    }

    if (product.stock < item.quantity) {
      return NextResponse.json({ error: `${product.name} only has ${product.stock} pair(s) left.` }, { status: 400 });
    }
  }

  const orderItems = items.map((item) => {
    const product = products.find((entry) => entry.slug === item.slug)!;

    return {
      slug: product.slug,
      name: product.name,
      unitPrice: product.price,
      quantity: item.quantity,
      lineTotal: product.price * item.quantity,
    };
  });

  const total = orderItems.reduce((sum, item) => sum + item.lineTotal, 0);
  const order: StoreOrder = {
    id: `UDT-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    customer: {
      name: body.customer!.name,
      email: body.customer!.email,
      address: body.customer!.address,
      city: body.customer!.city,
      postalCode: body.customer!.postalCode,
    },
    paymentMethod: body.paymentMethod || 'Cash on delivery',
    status: 'Pending fulfilment',
    items: orderItems,
    total: Number(total.toFixed(2)),
  };

  const updatedProducts = products.map((product) => {
    const orderedItem = orderItems.find((item) => item.slug === product.slug);
    return orderedItem ? { ...product, stock: product.stock - orderedItem.quantity } : product;
  });

  await saveProducts(updatedProducts);
  await saveOrders([order, ...orders]);

  return NextResponse.json(order, { status: 201 });
};
