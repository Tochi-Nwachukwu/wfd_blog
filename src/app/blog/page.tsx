import { getAllArticles } from "@/src/lib/queries/getArticles";
import BlogCard from "@/src/components/ui/BlogCard";
import formatDate from "@/src/components/utils/formatDate";

export default async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto ">
      <div className="py-40 bg-black mb-32">
        <h1 className="text-3xl text-white font-bold text-center">
          Blog Articles
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <BlogCard
            key={article.id}
            article={{
              id: article.id,
              title: article.title,
              slug: `${article.slug}--${article.id}`,
              description: article.description,
              imageUrl: article.imageUrl ?? undefined,
              authorName: `${article.authorFirstName} ${article.authorLastName}`,
              publishDate: formatDate(article.publishDate),
            }}
          />
        ))}
      </div>
    </div>
  );
}
