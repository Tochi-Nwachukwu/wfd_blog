import { db } from "@/src/db";
import { articles, authors } from "@/src/db/schema";
import { and, eq } from "drizzle-orm";

export async function getArticleById(articleId: number) {
  if (!Number.isInteger(articleId)) return null;

  const rows = await db
    .select({
      id: articles.id,
      title: articles.title,
      slug: articles.slug,
      description: articles.description,
      content: articles.content,
      imageUrl: articles.imageUrl,
      podcastUrl: articles.podcastUrl,
      publishDate: articles.publishDate,
      isPublished: articles.isPublished,
      authorId: articles.authorId,
      authorFirstName: authors.firstName,
      authorLastName: authors.lastName,
    })
    .from(articles)
    .leftJoin(authors, eq(articles.authorId, authors.id))
    .where(
      and(
        eq(articles.id, articleId),
        eq(articles.isPublished, true)
      )
    )
    .limit(1);

  return rows[0] ?? null;
}