const landing = {
  nav: {
    features: "Tính năng",
    solutions: "Giải pháp",
    analytics: "Phân tích",
    tryDemo: "Dùng thử",
    toggleMenu: "Bật/tắt menu",
  },
  solutions: {
    badge: "Giải pháp",
    title: "Được xây dựng cho đội ngũ quản lý kho hiện đại",
    subtitle: "Bốn mô-đun mạnh mẽ phối hợp cùng nhau, mang lại khả năng theo dõi và kiểm soát toàn diện.",
    items: {
      realTimeTracking: {
        title: "Theo dõi thời gian thực",
        description: "Giám sát mức tồn kho tại mọi địa điểm với bảng điều khiển trực tiếp và cập nhật trạng thái tức thì.",
      },
      smartReorders: {
        title: "Đặt hàng lại thông minh",
        description: "Ngưỡng tự động và dự báo bằng AI giúp ngăn ngừa hết hàng trước khi xảy ra.",
      },
      supplierManagement: {
        title: "Quản lý nhà cung cấp",
        description: "Xem tập trung thông tin liên hệ, thời gian giao hàng, lịch sử mua hàng và điểm hiệu suất.",
      },
      analyticsReports: {
        title: "Phân tích & báo cáo",
        description: "Biến dữ liệu xuất nhập kho thành thông tin chi tiết với biểu đồ xu hướng, phân tích vòng quay và xuất dữ liệu.",
      },
    },
  },
  productTour: {
    badge: "Giới thiệu sản phẩm",
    title: "Thúc đẩy doanh nghiệp của bạn phát triển",
    subtitle: "Khám phá các mô-đun giúp bạn kiểm soát toàn diện chuỗi cung ứng.",
    tabs: {
      dashboard: {
        label: "Bảng điều khiển",
        description: "Xem những gì quan trọng nhất: mức tồn kho, đơn hàng đang chờ, biến động gần đây và các cảnh báo cần xử lý.",
      },
      catalog: {
        label: "Danh mục",
        description: "Tìm kiếm mạnh mẽ, bộ lọc, thao tác hàng loạt và trường tùy chỉnh giúp bạn quản lý hàng trăm mã hàng dễ dàng.",
      },
      analytics: {
        label: "Phân tích",
        description: "Từ xu hướng tồn kho đến hiệu suất nhà cung cấp, biến dữ liệu thô thành thông tin và dự báo hữu ích.",
      },
    },
    imageAlt: "Giao diện {{tab}} của Stackwise",
  },
  dashboardShowcaseAlt: "Bảng điều khiển Stackwise hiển thị chỉ số tồn kho, biểu đồ mức tồn kho và hoạt động gần đây",
  features: {
    title: "Mọi thứ bạn cần để quản lý kho",
    subtitle: "Sáu mô-đun mạnh mẽ phối hợp cùng nhau, mang lại khả năng kiểm soát toàn diện chuỗi cung ứng.",
    items: {
      realTimeTracking: {
        title: "Theo dõi thời gian thực",
        description: "Giám sát mức tồn kho tại mọi địa điểm ngay khi có thay đổi, với bảng điều khiển và chỉ báo trạng thái trực tiếp.",
      },
      smartReorderAlerts: {
        title: "Cảnh báo đặt hàng lại thông minh",
        description: "Nhận thông báo trước khi hết hàng. Ngưỡng tự động và dự báo bằng AI giúp kệ hàng luôn đầy đủ.",
      },
      supplierManagement: {
        title: "Quản lý nhà cung cấp",
        description: "Sắp xếp thông tin liên hệ, thời gian giao hàng và lịch sử mua hàng trong một giao diện thống nhất kèm điểm hiệu suất.",
      },
      barcodeScanning: {
        title: "Quét mã vạch",
        description: "Tăng tốc nhận hàng và kiểm kê định kỳ với hỗ trợ quét mã vạch tích hợp và chế độ nhập nhanh.",
      },
      analyticsReports: {
        title: "Phân tích & báo cáo",
        description: "Biến dữ liệu xuất nhập kho thành thông tin chi tiết với biểu đồ xu hướng, phân tích vòng quay và báo cáo có thể xuất.",
      },
      teamRoles: {
        title: "Vai trò & phân quyền nhóm",
        description: "Kiểm soát ai được xem, chỉnh sửa hoặc phê duyệt với phân quyền chi tiết theo vai trò và quy trình phê duyệt.",
      },
    },
  },
  capabilities: {
    roleBasedAccess: "Phân quyền theo vai trò",
    multiLocationSupport: "Hỗ trợ đa địa điểm",
    barcodeReady: "Sẵn sàng quét mã vạch",
    aiPoweredInsights: "Thông tin chi tiết bằng AI",
  },
  hero: {
    imageAlt: "Minh họa 3D của một thùng carton",
    title: "Nền tảng quản lý kho giúp doanh nghiệp bạn mở rộng quy mô",
    subtitle: "Theo dõi tồn kho, quản lý nhà cung cấp, tự động đặt hàng lại và giữ cho đội ngũ của bạn đồng bộ từ một trung tâm điều hành mạnh mẽ.",
    tryDemo: "Dùng thử",
  },
  finalCta: {
    title: "Sẵn sàng kiểm soát kho hàng của bạn?",
    subtitle: "Khám phá Stackwise với dữ liệu mẫu. Không cần đăng ký.",
    tryDemo: "Dùng thử",
  },
  footer: {
    builtWith: "Được xây dựng với Stackwise · {{year}}",
  },
} as const;

export default landing;
