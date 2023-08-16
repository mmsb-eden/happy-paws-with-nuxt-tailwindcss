// import { fileURLToPath, URL } from 'node:url'
import presetIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      title: `Happy Paws`,
      description: 'Adopt Your Fur Mate',
      author: 'Pinegrow',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Adopt Now', link: '/adopt' },
        { text: 'Donate', link: '/donate' },
        { text: 'Articles', link: '/articles' },
        { text: 'Blog', link: '/blog' },
        { text: 'Volunteer', link: '/volunteer' },
      ],
    },
    app: {
      baseURL: '/',
    },
  },
  modules: [
    '@pinegrow/nuxt-module',
    '@unocss/nuxt',
    '@nuxt/devtools',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/html-validator',
  ],
  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names names
      devtoolsKey: 'devtools', // see plugins/devtools.client.ts
      tailwindcss: {
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
    },
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: ['noopener'],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      theme: 'dracula-soft',
    },
  },
  unocss: {
    presets: [
      presetIcons({
        prefix: 'i-', // default prefix, do not change
      }),
    ],
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      'storeToRefs',
      'acceptHMRUpdate',
    ],
  },
  imports: {
    dirs: ['stores'],
  },
})
