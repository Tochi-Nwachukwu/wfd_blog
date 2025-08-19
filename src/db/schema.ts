import {
  serial,
  varchar,
  boolean,
  timestamp,
  integer,
  text,
  pgTable,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }),
  description: text("description").notNull(),
  content: text("content").notNull(),
  imageUrl: varchar("image_url", { length: 255 }),
  authorId: integer("author_id")
    .notNull()
    .references(() => authors.id),
  publishDate: timestamp("publish_date").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  isPublished: boolean("is_published").notNull().default(false),
});

export const authors = pgTable("authors", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  imageUrl: varchar("image_url", { length: 255 }),
  email: varchar("email", { length: 255 }).unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

// Relations
export const authorRelations = relations(authors, ({ many }) => ({
  articles: many(articles),
}));

export const articleRelations = relations(articles, ({ one }) => ({
  author: one(authors, {
    fields: [articles.authorId],
    references: [authors.id],
  }),
}));
