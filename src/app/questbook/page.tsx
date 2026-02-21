"use client";

import { Column, Flex, Heading, Text, Button, Input, Textarea, Card } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { questbook } from "@/app/resources/content";
import { useState } from "react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quote, setQuote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`New Quote from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nQuote:\n${quote}`
    );

    // Open email client
    window.location.href = `mailto:${questbook.email}?subject=${subject}&body=${body}`;

    // Reset form
    setName("");
    setEmail("");
    setQuote("");
    setSubmitted(true);

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

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
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Column fillWidth gap="m">
          {/* Name Input */}
          <Column fillWidth gap="8">
            <Text variant="body-default-s" onBackground="neutral-weak">
              Your Name
            </Text>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Column>

          {/* Email Input */}
          <Column fillWidth gap="8">
            <Text variant="body-default-s" onBackground="neutral-weak">
              Your Email
            </Text>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Column>

          {/* Quote Textarea */}
          <Column fillWidth gap="8">
            <Text variant="body-default-s" onBackground="neutral-weak">
              Your Quote or Message
            </Text>
            <Textarea
              id="quote"
              placeholder="Share your thoughts, quote, or feedback..."
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              required
              rows={6}
            />
          </Column>

          {/* Submit Button */}
          <Button type="submit" variant="primary" size="m" fillWidth>
            Send Quote
          </Button>
        </Column>
      </form>

      {/* Success Message */}
      {submitted && (
        <Card fillWidth padding="m" border="accent-medium" background="accent-alpha-weak">
          <Text variant="body-default-m" onBackground="accent-weak">
            Thank you! Your quote has been sent. I'll get back to you soon.
          </Text>
        </Card>
      )}

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
