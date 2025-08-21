export default function buildArticleUrl(
  host: string | null | undefined,
  slug: string | undefined | null,
  articleId: number
): string {
  const base = host ? (host.endsWith("/") ? host.slice(0, -1) : host) : "";
  const slugWithId = slug
    ? slug.endsWith(`--${articleId}`)
      ? slug
      : `${slug}--${articleId}`
    : `${articleId}`;
  return `${base}/blog/${slugWithId}`;
}
