# Kiến trúc Chi tiết & Bài học Kinh nghiệm Thực tế (`landingpage_client`)

Tài liệu này lưu trữ các quy chuẩn kỹ thuật, giao diện, câu chữ và cách xử lý triệt để các lỗi thường gặp khi triển khai Cổng thông tin Bảo hiểm Khách hàng trên Next.js 16 (Turbopack) + Vercel.

---

## 1. Cấu trúc Thư mục Chuẩn

```text
project-root/
├── context.md                            # Yêu cầu & dữ liệu riêng của khách hàng
├── Documents/                            # Thư mục chứa file tài liệu gốc khách hàng cung cấp
├── public/
│   └── documents/                        # Chứa các file PDF/DOC chuẩn hóa tên ASCII để tải trực tiếp
├── next.config.ts                        # Khai báo serverExternalPackages
├── src/
│   ├── app/
│   │   ├── globals.css                   # Biến màu thương hiệu, overflow-x: clip
│   │   ├── layout.tsx                    # Font Inter (latin + vietnamese) & LanguageProvider
│   │   ├── page.tsx                      # Trang chủ tập hợp các phân khu + Chatbot
│   │   ├── admin/
│   │   │   └── page.tsx                  # Trang Quản trị ẩn (/admin) bảo vệ bằng passcode
│   │   └── api/
│   │       ├── admin/auth/route.ts       # Xác thực passcode Admin
│   │       ├── admin/settings/route.ts   # Lưu cấu hình OpenRouter & Google Sheets
│   │       ├── chat/route.ts             # Kết nối OpenRouter AI + Smart Local Fallback đọc .md
│   │       ├── knowledge/route.ts        # Upload & convert PDF/Word/Excel/PPT -> Markdown (.md)
│   │       ├── plans/route.ts            # Đọc/cập nhật bảng quyền lợi & hạn mức các nhóm
│   │       └── registrations/route.ts    # Đồng bộ Google Sheets
│   ├── components/
│   │   ├── Header.tsx                    # Sticky Header (ẩn nút Quản trị, bộ chuyển NV / Người thân)
│   │   ├── HeroAndGeneral.tsx            # Hero (không có subtitle) + Thông tin chung + Điểm mới + Thời gian chờ
│   │   ├── BenefitsSection.tsx           # Bảng quyền lợi theo Nhóm chức danh & Quyền lợi mở rộng
│   │   ├── DocumentCenterSection.tsx     # Trung tâm Tài liệu & Biểu mẫu thông minh (lọc theo đối tượng & từ khóa)
│   │   ├── ClaimsNotesContact.tsx        # Hướng dẫn bồi thường, Lưu ý quan trọng, Liên hệ & CTA Hỏi AI
│   │   └── ChatbotWidget.tsx             # Cửa sổ chat "Trợ lý AI" tối giản, tinh gọn
│   ├── data/
│   │   ├── default-knowledge.ts          # Toàn văn Markdown tổng hợp tất cả tài liệu của khách hàng
│   │   └── store.json                    # Dữ liệu lưu trữ cục bộ
│   ├── i18n/
│   │   ├── LanguageContext.tsx           # Context chuyển đổi ngôn ngữ VI / EN
│   │   └── translations.ts               # Từ điển song ngữ Việt - Anh (đã khóa \u00A0 chống tách từ ghép)
│   └── lib/
│       ├── types.ts                      # Client-safe types, DEFAULT_PLANS, VIETTEL_DOCUMENTS, SHEET_HEADERS
│       ├── store.ts                      # Server-only đọc/ghi dữ liệu (có fallback /tmp trên Vercel)
│       ├── file-to-markdown.ts           # Bộ chuyển đổi PDF, DOCX, XLSX, PPTX sang Markdown (.md)
│       └── google-sheets.ts              # Đồng bộ Google Sheets qua Webhook hoặc Service Account API
```

---

## 2. Danh sách Quy chuẩn UI & Câu chữ Đã Chuẩn hóa (Checklist Bắt buộc)

### 2.1. Chuyển đổi Đối tượng (`Nhân viên` & `Người thân`)
- Khi hợp đồng có cả chương trình **Nhân viên** và **Người thân**, chỉ sử dụng 2 trạng thái:
  `export type TargetAudience = "employee" | "dependent";`
- **Không hiển thị** nút/tab `"So sánh NV & Người thân"` trên thanh Header, khu vực Thông tin chung hay Bảng quyền lợi.

