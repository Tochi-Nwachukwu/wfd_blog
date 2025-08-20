import Image from "next/image";
import Link from "next/link";

type Article = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
  authorName?: string;
  publishDate: string;
};

interface CardProps {
  article: Article;
}

export default function BlogCard({ article }: CardProps) {
  return (
    <Link href={`/blog/${article.slug}`}>
      <div className=" flex flex-col border-b min-h-120  relative cursor-pointer   hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
        <Image
          src={article.imageUrl ?? "/default.jpg"}
          alt={article.title}
          width={600}
          height={192}
          className="w-full h-48 hover:shadow-xl shadow-lg  object-cover  mb-4"
        />
        <h2 className="text-lg text-gray-800  mb-4">{article.title}</h2>
        <p className="text-sm text-gray-600">{article.description}</p>
        <div className="flex w-full justify-between text-sm text-gray-400 absolute bottom-10">
          <p>{article.publishDate}</p>
          <p>{article.authorName}</p>
        </div>
      </div>
    </Link>
  );
}
