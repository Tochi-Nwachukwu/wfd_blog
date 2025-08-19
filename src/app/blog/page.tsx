import { getAllArticles } from "@/src/lib/queries/getAuthors";
import ReactMarkdown from "react-markdown";

export default async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <div
            className="b rounded-lg shadow p-6 flex flex-col"
            key={article.id}
          >
            <h2 className="text-xl font-semibold mb-4">{article.title}</h2>
            <ReactMarkdown >{article.description}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}