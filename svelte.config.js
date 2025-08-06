import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // опционально, можно указать параметры адаптера
      out: 'build'
    })
  }
};

export default config;
