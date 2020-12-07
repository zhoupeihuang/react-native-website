// const users = require('./showcase.json');
const cdnUrl =
  'https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/';

module.exports = {
  title: 'React Native 中文网',
  tagline: '使用React来编写原生应用的框架',
  organizationName: 'reactnativecn',
  projectName: 'react-native',
  url: 'https://reactnative.cn',
  baseUrl: '/',
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [
    {
      src:
        'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
    {src: 'https://snack.expo.io/embed.js', defer: true},
  ],
  favicon: cdnUrl + 'img/favicon.ico',
  titleDelimiter: '·',
  // customFields: {
  //   users,
  //   facebookAppId: '1677033832619985',
  // },
  onBrokenLinks: 'throw',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          editUrl:
            '//github.com/reactnativecn/react-native-website/blob/production/cnwebsite',
          path: '../cndocs',
          sidebarPath: require.resolve('./sidebars.json'),
          remarkPlugins: [require('@react-native-website/remark-snackplayer')],
        },
        // blog: {
        //   path: 'blog',
        //   blogSidebarCount: 'ALL',
        //   blogSidebarTitle: 'All Blog Posts',
        //   feedOptions: {
        //     type: 'all',
        //     copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
        //   },
        // },
        theme: {
          customCss: [
            require.resolve('./src/css/customTheme.scss'),
            require.resolve('./src/css/index.scss'),
            require.resolve('./src/css/showcase.scss'),
            require.resolve('./src/css/versions.scss'),
          ],
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass', './sitePlugin'],
  themeConfig: {
    prism: {
      defaultLanguage: 'jsx',
      theme: require('./core/PrismTheme'),
      additionalLanguages: ['java', 'kotlin', 'objectivec', 'swift', 'groovy'],
    },
    navbar: {
      title: 'React Native 中文网',
      logo: {
        src: cdnUrl + 'img/header_logo.svg',
        alt: 'React Native 中文网',
      },
      style: 'dark',
      items: [
        {
          label: '文档',
          type: 'doc',
          docId: 'getting-started',
          position: 'right',
        },
        {
          label: '组件',
          type: 'doc',
          docId: 'components-and-apis',
          position: 'right',
        },
        {
          label: 'API',
          type: 'doc',
          docId: 'accessibilityinfo',
          position: 'right',
        },
        {
          label: '讨论',
          href: '//github.com/reactnativecn/react-native-website/issues',
          position: 'right',
        },
        {
          label: '热更新',
          href: '//pushy.reactnative.cn',
          position: 'right',
        },
        {
          to: '/about',
          label: '关于',
          position: 'right',
        },
        // {
        //   to: '/help',
        //   label: 'Community',
        //   position: 'right',
        // },
        // {
        //   to: '/blog',
        //   label: 'Blog',
        //   position: 'right',
        // },
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        },
        {
          href: 'https://github.com/facebook/react-native',
          'aria-label': 'GitHub repository',
          position: 'right',
          className: 'navbar-github-link',
        },
      ],
    },
    image: cdnUrl + 'img/logo-og.png',
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            {
              label: 'Tutorial',
              to: 'docs/tutorial',
            },
            {
              label: 'Components and APIs',
              to: 'docs/components-and-apis',
            },
            // {
            //   label: 'More Resources',
            //   to: 'docs/more-resources',
            // },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'The React Native Community',
        //       to: 'help',
        //     },
        //     {
        //       label: "Who's using React Native?",
        //       to: 'showcase',
        //     },
        //     {
        //       label: 'Ask Questions on Stack Overflow',
        //       to: 'https://stackoverflow.com/questions/tagged/react-native',
        //     },
        //     {
        //       label: 'Contributor Guide',
        //       to:
        //         'https://github.com/facebook/react-native/blob/master/CONTRIBUTING.md',
        //     },
        //     {
        //       label: 'DEV Community',
        //       to: 'https://dev.to/t/reactnative',
        //     },
        //   ],
        // },
        // {
        //   title: 'Find us',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/reactnative',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/react-native',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'React',
        //       href: 'https://reactjs.org/',
        //     },
        //     {
        //       label: 'Privacy Policy',
        //       to: 'https://opensource.facebook.com/legal/privacy',
        //     },
        //     {
        //       label: 'Terms of Service',
        //       href: 'https://opensource.facebook.com/legal/terms',
        //     },
        //   ],
        // },
      ],
      // logo: {
      //   alt: 'Facebook Open Source Logo',
      //   src: 'img/oss_logo.png',
      //   href: 'https://opensource.facebook.com',
      // },
      copyright: `React Native 中文网 © ${new Date().getFullYear()} 武汉青罗网络科技有限公司`,
    },
    algolia: {
      apiKey: '7ab53ed26928639bae06ef0f6165f68b',
      indexName: 'reactnative_cn',
      contextualSearch: true,
    },
    googleAnalytics: {
      trackingID: 'UA-63485149-4',
    },
    gtag: {
      trackingID: 'UA-63485149-4',
    },
    metadatas: [
      {
        name: 'description',
        content: '使用React来编写原生应用的框架',
      },
      {property: 'og:title', content: 'React Native'},
      {
        property: 'og:description',
        content: '使用React来编写原生应用的框架',
      },
      {property: 'og:url', content: 'https://reactnative.cn/'},
      {
        property: 'og:image',
        content: cdnUrl + 'img/logo-og.png',
      },
      // {name: 'twitter:card', content: 'summary'},
      // {
      //   name: 'twitter:image',
      //   content: 'https://reactnative.dev/img/logo-og.png',
      // },
    ],
  },
};
