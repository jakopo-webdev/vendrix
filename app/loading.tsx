import Image from "next/image";
import loader from "@/assets/loader.gif"; // Adjust the path as necessary

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50">
      <Image src={loader} alt="Loading..." width={64} height={64} />
      <p className="mt-6 text-lg font-semibold text-blue-600 animate-pulse">Loading, please wait...</p>
    </div>
  );
}
