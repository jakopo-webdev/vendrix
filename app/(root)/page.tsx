import { getProducts } from "@/lib/actions/product.actions";
import { ProductList } from "@/components/shared/product/product-list";

export default async function Home() {
  const products = await getProducts();
  const formattedProducts = products.map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
    createdAt: String(product.createdAt),
  }));

  return (
    <div className="space-y-8 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <ProductList products={formattedProducts} />
    </div>
  );
}
