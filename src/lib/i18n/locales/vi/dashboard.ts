const dashboard = {
  title: "Bảng điều khiển",
  subtitle: "Chào mừng trở lại — đây là tổng quan tồn kho của bạn.",
  tour: {
    welcomeTitle: "Chào mừng đến với Stackwise!",
    welcomeDescription: "Hãy cùng khám phá nhanh các tính năng chính. Việc này chỉ mất một phút.",
    navigationTitle: "Điều hướng",
    navigationDescription: "Dùng thanh bên để chuyển giữa các mục — danh mục, dịch chuyển kho, nhà cung cấp và hơn thế nữa.",
    metricsTitle: "Tình trạng tồn kho",
    metricsDescription: "Xem nhanh tình trạng tồn kho — tổng số SKU, còn hàng, sắp hết và hết hàng.",
    needsAttentionTitle: "Cần chú ý",
    needsAttentionDescription: "Các mục cần xử lý sẽ hiện ở đây — sắp hết hàng, đơn mua trễ hạn và yêu cầu đang chờ.",
    searchTitle: "Bảng lệnh nhanh",
    searchDescription: "Nhấn CMD+K (hoặc Ctrl+K) để tìm bất cứ thứ gì — mặt hàng, nhà cung cấp, đơn hàng và hơn thế nữa.",
    doneTitle: "Vậy là xong!",
    doneDescription: "Khám phá ứng dụng hoặc thử hướng dẫn từng bước để nắm quy trình chính. Chúc bạn quản lý hiệu quả!",
  },
  tourCompleteToast: "Hoàn tất hướng dẫn! Khám phá tự do hoặc bắt đầu chỉ dẫn từng bước.",
  metrics: {
    totalSkus: "Tổng số SKU",
    inStock: "Còn hàng",
    lowStock: "Sắp hết hàng",
    outOfStock: "Hết hàng",
  },
  search: {
    placeholder: "Tìm mặt hàng theo tên, SKU hoặc mã vạch...",
    noResults: "Không tìm thấy mặt hàng",
  },
  needsAttention: {
    title: "Cần chú ý",
    allClear: "Mọi thứ ổn — tồn kho khỏe mạnh",
    lowStock: "Sắp hết hàng",
    viewAll: "Xem tất cả ({{count}})",
    outOfStock: "Hết hàng ({{count}})",
    purchaseOrders: "Đơn mua hàng",
    pending: "{{count}} đang chờ",
    overdue: "{{count}} trễ hạn",
  },
  recentActivity: {
    title: "Hoạt động gần đây",
    viewAll: "Xem tất cả",
    empty: "Chưa có hoạt động gần đây",
  },
} as const;

export default dashboard;
