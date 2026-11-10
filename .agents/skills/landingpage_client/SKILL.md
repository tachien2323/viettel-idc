---
name: landingpage_client
description: >-
  Thiết kế, xây dựng và triển khai Cổng thông tin Dịch vụ Khách hàng / Bảo hiểm Doanh nghiệp (Corporate Client Insurance Portal Landing Page) chuẩn thương hiệu Bolttech (Next.js App Router, Song ngữ Việt-Anh, Hỗ trợ linh hoạt chương trình Nhân viên & Người thân, Trung tâm Tài liệu thông minh, AI Chatbot OpenRouter đọc toàn bộ tài liệu hợp đồng, kết nối Google Sheets riêng, trang Quản trị /admin ẩn có mật khẩu, và tự động deploy GitHub + Vercel). Sử dụng skill này bất kỳ khi nào người dùng yêu cầu tạo mới, nhân bản hoặc tùy biến landing page cổng thông tin bảo hiểm cho một khách hàng doanh nghiệp mới.
---

# Corporate Client Insurance Landing Page (`landingpage_client`)

Skill này cung cấp quy trình chuẩn từ A–Z (kèm bộ khung kiến trúc và các quy chuẩn UI/UX rút ra từ thực tế triển khai `landingpage-demo` và `viettel-idc`) để khởi tạo nhanh **Cổng thông tin Dịch vụ Khách hàng Doanh nghiệp (Corporate Insurance Portal)** cho từng khách hàng mới của Bolttech.

## 1. Khi nào kích hoạt Skill này
- Người dùng yêu cầu tạo Landing Page / Microsite / Cổng thông tin bảo hiểm sức khỏe & tai nạn cho một doanh nghiệp khách hàng mới (ví dụ: *"Tạo landingpage bảo hiểm cho khách hàng X dùng skill landingpage_client"*).
- Người dùng muốn nhân bản từ bộ khung chuẩn (`tachien2323/landingpage-demo` hoặc `tachien2323/viettel-idc`) sang khách hàng mới với bộ tài liệu hợp đồng trong thư mục `Documents/`, file Google Sheet riêng và AI Chatbot nạp sẵn toàn bộ tài liệu.

---

## 2. Hai Chế độ Triển khai (Tùy theo yêu cầu khách hàng trong `context.md`)

1. **Chế độ A — Đang mở Đăng ký Người thân (`tachien2323/landingpage-demo`)**:
   - Có Modal Đăng ký Người thân (`FamilyRegistrationModal.tsx`) và các nút CTA đăng ký, đồng bộ trực tiếp danh sách người thân đăng ký vào Google Sheets.
2. **Chế độ B — Đã hoàn tất thu xếp hợp đồng (`tachien2323/viettel-idc`)**:
   - **Bỏ hoàn toàn** chức năng và form đăng ký người thân (`FamilyRegistrationModal.tsx`).
   - Hỗ trợ chuyển đổi giữa 2 đối tượng: **`Chương trình NHÂN VIÊN` (`employee`)** và **`Chương trình NGƯỜI THÂN` (`dependent`)**.
   - **Lưu ý quan trọng:** Chỉ hiển thị 2 nút chuyển đổi (`Nhân viên` và `Người thân`), **ẩn/bỏ hoàn toàn** menu/chức năng `"So sánh NV & Người thân"` để giao diện tinh gọn.
   - Có **Trung tâm Tài liệu & Biểu mẫu thông minh (`DocumentCenterSection.tsx`)** cho phép tìm kiếm, lọc theo đối tượng/chủ đề và tải trực tiếp toàn bộ các file tài liệu trong thư mục dự án.

---

## 3. Quy trình Triển khai Chuẩn 6 Bước (Từ A–Z)

