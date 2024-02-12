import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"
import extractorSvelte from "@unocss/extractor-svelte"

export default function DefineUnoConfig() {
  const config = defineConfig({
    extractors: [
      extractorSvelte(),
    ],
    presets: [
      presetUno(),
      presetIcons({
        collections: {
          mdi: () => import("@iconify-json/mdi/icons.json").then(i => i.default),
        },
        extraProperties: {
          "display": "inline-block",
          "vertical-align": "middle",
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })

  return config
}
