import { Product } from "@/types/product";

export async function getProducts(): Promise<Array<Product> | Error> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const REVALIDATION_TIME = 60; // Every minute

  const res = await fetch(`${API_URL}/products`, {
    next: { revalidate: REVALIDATION_TIME },
  });

  if (!res.ok) return Error("Failed to fetch all products");

  const json = (await res.json()) as { data: Array<Product> };

  return json.data;
}
