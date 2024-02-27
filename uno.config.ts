import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetWebFonts(),
    presetScrollbar(),
    presetForms(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
