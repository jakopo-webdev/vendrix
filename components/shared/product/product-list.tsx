import { ProductCard } from "./product-card";
import type { Product } from "@/types";

export function ProductList({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return (
      <div className="w-full text-center py-10 text-gray-500">
        No products available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
