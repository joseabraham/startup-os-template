const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DocuHarmonize - Startup OS',
  tagline: 'Enterprise Documentation Standardization Platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docuharmonize-os.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'docuharmonize',
  projectName: 'startup-os',

  onBrokenLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/docuharmonize/startup-os/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/docuharmonize/startup-os/tree/main/',
          blogTitle: 'DocuHarmonize Journey',
          blogDescription: 'Updates on our enterprise documentation standardization journey',
          postsPerPage: 5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-XXXXXXXXXX', // Replace with actual Google Analytics ID
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docuharmonize-social-card.jpg',
      navbar: {
        title: 'DocuHarmonize OS',
        logo: {
          alt: 'DocuHarmonize Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'marketDiscovery',
            position: 'left',
            label: 'Market Discovery',
          },
          {
            type: 'docSidebar',
            sidebarId: 'productDevelopment',
            position: 'left',
            label: 'Product',
          },
          {
            type: 'docSidebar',
            sidebarId: 'goToMarket',
            position: 'left',
            label: 'Go-to-Market',
          },
          {
            type: 'docSidebar',
            sidebarId: 'legal',
            position: 'left',
            label: 'Legal',
          },
          {
            type: 'docSidebar',
            sidebarId: 'financial',
            position: 'left',
            label: 'Financial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'fundraising',
            position: 'left',
            label: 'Fundraising',
          },
          {
            type: 'docSidebar',
            sidebarId: 'hr',
            position: 'left',
            label: 'HR & Operations',
          },
          {
            href: 'https://github.com/docuharmonize/startup-os',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Framework',
            items: [
              {
                label: 'Market Discovery',
                to: '/market-discovery',
              },
              {
                label: 'Product Development',
                to: '/product-development',
              },
              {
                label: 'Go-to-Market',
                to: '/go-to-market',
              },
            ],
          },
          {
            title: 'Foundation',
            items: [
              {
                label: 'Legal Framework',
                to: '/legal-foundation',
              },
              {
                label: 'Financial Framework',
                to: '/financial-framework',
              },
              {
                label: 'Fundraising Strategy',
                to: '/fundraising-strategy',
              },
            ],
          },
          {
            title: 'Technical',
            items: [
              {
                label: 'AI/ML Architecture',
                to: '/technical-architecture/ai-ml-platform',
              },
              {
                label: 'Cloud Infrastructure',
                to: '/technical-architecture/cloud-infrastructure',
              },
              {
                label: 'UX Design',
                to: '/technical-architecture/ux-design',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Journey Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/docuharmonize/startup-os',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/docuharmonize',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DocuHarmonize. Built with Claude Code & Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['python', 'javascript', 'typescript', 'bash', 'json', 'yaml'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',
        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'docuharmonize-os',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur
        externalUrlRegex: 'external\\.com|domain\\.com',
        // Optional: Replace parts of the item URLs from Algolia
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
      metadata: [
        {name: 'keywords', content: 'enterprise documentation, compliance automation, AI standardization, document management, panama startup'},
        {name: 'description', content: 'Comprehensive startup operating system for DocuHarmonize - the enterprise documentation standardization platform'},
        {property: 'og:title', content: 'DocuHarmonize Startup OS'},
        {property: 'og:description', content: 'Enterprise Documentation Standardization Platform - Startup Operating System'},
        {property: 'og:type', content: 'website'},
      ],
    }),

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js',
      async: true,
    },
  ],

  // Custom fields for the startup context
  customFields: {
    startup: {
      name: 'DocuHarmonize',
      tagline: 'Eliminate documentation chaos in Fortune 500 enterprises',
      stage: 'Pre-Seed',
      location: 'Panama City, Panama',
      targetMarket: 'Fortune 500 Financial Services',
      addressableMarket: '$3.1-5.4B',
      businessModel: 'B2B SaaS with Professional Services',
      revenueTarget: '$100M ARR by Year 5'
    },
    contact: {
      founder: 'Jose Garcia',
      email: 'jose@docuharmonize.com',
      linkedin: 'https://linkedin.com/in/josegarcia-docuharmonize',
      website: 'https://docuharmonize.com'
    }
  }
};

module.exports = config;