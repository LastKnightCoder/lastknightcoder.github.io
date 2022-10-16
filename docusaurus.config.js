// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '人生天地间，忽如远行客',
  tagline: 'Stay Hungry, Stay Foolish!',
  url: 'https://lastknightcoder.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LastKnightCoder',
  projectName: 'lastknightcoder.github.io',
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css'
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ locale: _, docPath }) => {
            return `https://github.com/LastKnightCoder/lastknightcoder/tree/master/docs/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          remarkPlugins: [math, [npm2yarn, {sync: true}]],
          rehypePlugins: [katex],
        },
        blog: {
          path: 'blog',
          showReadingTime: true,
          editUrl: ({ locale: _, blogDirPath, blogPath }) => {
            return `https://github.com/LastKnightCoder/lastknightcoder/tree/master/${blogDirPath}/${blogPath}`;
          },
          postsPerPage: 5,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} 熊滔.`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '所有的博客',
        },
        pages: {
          remarkPlugins: [npm2yarn],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Coder',
        logo: {
          alt: '',
          src: 'img/logo.svg',
          width: 60,
          height: 60,
        },
        items: [
          {
            type: 'doc',
            docId: 'JavaScript/selection-and-range',
            position: 'left',
            label: 'Web',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'dropdown',
            label: 'Slides',
            position: 'right',
            items: [
              {
                label: 'Flex布局',
                href: 'https://lastknightcoder.github.io/slides-flex/'
              },
              {
                label: 'Grid布局',
                href: 'https://lastknightcoder.github.io/slides-grid/'
              },
              {
                label: 'SVG',
                href: 'https://lastknightcoder.github.io/slides-svg/'
              },
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;" />',
              },
              {
                label: '毕业论文',
                href: 'https://lastknightcoder.github.io/slides-dissertation/'
              },
            ]
          },
          {
            href: 'https://github.com/LastKnightCoder/lastknightcoder.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'JavaScript',
                to: '/docs/JavaScript',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/LastKnightCoder',
              },
            ],
          },
          {
            title: 'Slides',
            items: [
              {
                label: 'Flex布局',
                href: 'https://lastknightcoder.github.io/slides-flex/',
              },
              {
                label: 'Grid布局',
                href: 'https://lastknightcoder.github.io/slides-grid/',
              },
              {
                label: 'SVG',
                href: 'https://lastknightcoder.github.io/slides-svg/',
              },
              {
                label: '毕业论文',
                href: 'https://lastknightcoder.github.io/slides-dissertation/'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['java', 'matlab', 'latex'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
