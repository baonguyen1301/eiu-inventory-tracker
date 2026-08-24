const onboarding = {
  tour: {
    back: "Back",
    next: "Next",
    done: "Done",
  },
  walkthrough: {
    title: "Walkthrough",
    step: "Step {{current}}: {{label}}",
    showMe: "Show me",
    finish: "Finish Walkthrough",
    stepsBadge: "Walkthrough ({{current}}/{{total}})",
    steps: {
      catalog: { label: "Browse the Catalog", description: "Explore your inventory items, search, and view details." },
      movements: { label: "Log a Movement", description: "Record stock received, shipped, or adjusted." },
      lowStock: { label: "Check Low Stock", description: "See items needing attention on the dashboard." },
      purchaseOrder: { label: "Create a Purchase Order", description: "Restock by creating a new PO from suppliers." },
    },
  },
} as const;

export default onboarding;
