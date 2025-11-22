/**
 * Creating a sidebar for examples section
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  examplesSidebar: [
    {
      type: 'category',
      label: '💼 Customer Case Studies',
      items: [
        'customer-case-studies/wells-fargo-pilot',
        'customer-case-studies/deutsche-bank-implementation',
        'customer-case-studies/regional-bank-success',
        'customer-case-studies/insurance-company-case'
      ],
    },
    {
      type: 'category',
      label: '📋 Compliance Scenarios',
      items: [
        'compliance-scenarios/sox-compliance',
        'compliance-scenarios/gdpr-implementation',
        'compliance-scenarios/basel-iii-reporting',
        'compliance-scenarios/audit-preparation'
      ],
    },
    {
      type: 'category',
      label: '🛠️ Implementation Guides',
      items: [
        'implementation-guides/enterprise-deployment',
        'implementation-guides/pilot-program',
        'implementation-guides/integration-setup',
        'implementation-guides/user-training'
      ],
    },
  ],
};

module.exports = sidebars;