### Bước 1: Đọc `context.md` & Chuẩn hóa Tài liệu Tĩnh (`public/documents/`)
1. Đọc kỹ `context.md` và toàn bộ các file tài liệu (`.pdf`, `.doc`, `.docx`, `.xlsx`) trong thư mục `Documents/` của khách hàng.
2. Sao chép toàn bộ tài liệu gốc vào `public/documents/` với **tên file chuẩn hóa ASCII không dấu** (ví dụ: `so-tay-bhsk-nhan-vien.pdf`, `danh-sach-co-so-y-te-bao-lanh-vien-phi.pdf`) để tránh lỗi mã hóa tiếng Việt Unicode NFD (macOS) vs NFC (Linux Vercel) gây lỗi 404 khi tải file.

### Bước 2: Tạo mới Google Sheet riêng cho Khách hàng
- Sử dụng công cụ `gsheets` CLI tạo mới 1 file Google Spreadsheet riêng cho khách hàng (hoặc dùng `GOOGLE_SHEET_ID` được cung cấp).
- Định dạng dòng tiêu đề Row 1 nền `#180F50`, chữ trắng `#FFFFFF` in đậm và cố định (freeze) dòng 1.
- Gắn `GOOGLE_SHEET_ID` mới làm giá trị mặc định trong `src/lib/types.ts`, `src/lib/store.ts`, `src/lib/google-sheets.ts` và biến môi trường Vercel.

### Bước 3: Thiết kế Giao diện & Quy chuẩn Câu chữ / Ngắt dòng Tiếng Việt (BẮT BUỘC TUÂN THỦ)
Tuân thủ nghiêm ngặt các quy chuẩn UI/UX đã được tinh chỉnh tại [architecture-and-lessons.md](./references/architecture-and-lessons.md):

1. **Hero Banner (`src/components/HeroAndGeneral.tsx`)**:
   - **Bỏ hoàn toàn đoạn văn mô tả phụ (subtitle)** bên dưới tiêu đề lớn `<h1>` ở Hero Banner (chỉ giữ Badge thời hạn hợp đồng + Tiêu đề lớn `<h1>` + hàng nút bấm hành động).
   - **Ngắt dòng cố định tiêu đề `<h1>`**: Không bao giờ để rớt chữ giữa từ ghép `"Sức khỏe"`. Bắt buộc ngắt dòng ngay trước chữ `"Sức khỏe"`:
     - Dòng 1: `Cổng thông tin Bảo hiểm`
     - Dòng 2: `Sức khỏe & Tai nạn [Tên Khách hàng]`
2. **Quy tắc Chống Ngắt Dòng Giữa Từ Ghép 2 Âm Tiết Tiếng Việt**:
   - Trên toàn bộ tiêu đề các mục (`h1`, `h2`, `h3`, `h4`), phụ đề và tiêu đề tài liệu, sử dụng khoảng trắng không ngắt dòng (`\u00A0`) hoặc `<span className="whitespace-nowrap">...</span>` cho các từ ghép 2 âm tiết tiếng Việt (`Sức\u00A0khỏe`, `Tai\u00A0nạn`, `Bảo\u00A0hiểm`, `Người\u00A0thân`, `Nhân\u00A0viên`, `bổ\u00A0sung`, `chứng\u00A0từ`, `từ\u00A0chối`, `yêu\u00A0cầu`, `quy\u00A0định`, `tài\u00A0liệu`, `biểu\u00A0mẫu`, `bồi\u00A0thường`, `viện\u00A0phí`, `loại\u00A0trừ`, ` tối\u00A0đa`, `thiết\u00A0yếu`...).
   - **Tại phụ đề Mục V (Lưu ý Quan trọng & Điều khoản Loại trừ)**: Ngắt dòng bắt buộc (`<br />`) ngay trước cụm `"tránh bị từ chối hoặc..."`:
     - Dòng 1: `Nắm vững các quy định dưới đây giúp Cán bộ nhân viên và Người thân [Tên Khách hàng]`
     - Dòng 2: `tránh bị từ chối hoặc yêu cầu bổ sung chứng từ:`
