"use client";

import { Column, Flex, Heading, Text, Card } from "@/once-ui/components";
import { uses } from "@/app/resources/content";
import { motion } from "framer-motion";
import styles from "./uses.module.scss";
import { ActivityCounter } from "@/components/ActivityCounter";
import {
  CodingIcon,
  GamingIcon,
  GitHubIcon,
  YouTubeIcon,
  SpotifyIcon,
  NetflixIcon,
  EyeIcon,
  HeartIcon,
} from "@/components/ActivityIcons";

export function UsesClient() {
  const getActivityIcon = (label: string) => {
    switch (label) {
      case "Hours Coding":
        return <CodingIcon />;
      case "Hours Gaming/Month":
        return <GamingIcon />;
      case "GitHub Followers":
      case "GitHub Projects":
        return <GitHubIcon />;
      case "YouTube Subs":
      case "YouTube Views":
        return <YouTubeIcon />;
      case "Hours Spotify":
        return <SpotifyIcon />;
      case "Hours Netflix":
        return <NetflixIcon />;
      case "Blog Views":
        return <EyeIcon />;
      case "Blog Likes":
        return <HeartIcon />;
      default:
        return null;
    }
  };

  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingY="xl">
      <Column maxWidth="s" gap="m" horizontal="center">
        <Heading variant="display-strong-l">{uses.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {uses.description}
        </Text>
      </Column>

      {/* Hardware Section (Untouched as requested) */}
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

      {/* Software & Tools Section with Cards */}
      <Column fillWidth gap="m" paddingY="l">
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          Software & Tools
        </Heading>
        <div className={styles.softwareGrid}>
          {uses.software.map((tool, index) => (
            <motion.div
              key={index}
              className={styles.softwareCard}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className={styles.iconContainer}>
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className={styles.icon}
                  width="48"
                  height="48"
                />
              </div>
              <div className={styles.toolInfo}>
                <Text variant="heading-strong-m" className={styles.toolName}>
                  {tool.name}
                </Text>
                <Text variant="body-default-s" className={styles.toolDescription}>
                  {tool.description}
                </Text>
              </div>
            </motion.div>
          ))}
        </div>
      </Column>

      {/* Activities Section with Inline SVGs */}
      <Column fillWidth gap="m" paddingY="l">
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          Activities
        </Heading>
        <div className={styles.activitiesGrid}>
          {uses.activities.map((activity, index) => (
            <motion.div
              key={index}
              className={styles.activityCard}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className={styles.activityIcon}>
                {getActivityIcon(activity.label)}
              </div>
              <div className={styles.activityNumber}>
                <ActivityCounter value={activity.value} suffix={activity.suffix} />
              </div>
              <div className={styles.activityLabel}>
                {activity.label}
              </div>
            </motion.div>
          ))}
        </div>
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
