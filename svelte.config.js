import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // SvelteKit expects an object with an "adapt" method
    adapter: adapter()
  }
};

export default config;


