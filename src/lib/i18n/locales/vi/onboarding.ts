const onboarding = {
  tour: {
    back: "Quay lại",
    next: "Tiếp theo",
    done: "Xong",
  },
  walkthrough: {
    title: "Hướng dẫn",
    step: "Bước {{current}}: {{label}}",
    showMe: "Chỉ cho tôi",
    finish: "Hoàn tất hướng dẫn",
    stepsBadge: "Hướng dẫn ({{current}}/{{total}})",
    steps: {
      catalog: { label: "Duyệt Danh mục", description: "Khám phá các mặt hàng trong kho, tìm kiếm và xem chi tiết." },
      movements: { label: "Ghi nhận biến động", description: "Ghi lại việc nhập, xuất hoặc điều chỉnh tồn kho." },
      lowStock: { label: "Kiểm tra hàng sắp hết", description: "Xem các mặt hàng cần chú ý trên bảng điều khiển." },
      purchaseOrder: { label: "Tạo đơn đặt hàng", description: "Nhập thêm hàng bằng cách tạo đơn đặt hàng mới từ nhà cung cấp." },
    },
  },
} as const;

export default onboarding;
