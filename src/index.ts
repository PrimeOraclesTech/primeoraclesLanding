import { serve } from 'bun';
import { join } from 'path';
import index from './index.html';

const PUBLIC_DIR = join(import.meta.dir, '..', 'public');

const server = serve({
  routes: {
    '/api/hello': {
      async GET() {
        return Response.json({ message: 'Hello, world!', method: 'GET' });
      },
      async PUT() {
        return Response.json({ message: 'Hello, world!', method: 'PUT' });
      },
    },

    '/api/hello/:name': async (req) => {
      const name = req.params.name;
      return Response.json({ message: `Hello, ${name}!` });
    },

    '/img/*': async (req) => {
      const url = new URL(req.url);
      const filePath = join(PUBLIC_DIR, url.pathname);
      const file = Bun.file(filePath);
      if (await file.exists()) {
        return new Response(file);
      }
      return new Response('Not Found', { status: 404 });
    },

    '/*': index,
  },

  development: process.env.NODE_ENV !== 'production' && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
