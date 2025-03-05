import { defineConfig } from 'unocss';

export default defineConfig({
  shortcuts: {
    // shortcuts to multiple utilities
    'flex-center': 'flex justify-center items-center',
    'absolute-center':
      'absolute top-50% left-50% transform -translate-x-1/2 -translate-y-1/2'
  },
  rules: [
    [/^square-(\d+)$/, ([, d]) => ({ width: `${d}px`, height: `${d}px` })]
  ]
});
