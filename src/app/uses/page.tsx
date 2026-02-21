"use client";

import { useState, useEffect } from "react";
import { Column, Flex, Heading, Text, Card, Badge } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { uses } from "@/app/resources/content";

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

interface CounterProps {
  label: string;
  value: number;
}

const Counter: React.FC<CounterProps> = ({ label, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Card fillWidth padding="m" border="neutral-medium">
      <Flex direction="column" gap="8" horizontal="center" vertical="center">
        <Text variant="display-strong-m">{count.toLocaleString()}</Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {label}
        </Text>
      </Flex>
    </Card>
  );
};

export default function Uses() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
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

      <Column maxWidth="s" gap="m">
        <Heading variant="display-strong-l">{uses.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {uses.description}
        </Text>
      </Column>

      {/* Devices Section */}
      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          Hardware & Devices
        </Heading>
        <Flex fillWidth gap="m" wrap>
          {uses.devices.map((device, index) => (
            <Card
              key={index}
              flex={1}
              minWidth="200"
              padding="m"
              border="neutral-medium"
            >
              <Flex direction="column" gap="8">
                <Text variant="heading-strong-m">{device.name}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {device.specs}
                </Text>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Column>

      {/* Software Section */}
      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          Software & Tools
        </Heading>
        {uses.software.map((category, index) => (
          <Column key={index} fillWidth gap="m">
            <Text variant="heading-strong-m">{category.category}</Text>
            <Flex fillWidth gap="m" wrap>
              {category.tools.map((tool, toolIndex) => (
                <Badge key={toolIndex} size="l">
                  {tool}
                </Badge>
              ))}
            </Flex>
          </Column>
        ))}
      </Column>

      {/* Animated Counters Section */}
      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          By The Numbers
        </Heading>
        <Flex fillWidth gap="m" wrap>
          <Counter label="Hours Coding" value={6264} />
          <Counter label="Hours Gaming/Month" value={34} />
          <Counter label="Hours Spotify" value={1257} />
          <Counter label="Hours Netflix" value={300} />
        </Flex>
      </Column>

      {/* Travel Section */}
      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          Places Visited
        </Heading>
        <Flex fillWidth gap="m" wrap>
          <Card fillWidth padding="m" border="neutral-medium">
            <Text variant="body-default-m">Zimbabwe (Home)</Text>
          </Card>
          <Card fillWidth padding="m" border="neutral-medium">
            <Text variant="body-default-m">South Africa - Johannesburg</Text>
          </Card>
          <Card fillWidth padding="m" border="neutral-medium">
            <Text variant="body-default-m">South Africa - Pretoria</Text>
          </Card>
        </Flex>
      </Column>
    </Column>
  );
}
