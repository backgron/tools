import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'tools',
  description: '为世间所有美好而战',
  resolve: {
    includes: ['docs', 'packages/backgron-utils/src', 'packages/backgron-ui/src'],
  },
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
});
