const dashboard = {
  title: "Dashboard",
  subtitle: "Welcome back — here's your inventory overview.",
  tour: {
    welcomeTitle: "Welcome to Stackwise!",
    welcomeDescription: "Let's take a quick tour of the key features. This will only take a minute.",
    navigationTitle: "Navigation",
    navigationDescription: "Use the sidebar to switch between sections — catalog, movements, suppliers, and more.",
    metricsTitle: "Stock health",
    metricsDescription: "Your inventory health at a glance — total SKUs, in-stock, low-stock, and out-of-stock counts.",
    needsAttentionTitle: "Needs attention",
    needsAttentionDescription: "Items that need action appear here — low stock, overdue POs, and pending requests.",
    searchTitle: "Command palette",
    searchDescription: "Press CMD+K (or Ctrl+K) to search anything — items, suppliers, orders, and more.",
    doneTitle: "You're all set!",
    doneDescription: "Explore the app or try the guided walkthrough to learn the core workflow. Happy managing!",
  },
  tourCompleteToast: "Tour complete! Explore freely or start the walkthrough.",
  metrics: {
    totalSkus: "Total SKUs",
    inStock: "In stock",
    lowStock: "Low stock",
    outOfStock: "Out of stock",
  },
  search: {
    placeholder: "Search items by name, SKU, or barcode...",
    noResults: "No items found",
  },
  needsAttention: {
    title: "Needs attention",
    allClear: "All clear — inventory is healthy",
    lowStock: "Low stock",
    viewAll: "View all ({{count}})",
    outOfStock: "Out of stock ({{count}})",
    purchaseOrders: "Purchase orders",
    pending: "{{count}} pending",
    overdue: "{{count}} overdue",
  },
  recentActivity: {
    title: "Recent activity",
    viewAll: "View all",
    empty: "No recent activity",
  },
} as const;

export default dashboard;
