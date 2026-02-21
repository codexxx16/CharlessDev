"use client";

import { useState } from "react";
import { Column, Flex, Button, Input, Textarea, Card, Text } from "@/once-ui/components";
import { questbook } from "@/app/resources/content";

export const QuestbookForm = () => {
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
    <Column fillWidth gap="m">
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Column fillWidth gap="m">
          {/* Name Input */}
          <Column fillWidth gap="8">
            <Text variant="body-default-s" onBackground="neutral-weak">
              Your Name
            </Text>
            <Input
              id="name"
              label="Your Name"
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
              label="Your Email"
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
              label="Your Quote or Message"
              placeholder="Share your thoughts, quote, or feedback..."
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              required
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
    </Column>
  );
};
