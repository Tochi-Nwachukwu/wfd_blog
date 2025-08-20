import { getArticleById } from "@/src/lib/queries/getArticle";
import Image from "next/image";

export default async function BlogDetailsPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const id = Number(params.slug[0].split("--")[1]);

  if (isNaN(id)) {
    return <div>Invalid article ID</div>;
  }
  const articleDetails = await getArticleById(id);
  console.log(articleDetails);

  if (!articleDetails) {
    return <div>There are no articles</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Image
        src={articleDetails.imageUrl ?? "/default.jpg"}
        alt={articleDetails.title}
        width={600}
        height={600}
        className="w-full  object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-6">{articleDetails.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: articleDetails.content }}
      />
    </div>
  );
}
