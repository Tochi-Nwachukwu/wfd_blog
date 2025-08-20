import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold mb-8 text-black">iDecideBlog</h1>
      <Link
        href="/blog"
        className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
      >
        Click to enter inside
      </Link>
    </div>
  );
}