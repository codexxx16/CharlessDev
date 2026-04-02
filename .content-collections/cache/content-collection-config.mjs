// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import * as z from "zod";

// src/mdx-plugins/index.ts
import remarkGfm from "remark-gfm";

// src/mdx-plugins/rehype/rehype-code.ts
import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight
} from "@shikijs/transformers";
import { bundledLanguages, getSingletonHighlighter } from "shiki";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";
var titleRegex = /title=["']([^"']*)["']/;
var DEFAULT_SHIKI_THEMES = {
  light: "github-light-default",
  dark: "github-dark-default"
};
function rehypeCode() {
  const transformers = [
    {
      preprocess(code, { meta }) {
        if (meta) meta.__raw = meta.__raw?.replace(titleRegex, "");
        return code.replace(/\n$/, "");
      },
      root(hast) {
        const pre = hast.children[0];
        if (pre?.type !== "element") return;
        hast.children = [
          {
            ...pre,
            properties: {
              ...pre.properties,
              "data-lang": this.options.lang
            }
          }
        ];
      }
    },
    transformerNotationHighlight({
      matchAlgorithm: "v3"
    }),
    transformerNotationWordHighlight({
      matchAlgorithm: "v3"
    }),
    transformerNotationDiff({
      matchAlgorithm: "v3"
    }),
    transformerNotationFocus({
      matchAlgorithm: "v3"
    })
  ];
  const highlighter = getSingletonHighlighter({
    engine: createOnigurumaEngine(import("shiki/wasm")),
    themes: Object.values(DEFAULT_SHIKI_THEMES),
    langs: Object.keys(bundledLanguages)
  });
  return async (tree, file) => {
    const instance = await highlighter;
    const transformer3 = rehypeShikiFromHighlighter(instance, {
      themes: DEFAULT_SHIKI_THEMES,
      defaultColor: false,
      defaultLanguage: "plaintext",
      transformers,
      parseMetaString: (meta) => {
        const titleMatch = titleRegex.exec(meta);
        const title = titleMatch?.[1] ?? null;
        return { title };
      }
    });
    await transformer3(tree, file, () => {
    });
  };
}

// src/mdx-plugins/rehype/rehype-inline-code.ts
import { bundledLanguages as bundledLanguages2, getSingletonHighlighter as getSingletonHighlighter2 } from "shiki";
import { visit } from "unist-util-visit";
var inlineShikiRegex = /^(.*?)\{:(.*)\}$/;
var themeNames = Object.values(DEFAULT_SHIKI_THEMES);
var themeKeys = Object.keys(DEFAULT_SHIKI_THEMES);
var cachedHighlighter = null;
function getScopeColors(highlighter, scope) {
  return themeNames.map(
    (name) => highlighter.getTheme(name).settings.find(({ scope: themeScope }) => themeScope?.includes(scope))?.settings.foreground ?? "inherit"
  );
}
async function getHighlighter() {
  if (cachedHighlighter) return cachedHighlighter;
  cachedHighlighter = await getSingletonHighlighter2({
    themes: themeNames,
    langs: Object.keys(bundledLanguages2)
  });
  return cachedHighlighter;
}
async function transformer(tree) {
  const highlighter = await getHighlighter();
  visit(tree, "element", (node, index, parent) => {
    if (node.tagName !== "code") return;
    const childNode = node.children[0];
    if (childNode?.type !== "text") return;
    const match = inlineShikiRegex.exec(childNode.value);
    if (!match) return;
    const [, code, lang] = match;
    if (!code || !lang) return;
    const isLang = !lang.startsWith(".");
    const hast = highlighter.codeToHast(code, {
      themes: DEFAULT_SHIKI_THEMES,
      lang: isLang ? lang : "plaintext",
      defaultColor: false
    });
    const preNode = hast.children[0];
    if (preNode?.type !== "element") return;
    if (preNode.tagName !== "pre") return;
    const inlineCode = preNode.children[0];
    if (inlineCode?.type !== "element") return;
    if (!isLang) {
      const colors = getScopeColors(highlighter, lang.slice(1));
      const spanNode = inlineCode.children[0];
      if (spanNode?.type !== "element") return;
      if (spanNode.tagName !== "span") return;
      spanNode.properties.style = themeKeys.map((key, keyIndex) => `--shiki-${key}:${colors[keyIndex]}`).join(";");
    }
    inlineCode.properties.className = ["shiki"];
    parent?.children.splice(index ?? 0, 1, inlineCode);
  });
}
function rehypeInlineCode() {
  return transformer;
}

// src/mdx-plugins/remark/remark-heading.ts
import Slugger from "github-slugger";
import { visit as visit2 } from "unist-util-visit";
var slugger = new Slugger();
function transformer2(tree, file) {
  const toc = [];
  slugger.reset();
  visit2(tree, "heading", (node) => {
    node.data ??= { hProperties: {} };
    node.data.hProperties ??= {};
    const childNode = node.children[0];
    if (childNode?.type !== "text") return;
    const text = childNode.value;
    const id = slugger.slug(childNode.value);
    node.data.hProperties.id = id;
    toc.push({
      title: text,
      url: id,
      depth: node.depth
    });
    return "skip";
  });
  file.data.toc = toc;
}
function remarkHeading() {
  return transformer2;
}

// src/mdx-plugins/utils.ts
import { remark } from "remark";
async function getTOC(content) {
  const result = await remark().use(remarkHeading).process(content);
  if ("toc" in result.data) {
    return result.data.toc;
  }
  return [];
}

// src/mdx-plugins/index.ts
var remarkPlugins = [remarkGfm, remarkHeading];
var rehypePlugins = [rehypeCode, rehypeInlineCode];

// content-collections.ts
async function transform(document, context) {
  const code = await compileMDX(context, document, {
    remarkPlugins,
    rehypePlugins
  });
  const [locale, path] = document._meta.path.split(/[/\\]/);
  if (!locale || !path) {
    throw new Error(`Invalid path: ${document._meta.path}`);
  }
  return {
    ...document,
    code,
    locale,
    slug: path,
    toc: await getTOC(document.content)
  };
}
var posts = defineCollection({
  name: "Post",
  directory: "src/content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    modifiedTime: z.string(),
    summary: z.string(),
    test: z.boolean().optional().default(false),
    content: z.string()
  }),
  transform
});
var projects = defineCollection({
  name: "Project",
  directory: "src/content/projects",
  include: "**/*.mdx",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    homepage: z.string().optional(),
    github: z.string(),
    techstack: z.array(z.string()),
    selected: z.boolean().optional().default(false),
    dateCreated: z.string(),
    content: z.string()
  }),
  transform
});
var pages = defineCollection({
  name: "Page",
  directory: "src/content/pages",
  include: "**/*.mdx",
  schema: z.object({
    content: z.string()
  }),
  transform
});
var content_collections_default = defineConfig({
  content: [posts, projects, pages]
});
export {
  content_collections_default as default
};
