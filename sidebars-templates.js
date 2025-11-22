/**
 * Creating a sidebar for templates section
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  templatesSidebar: [
    {
      type: 'category',
      label: '📝 Legal Documents',
      items: [
        'legal-documents/employment-contract-template',
        'legal-documents/convertible-note-template',
        'legal-documents/service-agreement-template',
        'legal-documents/nda-template'
      ],
    },
    {
      type: 'category',
      label: '💰 Financial Models',
      items: [
        'financial-models/saas-financial-model',
        'financial-models/fundraising-model',
        'financial-models/budget-template',
        'financial-models/investor-reporting-template'
      ],
    },
    {
      type: 'category',
      label: '💼 Sales Materials',
      items: [
        'sales-materials/pitch-deck-template',
        'sales-materials/roi-calculator-template',
        'sales-materials/demo-script-template',
        'sales-materials/proposal-template'
      ],
    },
    {
      type: 'category',
      label: '🛠️ Operational Procedures',
      items: [
        'operational-procedures/hr-handbook-template',
        'operational-procedures/sop-template',
        'operational-procedures/onboarding-checklist',
        'operational-procedures/performance-review-template'
      ],
    },
  ],
};

module.exports = sidebars;