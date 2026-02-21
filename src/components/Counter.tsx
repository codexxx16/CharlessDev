"use client";

import { useState, useEffect } from "react";
import { Flex, Text, Card } from "@/once-ui/components";

interface CounterProps {
  label: string;
  value: number;
}

export const Counter: React.FC<CounterProps> = ({ label, value }) => {
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
