import { Product } from "@/types/product";

export async function getSearchProducts(
  search: string
): Promise<Array<Product> | Error> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/products?search=${search}`);

  if (!res.ok) return new Error("Failed to search products");

  const json = (await res.json()) as { data: Array<Product> };

  return json.data;
}
