// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CashTokens',
  tagline: 'Tokens on Bitcoin Cash',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cashtokens.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cashtokens', // Usually your GitHub org/user name.
  projectName: 'cashtokens.org', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/cashtokens/cashtokens.org/tree/master/',
        },
        gtag: {
          trackingID: 'G-NCE7PCHMTK', // cspell:disable-line
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],

        // Customize the keyboard shortcut to focus search bar (default is "mod+k"):
        // searchBarShortcutKeymap: "s", // Use 'S' key
        // searchBarShortcutKeymap: "ctrl+shift+f", // Use Ctrl+Shift+F

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'countdown',
      //   content:
      //     'CashTokens are part of the 2023 Bitcoin Cash Upgrade: <a target="_blank" rel="noopener noreferrer" href="https://cash.coin.dance/">Countdown</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: 'img/cashtokens-social-card.png',
      navbar: {
        style: 'dark',
        title: '',
        logo: {
          alt: 'CashTokens',
          src: 'img/cashtokens-logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Docs',
          // },
          { to: '/docs/intro', label: 'Intro', position: 'left' },
          { to: '/docs/spec/chip', label: 'Specification', position: 'left' },
          {
            href: 'https://github.com/cashtokens/cashtokens.org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'CashTokens CHIP',
                to: '/docs/spec/chip',
              },
              {
                label: 'Metadata Registries CHIP',
                to: '/docs/bcmr/chip',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '@CashTokens on X.com',
                href: 'https://x.com/CashTokens',
              },
              {
                label: 'Bitcoin Cash Research',
                href: 'https://bitcoincashresearch.org/',
              },
              {
                label: 'CashTokens Reddit',
                href: 'https://old.reddit.com/r/cashtokens',
              },
              {
                label: 'Bitcoin Cash Reddit',
                href: 'https://old.reddit.com/r/Bitcoincash/',
              },
            ],
          },
          {
            title: 'Development',
            items: [
              {
                label: 'OpenTokenRegistry',
                href: 'https://otr.cash/',
              },
              {
                label: 'Chipnet Explorer',
                href: 'https://chipnet.chaingraph.cash/',
              },
              {
                label: '3xpl BCH Explorer',
                href: 'https://3xpl.com/bitcoin-cash',
              },
              {
                label: 'SalemKode BCH Explorer',
                href: 'https://explorer.salemkode.com/',
              },
            ],
          },
          {
            title: 'Other Resources',
            items: [
              {
                label: 'WhyBitcoinCash.com',
                href: 'https://whybitcoincash.com/',
              },
              {
                label: 'BCH.info',
                href: 'https://bch.info/',
              },
              {
                label: 'bitcoincash.org',
                href: 'https://bitcoincash.org/',
              },
              {
                label: 'BCH Podcast FAQ',
                href: 'https://bitcoincashpodcast.com/faqs/Tech/what-is-cashtokens',
              },
            ],
          },
        ],
        copyright: `🄯 ${new Date().getFullYear()} CashTokens.org contributors, released in the public domain. <br/><a rel="license"
        href="https://creativecommons.org/publicdomain/zero/1.0/">
       <img src="https://licensebuttons.net/p/zero/1.0/80x15.png" style="border-style: none;" alt="CC0" />
     </a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
