/**
 * Creating a sidebar for workflows section
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  workflowsSidebar: [
    {
      type: 'category',
      label: '🔄 Business Workflows',
      items: [
        'customer-discovery',
        'product-development',
        'sales-process',
        'fundraising-process',
        'hiring-process',
        'customer-success'
      ],
    },
    {
      type: 'category',
      label: '📊 Validation Workflows',
      items: [
        'idea-validation',
        'market-validation',
        'product-market-fit',
        'pricing-validation',
        'competitive-analysis'
      ],
    },
    {
      type: 'category',
      label: '🚀 Growth Workflows',
      items: [
        'customer-acquisition',
        'product-expansion',
        'international-expansion',
        'partnership-development'
      ],
    },
  ],
};

module.exports = sidebars;