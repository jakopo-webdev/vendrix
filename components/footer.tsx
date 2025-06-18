import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-white to-pink-50 border-t border-gray-200 mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col items-center">
        <span className="text-sm text-gray-600 font-medium">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-600">{APP_NAME}</span>. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}
