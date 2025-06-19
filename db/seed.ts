import { prisma } from "@/db/prisma";
import sampleData from "@/db/sample-data";

async function main() {
  // Delete all products
  await prisma.product.deleteMany({});

  // Create products from sampleData
  for (const product of sampleData.products) {
    await prisma.product.create({
      data: {
        name: product.name,
        slug: product.slug,
        category: product.category,
        description: product.description,
        images: product.images,
        price: product.price,
        brand: product.brand,
        rating: product.rating,
        numReviews: product.numReviews,
        stock: product.stock,
        isFeatured: product.isFeatured,
        banner: product.banner,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
