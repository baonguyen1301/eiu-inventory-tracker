const notifications = {
  title: "Thông báo",
  markAllAsRead: "Đánh dấu tất cả đã đọc",
  settings: "Cài đặt thông báo",
  dismiss: "Bỏ thông báo",
  empty: "Không có thông báo",
  unread: "thông báo chưa đọc",
  bellAriaLabel: "Thông báo",
  tabs: {
    all: "Tất cả",
    unread: "Chưa đọc",
    stock: "Tồn kho",
    po: "Đơn hàng",
    requests: "Yêu cầu",
  },
  preferences: {
    title: "Tùy chọn thông báo",
    save: "Lưu tùy chọn",
    saved: "Đã lưu tùy chọn thông báo.",
    lowStock: {
      label: "Cảnh báo sắp hết hàng",
      description: "Khi một mặt hàng giảm xuống dưới điểm đặt hàng lại",
    },
    zeroStock: {
      label: "Cảnh báo hết hàng",
      description: "Khi một mặt hàng đạt mức tồn kho bằng không",
    },
    poReminder: {
      label: "Nhắc nhở đơn đặt hàng",
      description: "Khi ngày giao hàng dự kiến của đơn đặt hàng còn trong vòng 3 ngày",
    },
    poOverdue: {
      label: "Đơn đặt hàng quá hạn",
      description: "Khi đơn đặt hàng đã qua ngày giao hàng dự kiến",
    },
    requestUpdate: {
      label: "Cập nhật yêu cầu",
      description: "Khi trạng thái yêu cầu tồn kho thay đổi",
    },
  },
} as const;

export default notifications;
