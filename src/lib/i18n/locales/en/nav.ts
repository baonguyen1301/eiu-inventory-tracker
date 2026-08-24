const nav = {
  groups: {
    operations: "Operations",
    procurement: "Procurement",
    intelligence: "Intelligence",
    admin: "Admin",
  },
  items: {
    dashboard: "Dashboard",
    catalog: "Catalog",
    movements: "Movements",
    locations: "Locations",
    suppliers: "Suppliers",
    purchaseOrders: "Purchase orders",
    analytics: "Analytics",
    aiInsights: "AI insights",
    settings: "Settings",
    requests: "Requests",
    help: "Help",
    orders: "Orders",
    more: "More",
  },
  header: {
    searchPlaceholder: "Search…",
    openMenu: "Open menu",
    quickEntry: "Quick entry",
    newItem: "New item",
    userMenu: "User menu",
    settings: "Settings",
    exitDemo: "Exit demo",
    navigation: "Navigation",
    moreNavigation: "More navigation",
    noPermission: "You don't have permission to access that page.",
  },
  roles: {
    admin: "Admin",
    manager: "Manager",
    requestor: "Requestor",
  },
  demoBanner: {
    exploringAs: "Exploring as",
    exploringAsShort: "As",
    dataResets: "· data resets each session",
    dismiss: "Dismiss demo banner",
  },
} as const;

export default nav;
