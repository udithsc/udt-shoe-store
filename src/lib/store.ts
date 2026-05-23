import fs from 'node:fs/promises';
import path from 'node:path';

export interface StoreProduct {
  imgURL: string;
  name: string;
  price: number;
  slug: string;
  category: string;
  stock: number;
  sizes: number[];
  description: string;
}

export interface StoreOrderItem {
  slug: string;
  name: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
}

export interface StoreOrder {
  id: string;
  createdAt: string;
  customer: {
    name: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
  };
  paymentMethod: string;
  status: string;
  items: StoreOrderItem[];
  total: number;
}

const dataDir = path.join(process.cwd(), 'data');
const productsFile = path.join(dataDir, 'products.json');
const ordersFile = path.join(dataDir, 'orders.json');

const readJson = async <T>(filePath: string, fallback: T): Promise<T> => {
  try {
    const contents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(contents) as T;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return fallback;
    throw error;
  }
};

const writeJson = async <T>(filePath: string, data: T) => {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`);
};

export const getProducts = () => readJson<StoreProduct[]>(productsFile, []);

export const saveProducts = (products: StoreProduct[]) => writeJson(productsFile, products);

export const getOrders = () => readJson<StoreOrder[]>(ordersFile, []);

export const saveOrders = (orders: StoreOrder[]) => writeJson(ordersFile, orders);
