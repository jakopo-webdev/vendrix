"use server";

import { PrismaClient } from "@/lib/generated/prisma";
import { toPlainObject } from "@/lib/utils";

const prisma = new PrismaClient();

export async function getProducts() {
  const products = await prisma.product.findMany();
  return products.map(toPlainObject);
}
