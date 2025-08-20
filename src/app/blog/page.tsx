import { getAllArticles } from "@/src/lib/queries/getArticles";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto not-prose">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link href={`/blog/${article.slug}--${article.id}`} key={article.id}>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col">
              <Image
                src={article.imageUrl ?? "/default.jpg"}
                alt={article.title}
                width={600}
                height={192}
                className="w-full h-48 object-cover rounded mb-4"
              />

              <h2 className="text-xl font-semibold mb-4">{article.title}</h2>
              <ReactMarkdown>{article.description}</ReactMarkdown>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
