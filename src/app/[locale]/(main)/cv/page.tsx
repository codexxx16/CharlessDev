import type { Metadata } from "next";
import type { Locale } from "next-intl";
import type { WebPage, WithContext } from "schema-dts";

import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

import { JsonLd } from "@/components/json-ld";
import { Mdx } from "@/components/mdx";
import { PageHeader } from "@/components/page-header";
import { SITE_DESCRIPTION, SITE_URL } from "@/constants/site";
import { getPageBySlug } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { getLocalizedPath } from "@/utils/get-localized-path";

type CvPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: CvPageProps): Promise<Metadata> {
  const { params } = props;
  const { locale } = await params;

  const t = await getTranslations({ locale: locale as Locale });
  const title = t("common.labels.cv");
  const description = t("cv.description");

  return createMetadata({
    pathname: "/cv",
    title,
    description,
    locale,
    openGraph: {
      type: "profile",
    },
  });
}

function Page(props: CvPageProps) {
  const { params } = props;
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  const t = useTranslations();
  const title = t("common.labels.cv");
  const description = t("cv.description");
  const url = getLocalizedPath({ locale, pathname: "/cv" });
  const page = getPageBySlug(locale, "cv");

  const jsonLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "CharlessDev",
      url: SITE_URL,
    },
    about: {
      "@type": "Person",
      name: "Charless Netumbare",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
    },
    inLanguage: locale,
  };

  if (!page) {
    return notFound();
  }

  return (
    <>
      <JsonLd json={jsonLd} />
      <PageHeader title={title} description={description} />
      <div className="mb-8 flex flex-wrap gap-3">
        <a
          className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
          href="/documents/charless-netumbare-cv.pdf"
          download
        >
          Download CV (PDF)
        </a>
        <a
          className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          href="/projects"
        >
          View Project Portfolio
        </a>
      </div>
      <Mdx code={page.code} />
    </>
  );
}

export default Page;
