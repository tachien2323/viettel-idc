import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cổng thông tin Bảo hiểm Sức khỏe & Tai nạn Viettel IDC (2026–2027) — Bolttech Việt Nam",
  description:
    "Cổng thông tin dịch vụ bảo hiểm sức khỏe & tai nạn Viettel IDC (01/10/2026 – 30/09/2027) dành cho Cán bộ nhân viên và Người thân: Tra cứu quyền lợi 3 nhóm chức danh, tải 12 tài liệu & biểu mẫu gốc, hướng dẫn App Papaya Care và hỏi đáp Trợ lý AI 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F7F8FC] text-[#180F50]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
