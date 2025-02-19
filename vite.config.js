import vituum from 'vituum';
import nunjucks from '@vituum/vite-plugin-nunjucks';

export default ({
   base: './',
   plugins: [
      vituum(),
      nunjucks({
         root: './src'
      })
   ],
   build: {
      outDir: 'webapp',
      emptyOutDir: true,
      assetsInlineLimit: 0,
   },
   server: {
      port: 2000,
      open: {
         target: 'http://localhost:2000',
         path: 'firefox',
      },
   },
   // assetsInclude: ['**/*.svg'],
});
