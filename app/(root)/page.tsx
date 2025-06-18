import { ProductList } from "@/components/shared/product/product-list"
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function Home() {
  await delay(1000);
  return (
    <div className="space-y-8 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <ProductList />
    </div>
  )
}