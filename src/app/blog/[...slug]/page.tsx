import AudioVisualizer from "@/src/components/ui/AudioVisualizer";
import NewsletterCard from "@/src/components/ui/NewsletterCard";
import SocialShare from "@/src/components/ui/SocialShare";
import buildArticleUrl from "@/src/components/utils/buildArticleUrl";
import formatDate from "@/src/components/utils/formatDate";
import getHostname from "@/src/components/utils/getHostname";
import { getArticleById } from "@/src/lib/queries/getArticle";
import Image from "next/image";
import Link from "next/link";

interface BlogDetailsPageProps {
  params: Promise<{ slug: string[] }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface ArticleDetails {
  id: number;
  title: string;
  description: string | null;
  content: string;
  slug?: string;
  authorFirstName?: string;
  podcastUrl?: string;
  authorLastName?: string;
  publishDate?: string | Date;
  imageUrl?: string;
  image_url?: string;
}

export default async function BlogDetailsPage(props: BlogDetailsPageProps) {
  const { params: paramsPromise } = await props;

  const params = await paramsPromise;

  const slugArr = params?.slug ?? [];
  const id = Number(slugArr?.[0]?.split("--")?.[1]);
  const hostname = await getHostname();

  if (isNaN(id)) {
    return <div>Invalid article ID</div>;
  }

  const articleDetails = await getArticleById(id);

  if (!articleDetails) {
    return <div>There are no articles</div>;
  }

  const articleUrl = buildArticleUrl(hostname, articleDetails.slug, articleDetails.id);

  const imageSrc =
    // support either naming returned by query
    articleDetails.imageUrl ?? articleDetails.imageUrl ?? "/default.jpg";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/blog"
          className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Header section with title, social buttons, and image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-b py-12 mb-12">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {articleDetails.title}
          </h1>

          <div>
            <p className="text-gray-600 ">
              By {articleDetails.authorFirstName ?? ""}{" "}
              {articleDetails.authorLastName ?? ""}
            </p>
          </div>

          <AudioVisualizer
            podcastUrl={articleDetails.podcastUrl ?? undefined}
          />
          <h3 className="text-gray-600 text-sm italic">
            Published {formatDate(articleDetails.publishDate)}
          </h3>

          <SocialShare
            data={{
              url: articleUrl,
              quote: articleDetails.description ?? "",
              hashtag: articleDetails.title ?? "",
            }}
          />
        </div>

        <div className="relative">
          <Image
            src={imageSrc}
            alt={articleDetails.title}
            width={600}
            height={400}
            className="w-full h-92 object-cover rounded shadow-lg"
          />
        </div>
      </div>

      <div className="mx-auto mb-8">
        <p className="text-lg text-gray-700 italic leading-relaxed">
          {articleDetails.description}
        </p>
      </div>

      {/* Responsive layout for content and newsletter */}
      <div className="mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: articleDetails.content }}
          />
          {/* NewsletterCard portion for the mobile view */}
          <div className="block lg:hidden mt-8">
            <NewsletterCard />
          </div>
        </div>

        {/* Sticky NewsletterCard for desktop view */}
        <div className="hidden lg:block flex-shrink-0 w-full max-w-sm">
          <div className="sticky top-8">
            <NewsletterCard />
          </div>
        </div>
      </div>
    </div>
  );
}
