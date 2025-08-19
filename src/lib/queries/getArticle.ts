import { db } from "@/src/db";
import { articles } from "@/src/db/schema";

export async function getAllArticles() {
  const allArticles = await db.select().from(articles).limit(10);
  return allArticles;
}