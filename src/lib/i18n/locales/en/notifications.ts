const notifications = {
  title: "Notifications",
  markAllAsRead: "Mark All as Read",
  settings: "Notification settings",
  dismiss: "Dismiss notification",
  empty: "No notifications",
  unread: "unread notifications",
  bellAriaLabel: "Notifications",
  tabs: {
    all: "All",
    unread: "Unread",
    stock: "Stock",
    po: "PO",
    requests: "Requests",
  },
  preferences: {
    title: "Notification Preferences",
    save: "Save Preferences",
    saved: "Notification preferences saved.",
    lowStock: {
      label: "Low Stock Alerts",
      description: "When an item drops below its reorder point",
    },
    zeroStock: {
      label: "Zero Stock Alerts",
      description: "When an item reaches zero stock",
    },
    poReminder: {
      label: "PO Reminders",
      description: "When a PO delivery date is within 3 days",
    },
    poOverdue: {
      label: "PO Overdue",
      description: "When a PO passes its expected delivery date",
    },
    requestUpdate: {
      label: "Request Updates",
      description: "When an inventory request status changes",
    },
  },
} as const;

export default notifications;