3. **Trung tâm Tài liệu & Biểu mẫu (`src/components/DocumentCenterSection.tsx`)**:
   - Phụ đề mục Trung tâm tài liệu viết ngắn gọn:
     `"Chọn đúng đối tượng (Nhân viên / Người thân / Tài liệu chung) hoặc gõ từ khóa để tìm và tải file"`
   - Trong mỗi Box tài liệu (Document Card):
     - **Bỏ** dòng chú thích nhỏ ghi số trang (`46 trang · Tài liệu cốt lõi...`) dưới nhãn đối tượng.
     - **Bỏ** khung hiển thị tên file gốc (`📄 SỔ TAY...`) dưới tiêu đề tài liệu.
   - Khi lọc tìm kiếm từ khóa (`haystack`), luôn chuẩn hóa `.replace(/\u00A0/g, " ")` để khớp chính xác với từ khóa người dùng gõ.
4. **Hộp Biểu mẫu Bồi thường (`src/components/ClaimsNotesContact.tsx`)**:
   - Phụ đề hộp Biểu mẫu dùng câu ngắn gọn:
     `"Tải trực tiếp các biểu mẫu Word (.doc)"`

### Bước 4: Quy chuẩn Cửa sổ Trợ lý AI & Khung Hỏi AI Cuối Trang
1. **Cửa sổ Trợ lý AI (`src/components/ChatbotWidget.tsx`)**:
   - Đặt tiêu đề ngắn gọn là **"Trợ lý AI"** (EN: **"AI Assistant"**).
   - **Bỏ** dòng chữ phụ *"Đã nạp X tài liệu Nhân viên & Người thân"* ở thanh tiêu đề cửa sổ chat.
   - **Bỏ** dòng chữ kỹ thuật *"AI Model: deepseek/deepseek-v4.1-flash (Local Knowledge Base Mode)"* ở cuối mỗi bong bóng tin nhắn trả lời của AI.
   - Tự động chuyển mọi đường dẫn `/documents/...` trong nội dung trả lời thành nút bấm `📄 Tải / Xem tài liệu`.
2. **Khung Hỏi Trợ lý AI ở Cuối Trang (`src/components/ClaimsNotesContact.tsx`)**:
   - Đặt tiêu đề ngắn gọn: **"Cần tra cứu nhanh? Hỏi trợ lý AI ngay"** (bỏ tên khách hàng ở tiêu đề này).
   - **Bỏ hoàn toàn** đoạn văn mô tả *"Trợ lý AI đã được nạp toàn bộ..."* bên dưới tiêu đề, hiển thị thẳng các nút câu hỏi gợi ý.

### Bước 5: Nạp Toàn bộ Tài liệu vào AI Chatbot Knowledge Base (`src/data/default-knowledge.ts`)
- Trích xuất đầy đủ và chính xác toàn bộ nội dung từ các file trong `Documents/` (Sổ tay Nhân viên, Sổ tay Người thân, Bảng quyền lợi các nhóm, Quyền lợi mở rộng, Hướng dẫn App TPA, Quy định hóa đơn VAT trong ngày theo Nghị định `70/2025/NĐ-CP`, Danh sách CSYT bảo lãnh, Danh sách Blacklist, Quy tắc & Điểm loại trừ) vào `src/data/default-knowledge.ts` kèm đường dẫn tải file `/documents/...`.

### Bước 6: Kiểm thử Build, Đẩy lên GitHub & Triển khai Vercel
1. Chạy `npm run build` đảm bảo 0 lỗi TypeScript / Turbopack.
2. Tạo GitHub repository và đẩy nhánh `main` lên GitHub.
3. Sử dụng bộ công cụ MCP `vercel-plugin_vercel`:
   - Gọi `create_git_project` để tạo project đúng tên khách hàng yêu cầu (VD: `viettel-idc`) liên kết với GitHub repo.
   - Gọi `create_project_env` để cấu hình `GOOGLE_SHEET_ID`, `OPENROUTER_MODEL` (`deepseek/deepseek-v4.1-flash`), `ADMIN_PASSCODE` (`bolttech2027`).
   - Gọi `update_project` với `requestBody: { ssoProtection: null }` để tắt Vercel Authentication, mở công khai 100% cho khách hàng.
