import type { Plugin } from 'postcss';

interface PostCSSConfig {
  plugins: Record<string, Plugin | {}>;
}

const config: PostCSSConfig = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

export default config;