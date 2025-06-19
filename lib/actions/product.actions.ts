"use server";

import { prisma } from "@/db/prisma";
import { toPlainObject } from "@/lib/utils";

export async function getProducts() {
  const products = await prisma.product.findMany();
  return products.map(toPlainObject);
}
