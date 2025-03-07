import vituum from 'vituum';
import nunjucks from '@vituum/vite-plugin-nunjucks';
import beautify from 'vite-plugin-beautify';

export default ({
   base: './',
   plugins: [
      vituum(),
      nunjucks({
         root: './src'
      }),
      beautify({
         inDir: 'webapp',
         html: {
            options: {
               indent_size: 3,
               end_with_newline: true,
               preserve_newlines: true,
               max_preserve_newlines: 0
            }
         },
         css: {
            options: {
               indent_size: 3
            }
         },
         js: {
            options: {
               indent_size: 3
            }
         }
      })
   ],
   css: {
      preprocessorOptions: {
         scss: {
            api: 'modern'
         }
      }
   },
   build: {
      outDir: 'webapp',
      emptyOutDir: true,
      assetsInlineLimit: 0
   },
   server: {
      port: 2000
   }
});
