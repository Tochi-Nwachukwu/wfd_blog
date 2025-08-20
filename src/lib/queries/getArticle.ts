import { db } from "@/src/db";
import { articles } from "@/src/db/schema";
import { authors } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export async function getArticleById(articleId: number) {
  if (!Number.isInteger(articleId)) return null;
  const article = await db
    .select({
      id: articles.id,
      title: articles.title,
      slug: articles.slug,
      description: articles.description,
      content: articles.content,
      imageUrl: articles.imageUrl,
      publishDate: articles.publishDate,
      isPublished: articles.isPublished,
      authorId: articles.authorId,
      authorFirstName: authors.firstName,
      authorLastName: authors.lastName,
    })
    .from(articles)
    .leftJoin(authors, eq(articles.authorId, authors.id))
    .where(eq(articles.id, articleId))
    .limit(1);

  return article[0] || null;
}