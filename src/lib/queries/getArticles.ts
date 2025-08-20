import { db } from "@/src/db";
import { articles } from "@/src/db/schema";
import { desc } from "drizzle-orm";

export async function getAllArticles() {
  const allArticles = await db
    .select()
    .from(articles)
    .orderBy(desc(articles.publishDate))
    .limit(10);
  return allArticles;
}
