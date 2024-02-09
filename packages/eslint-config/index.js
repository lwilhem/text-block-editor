import antfu from "@antfu/eslint-config"

export default function defineEslintConfig() {
  const config = antfu({
    gitignore: {
      files: [
        "./.gitignore",
        "../.gitignore",
        "../../.gitignore",
      ],
      strict: false,
    },
    stylistic: {
      quotes: "double",
    },
    svelte: true,
    formatters: {
      html: true,
      css: true,
      markdown: "prettier",
    },
    rules: {
      "no-console": "off",
    },
  })
  return config
}
