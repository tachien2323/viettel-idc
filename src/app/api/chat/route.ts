import { NextResponse } from "next/server";
import { getCompiledKnowledgeMarkdown, readPortalStore } from "@/lib/store";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

function buildLocalIntelligentAnswer(
  question: string,
  lang: "vi" | "en",
  storePlans: ReturnType<typeof readPortalStore>["plans"],
  compiledMd: string
): string {
  const q = question.toLowerCase();
  const planLines = storePlans
    .map(
      (p) =>
        `- **${lang === "vi" ? p.nameVi : p.nameEn} (${
          lang === "vi" ? p.tierVi : p.tierEn
        })**: Tai nạn: **${p.accidentLimit}** | Nội trú: **${
          p.inpatientLimit
        }** (Tiền giường NV: **${p.roomBoardEmployeeLimit}** / Người thân: **${
          p.roomBoardDependentLimit
        }**) | Ngoại trú: **${p.outpatientLimit}** (${
          lang === "vi" ? p.outpatientPerVisitLimitVi : p.outpatientPerVisitLimitEn
        }) | Nha khoa: **${p.dentalLimit}** | Thai sản: **${
          lang === "vi" ? p.maternityLimitVi : p.maternityLimitEn
        }**`
    )
    .join("\n");

  if (
    q.includes("khác nhau") ||
    q.includes("so sánh") ||
    q.includes("người thân") ||
    q.includes("người nhà") ||
    q.includes("thời gian chờ") ||
    q.includes("dependent") ||
    q.includes("waiting period")
  ) {
    return lang === "vi"
      ? `**So sánh Chương trình NHÂN VIÊN vs NGƯỜI THÂN (Viettel IDC 2026–2027)**:\n\n- **Thời gian chờ Bệnh đặc biệt & Bệnh có sẵn**:\n  - **Nhân viên**: **Miễn thời gian chờ**.\n  - **Người thân**: Chờ **365 ngày** đối với người mới tham gia lần đầu (Miễn thời gian chờ nếu đã tham gia liên tục đủ 1 năm từ HĐ 2025–2026).\n- **Thời gian chờ Thai sản**:\n  - **Nhân viên**: Sinh đẻ **chờ tỷ lệ 270 ngày** · Biến chứng thai sản **chờ tỷ lệ 60 ngày**.\n  - **Người thân**: Sinh đẻ **chờ đủ 270 ngày** · Biến chứng thai sản **chờ đủ 60 ngày**.\n- **Tiền giường & Phòng đơn Nhóm 1 (TGĐ/PTGĐ)**:\n  - **Nhân viên Nhóm 1**: **25.000.000 VNĐ/ngày** (tăng từ 15tr lên 25tr).\n  - **Người thân Nhóm 1**: **15.000.000 VNĐ/ngày** (Nhóm 2: 7,5tr/ngày · Nhóm 3: 5,25tr/ngày giống nhau).\n- **Trợ cấp nghỉ điều trị do tai nạn (300k / 500k / 1 triệu/ngày)**: **Chỉ áp dụng với Nhân viên**, không áp dụng cho Người thân.\n- **Tải Sổ tay chi tiết**:\n  - Sổ tay Nhân viên: \`/documents/so-tay-bhsk-viettel-2026-nhan-vien.pdf\`\n  - Sổ tay Người thân: \`/documents/so-tay-bhsk-viettel-2026-nguoi-than.pdf\``
      : `**Comparison: EMPLOYEE vs FAMILY DEPENDENT Program (Viettel IDC 2026–2027)**:\n\n- **Waiting Period (Pre-existing & Special Diseases)**:\n  - **Employees**: **Waived (0 days)**.\n  - **Dependents**: **365 days** for first-time enrollees (waived if continuously insured for 1 full year from 2025–2026).\n- **Maternity Waiting Period**:\n  - **Employees**: Pro-rata **270 days** (childbirth) & Pro-rata **60 days** (complications).\n  - **Dependents**: Full **270 days** (childbirth) & Full **60 days** (complications).\n- **Group 1 Room & Board Limit**:\n  - **Employee Group 1**: **25,000,000 VND/day**.\n  - **Dependent Group 1**: **15,000,000 VND/day** (Group 2: 7.5M/day · Group 3: 5.25M/day for both).\n- **Accident Medical Leave Allowance**: Applies **only to Employees** (300k / 500k / 1M VND/day).\n- **Download Handbooks**:\n  - Employee Handbook: \`/documents/so-tay-bhsk-viettel-2026-nhan-vien.pdf\`\n  - Dependent Handbook: \`/documents/so-tay-bhsk-viettel-2026-nguoi-than.pdf\``;
  }

  if (
    q.includes("ngoại trú") ||
    q.includes("outpatient") ||
    q.includes("nha khoa") ||
    q.includes("răng") ||
    q.includes("dental") ||
    q.includes("khám")
  ) {
    return lang === "vi"
      ? `**Quyền lợi Điều trị Ngoại trú & Nha khoa (Viettel IDC 2026–2027)**:\n\n- **Tổng hạn mức Ngoại trú/năm**:\n  - **Nhóm 1 (TGĐ/PTGĐ)**: **60.000.000 VNĐ/năm** (Không giới hạn số tiền/lần khám)\n  - **Nhóm 2 (CBQL HRL13+)**: **19.000.000 VNĐ/năm** (Không giới hạn số tiền/lần khám)\n  - **Nhóm 3 (Nhân viên)**: **14.000.000 VNĐ/năm** (Tối đa **3.700.000 VNĐ/lần khám**)\n- **Điều trị Răng cơ bản** (Khám, X-quang, viêm nướu, nha chu, trám răng, chữa tủy, cạo vôi răng, nhổ răng bệnh lý):\n  - **Nhóm 1**: **12.000.000 VNĐ/năm** | **Nhóm 2**: **5.100.000 VNĐ/năm** | **Nhóm 3**: **3.600.000 VNĐ/năm**\n- **Khám thai định kỳ**: Nhóm 1: **4.000.000đ/năm** | Nhóm 2: **2.000.000đ/năm** | Nhóm 3: **1.200.000đ/năm**\n- **Vật lý trị liệu**: Nhóm 1: **600.000đ/ngày** | Nhóm 2: **200.000đ/ngày** | Nhóm 3: **140.000đ/ngày**\n- **Mở rộng đặc biệt**: Chi trả nước muối sinh lý/xịt mũi (400k–500k/năm), Vitamin hỗ trợ điều trị (400k–500k/năm), mụn nhọt/rụng tóc/nám da điều trị y tế (1tr–3tr/năm), vật tư y tế ngoại trú (1tr–3tr/năm).`
      : `**Outpatient & Dental Benefits (Viettel IDC 2026–2027)**:\n\n- **Total Outpatient Limit/Year**:\n  - **Group 1 (CEO/Deputy CEO)**: **60,000,000 VND/year** (Unlimited per visit)\n  - **Group 2 (Management HRL13+)**: **19,000,000 VND/year** (Unlimited per visit)\n  - **Group 3 (Staff)**: **14,000,000 VND/year** (Up to **3,700,000 VND/visit**)\n- **Basic Dental Care**: Group 1: **12,000,000 VND/yr** | Group 2: **5,100,000 VND/yr** | Group 3: **3,600,000 VND/yr**\n- **Routine Prenatal Check-ups**: Group 1: **4M VND/yr** | Group 2: **2M VND/yr** | Group 3: **1.2M VND/yr**\n- **Physiotherapy**: Group 1: **600k/day** | Group 2: **200k/day** | Group 3: **140k/day**.`;
  }

  if (
    q.includes("nội trú") ||
    q.includes("nằm viện") ||
    q.includes("thai sản") ||
    q.includes("sinh") ||
    q.includes("phẫu thuật") ||
    q.includes("inpatient") ||
    q.includes("maternity")
  ) {
    return lang === "vi"
      ? `**Quyền lợi Nội trú, Phẫu thuật & Thai sản (Viettel IDC 2026–2027)**:\n\n- **Tổng hạn mức Nội trú/năm**: Nhóm 1: **630.000.000đ** (Châu Á) | Nhóm 2: **450.000.000đ** (VN) | Nhóm 3: **315.000.000đ** (VN).\n- **Chi phí nằm viện / Phẫu thuật / ICU / Cấp cứu**: Nhóm 1: **210.000.000đ/năm** | Nhóm 2: **150.000.000đ/năm** | Nhóm 3: **105.000.000đ/năm**.\n- **Tiền phòng & Giường đơn tiêu chuẩn (tối đa 60 ngày/năm)**:\n  - **Nhóm 1**: Nhân viên **25.000.000đ/ngày** · Người thân **15.000.000đ/ngày**\n  - **Nhóm 2**: **7.500.000đ/ngày**\n  - **Nhóm 3**: **5.250.000đ/ngày**\n- **Quyền lợi Thai sản & Sinh đẻ**:\n  - **Sinh thường**: Nhóm 1: **25.000.000đ** | Nhóm 2: **20.000.000đ** | Nhóm 3: **15.000.000đ**\n  - **Sinh mổ**: Nhóm 1: **35.000.000đ** | Nhóm 2: **30.000.000đ** | Nhóm 3: **25.000.000đ**\n  - **Trợ cấp sinh viện công (khoa thường)**: **1.000.000đ** (Nếu dùng BHYT >70%: Sinh thường **2.000.000đ**, Sinh mổ **3.000.000đ**).\n  - **Chăm sóc bé sau sinh tại viện**: **800.000đ**.`
      : `**Inpatient, Surgery & Maternity Benefits (Viettel IDC 2026–2027)**:\n\n- **Total Inpatient Limit/Year**: Group 1: **630M VND** (Asia) | Group 2: **450M VND** (VN) | Group 3: **315M VND** (VN).\n- **Room & Board (up to 60 days/yr)**: Group 1: Employee **25M/day** · Dependent **15M/day** | Group 2: **7.5M/day** | Group 3: **5.25M/day**.\n- **Maternity**:\n  - **Normal Delivery**: Group 1: **25M** | Group 2: **20M** | Group 3: **15M VND**\n  - **C-Section**: Group 1: **35M** | Group 2: **30M** | Group 3: **25M VND**\n  - **Public Hospital Allowance**: 1M VND (2M Normal / 3M C-section with BHYT >70%) + Newborn care 800k VND.`;
  }

  if (
    q.includes("papaya") ||
    q.includes("hồ sơ") ||
    q.includes("bồi thường") ||
    q.includes("giấy tờ") ||
    q.includes("biểu mẫu") ||
    q.includes("claim")
  ) {
    return lang === "vi"
      ? `**Hướng dẫn Nộp Hồ sơ Bồi thường (PJICO – Papaya – Bolttech)**:\n\n1. **Kênh 1 — Nộp Online qua App Papaya Care (Hồ sơ dưới 10.000.000 VNĐ, trừ Tai nạn/Tử vong)**:\n   - Tải app tại \`http://onelink.to/papaya_care\`, đăng nhập bằng **Số CCCD + mã OTP**.\n   - Chụp ảnh chứng từ y tế và Hóa đơn VAT tải trực tiếp lên App.\n   - Xem hướng dẫn: \`/documents/huong-dan-su-dung-app-papaya.pdf\`\n2. **Kênh 2 — Nộp Hồ sơ Bản cứng (Hồ sơ từ 10.000.000 VNĐ trở lên hoặc Tai nạn / Tử vong)**:\n   - **Hà Nội**: Gửi **Mr. Dương Hùng Chiến** (\`0838 830 038\`, \`chien.duong@bolttech.io\`) — Phòng 3, Tầng 11, Tòa nhà HAREC, 4A Láng Hạ, P. Giảng Võ, Hà Nội.\n   - **TP.HCM**: Gửi **Ms. Nguyễn Thị Ánh Thuyết** (\`0967 740 239\`, \`thuyet.nguyen@bolttech.io\`) — Tầng 3, Tòa nhà An Khánh, 63 Phạm Ngọc Thạch, P. Xuân Hòa, TP.HCM.\n3. **Lưu ý bắt buộc theo Nghị định 70/2025/NĐ-CP**:\n   - Hóa đơn VAT phải xuất **NGAY TRONG NGÀY** khám bệnh / xuất viện / mua thuốc.\n   - Hóa đơn mua thuốc phải trong vòng **05 ngày** kể từ ngày kê toa.\n4. **Tải biểu mẫu**:\n   - Giấy yêu cầu trả tiền bảo hiểm: \`/documents/PJICO-Claimform-TVTA.doc\`\n   - Biên bản tai nạn (BM.22.2-03): \`/documents/pjico-bm-22-2-03-bien-ban-tai-nan.doc\``
      : `**Claim Reimbursement Guide (PJICO – Papaya – Bolttech)**:\n\n1. **Channel 1 — Online via Papaya Care App (Claims < 10,000,000 VND, excluding Accident/Death)**:\n   - Download at \`http://onelink.to/papaya_care\`, log in with **National ID (CCCD) + OTP**.\n   - User guide: \`/documents/huong-dan-su-dung-app-papaya.pdf\`\n2. **Channel 2 — Hard-Copy Submission (Claims >= 10,000,000 VND or Accident/Death)**:\n   - **Hanoi**: **Mr. Duong Hung Chien** (\`0838 830 038\`) — Room 3, 11th Fl, HAREC Building, 4A Lang Ha, Hanoi.\n   - **HCMC**: **Ms. Nguyen Thi Anh Thuyet** (\`0967 740 239\`) — 3rd Fl, An Khanh Building, 63 Pham Ngoc Thach, HCMC.\n3. **Mandatory Decree 70/2025/NĐ-CP Rule**: VAT invoices must be issued **on the same day** as examination/discharge/purchase; prescription medicine must be bought within **05 days**.\n4. **Forms**:\n   - Claim Form: \`/documents/PJICO-Claimform-TVTA.doc\`\n   - Accident Report: \`/documents/pjico-bm-22-2-03-bien-ban-tai-nan.doc\``;
  }

  if (
    q.includes("bảo lãnh") ||
    q.includes("blacklist") ||
    q.includes("từ chối") ||
    q.includes("bệnh viện") ||
    q.includes("hospital")
  ) {
    return lang === "vi"
      ? `**Tra cứu Bảo lãnh viện phí (530 CSYT) & Danh sách Blacklist PJICO**:\n\n- **Bảo lãnh viện phí trực tiếp (Qua Papaya - Hotline \`1900 252 570\`)**:\n  - Xuất trình **Thẻ bảo hiểm (hoặc Thẻ điện tử trên App Papaya Care)** + **CCCD/Giấy khai sinh** (trẻ em phải có bố/mẹ đi cùng).\n  - Thời gian xử lý: Ngoại trú **15 – 30 phút** · Nội trú **trong 24 giờ**.\n  - Danh sách 530 bệnh viện bảo lãnh (Vinmec, Tâm Anh, Hồng Ngọc, Thu Cúc, Việt Pháp, FV, Hoàn Mỹ, Victoria Healthcare, CarePlus...): \`/documents/danh-sach-co-so-y-te-bao-lanh-vien-phi.pdf\`\n- **Danh sách CSYT Từ chối bảo hiểm (Blacklist PJICO — Cập nhật 12/08/2026)**:\n  - Mới bổ sung từ 12/08/2026 tại TP.HCM: PK YHCT Hương Sen Healthcare (21 Nguyễn Thái Bình, Tân Bình) và 3 cơ sở Công ty TNHH DV CSSK Lá Trà (Phú Nhuận, Quận 1, Bình Thạnh).\n  - Xem toàn bộ danh sách Blacklist (6 trang): \`/documents/blacklist-co-so-y-te-loai-tru-pjico.pdf\``
      : `**Direct Billing Network (530 Facilities) & PJICO Blacklist**:\n\n- **Direct Billing (Papaya Hotline \`1900 252 570\`)**:\n  - Present **Papaya Care e-Card** + **CCCD/Birth Certificate**.\n  - Processing time: Outpatient **15–30 mins** · Inpatient **within 24 hours**.\n  - Full 530-hospital list: \`/documents/danh-sach-co-so-y-te-bao-lanh-vien-phi.pdf\`\n- **PJICO Blacklist (Updated 12/08/2026)**:\n  - Newly excluded from 12/08/2026: Huong Sen Healthcare Clinic (Tan Binh) & 3 La Tra Healthcare locations in HCMC.\n  - Full Blacklist PDF: \`/documents/blacklist-co-so-y-te-loai-tru-pjico.pdf\``;
  }

  const lines = compiledMd.split("\n");
  const matchedSnippets = lines
    .filter((line) => {
      const words = q.split(/\s+/).filter((w) => w.length > 3);
      return words.some((w) => line.toLowerCase().includes(w));
    })
    .slice(0, 8);

  if (matchedSnippets.length > 0) {
    return (
      (lang === "vi"
        ? `Thông tin trích xuất từ **Cơ sở tri thức Bảo hiểm Viettel IDC (2026–2027)**:\n\n`
        : `Information retrieved from the **Viettel IDC Policy Knowledge Base (2026–2027)**:\n\n`) +
      matchedSnippets.map((s) => `- ${s.replace(/^#+\s*/, "")}`).join("\n") +
      `\n\n---\n${planLines}`
    );
  }

  return lang === "vi"
    ? `Tôi là **Trợ lý AI Bolttech Việt Nam** phụ trách chương trình bảo hiểm **Viettel IDC (01/10/2026 – 30/09/2027)** cho cả **Nhân viên** và **Người thân**.\n\n**Tóm tắt 3 Nhóm quyền lợi**:\n${planLines}\n\n- **Quản lý hợp đồng Bolttech**: Ms. Quỳnh Mai (\`0904 990 910\`) · Ms. Vân Anh (\`0345 956 568\`)\n- **Hỗ trợ bồi thường Bolttech**: Mr. Hùng Chiến (\`0838 830 038\` - Hà Nội) · Ms. Ánh Thuyết (\`0967 740 239\` - TP.HCM)\n- **Hotline TPA Papaya**: \`1900 252 570\``
    : `I am the **Bolttech Vietnam AI Advisor** for **Viettel IDC (01/10/2026 – 30/09/2027)** covering both **Employees** and **Family Dependents**.\n\n**Summary of 3 Benefit Groups**:\n${planLines}\n\n- **Account Managers**: Ms. Quynh Mai (\`0904 990 910\`) · Ms. Van Anh (\`0345 956 568\`)\n- **Claims Support**: Mr. Hung Chien (\`0838 830 038\` - Hanoi) · Ms. Anh Thuyet (\`0967 740 239\` - HCMC)\n- **Papaya TPA Hotline**: \`1900 252 570\``;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages: ChatMessage[] = Array.isArray(body.messages) ? body.messages : [];
    const lang: "vi" | "en" = body.lang === "en" ? "en" : "vi";

    const store = readPortalStore();
    const compiledKnowledge = getCompiledKnowledgeMarkdown();

    const apiKey = (
      store.settings.openRouterApiKey ||
      process.env.OPENROUTER_API_KEY ||
      ""
    ).trim();

    const preferredModel = (
      store.settings.openRouterModel ||
      process.env.OPENROUTER_MODEL ||
      "deepseek/deepseek-v4.1-flash"
    ).trim();

    const lastUserMessage =
      [...messages].reverse().find((m) => m.role === "user")?.content || "";

    if (!apiKey || apiKey === "your_openrouter_api_key_here") {
      const reply = buildLocalIntelligentAnswer(
        lastUserMessage,
        lang,
        store.plans,
        compiledKnowledge
      );
      return NextResponse.json({
        reply,
        modelUsed: `${preferredModel} (Local Knowledge Base Mode)`,
      });
    }

    const systemPrompt = `Bạn là Trợ lý Tư vấn Bảo hiểm AI chính thức của Bolttech Việt Nam dành cho Cán bộ nhân viên và Người thân của khách hàng Viettel IDC (Thời hạn bảo hiểm: 01/10/2026 – 30/09/2027; Bảo hiểm gốc: PJICO; TPA giải quyết bồi thường: Papaya Insurtech).
Nhiệm vụ của bạn là giải đáp chính xác, rõ ràng, thân thiện và chuyên nghiệp mọi câu hỏi về:
1. Quyền lợi bảo hiểm của cả 2 đối tượng **NHÂN VIÊN (CBNV)** và **NGƯỜI THÂN** theo 3 Nhóm chức danh (Nhóm 1: TGĐ/Phó TGĐ; Nhóm 2: CBQL HRL13+ / Trưởng, Phó phòng; Nhóm 3: Cấp Nhân viên).
2. Điểm khác biệt quan trọng giữa Nhân viên và Người thân (Thời gian chờ bệnh đặc biệt/có sẵn: NV miễn chờ vs Người thân mới chờ 365 ngày; Thai sản: NV chờ tỷ lệ 270/60 ngày vs Người thân chờ đủ 270/60 ngày; Tiền giường Nhóm 1: NV 25 triệu/ngày vs Người thân 15 triệu/ngày; Trợ cấp nghỉ điều trị tai nạn chỉ áp dụng cho NV).
3. 15 Quyền lợi mở rộng đặc biệt và các điểm thay đổi mới kỳ 2026–2027.
4. Thủ tục bảo lãnh viện phí (530 CSYT), danh sách Blacklist của PJICO (cập nhật 12/08/2026), cách dùng App Papaya Care nộp hồ sơ dưới 10 triệu VNĐ, quy định xuất hóa đơn VAT ngay trong ngày theo Nghị định 70/2025/NĐ-CP, và nơi gửi hồ sơ bản cứng tại Bolttech Hà Nội (Mr. Hùng Chiến 0838 830 038) & TP.HCM (Ms. Ánh Thuyết 0967 740 239).
5. Khi người dùng hỏi về biểu mẫu hoặc tài liệu, hãy cung cấp đường dẫn tải trực tiếp từ thư mục \`/documents/...\` tương ứng.
6. Lưu ý: Chương trình đăng ký người thân đầu kỳ đã hoàn tất thu xếp (chỉ nhận bổ sung giữa kỳ cho vợ/chồng mới cưới, người thân của NV mới, hoặc con mới sinh trong 45 ngày).
Ngôn ngữ phản hồi ưu tiên hiện tại: ${lang === "vi" ? "Tiếng Việt" : "English"}.
Định dạng câu trả lời bằng Markdown gọn gàng (dùng in đậm **bold** cho số tiền/hạn mức và gạch đầu dòng rõ ràng).

=== DỮ LIỆU KNOWLEDGE BASE (.MD) TỪ 12 TÀI LIỆU VIETTEL IDC ===
${compiledKnowledge}
=== KẾT THÚC KNOWLEDGE BASE ===`;

    const candidateModels = Array.from(
      new Set([
        preferredModel,
        "deepseek/deepseek-chat",
        "google/gemini-2.5-flash",
      ])
    );

    for (const modelId of candidateModels) {
      try {
        const orRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://viettel-idc.vercel.app",
            "X-Title": "Viettel IDC Insurance Portal - Bolttech Vietnam",
          },
          body: JSON.stringify({
            model: modelId,
            messages: [
              { role: "system", content: systemPrompt },
              ...messages.slice(-10),
            ],
            temperature: 0.25,
          }),
        });

        if (orRes.ok) {
          const data = await orRes.json();
          const content = data?.choices?.[0]?.message?.content;
          if (content) {
            return NextResponse.json({
              reply: content,
              modelUsed: modelId,
            });
          }
        }
      } catch {
        // try next candidate model
      }
    }

    const fallbackReply = buildLocalIntelligentAnswer(
      lastUserMessage,
      lang,
      store.plans,
      compiledKnowledge
    );
    return NextResponse.json({
      reply: fallbackReply,
      modelUsed: `${preferredModel} (Fallback Knowledge Base)`,
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: `Lỗi xử lý câu hỏi Chatbot: ${
          err instanceof Error ? err.message : String(err)
        }`,
      },
      { status: 500 }
    );
  }
}
