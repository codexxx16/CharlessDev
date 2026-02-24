"use client";

import { useEffect, useState, useRef } from "react";
import { Flex, Text } from "@/once-ui/components";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  label: string;
  value: number;
  icon?: string;
  suffix?: string;
}

export const Counter: React.FC<CounterProps> = ({ label, value, icon, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      const increment = end / totalFrames;

      let currentFrame = 0;
      const timer = setInterval(() => {
        currentFrame++;
        start += increment;
        if (currentFrame >= totalFrames) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, frameDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4 }}
      style={{ width: "100%" }}
    >
      <Flex direction="column" gap="8" fillWidth>
        <Flex vertical="center" gap="12">
          {icon && (
            <Flex width={32} height={32} style={{ minWidth: "32px", overflow: "hidden" }}>
              <img 
                src={icon} 
                alt={label} 
                style={{ width: "100%", height: "100%", objectFit: "contain" }} 
              />
            </Flex>
          )}
          <Text variant="display-strong-s">
            {count.toLocaleString()}
            {suffix}
          </Text>
        </Flex>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {label}
        </Text>
      </Flex>
    </motion.div>
  );
};
