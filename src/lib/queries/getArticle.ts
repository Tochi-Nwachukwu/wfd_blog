import { db } from "@/src/db";
import { articles } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export async function getArticleById(articleId: number) {
  if (!Number.isInteger(articleId)) return null;
  const article = await db
    .select()
    .from(articles)
    .where(eq(articles.id, articleId))
    .limit(1);

  return article[0] || null;
}