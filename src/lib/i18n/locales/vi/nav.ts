const nav = {
  groups: {
    operations: "Vận hành",
    procurement: "Mua hàng",
    intelligence: "Phân tích thông minh",
    admin: "Quản trị",
  },
  items: {
    dashboard: "Tổng quan",
    catalog: "Danh mục",
    movements: "Xuất nhập kho",
    locations: "Vị trí kho",
    suppliers: "Nhà cung cấp",
    purchaseOrders: "Đơn đặt hàng",
    analytics: "Phân tích",
    aiInsights: "Thông tin AI",
    settings: "Cài đặt",
    requests: "Yêu cầu",
    help: "Trợ giúp",
    orders: "Đơn hàng",
    more: "Thêm",
  },
  header: {
    searchPlaceholder: "Tìm kiếm…",
    openMenu: "Mở menu",
    quickEntry: "Nhập nhanh",
    newItem: "Thêm mặt hàng",
    userMenu: "Menu người dùng",
    settings: "Cài đặt",
    exitDemo: "Thoát chế độ dùng thử",
    navigation: "Điều hướng",
    moreNavigation: "Điều hướng thêm",
    noPermission: "Bạn không có quyền truy cập trang này.",
  },
  roles: {
    admin: "Quản trị viên",
    manager: "Quản lý",
    requestor: "Người yêu cầu",
  },
  demoBanner: {
    exploringAs: "Đang trải nghiệm với vai trò",
    exploringAsShort: "Vai trò",
    dataResets: "· dữ liệu sẽ đặt lại mỗi phiên",
    dismiss: "Đóng thông báo dùng thử",
  },
} as const;

export default nav;
