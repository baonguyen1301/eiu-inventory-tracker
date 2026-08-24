const landing = {
  nav: {
    features: "Features",
    solutions: "Solutions",
    analytics: "Analytics",
    tryDemo: "Try demo",
    toggleMenu: "Toggle menu",
  },
  solutions: {
    badge: "Solutions",
    title: "Built for modern inventory teams",
    subtitle: "Four powerful modules working together to give you complete visibility and control.",
    items: {
      realTimeTracking: {
        title: "Real-time tracking",
        description: "Monitor stock levels across every location with live dashboards and instant status updates.",
      },
      smartReorders: {
        title: "Smart reorders",
        description: "Automated thresholds and AI-powered forecasting prevent stockouts before they happen.",
      },
      supplierManagement: {
        title: "Supplier management",
        description: "Unified view of contacts, lead times, purchase history, and performance scoring.",
      },
      analyticsReports: {
        title: "Analytics & reports",
        description: "Turn movement data into insights with trend charts, turnover analysis, and exports.",
      },
    },
  },
  productTour: {
    badge: "Product tour",
    title: "Drive your business forward",
    subtitle: "Explore the modules that give you complete control over your supply chain.",
    tabs: {
      dashboard: {
        label: "Dashboard",
        description: "See what matters most: stock levels, pending orders, recent movements, and alerts that need attention.",
      },
      catalog: {
        label: "Catalog",
        description: "Powerful search, filters, bulk actions, and custom fields let you manage hundreds of SKUs effortlessly.",
      },
      analytics: {
        label: "Analytics",
        description: "From stock trends to supplier performance, turn raw data into actionable insights and forecasts.",
      },
    },
    imageAlt: "Stackwise {{tab}} view",
  },
  dashboardShowcaseAlt: "Stackwise dashboard showing inventory metrics, stock levels chart, and recent activity",
  features: {
    title: "Everything you need to manage inventory",
    subtitle: "Six powerful modules working together to give you complete control over your supply chain.",
    items: {
      realTimeTracking: {
        title: "Real-time tracking",
        description: "Monitor stock levels across every location as changes happen, with instant dashboards and live status indicators.",
      },
      smartReorderAlerts: {
        title: "Smart reorder alerts",
        description: "Get notified before you run out. Automated thresholds and AI-powered forecasting keep shelves stocked.",
      },
      supplierManagement: {
        title: "Supplier management",
        description: "Organize contacts, lead times, and purchase history in one unified view with performance scoring.",
      },
      barcodeScanning: {
        title: "Barcode scanning",
        description: "Speed up receiving and cycle counts with built-in barcode support and quick-entry mode.",
      },
      analyticsReports: {
        title: "Analytics & reports",
        description: "Turn movement data into insights with trend charts, turnover analysis, and exportable reports.",
      },
      teamRoles: {
        title: "Team roles & permissions",
        description: "Control who can view, edit, or approve with granular role-based access and approval workflows.",
      },
    },
  },
  capabilities: {
    roleBasedAccess: "Role-based access",
    multiLocationSupport: "Multi-location support",
    barcodeReady: "Barcode ready",
    aiPoweredInsights: "AI-powered insights",
  },
  hero: {
    imageAlt: "3D illustration of a cardboard box",
    title: "The inventory platform that scales your business",
    subtitle: "Track stock, manage suppliers, automate reorders, and keep your team aligned from one powerful command center.",
    tryDemo: "Try demo",
  },
  finalCta: {
    title: "Ready to take control of your inventory?",
    subtitle: "Explore Stackwise with sample data. No signup required.",
    tryDemo: "Try demo",
  },
  footer: {
    builtWith: "Built with Stackwise · {{year}}",
  },
} as const;

export default landing;
