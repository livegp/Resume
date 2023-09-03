import { defineConfig } from 'vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [eslintPlugin(), stylelint({ fix: true }), injectHTML()],
});
