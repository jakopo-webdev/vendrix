import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  // Convert price and rating to numbers for display
  const price =
    typeof product.price === "string"
      ? parseFloat(product.price)
      : product.price;
  const rating =
    typeof product.rating === "string"
      ? parseFloat(product.rating)
      : product.rating;

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={320}
          height={320}
          className="object-cover w-full h-48 rounded-t"
          priority={true} // Use priority for the first image to improve loading performance
        />
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4">
        <CardTitle className="text-lg font-semibold mb-1">
          {product.name}
        </CardTitle>
        <CardDescription className="text-xs mb-2">
          {product.brand}
        </CardDescription>
        <p className="text-sm mb-2 line-clamp-2">{product.description}</p>
        <span className="text-blue-600 font-bold text-base mb-2">
          ${price.toFixed(2)}
        </span>
      </CardContent>
      <CardFooter className="px-4 flex flex-col gap-6">
        <button
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
        <div className="flex items-center gap-1 text-xs">
          {/* Render stars */}
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          ))}
          <span className="ml-1 font-medium">{rating.toFixed(1)}</span>
          <span className="ml-1">
            ({product.numReviews} review{product.numReviews !== 1 ? "s" : ""})
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
