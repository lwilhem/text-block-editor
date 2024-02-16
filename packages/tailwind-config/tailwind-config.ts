import type { Config } from "tailwindcss"

export default function defineTailwindConfig(
  content_array: string[],
): Config {
  const config: Config = {
    content: content_array,
    theme: {
      extend: {},
    },
    plugins: [],
  }

  return config
}
