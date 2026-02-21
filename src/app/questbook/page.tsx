import { baseURL } from "@/app/resources";
import { questbook } from "@/app/resources/content";
import { QuestbookClient } from "./QuestbookClient";

export async function generateMetadata() {
  const title = questbook.title;
  const description = questbook.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/questbook`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Questbook() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: questbook.title,
            description: questbook.description,
            url: `https://${baseURL}/questbook`,
          }),
        }}
      />
      <QuestbookClient />
    </>
  );
}
