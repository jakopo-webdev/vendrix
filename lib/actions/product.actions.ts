"use server";

import { prisma } from "@/db/prisma";
import { toPlainObject } from "@/lib/utils";

export async function getProducts() {
  const products = await prisma.product.findMany();
  return products.map(toPlainObject);
}

export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug },
  });
  return product ? toPlainObject(product) : null;
}
