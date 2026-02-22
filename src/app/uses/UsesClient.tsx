"use client";

import { Column, Flex, Heading, Text, Card, SmartImage } from "@/once-ui/components";
import { uses } from "@/app/resources/content";
import { Counter } from "@/components/Counter";
import styles from "@/components/about/about.module.scss";

export function UsesClient() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingY="xl">
      <Column maxWidth="s" gap="m" horizontal="center">
        <Heading variant="display-strong-l">{uses.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {uses.description}
        </Text>
      </Column>

      {/* Devices Section with Mockups */}
      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          Hardware & Devices
        </Heading>
        <Flex fillWidth gap="l" wrap>
          {uses.devices.map((device, index) => (
            <Card
              key={index}
              flex={1}
              padding="l"
              border="neutral-medium"
              style={{ minWidth: "280px", maxWidth: "400px" }}
            >
              <Flex direction="column" gap="m" fillWidth>
                {device.image ? (
                  <Flex 
                    fillWidth 
                    radius="m" 
                    background="neutral-alpha-weak" 
                    style={{
                      height: "200px",
                      overflow: "hidden",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={device.image}
                      alt={device.name}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                        padding: "0.5rem",
                      }}
                    />
                  </Flex>
                ) : (
                  <Flex
                    height={200}
                    fillWidth
                    horizontal="center"
                    vertical="center"
                    background="neutral-alpha-weak"
                    radius="m"
                  >
                    <Text variant="display-strong-xl">{device.icon}</Text>
                  </Flex>
                )}
                <Column gap="4">
                  <Text variant="heading-strong-l">{device.name}</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {device.specs}
                  </Text>
                </Column>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Column>

      {/* Software & Tools with Official Icons */}
      <Column fillWidth gap="xl" paddingY="l">
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          Software & Tools
        </Heading>
        {uses.software.map((category, index) => (
          <Column key={index} fillWidth gap="m">
            <Text variant="heading-strong-m" onBackground="neutral-weak" marginBottom="s">
              {category.category}
            </Text>
            <Flex fillWidth gap="m" wrap>
              {category.tools.map((tool, toolIndex) => (
                <Flex
                  key={toolIndex}
                  padding="m"
                  border="neutral-alpha-weak"
                  background="neutral-alpha-weak"
                  radius="m"
                  vertical="center"
                  gap="m"
                  style={{
                    minWidth: "fit-content",
                    flex: "0 1 auto",
                  }}
                >
                  <Flex
                    style={{
                      width: "64px",
                      height: "64px",
                      minWidth: "64px",
                      minHeight: "64px",
                      overflow: "hidden",
                      borderRadius: "var(--radius-s)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                    />
                  </Flex>
                  <Text variant="body-default-m" style={{ whiteSpace: "nowrap" }}>
                    {tool.name}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Column>
        ))}
      </Column>

      {/* Activities Section (Animated Counters) */}
      <Column fillWidth gap="m" paddingY="l">
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          Activities
        </Heading>
        <Flex fillWidth gap="m" wrap>
          {uses.activities.map((activity, index) => (
            <Card key={index} flex={1} padding="l" border="neutral-medium" style={{ minWidth: "180px" }}>
              <Flex direction="column" gap="8" horizontal="center">
                <Counter label={activity.label} value={activity.value} />
              </Flex>
            </Card>
          ))}
        </Flex>
      </Column>

      {/* Travel Section */}
      <Column fillWidth gap="m" paddingBottom="xl">
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          Places Visited
        </Heading>
        <Flex fillWidth gap="m" wrap>
          <Card fillWidth padding="l" border="neutral-medium">
            <Text variant="heading-strong-m">Zimbabwe (Home)</Text>
          </Card>
          <Card fillWidth padding="l" border="neutral-medium">
            <Text variant="heading-strong-m">South Africa - Johannesburg</Text>
          </Card>
          <Card fillWidth padding="l" border="neutral-medium">
            <Text variant="heading-strong-m">South Africa - Pretoria</Text>
          </Card>
        </Flex>
      </Column>
    </Column>
  );
}
