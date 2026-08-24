const command = {
  searchPlaceholder: "Tìm mặt hàng, trang, thao tác…",
  noResults: "Không có kết quả phù hợp.",
  searchResults: "Kết quả tìm kiếm",
  items: "Mặt hàng",
  pages: "Trang",
  actions: "Thao tác",
  filters: {
    status: "trạng thái",
    category: "danh mục",
    supplier: "nhà cung cấp",
    terms: "từ khóa",
  },
  pageLabels: {
    dashboard: "Tổng quan",
    catalog: "Danh mục",
    movements: "Xuất nhập kho",
    suppliers: "Nhà cung cấp",
    purchaseOrders: "Đơn đặt hàng",
    requests: "Yêu cầu",
    locations: "Vị trí kho",
    settings: "Cài đặt",
  },
  actionLabels: {
    newItem: "Thêm mặt hàng",
    newMovement: "Tạo phiếu xuất nhập",
    newPurchaseOrder: "Tạo đơn đặt hàng",
    newRequest: "Tạo yêu cầu",
    newSupplier: "Thêm nhà cung cấp",
    exportItemsCsv: "Xuất CSV mặt hàng",
  },
  shortcuts: {
    title: "Phím tắt",
    global: "Chung",
    navigation: "Điều hướng",
    create: "Tạo mới",
    openPalette: "Mở bảng lệnh nhanh",
    showHelp: "Hiển thị trợ giúp này",
  },
} as const;

export default command;
