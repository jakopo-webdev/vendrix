import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toPlainObject<T>(prismaObj: T): T {
  return JSON.parse(JSON.stringify(prismaObj));
}
