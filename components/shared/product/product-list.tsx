import sampleData from "@/db/sample-data";
import Image from "next/image";

export function ProductList() {
    
    const products = sampleData.products;

  if (!products || products.length === 0) {
    return (
      <div className="w-full text-center py-10 text-gray-500">No products available.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="rounded-lg shadow p-4 flex flex-col items-center">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={160}
            height={160}
            className="object-cover rounded mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <span className="text-blue-600 font-bold text-base mb-2">${product.price.toFixed(2)}</span>
          <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