### 2.2. Quy chuẩn Ngắt dòng Tiếng Việt (Không bao giờ tách đôi từ ghép 2 âm tiết)
- **Lỗi cần tránh:** Trình duyệt tự động ngắt dòng ở giữa một từ ghép 2 âm tiết tiếng Việt (ví dụ: chữ `Sức` ở dòng trên, chữ `khỏe` rớt xuống dòng dưới; hoặc chữ `bổ` ở dòng trên, chữ `sung` rớt xuống dòng dưới).
- **Cách khắc phục triệt để:**
  1. **Tại Tiêu đề Hero Banner (`HeroAndGeneral.tsx`)**:
     - Xóa bỏ đoạn mô tả phụ (`subtitle`) dưới tiêu đề chính.
     - Ngắt dòng cố định bằng `<br />` ngay trước chữ `"Sức khỏe"` và bọc `whitespace-nowrap` cho từng cụm từ ghép:
       ```tsx
       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-4xl mx-auto">
         {lang === "vi" ? (
           <>
             <span className="whitespace-nowrap">Cổng thông tin</span>{" "}
             <span className="whitespace-nowrap">Bảo hiểm</span>
             <br />
             <span className="whitespace-nowrap">Sức khỏe</span> &amp;{" "}
             <span className="whitespace-nowrap">Tai nạn</span>{" "}
             <span className="whitespace-nowrap">Viettel IDC</span>
           </>
         ) : ( ... )}
       </h1>
       ```
  2. **Tại Phụ đề Mục Lưu ý Quan trọng (`ClaimsNotesContact.tsx`)**:
     - Ngắt dòng bắt buộc (`<br />`) ngay trước cụm `"tránh bị từ chối hoặc yêu cầu bổ sung chứng từ:"`:
       ```tsx
       <p className="text-[#4A4766] mt-2 text-base leading-relaxed">
         {lang === "vi" ? (
           <>
             Nắm vững các <span className="whitespace-nowrap">quy định</span> dưới đây giúp{" "}
             <span className="whitespace-nowrap">Cán bộ nhân viên</span> và{" "}
             <span className="whitespace-nowrap">Người thân</span>{" "}
             <span className="whitespace-nowrap">Viettel IDC</span>
             <br />
             tránh bị <span className="whitespace-nowrap">từ chối</span> hoặc{" "}
             <span className="whitespace-nowrap">yêu cầu</span>{" "}
             <span className="whitespace-nowrap">bổ sung</span>{" "}
             <span className="whitespace-nowrap">chứng từ:</span>
           </>
         ) : (
           t.notes.subtitle
         )}
       </p>
       ```
  3. **Trong `translations.ts` và `types.ts`**:
     - Dùng ký tự khoảng trắng không ngắt dòng `\u00A0` giữa 2 âm tiết của từ ghép tiếng Việt trong mọi tiêu đề mục và tiêu đề tài liệu (VD: `"Sổ\u00A0tay Bảo\u00A0hiểm Sức\u00A0khỏe"`, `"Trích\u00A0lục 22\u00A0Điểm Loại\u00A0trừ BH\u00A0Sức\u00A0khỏe & 24\u00A0Điểm Loại\u00A0trừ BH\u00A0Tai\u00A0nạn"`).
     - Nhớ thêm `.replace(/\u00A0/g, " ")` khi tạo chuỗi tìm kiếm (`haystack`) trong `DocumentCenterSection.tsx`.

### 2.3. Quy chuẩn Trung tâm Tài liệu & Hộp Biểu mẫu
- **Phụ đề Trung tâm Tài liệu (`t.documents.subtitle`)**:
  `"Chọn đúng đối tượng (Nhân viên / Người thân / Tài liệu chung) hoặc gõ từ khóa để tìm và tải file"`
- **Thiết kế Box của từng Tài liệu (`DocumentCenterSection.tsx`)**:
  - Chỉ hiển thị Icon + Badge đối tượng (`Dành cho Nhân viên` / `Dành cho Người thân` / `Nhân viên & Người thân`) + Badge định dạng/dung lượng (`PDF · 2.08 MB`) + Tiêu đề tài liệu + Tóm tắt + Các gạch đầu dòng nổi bật + 2 nút `Xem trực tiếp` / `Tải file gốc`.
  - **Tuyệt đối không hiển thị** dòng chú thích số trang nhỏ dưới badge đối tượng và **không hiển thị** khung tên file gốc (`📄 ...pdf`) dưới tiêu đề.
- **Phụ đề Hộp Biểu mẫu Bồi thường (`t.claims.formsSubtitle`)**:
  `"Tải trực tiếp các biểu mẫu Word (.doc)"`

### 2.4. Quy chuẩn Cửa sổ Trợ lý AI & Khung CTA Cuối Trang
- **Header của `ChatbotWidget.tsx`**:
  - Tiêu đề: `"Trợ lý AI"` (EN: `"AI Assistant"`).
  - **Không hiển thị** dòng chữ phụ `"Đã nạp 12 tài liệu..."` dưới tiêu đề.
- **Bong bóng tin nhắn của `ChatbotWidget.tsx`**:
  - **Không hiển thị** dòng `"AI Model: deepseek/deepseek-v4.1-flash (Local Knowledge Base Mode)"` ở chân tin nhắn trả lời của AI.
- **Khung CTA Hỏi AI ở cuối trang (`ClaimsNotesContact.tsx`)**:
  - Tiêu đề: `"Cần tra cứu nhanh? Hỏi trợ lý AI ngay"` (không gắn tên công ty khách hàng vào câu này).
  - **Không hiển thị** đoạn mô tả dài bên dưới tiêu đề; hiển thị trực tiếp danh sách các nút câu hỏi gợi ý.

### 2.5. Quy tắc Kỹ thuật Next.js 16 Turbopack & Vercel
- **Tách biệt Client/Server**: `src/lib/types.ts` hoàn toàn không import thư viện Node.js (`fs`, `path`, `googleapis`).
- **Chuẩn hóa tên file tài liệu tĩnh**: Trên macOS, tên file tiếng Việt có dấu được lưu theo chuẩn Unicode NFD, khi đẩy lên Git/Vercel (Linux chuẩn NFC) dễ gặp lỗi 404. Do đó luôn tạo bản copy tên file ASCII không dấu gạch ngang trong `public/documents/` và trỏ toàn bộ link tải về đường dẫn ASCII đó.
- **Tắt SSO Protection khi Deploy Vercel**: Sau khi gọi `create_git_project`, luôn gọi `update_project` với `requestBody: { ssoProtection: null }` để khách hàng mở link `https://<project-name>.vercel.app` không bị chặn bởi trang đăng nhập Vercel.
