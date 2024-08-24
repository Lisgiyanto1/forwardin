/** @type {import('next').NextConfig} */
import tailwindcss from 'tailwindcss';

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lucide-react', 'flowbite'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {} // You can add any specific options here if needed.
        }
      ]
    });

    return config;
  },
  plugins: [
    tailwindcss,
  ],
  tailwindcss: {
    config: './tailwind.config.js',
  },
};

export default nextConfig;