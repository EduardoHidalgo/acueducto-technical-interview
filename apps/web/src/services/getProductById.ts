import { Product } from "@/types/product";

export async function getProductById(id: string): Promise<Product | Error> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/products/${id}`);

  if (!res.ok) return new Error("Failed to fetch product by id");

  return (await res.json()) as Product;
}
