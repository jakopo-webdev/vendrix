import { z } from "zod";
import { ProductValidator } from "@/lib/validators";

export type Product = z.infer<typeof ProductValidator>;
