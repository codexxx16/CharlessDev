"use client";

import { Column, Flex, Heading, Text, Card, Badge } from "@/once-ui/components";
import { uses } from "@/app/resources/content";
import { Counter } from "@/components/Counter";

export function UsesClient() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
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
              padding="m"
              border="neutral-medium"
              style={{ minWidth: "200px" }}
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
                <Badge key={toolIndex}>
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
