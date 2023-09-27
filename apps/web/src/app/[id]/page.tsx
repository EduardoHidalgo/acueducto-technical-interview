import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProductOverview } from "@/components/product/overview";
import { getProductById } from "@/services/getProductById";

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { id?: string };
  searchParams: { discount?: number };
}) {
  // If slug was not provided, redirect to notFound.
  if (params.id === undefined) return notFound();

  // Fetch for the product even if the id is not a numeric value. Let the
  // request handle that error.
  const product = await getProductById(params.id);

  // Error handling if fetching fail.
  if (product instanceof Error) return notFound();

  return (
    <main>
      <Navbar />
      <ProductOverview product={product} discount={searchParams.discount} />
      <Footer />
    </main>
  );
}
