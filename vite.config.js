import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import { reactClickToComponent } from 'vite-plugin-react-click-to-component';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
// import webfontDownload from 'vite-plugin-webfont-dl';
import imagePresets, { widthPreset } from 'vite-plugin-image-presets';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import zipPack from 'vite-plugin-zip-pack';
// import FullReload from 'vite-plugin-full-reload';
// import autoAlias from 'vite-plugin-auto-alias';
// import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    // react(),
    // reactClickToComponent(),
    eslintPlugin(),
    stylelint({ fix: true }),
    injectHTML(),
    ViteMinifyPlugin({}),
    // webfontDownload(),
    imagePresets({
      thumbnail: widthPreset({
        class: 'img thumb',
        loading: 'lazy',
        widths: [48, 96],
        formats: {
          webp: { quality: 50 },
          jpg: { quality: 70 },
        },
      }),
    }),
    VitePluginSvgSpritemap('./src/icons/*.svg'),
    zipPack(),
    // FullReload(['./src/**/**.html']),
    // autoAlias({ mode: 'sync' }),
    // Icons()
  ],
});
