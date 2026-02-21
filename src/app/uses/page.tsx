import { baseURL } from "@/app/resources";
import { uses } from "@/app/resources/content";
import { UsesClient } from "./UsesClient";

export async function generateMetadata() {
  const title = uses.title;
  const description = uses.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/uses`,
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

export default function Uses() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: uses.title,
            description: uses.description,
            url: `https://${baseURL}/uses`,
          }),
        }}
      />
      <UsesClient />
    </>
  );
}
