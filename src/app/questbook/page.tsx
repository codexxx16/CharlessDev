import { Column, Flex, Heading, Text, Card } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { questbook } from "@/app/resources/content";
import { QuestbookForm } from "@/components/QuestbookForm";

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
    <Column maxWidth="m" gap="xl" horizontal="center">
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

      <Column maxWidth="s" gap="m">
        <Heading variant="display-strong-l">{questbook.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {questbook.description}
        </Text>
      </Column>

      {/* Info Card */}
      <Card fillWidth padding="l" border="brand-alpha-medium" background="brand-alpha-weak">
        <Flex direction="column" gap="m">
          <Text variant="body-default-m" onBackground="brand-weak">
            {questbook.tagline}
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Share your thoughts, feedback, or leave an inspiring quote. I read every submission and
            appreciate your engagement.
          </Text>
        </Flex>
      </Card>

      {/* Quote Form */}
      <QuestbookForm />

      {/* Contact Info */}
      <Card fillWidth padding="l" border="neutral-medium">
        <Flex direction="column" gap="m">
          <Heading as="h3" variant="heading-strong-m">
            Other Ways to Connect
          </Heading>
          <Text variant="body-default-m">
            Email:{" "}
            <a href={`mailto:${questbook.email}`} style={{ color: "var(--accent-weak)" }}>
              {questbook.email}
            </a>
          </Text>
          <Text variant="body-default-m">
            Available for freelance projects, collaborations, and mentorship opportunities.
          </Text>
        </Flex>
      </Card>
    </Column>
  );
}
