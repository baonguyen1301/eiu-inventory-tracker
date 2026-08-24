const help = {
  title: "Trung tâm trợ giúp",
  subtitle: "Tìm câu trả lời cho các câu hỏi thường gặp về Stackwise.",
  searchPlaceholder: "Tìm kiếm câu hỏi…",
  noResults: 'Không có câu hỏi phù hợp với "{{query}}"',
  resultsFound: "Tìm thấy {{count}} kết quả",
  categories: {
    gettingStarted: "Bắt đầu",
    inventoryManagement: "Quản lý kho",
    purchaseOrders: "Đơn đặt hàng",
    reportsAnalytics: "Báo cáo & Phân tích",
    accountSettings: "Tài khoản & Cài đặt",
  },
  faq: {
    gettingStarted: {
      q1: { question: "Stackwise là gì?", answer: "Stackwise là hệ thống quản lý kho giúp bạn theo dõi mức tồn kho, quản lý nhà cung cấp, tạo đơn đặt hàng và có được thông tin chuyên sâu qua phân tích." },
      q2: { question: "Làm sao để vào chế độ demo?", answer: "Nhấp 'Dùng thử Demo' trên trang chủ. Chế độ demo tải sẵn dữ liệu mẫu để bạn khám phá mọi tính năng mà không cần tạo tài khoản." },
      q3: { question: "Làm sao để điều hướng ứng dụng?", answer: "Dùng thanh bên (máy tính) hoặc thanh điều hướng dưới cùng (di động) để chuyển giữa các phần. Nhấn CMD+K để mở bảng lệnh tìm kiếm nhanh." },
      q4: { question: "Tôi có thể đặt lại dữ liệu demo không?", answer: "Có! Vào Cài đặt → Hệ thống và nhấp 'Đặt lại dữ liệu demo' để khôi phục toàn bộ dữ liệu mẫu về trạng thái ban đầu." },
      q5: { question: "Có những vai trò nào?", answer: "Ba vai trò: Quản trị viên (toàn quyền), Quản lý (có thể quản lý kho và đơn đặt hàng), và Người yêu cầu (có thể duyệt danh mục và gửi yêu cầu)." },
    },
    inventoryManagement: {
      q1: { question: "Làm sao để thêm mặt hàng mới?", answer: "Vào Danh mục và nhấp '+ Mặt hàng mới'. Điền tên, SKU, danh mục và thông tin tồn kho. SKU phải là duy nhất." },
      q2: { question: "Màu trạng thái tồn kho có ý nghĩa gì?", answer: "Xanh lá (Còn hàng): số lượng cao hơn điểm đặt hàng lại. Vàng hổ phách (Sắp hết): số lượng bằng hoặc thấp hơn điểm đặt hàng lại. Đỏ (Hết hàng): số lượng bằng không." },
      q3: { question: "Làm sao để ghi nhận biến động tồn kho?", answer: "Vào Biến động và nhấp 'Ghi nhận biến động'. Chọn loại (Nhập, Xuất, Điều chỉnh, hoặc Chuyển kho), chọn mặt hàng, và nhập số lượng." },
      q4: { question: "Điểm đặt hàng lại là gì?", answer: "Ngưỡng số lượng tối thiểu kích hoạt cảnh báo sắp hết hàng. Khi tồn kho giảm xuống bằng hoặc dưới mức này, mặt hàng sẽ xuất hiện trong 'Cần chú ý'." },
      q5: { question: "Làm sao để cập nhật hàng loạt mặt hàng?", answer: "Trong Danh mục, chọn nhiều mặt hàng bằng ô đánh dấu, sau đó dùng thanh hành động hàng loạt để cập nhật danh mục, lưu trữ, hoặc xóa các mặt hàng đã chọn." },
    },
    purchaseOrders: {
      q1: { question: "Làm sao để tạo đơn đặt hàng?", answer: "Vào Đơn đặt hàng và nhấp 'Tạo đơn'. Chọn nhà cung cấp, thêm các dòng hàng với số lượng và chi phí, sau đó gửi đi." },
      q2: { question: "Các trạng thái đơn đặt hàng là gì?", answer: "Nháp (chưa gửi), Đã gửi (đã gửi cho nhà cung cấp), Nhận một phần (đã nhận một số mặt hàng), Đã nhận đủ (đã nhận toàn bộ mặt hàng), Đã hủy." },
      q3: { question: "Làm sao để nhận một lô hàng?", answer: "Mở đơn đặt hàng đã gửi và nhấp 'Nhận hàng'. Nhập số lượng đã nhận cho từng dòng hàng. Tồn kho sẽ tự động được cập nhật." },
      q4: { question: "Tôi có thể in đơn đặt hàng không?", answer: "Có, mở màn hình chi tiết đơn đặt hàng và nhấp biểu tượng in. Thao tác này tạo ra bản xem có thể in với đầy đủ chi tiết đơn hàng." },
    },
    reportsAnalytics: {
      q1: { question: "Có những báo cáo nào?", answer: "Tổng quan tồn kho (theo danh mục và trạng thái), Xu hướng biến động (theo thời gian), Phân tích vòng quay hàng, Bảng điểm hiệu suất nhà cung cấp, và Phân tích chi phí." },
      q2: { question: "Tôi có thể xuất dữ liệu không?", answer: "Có, dùng nút 'Xuất CSV' trên trang Phân tích hoặc nút xuất trên bảng dữ liệu để tải dữ liệu của bạn xuống." },
      q3: { question: "Thông tin chuyên sâu AI là gì?", answer: "Các tính năng dùng AI bao gồm gợi ý đặt hàng lại dựa trên xu hướng nhu cầu, phát hiện bất thường cho các biến động khác lạ, và tìm kiếm bằng ngôn ngữ tự nhiên." },
    },
    accountSettings: {
      q1: { question: "Làm sao để quản lý người dùng?", answer: "Quản trị viên có thể vào Cài đặt → Người dùng để mời người dùng mới, đổi vai trò, và vô hiệu hóa tài khoản." },
      q2: { question: "Làm sao để thay đổi danh mục?", answer: "Vào Cài đặt → Danh mục để thêm, đổi tên, hoặc xóa danh mục. Mặt hàng trong danh mục bị xóa sẽ trở thành chưa phân loại." },
      q3: { question: "Tùy chọn thông báo nằm ở đâu?", answer: "Nhấp biểu tượng chuông trên đầu trang, sau đó biểu tượng bánh răng để tùy chỉnh các thông báo bạn nhận được." },
    },
  },
} as const;

export default help;
