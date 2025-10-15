/**
 * PostCSS 配置文件
 * 配置了 Tailwind CSS 和 Autoprefixer 插件
 * 这些插件用于处理和优化 CSS 代码
 * postcss 用于让 PostCSS 识别并处理 Tailwind CSS 的指令，如 @tailwind base;、@tailwind components; 等。
 * autoprefixer 用于自动添加浏览器前缀，确保 CSS 在不同浏览器中的兼容性。
 */


export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  },
}
