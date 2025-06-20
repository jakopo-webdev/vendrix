import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductImages from "@/components/product/product-images";
import Link from "next/link";

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);
  if (!product) return notFound();

  const price =
    typeof product.price === "string"
      ? parseFloat(product.price)
      : product.price;
  const rating =
    typeof product.rating === "string"
      ? parseFloat(product.rating)
      : product.rating;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="mb-6">
        <Link href="/" passHref>
          <Button variant="outline" className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Product Image */}
        <div className="md:col-span-5 flex flex-col items-center justify-center bg-white rounded-lg shadow p-6">
          <ProductImages images={product.images} alt={product.name} />
        </div>

        {/* Product Info */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-sm mb-1">
            Brand:{" "}
            <span className="font-bold text-primary">{product.brand}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            ))}
            <span className="ml-2 font-medium">{rating.toFixed(1)}</span>
            <span className="ml-1 text-gray-500">
              ({product.numReviews} review{product.numReviews !== 1 ? "s" : ""})
            </span>
          </div>
          <p className="text-base mb-4">{product.description}</p>
        </div>

        {/* Purchase Card */}
        <div className="md:col-span-3">
          <Card className="shadow-lg border-2">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="text-3xl font-bold mb-2">${price.toFixed(2)}</div>
              <Badge
                variant={product.stock > 0 ? "default" : "destructive"}
                className="w-fit"
              >
                {product.stock > 0
                  ? `In Stock (${product.stock})`
                  : "Out of Stock"}
              </Badge>
              {product.stock > 0 && (
                <Button className="w-full mt-4 cursor-pointer">
                  Add to Cart
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
