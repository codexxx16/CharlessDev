"use client";

import { useI18n } from "@/i18n/i18nContext";
import { Flex, Button } from "@/once-ui/components";

export const LanguageSelector = () => {
  const { language, setLanguage } = useI18n();

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "sn", label: "Shona", flag: "🇿🇼" },
    { code: "nd", label: "Ndebele", flag: "🇿🇼" },
  ];

  return (
    <Flex gap="8" horizontal="center" vertical="center">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          onClick={() => setLanguage(lang.code as "en" | "sn" | "nd")}
          variant={language === lang.code ? "primary" : "secondary"}
          size="s"
          label={`${lang.flag} ${lang.label}`}
        />
      ))}
    </Flex>
  );
};
