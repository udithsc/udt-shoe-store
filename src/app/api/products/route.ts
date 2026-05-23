import { NextResponse } from 'next/server';
import { getProducts } from '../../../lib/store';

export const GET = async () => {
  const products = await getProducts();
  return NextResponse.json(products);
};
