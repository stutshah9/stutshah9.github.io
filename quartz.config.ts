import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Stuti Shah Portfolio",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: null,
    locale: "en-US",
    baseUrl: "stutshah9.github.io/stutshah9",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f3e9",
          lightgray: "#dfd6c5",
          gray: "#9f9587",
          darkgray: "#5e5549",
          dark: "#2f2b26",
          secondary: "#3d5f45",
          tertiary: "#b7c7a3",
          highlight: "rgba(61, 95, 69, 0.12)",
          textHighlight: "#f3e3a3aa",
        },
        darkMode: {
          light: "#1e221d",
          lightgray: "#3a4235",
          gray: "#93a08b",
          darkgray: "#d2dcc9",
          dark: "#f0f3ea",
          secondary: "#a9c08f",
          tertiary: "#6f8a6d",
          highlight: "rgba(169, 192, 143, 0.18)",
          textHighlight: "#b8a74488",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Disabled for offline/local reliability (requires network font fetching)
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
