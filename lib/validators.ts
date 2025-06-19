import { z } from "zod";

export const ProductValidator = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  slug: z.string().min(1).max(100),
  category: z.string().min(1).max(50),
  brand: z.string().min(1).max(50),
  description: z.string().min(1).max(1000),
  price: z.string(),
  rating: z.string(),
  numReviews: z.number().int().nonnegative(),
  stock: z.number().int().nonnegative(),
  images: z.array(z.string()),
  isFeatured: z.boolean(),
  banner: z.string().optional().nullable(),
  createdAt: z.string().optional(),
});
