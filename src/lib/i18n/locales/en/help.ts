const help = {
  title: "Help Center",
  subtitle: "Find answers to common questions about Stackwise.",
  searchPlaceholder: "Search questions…",
  noResults: 'No matching questions for "{{query}}"',
  resultsFound: "{{count}} result{{plural}} found",
  categories: {
    gettingStarted: "Getting Started",
    inventoryManagement: "Inventory Management",
    purchaseOrders: "Purchase Orders",
    reportsAnalytics: "Reports & Analytics",
    accountSettings: "Account & Settings",
  },
  faq: {
    gettingStarted: {
      q1: { question: "What is Stackwise?", answer: "Stackwise is an inventory management system that helps you track stock levels, manage suppliers, create purchase orders, and gain insights through analytics." },
      q2: { question: "How do I enter demo mode?", answer: "Click 'Try Demo' on the landing page. Demo mode pre-loads sample data so you can explore all features without creating an account." },
      q3: { question: "How do I navigate the app?", answer: "Use the sidebar (desktop) or bottom navigation bar (mobile) to switch between sections. Press CMD+K to open the command palette for quick search." },
      q4: { question: "Can I reset demo data?", answer: "Yes! Go to Settings → System and click 'Reset Demo Data' to restore all sample data to its original state." },
      q5: { question: "What roles are available?", answer: "Three roles: Admin (full access), Manager (can manage inventory and POs), and Requestor (can browse catalog and submit requests)." },
    },
    inventoryManagement: {
      q1: { question: "How do I add a new item?", answer: "Go to Catalog and click '+ New Item'. Fill in the name, SKU, category, and stock details. The SKU must be unique." },
      q2: { question: "What do the stock status colors mean?", answer: "Green (In Stock): quantity above reorder point. Amber (Low Stock): quantity at or below reorder point. Red (Out of Stock): zero quantity." },
      q3: { question: "How do I log a stock movement?", answer: "Go to Movements and click 'Log Movement'. Select the type (Received, Shipped, Adjusted, or Transferred), choose the item, and enter the quantity." },
      q4: { question: "What is a reorder point?", answer: "The minimum quantity threshold that triggers a low-stock alert. When stock drops to or below this level, the item appears in 'Needs Attention'." },
      q5: { question: "How do I bulk update items?", answer: "In the Catalog, select multiple items using checkboxes, then use the bulk action bar to update category, archive, or delete selected items." },
    },
    purchaseOrders: {
      q1: { question: "How do I create a purchase order?", answer: "Go to Purchase Orders and click 'Create PO'. Select a supplier, add line items with quantities and costs, then submit." },
      q2: { question: "What are PO statuses?", answer: "Draft (not yet sent), Submitted (sent to supplier), Partially Received (some items received), Fully Received (all items received), Cancelled." },
      q3: { question: "How do I receive a shipment?", answer: "Open a submitted PO and click 'Receive Shipment'. Enter the quantities received for each line item. Stock is automatically updated." },
      q4: { question: "Can I print a purchase order?", answer: "Yes, open the PO detail view and click the print icon. This generates a printable view with all order details." },
    },
    reportsAnalytics: {
      q1: { question: "What reports are available?", answer: "Stock Overview (by category and status), Movement Trends (over time), Turnover Analysis, Supplier Performance scorecards, and Cost breakdowns." },
      q2: { question: "Can I export data?", answer: "Yes, use the 'Export CSV' button on the Analytics page or the export button on data tables to download your data." },
      q3: { question: "What are AI Insights?", answer: "AI-powered features including reorder suggestions based on demand patterns, anomaly detection for unusual movements, and natural language search." },
    },
    accountSettings: {
      q1: { question: "How do I manage users?", answer: "Admins can go to Settings → Users to invite new users, change roles, and deactivate accounts." },
      q2: { question: "How do I change categories?", answer: "Go to Settings → Categories to add, rename, or delete categories. Items in a deleted category become uncategorized." },
      q3: { question: "Where are notification preferences?", answer: "Click the bell icon in the header, then the gear icon to customize which notifications you receive." },
    },
  },
} as const;

export default help;
