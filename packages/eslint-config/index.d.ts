import type { UserConfigItem } from "@antfu/eslint-config"

declare module "@brainhack/eslint-config" {
  function defineEslintConfig(): Promise<UserConfigItem[]>
  export = defineEslintConfig
}
