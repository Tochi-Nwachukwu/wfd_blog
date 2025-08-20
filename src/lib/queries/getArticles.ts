import { db } from "@/src/db";
import { articles } from "@/src/db/schema";
import { authors } from "@/src/db/schema";
import { desc, eq, } from "drizzle-orm";

export async function getAllArticles() {
  const allArticles = await db
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
    .where(eq(articles.isPublished, true))
    .orderBy(desc(articles.publishDate))
    .limit(10);

  return allArticles;
}