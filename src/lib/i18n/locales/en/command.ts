const command = {
  searchPlaceholder: "Search items, pages, actions…",
  noResults: "No items match your query.",
  searchResults: "Search Results",
  items: "Items",
  pages: "Pages",
  actions: "Actions",
  filters: {
    status: "status",
    category: "category",
    supplier: "supplier",
    terms: "terms",
  },
  pageLabels: {
    dashboard: "Dashboard",
    catalog: "Catalog",
    movements: "Movements",
    suppliers: "Suppliers",
    purchaseOrders: "Purchase Orders",
    requests: "Requests",
    locations: "Locations",
    settings: "Settings",
  },
  actionLabels: {
    newItem: "New Item",
    newMovement: "New Movement",
    newPurchaseOrder: "New Purchase Order",
    newRequest: "New Request",
    newSupplier: "New Supplier",
    exportItemsCsv: "Export Items CSV",
  },
  shortcuts: {
    title: "Keyboard Shortcuts",
    global: "Global",
    navigation: "Navigation",
    create: "Create",
    openPalette: "Open command palette",
    showHelp: "Show this help",
  },
} as const;

export default command;
