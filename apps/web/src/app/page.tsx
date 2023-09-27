import { notFound } from "next/navigation";

import { getProducts } from "@/services/getProducts";
import { ProductList } from "@/components/product/list";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HomeContainer } from "./container";

export default async function HomePage() {
  // SSR fetching.
  const initialData = await getProducts();

  if (initialData instanceof Error) return notFound();

  return (
    <main className="h-full flex flex-col">
      <HomeContainer initialData={initialData}>
        <Navbar withSearch />
        <div className="bg-white flex m-auto">
          <div className="mx-auto max-w-2xl px-8 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              <ProductList />
            </div>
          </div>
        </div>
        <Footer />
      </HomeContainer>
    </main>
  );
}
