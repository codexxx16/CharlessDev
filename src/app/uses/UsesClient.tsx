"use client";

import { Column, Flex, Heading, Text, Card, SmartImage } from "@/once-ui/components";
import { uses } from "@/app/resources/content";
import { Counter } from "@/components/Counter";
import { motion } from "framer-motion";

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
                <Flex 
                  fillWidth 
                  radius="m" 
                  background="neutral-alpha-weak" 
                  style={{
                    height: "160px",
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {device.image ? (
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
                  ) : (
                    <Text variant="display-strong-xl">{device.icon}</Text>
                  )}
                </Flex>
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
                <motion.div
                  key={toolIndex}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  style={{ flex: "1 1 200px", minWidth: "200px" }}
                >
                  <Card 
                    padding="m" 
                    border="neutral-alpha-weak" 
                    background="neutral-alpha-weak"
                    style={{ height: "100%" }}
                  >
                    <Flex vertical="center" gap="m">
                      <Flex width={56} height={56} radius="s" style={{ overflow: "hidden", minWidth: "56px" }}>
                        <SmartImage src={tool.icon} alt={tool.name} />
                      </Flex>
                      <Text variant="body-default-m" weight="strong">{tool.name}</Text>
                    </Flex>
                  </Card>
                </motion.div>
              ))}
            </Flex>
          </Column>
        ))}
      </Column>

      {/* Activities Section (Animated Counters with Icons) */}
      <Column fillWidth gap="m" paddingY="l">
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          Activities
        </Heading>
        <Flex fillWidth gap="m" wrap>
          {uses.activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ flex: "1 1 180px", minWidth: "180px" }}
            >
              <Card padding="l" border="neutral-medium" style={{ height: "100%" }}>
                <Counter 
                  label={activity.label} 
                  value={activity.value} 
                  icon={activity.icon} 
                  suffix={activity.suffix} 
                />
              </Card>
            </motion.div>
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
