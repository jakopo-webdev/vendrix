"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImagesProps {
  images: string[];
  alt: string;
}

export default function ProductImages({ images, alt }: ProductImagesProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-4">
        <Image
          src={images[selected]}
          alt={alt}
          width={400}
          height={400}
          className="object-contain w-full h-96 rounded border"
          priority
        />
      </div>
      <div className="flex gap-2">
        {images.map((img, idx) => (
          <button
            key={img}
            type="button"
            onClick={() => setSelected(idx)}
            className={`border rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              idx === selected
                ? "border-blue-600 ring-2 ring-blue-400"
                : "border-gray-200"
            }`}
            aria-label={`Show image ${idx + 1}`}
          >
            <Image
              src={img}
              alt={alt + ` thumbnail ${idx + 1}`}
              width={64}
              height={64}
              className="object-contain w-16 h-16 rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
