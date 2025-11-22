/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main sidebar with only existing content
  main: [
    {
      type: 'doc',
      id: 'intro',
      label: '🚀 Welcome to DocuHarmonize OS',
    },
    {
      type: 'category',
      label: '📊 Market Discovery (Steps 1-6)',
      collapsed: false,
      items: [
        'market-discovery/beachhead-market',
        'market-discovery/customer-personas',
        'market-discovery/end-user-profiles',
        'market-discovery/tam-analysis',
        'market-discovery/lead-customers',
        'market-discovery/competitive-landscape'
      ],
    },
    {
      type: 'category',
      label: '🔧 Product Development (Steps 7-12)',
      collapsed: false,
      items: [
        'product-development/core-platform-overview',
        {
          type: 'category',
          label: 'Technical Architecture',
          items: [
            'product-development/technical-architecture/ai-ml-platform'
          ]
        }
      ],
    },
    {
      type: 'category',
      label: '💼 Go-to-Market (Steps 13-18)',
      collapsed: false,
      items: [
        'go-to-market/sales-playbook'
      ],
    },
    {
      type: 'category',
      label: '⚖️ Legal Foundation',
      collapsed: true,
      items: [
        'legal-foundation/panama-corporate-structure',
        'legal-foundation/employment-contracts',
        'legal-foundation/ip-protection',
        'legal-foundation/convertible-notes',
        'legal-foundation/data-privacy-compliance'
      ],
    },
    {
      type: 'category',
      label: '💰 Financial Framework',
      collapsed: true,
      items: [
        'financial-framework/panama-accounting-setup',
        'financial-framework/cati-incentives',
        'financial-framework/financial-projections'
      ],
    }
  ],

  // Separate sidebars for specific sections
  marketDiscovery: [
    {
      type: 'category',
      label: '📊 Market Discovery',
      items: [
        'market-discovery/beachhead-market',
        'market-discovery/customer-personas',
        'market-discovery/end-user-profiles',
        'market-discovery/tam-analysis',
        'market-discovery/lead-customers',
        'market-discovery/competitive-landscape'
      ],
    }
  ],

  productDevelopment: [
    {
      type: 'category',
      label: '🔧 Product Development',
      items: [
        'product-development/core-platform-overview',
        {
          type: 'category',
          label: 'Technical Architecture',
          items: [
            'product-development/technical-architecture/ai-ml-platform'
          ]
        }
      ],
    }
  ],

  goToMarket: [
    {
      type: 'category',
      label: '💼 Go-to-Market',
      items: [
        'go-to-market/sales-playbook'
      ],
    }
  ],

  legal: [
    {
      type: 'category',
      label: '⚖️ Legal Foundation',
      items: [
        'legal-foundation/panama-corporate-structure',
        'legal-foundation/employment-contracts',
        'legal-foundation/ip-protection',
        'legal-foundation/data-privacy-compliance',
        'legal-foundation/convertible-notes'
      ],
    }
  ],

  financial: [
    {
      type: 'category',
      label: '💰 Financial Framework',
      items: [
        'financial-framework/panama-accounting-setup',
        'financial-framework/cati-incentives',
        'financial-framework/financial-projections'
      ],
    }
  ],

  fundraising: [
    {
      type: 'category',
      label: '🎯 Fundraising Strategy',
      items: [
        'fundraising-strategy/overview'
      ],
    }
  ],

  hr: [
    {
      type: 'category',
      label: '👥 HR & Operations',
      items: [
        'operations/hr-overview',
        'operations/hr-policies-panama',
        'operations/employee-handbook',
        'operations/hiring-process',
        'operations/talent-retention'
      ],
    }
  ]
};

module.exports = sidebars;