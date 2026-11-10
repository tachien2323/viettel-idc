export type PlanCode = "1" | "2" | "3";
export type TargetAudience = "employee" | "dependent" | "compare";
export type DocumentAudienceFilter = "all" | "employee" | "dependent" | "shared";
export type DocumentCategoryFilter =
  | "all"
  | "handbook"
  | "forms"
  | "network_blacklist"
  | "papaya_app"
  | "rules_exclusions";

export interface InsurancePlan {
  code: PlanCode;
  nameVi: string;
  nameEn: string;
  tierVi: string;
  tierEn: string;
  annualFee: number;
  scopeHealthVi: string;
  scopeHealthEn: string;
  scopeAccidentVi: string;
  scopeAccidentEn: string;
  accidentDeathLimit: string;
  accidentMedicalLimit: string;
  accidentLeaveAllowanceEmployee: string;
  illnessDeathLimit: string;
  inpatientTotalLimit: string;
  hospitalizationSubLimit: string;
  roomBoardEmployeeLimit: string;
  roomBoardDependentLimit: string;
  surgeryLimit: string;
  prePostHospitalLimit: string;
  normalDeliveryLimit: string;
  cSectionDeliveryLimit: string;
  outpatientTotalLimit: string;
  outpatientPerVisitLimitVi: string;
  outpatientPerVisitLimitEn: string;
  dentalLimit: string;
  prenatalCheckupLimit: string;
  physiotherapyLimit: string;
  // Backward-compatible fields for admin/store
  accidentLimit: string;
  inpatientLimit: string;
  outpatientLimit: string;
  maternityLimitVi: string;
  maternityLimitEn: string;
}

export interface PortalDocumentItem {
  id: string;
  titleVi: string;
  titleEn: string;
  originalFileName: string;
  fileUrl: string;
  fileFormat: "PDF" | "DOC";
  fileSize: string;
  pagesOrTypeVi: string;
  pagesOrTypeEn: string;
  audience: "employee" | "dependent" | "shared";
  audienceLabelVi: string;
  audienceLabelEn: string;
  category: Exclude<DocumentCategoryFilter, "all">;
  categoryLabelVi: string;
  categoryLabelEn: string;
  summaryVi: string;
  summaryEn: string;
  highlightsVi: string[];
  highlightsEn: string[];
  keywords: string[];
  isImportant?: boolean;
  isWarning?: boolean;
}

export interface KnowledgeDoc {
  id: string;
  fileName: string;
  fileType: string;
  uploadedAt: string;
  markdownContent: string;
  sizeBytes: number;
}

export interface DependentItem {
  id: string;
  fullName: string;
  relationship: string;
  gender: "Nam" | "Nữ" | "Male" | "Female";
  age: number;
  dobOrId?: string;
  plan: PlanCode;
  fee: number;
}

export interface FamilyRegistration {
  id: string;
  createdAt: string;
  policyNumber: string;
  employeeName: string;
  employeeCode: string;
  employeePhone: string;
  employeeEmail: string;
  dependents: DependentItem[];
  totalFee: number;
  sheetSynced: boolean;
  sheetSyncMessage?: string;
}

export interface PortalSettings {
  openRouterModel: string;
  openRouterApiKey?: string;
  googleSheetWebhookUrl: string;
  googleSheetId: string;
}

export interface PortalStoreData {
  plans: InsurancePlan[];
  mainKnowledgeMd: string;
  knowledgeDocs: KnowledgeDoc[];
  registrations: FamilyRegistration[];
  settings: PortalSettings;
}

export const VIETTEL_IDC_SHEET_ID = "1XXYWYc6hW6HOhQ0ZrBHlkEtjOS6xWxeXGJDCE9ld7z8";

export const DEFAULT_PLANS: InsurancePlan[] = [
  {
    code: "1",
    nameVi: "Nhóm 1",
    nameEn: "Group 1",
    tierVi: "Cấp Lãnh đạo cao cấp (TGĐ / Phó TGĐ)",
    tierEn: "Executive Leadership (CEO / Deputy CEO)",
    annualFee: 0,
    scopeHealthVi: "Châu Á",
    scopeHealthEn: "Asia",
    scopeAccidentVi: "Toàn cầu",
    scopeAccidentEn: "Worldwide",
    accidentDeathLimit: "500.000.000 ₫/năm",
    accidentMedicalLimit: "300.000.000 ₫/năm (Toàn cầu)",
    accidentLeaveAllowanceEmployee: "1.000.000 ₫/ngày (Tối đa 60 ngày/năm - Chỉ áp dụng NV)",
    illnessDeathLimit: "500.000.000 ₫/năm",
    inpatientTotalLimit: "630.000.000 ₫/năm",
    hospitalizationSubLimit: "210.000.000 ₫/năm",
    roomBoardEmployeeLimit: "25.000.000 ₫/ngày",
    roomBoardDependentLimit: "15.000.000 ₫/ngày",
    surgeryLimit: "210.000.000 ₫/năm",
    prePostHospitalLimit: "12.500.000 ₫/năm",
    normalDeliveryLimit: "25.000.000 ₫/năm",
    cSectionDeliveryLimit: "35.000.000 ₫/năm",
    outpatientTotalLimit: "60.000.000 ₫/năm",
    outpatientPerVisitLimitVi: "Không giới hạn số tiền/lần khám",
    outpatientPerVisitLimitEn: "Unlimited per visit",
    dentalLimit: "12.000.000 ₫/năm",
    prenatalCheckupLimit: "4.000.000 ₫/năm",
    physiotherapyLimit: "600.000 ₫/ngày",
    accidentLimit: "500.000.000 ₫ (YT: 300.000.000 ₫)",
    inpatientLimit: "630.000.000 ₫/năm",
    outpatientLimit: "60.000.000 ₫/năm",
    maternityLimitVi: "Sinh thường 25tr · Sinh mổ 35tr",
    maternityLimitEn: "Normal 25M · C-Section 35M VND",
  },
  {
    code: "2",
    nameVi: "Nhóm 2",
    nameEn: "Group 2",
    tierVi: "Cấp CBQL (HRL13+ / Trưởng, Phó phòng)",
    tierEn: "Management Level (HRL13+ / Dept Heads)",
    annualFee: 0,
    scopeHealthVi: "Việt Nam",
    scopeHealthEn: "Vietnam",
    scopeAccidentVi: "Toàn cầu",
    scopeAccidentEn: "Worldwide",
    accidentDeathLimit: "300.000.000 ₫/năm",
    accidentMedicalLimit: "250.000.000 ₫/năm (Toàn cầu)",
    accidentLeaveAllowanceEmployee: "500.000 ₫/ngày (Tối đa 60 ngày/năm - Chỉ áp dụng NV)",
    illnessDeathLimit: "300.000.000 ₫/năm",
    inpatientTotalLimit: "450.000.000 ₫/năm",
    hospitalizationSubLimit: "150.000.000 ₫/năm",
    roomBoardEmployeeLimit: "7.500.000 ₫/ngày",
    roomBoardDependentLimit: "7.500.000 ₫/ngày",
    surgeryLimit: "150.000.000 ₫/năm",
    prePostHospitalLimit: "7.500.000 ₫/năm",
    normalDeliveryLimit: "20.000.000 ₫/năm",
    cSectionDeliveryLimit: "30.000.000 ₫/năm",
    outpatientTotalLimit: "19.000.000 ₫/năm",
    outpatientPerVisitLimitVi: "Không giới hạn số tiền/lần khám",
    outpatientPerVisitLimitEn: "Unlimited per visit",
    dentalLimit: "5.100.000 ₫/năm",
    prenatalCheckupLimit: "2.000.000 ₫/năm",
    physiotherapyLimit: "200.000 ₫/ngày",
    accidentLimit: "300.000.000 ₫ (YT: 250.000.000 ₫)",
    inpatientLimit: "450.000.000 ₫/năm",
    outpatientLimit: "19.000.000 ₫/năm",
    maternityLimitVi: "Sinh thường 20tr · Sinh mổ 30tr",
    maternityLimitEn: "Normal 20M · C-Section 30M VND",
  },
  {
    code: "3",
    nameVi: "Nhóm 3",
    nameEn: "Group 3",
    tierVi: "Cấp Nhân viên",
    tierEn: "Staff / Employee Level",
    annualFee: 0,
    scopeHealthVi: "Việt Nam",
    scopeHealthEn: "Vietnam",
    scopeAccidentVi: "Tử vong: Toàn cầu · Y tế: Việt Nam",
    scopeAccidentEn: "Death: Worldwide · Medical: Vietnam",
    accidentDeathLimit: "210.000.000 ₫/năm",
    accidentMedicalLimit: "210.000.000 ₫/năm (Việt Nam)",
    accidentLeaveAllowanceEmployee: "300.000 ₫/ngày (Tối đa 60 ngày/năm - Chỉ áp dụng NV)",
    illnessDeathLimit: "210.000.000 ₫/năm",
    inpatientTotalLimit: "315.000.000 ₫/năm",
    hospitalizationSubLimit: "105.000.000 ₫/năm",
    roomBoardEmployeeLimit: "5.250.000 ₫/ngày",
    roomBoardDependentLimit: "5.250.000 ₫/ngày",
    surgeryLimit: "105.000.000 ₫/năm",
    prePostHospitalLimit: "5.250.000 ₫/năm",
    normalDeliveryLimit: "15.000.000 ₫/năm",
    cSectionDeliveryLimit: "25.000.000 ₫/năm",
    outpatientTotalLimit: "14.000.000 ₫/năm",
    outpatientPerVisitLimitVi: "Tối đa 3.700.000 ₫/lần khám",
    outpatientPerVisitLimitEn: "Up to 3,700,000 VND/visit",
    dentalLimit: "3.600.000 ₫/năm",
    prenatalCheckupLimit: "1.200.000 ₫/năm",
    physiotherapyLimit: "140.000 ₫/ngày",
    accidentLimit: "210.000.000 ₫ (YT: 210.000.000 ₫)",
    inpatientLimit: "315.000.000 ₫/năm",
    outpatientLimit: "14.000.000 ₫/năm",
    maternityLimitVi: "Sinh thường 15tr · Sinh mổ 25tr",
    maternityLimitEn: "Normal 15M · C-Section 25M VND",
  },
];

export const VIETTEL_DOCUMENTS: PortalDocumentItem[] = [
  {
    id: "so-tay-nhan-vien",
    titleVi: "Sổ tay Bảo hiểm Sức khỏe 2026–2027 — Dành cho NHÂN VIÊN",
    titleEn: "Health Insurance Handbook 2026–2027 — For EMPLOYEES",
    originalFileName: "SỔ TAY BHSK VIETTEL 2026 - NHÂN VIÊN.pdf",
    fileUrl: "/documents/so-tay-bhsk-viettel-2026-nhan-vien.pdf",
    fileFormat: "PDF",
    fileSize: "2.08 MB",
    pagesOrTypeVi: "46 trang · Tài liệu cốt lõi CBNV",
    pagesOrTypeEn: "46 pages · Core Employee Guide",
    audience: "employee",
    audienceLabelVi: "Dành cho Nhân viên",
    audienceLabelEn: "For Employees",
    category: "handbook",
    categoryLabelVi: "Sổ tay BHSK",
    categoryLabelEn: "Insurance Handbook",
    summaryVi:
      "Cẩm nang toàn diện dành riêng cho CBNV Viettel IDC: 6 điểm thay đổi mới 2026–2027, điều kiện tham gia, miễn thời gian chờ bệnh đặc biệt/có sẵn, chờ tỷ lệ thai sản (270/60 ngày), bảng quyền lợi Nhóm 1-2-3 (tiền giường Nhóm 1 tới 25 triệu/ngày), 15 mở rộng và hướng dẫn bồi thường.",
    summaryEn:
      "Comprehensive handbook for Viettel IDC Employees: 6 new policy upgrades for 2026–2027, waived waiting period for pre-existing/special diseases, pro-rata maternity waiting period, Group 1-2-3 benefit schedules (Group 1 room up to 25M/day), and 15 special extensions.",
    highlightsVi: [
      "Miễn thời gian chờ bệnh đặc biệt & có sẵn cho CBNV",
      "Sinh đẻ chờ tỷ lệ 270 ngày · Biến chứng thai sản chờ tỷ lệ 60 ngày",
      "Tiền giường Nhóm 1 tăng từ 15tr lên 25.000.000 VNĐ/ngày",
      "Trợ cấp nghỉ điều trị do tai nạn: 300k / 500k / 1 triệu VNĐ/ngày",
    ],
    highlightsEn: [
      "Waived waiting period for special & pre-existing conditions",
      "Pro-rata waiting period: 270 days childbirth / 60 days complications",
      "Group 1 Room & Board increased to 25,000,000 VND/day",
      "Accident medical leave allowance: 300k / 500k / 1M VND/day",
    ],
    keywords: [
      "sổ tay nhân viên",
      "cbnv",
      "quyền lợi nhân viên",
      "nhóm 1",
      "nhóm 2",
      "nhóm 3",
      "25 triệu",
      "thời gian chờ nhân viên",
      "chờ tỷ lệ",
      "employee handbook",
    ],
    isImportant: true,
  },
  {
    id: "so-tay-nguoi-than",
    titleVi: "Sổ tay Bảo hiểm Sức khỏe 2026–2027 — Dành cho NGƯỜI THÂN",
    titleEn: "Health Insurance Handbook 2026–2027 — For FAMILY DEPENDENTS",
    originalFileName: "SỔ TAY BHSK VIETTEL 2026 - NGƯỜI THÂN.pdf",
    fileUrl: "/documents/so-tay-bhsk-viettel-2026-nguoi-than.pdf",
    fileFormat: "PDF",
    fileSize: "1.81 MB",
    pagesOrTypeVi: "46 trang · Tài liệu cốt lõi Người thân",
    pagesOrTypeEn: "46 pages · Core Dependent Guide",
    audience: "dependent",
    audienceLabelVi: "Dành cho Người thân",
    audienceLabelEn: "For Family Dependents",
    category: "handbook",
    categoryLabelVi: "Sổ tay BHSK",
    categoryLabelEn: "Insurance Handbook",
    summaryVi:
      "Cẩm nang toàn diện dành riêng cho Người thân CBNV Viettel IDC (Bố/mẹ, Vợ/chồng, Con): Điều kiện tham gia & bổ sung giữa kỳ (vợ/chồng mới cưới, con mới sinh trong 45 ngày), quy định thời gian chờ, 5 điểm mở rộng mới 2026–2027, bảng quyền lợi Nhóm 1-2-3 (tiền giường Nhóm 1: 15 triệu/ngày) và hướng dẫn bồi thường.",
    summaryEn:
      "Dedicated handbook for Family Dependents of Viettel IDC Employees (Parents, Parents-in-law, Spouse, Children): Eligibility & mid-term addition rules, waiting periods, 5 new extensions for 2026–2027, Group 1-2-3 benefits (Group 1 room: 15M/day), and claim guides.",
    highlightsVi: [
      "Áp dụng cho Bố/mẹ hai bên, Vợ/chồng, Con cái hợp pháp (15 ngày – 18/25 tuổi)",
      "Thời gian chờ người mới: Bệnh đặc biệt/có sẵn 365 ngày · Sinh đẻ 270 ngày",
      "Miễn thời gian chờ nếu đã tham gia liên tục đủ 1 năm từ HĐ 2025–2026",
      "Tiền giường Nhóm 1: 15.000.000 VNĐ/ngày · Nhóm 2: 7,5tr · Nhóm 3: 5,25tr",
    ],
    highlightsEn: [
      "Covers Parents, Parents-in-law, Legal Spouse, Children (15 days – 18/25 yrs)",
      "New enrollee waiting period: 365d pre-existing · 270d childbirth",
      "Waiting period waived if continuously insured for 1 full year from 2025–2026",
      "Room & Board: Group 1 (15M/day) · Group 2 (7.5M/day) · Group 3 (5.25M/day)",
    ],
    keywords: [
      "sổ tay người thân",
      "người nhà",
      "gia đình",
      "vợ chồng",
      "con cái",
      "bố mẹ",
      "15 triệu",
      "thời gian chờ người thân",
      "dependent handbook",
      "family",
    ],
    isImportant: true,
  },
  {
    id: "claim-form-tvta",
    titleVi: "Giấy Yêu cầu Trả tiền Bảo hiểm (Claim Form Song ngữ Việt – Anh)",
    titleEn: "Insurance Claim Form (Bilingual Vietnamese – English)",
    originalFileName: "PJICO-Claimform-TVTA.doc",
    fileUrl: "/documents/PJICO-Claimform-TVTA.doc",
    fileFormat: "DOC",
    fileSize: "489 KB",
    pagesOrTypeVi: "File Word (.doc) · Mẫu đơn bắt buộc",
    pagesOrTypeEn: "Word (.doc) · Mandatory Claim Form",
    audience: "shared",
    audienceLabelVi: "Nhân viên & Người thân",
    audienceLabelEn: "Employees & Dependents",
    category: "forms",
    categoryLabelVi: "Biểu mẫu bồi thường",
    categoryLabelEn: "Claim Forms",
    summaryVi:
      "Mẫu Giấy yêu cầu trả tiền bảo hiểm sức khỏe song ngữ Việt – Anh chuẩn của PJICO. Dùng khi nộp hồ sơ bản cứng về văn phòng Bolttech Việt Nam (đối với hồ sơ từ 10 triệu VNĐ trở lên hoặc tai nạn/tử vong).",
    summaryEn:
      "Official PJICO bilingual Health Insurance Claim Form. Required when submitting hard-copy claims to Bolttech Vietnam offices (for claims >= 10,000,000 VND or accident/death cases).",
    highlightsVi: [
      "Song ngữ Việt – Anh, điền trực tiếp trên Word hoặc viết tay",
      "Trẻ em dưới 18 tuổi do Bố hoặc Mẹ ký tên người yêu cầu bồi thường",
      "Nhận tiền qua tài khoản ngân hàng của Người được bảo hiểm hoặc người ủy quyền",
    ],
    highlightsEn: [
      "Bilingual VI-EN format, editable in Microsoft Word",
      "Parents sign on behalf of insured children under 18",
      "Direct bank transfer reimbursement",
    ],
    keywords: [
      "giấy yêu cầu trả tiền bảo hiểm",
      "claim form",
      "mẫu đơn bồi thường",
      "đơn yêu cầu bồi thường",
      "word",
      "doc",
    ],
    isImportant: true,
  },
  {
    id: "bien-ban-tai-nan",
    titleVi: "Biên bản Tai nạn (Mẫu BM.22.2-03 của PJICO)",
    titleEn: "Accident Report Form (PJICO Form BM.22.2-03)",
    originalFileName: "PJICO-BM.22.2-03-Bien-ban-tai-nan.doc",
    fileUrl: "/documents/pjico-bm-22-2-03-bien-ban-tai-nan.doc",
    fileFormat: "DOC",
    fileSize: "161 KB",
    pagesOrTypeVi: "File Word (.doc) · Hồ sơ Tai nạn",
    pagesOrTypeEn: "Word (.doc) · Accident Claims",
    audience: "shared",
    audienceLabelVi: "Nhân viên & Người thân",
    audienceLabelEn: "Employees & Dependents",
    category: "forms",
    categoryLabelVi: "Biểu mẫu bồi thường",
    categoryLabelEn: "Claim Forms",
    summaryVi:
      "Mẫu Biên bản tai nạn chuẩn BM.22.2-03 của PJICO. Bắt buộc đính kèm khi yêu cầu bồi thường các chi phí y tế, thương tật hoặc nghỉ điều trị do nguyên nhân tai nạn (sinh hoạt, lao động, giao thông).",
    summaryEn:
      "Official PJICO Accident Report template (BM.22.2-03). Mandatory for all accident-related medical expense, disability, or medical leave allowance claims.",
    highlightsVi: [
      "Mô tả thời gian, địa điểm, nguyên nhân, diễn biến và hậu quả vụ tai nạn",
      "Xác nhận của cơ quan quản lý CBNV, chính quyền địa phương hoặc công an",
      "Kèm bản sao Giấy phép lái xe hợp lệ nếu tai nạn khi điều khiển xe > 50cc",
    ],
    highlightsEn: [
      "Details time, place, cause, and medical consequences of the accident",
      "Requires confirmation from employer, local authority, or police",
      "Attach valid Driver's License copy if operating a vehicle > 50cc",
    ],
    keywords: [
      "biên bản tai nạn",
      "bản tường trình tai nạn",
      "bm.22.2-03",
      "tai nạn giao thông",
      "tai nạn sinh hoạt",
      "accident report",
    ],
    isImportant: true,
  },
  {
    id: "danh-sach-bao-lanh",
    titleVi: "Danh sách 530 Cơ sở Y tế Bảo lãnh Viện phí Toàn quốc (Papaya & PJICO)",
    titleEn: "Direct Billing Hospital Network — 530 Facilities Nationwide",
    originalFileName: "DANH SÁCH CƠ SỞ Y TẾ BẢO LÃNH VIỆN PHÍ.pdf",
    fileUrl: "/documents/danh-sach-co-so-y-te-bao-lanh-vien-phi.pdf",
    fileFormat: "PDF",
    fileSize: "287 KB",
    pagesOrTypeVi: "39 trang · 530 Bệnh viện & Phòng khám",
    pagesOrTypeEn: "39 pages · 530 Hospitals & Clinics",
    audience: "shared",
    audienceLabelVi: "Nhân viên & Người thân",
    audienceLabelEn: "Employees & Dependents",
    category: "network_blacklist",
    categoryLabelVi: "Bảo lãnh & Blacklist",
    categoryLabelEn: "Network & Blacklist",
    summaryVi:
      "Danh sách cập nhật ngày 28/10/2026 gồm 530 bệnh viện, phòng khám, nha khoa bảo lãnh viện phí trực tiếp cho thẻ bảo hiểm PJICO – Papaya của CBNV và Người thân Viettel IDC trên toàn quốc (Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng, Cần Thơ, Bình Dương, Đồng Nai...).",
    summaryEn:
      "Updated 28/10/2026 list of 530 hospitals, clinics, and dental centers supporting cashless direct billing for Viettel IDC Employees and Dependents across Vietnam.",
    highlightsVi: [
      "530 cơ sở y tế tại Hà Nội, TP.HCM và các tỉnh thành toàn quốc",
      "Ghi rõ phạm vi bảo lãnh từng viện: Nội trú, Ngoại trú, Nha khoa, Thai sản",
      "Thời gian chờ bảo lãnh ngoại trú chỉ 15–30 phút, nội trú trong 24 giờ",
    ],
    highlightsEn: [
      "530 medical providers across Hanoi, HCMC, and nationwide provinces",
      "Specifies Inpatient, Outpatient, Dental, and Maternity direct billing scope",
      "Outpatient guarantee in 15–30 mins; Inpatient within 24 hours",
    ],
    keywords: [
      "bảo lãnh viện phí",
      "bệnh viện bảo lãnh",
      "phòng khám bảo lãnh",
      "530 cơ sở",
      "direct billing",
      "vinmec",
      "tâm anh",
      "hồng ngọc",
      "thu cúc",
      "nha khoa",
    ],
    isImportant: true,
  },
  {
    id: "blacklist-pjico",
    titleVi: "Danh sách Cơ sở Y tế Loại trừ / Từ chối Bảo hiểm của PJICO (Blacklist)",
    titleEn: "PJICO Blacklisted / Excluded Medical Facilities List",
    originalFileName: "Blacklist DANH SÁCH CÁC CƠ SỞ Y TẾ LOẠI TRỪ BẢO HIỂM CỦA PJICO.pdf",
    fileUrl: "/documents/blacklist-co-so-y-te-loai-tru-pjico.pdf",
    fileFormat: "PDF",
    fileSize: "302 KB",
    pagesOrTypeVi: "6 trang · Cảnh báo bắt buộc kiểm tra",
    pagesOrTypeEn: "6 pages · Mandatory Check Before Visit",
    audience: "shared",
    audienceLabelVi: "Nhân viên & Người thân",
    audienceLabelEn: "Employees & Dependents",
    category: "network_blacklist",
    categoryLabelVi: "Bảo lãnh & Blacklist",
    categoryLabelEn: "Network & Blacklist",
    summaryVi:
      "Danh sách các cơ sở y tế tại Miền Bắc và Miền Nam bị PJICO từ chối chi trả bảo hiểm toàn bộ hoặc chỉ chi trả khi có BHYT thanh toán. Bao gồm bản cập nhật mới nhất áp dụng từ ngày 12/08/2026 (bổ sung PK YHCT Hương Sen Healthcare Tân Bình và 3 cơ sở Lá Trà).",
    summaryEn:
      "List of medical facilities in Northern and Southern Vietnam excluded from PJICO insurance reimbursement (or only covered when combined with state Social Health Insurance). Includes the latest 12/08/2026 update.",
    highlightsVi: [
      "Kiểm tra kỹ trước khi đi khám để tránh bị từ chối bồi thường",
      "Phân biệt rõ cơ sở Từ chối toàn bộ vs Chỉ chi trả khi kèm BHYT",
      "Cập nhật mới nhất từ 12/08/2026 thêm 4 cơ sở tại TP. Hồ Chí Minh",
    ],
    highlightsEn: [
      "Must check before visiting a clinic to avoid claim rejection",
      "Distinguishes full exclusion vs covered only with Social Health Insurance (BHYT)",
      "Includes 4 newly added facilities in HCMC effective 12/08/2026",
    ],
    keywords: [
      "blacklist",
      "danh sách đen",
      "từ chối bảo hiểm",
      "cơ sở y tế loại trừ",
      "hương sen",
      "lá trà",
      "không thanh toán",
    ],
    isWarning: true,
    isImportant: true,
  },
  {
    id: "huong-dan-cai-dat-papaya",
    titleVi: "Hướng dẫn Cài đặt & Đăng nhập Ứng dụng Papaya Care",
    titleEn: "Papaya Care App Installation & Login Guide",
    originalFileName: "Hướng dẫn cài đặt app Papaya.pdf",
    fileUrl: "/documents/huong-dan-cai-dat-app-papaya.pdf",
    fileFormat: "PDF",
    fileSize: "253 KB",
    pagesOrTypeVi: "4 trang · Cài đặt & Đăng nhập OTP",
    pagesOrTypeEn: "4 pages · Setup & OTP Login",
    audience: "shared",
    audienceLabelVi: "Nhân viên & Người thân",
    audienceLabelEn: "Employees & Dependents",
    category: "papaya_app",
    categoryLabelVi: "Ứng dụng Papaya Care",
    categoryLabelEn: "Papaya Care App",
    summaryVi:
      "Hướng dẫn từng bước tải ứng dụng Papaya Care trên iOS (App Store) và Android (Google Play) qua mã QR hoặc link onelink.to/papaya_care, cách đăng nhập lần đầu bằng Số CCCD / Email / Số điện thoại và xác thực mã OTP.",
    summaryEn:
      "Step-by-step guide to downloading the Papaya Care mobile app on iOS and Android, logging in with your National ID (CCCD) / Email / Phone number, and verifying via OTP.",
    highlightsVi: [
      "Link tải nhanh: http://onelink.to/papaya_care (iOS 11+ & Android 6.0+)",
      "Đăng nhập nhanh bằng Số CCCD (không cần mật khẩu, nhận OTP qua SMS/Email)",
      "Trường hợp không đăng nhập được: gọi Hotline Papaya 1900 252 570",
    ],
    highlightsEn: [
      "Direct download link: http://onelink.to/papaya_care",
      "Passwordless login using National ID (CCCD) + OTP code",
      "Support Hotline: 1900 252 570 | Email: healthcare@papaya.asia",
    ],
    keywords: [
      "cài đặt app papaya",
      "tải app papaya",
      "papaya care",
      "đăng nhập papaya",
      "otp",
      "cccd",
      "thẻ bảo hiểm điện tử",
    ],
  },
  {
    id: "huong-dan-su-dung-papaya",
    titleVi: "Hướng dẫn Sử dụng Ứng dụng Papaya Care (Nộp Bồi thường Online < 10 triệu)",
    titleEn: "Papaya Care User Manual (Online Claim Submission < 10M VND)",
    originalFileName: "Hướng dẫn sử dụng app Papaya.pdf",
    fileUrl: "/documents/huong-dan-su-dung-app-papaya.pdf",
    fileFormat: "PDF",
    fileSize: "996 KB",
    pagesOrTypeVi: "23 trang · Cẩm nang sử dụng App",
    pagesOrTypeEn: "23 pages · Full App User Guide",
    audience: "shared",
    audienceLabelVi: "Nhân viên & Người thân",
    audienceLabelEn: "Employees & Dependents",
    category: "papaya_app",
    categoryLabelVi: "Ứng dụng Papaya Care",
    categoryLabelEn: "Papaya Care App",
    summaryVi:
      "Hướng dẫn chi tiết 6 tính năng trên ứng dụng Papaya Care: Xem Thẻ bảo hiểm điện tử (cho bản thân & người phụ thuộc), Tra cứu quyền lợi & hạn mức còn lại, Gửi yêu cầu bồi thường online (hồ sơ dưới 10 triệu VNĐ), Bổ sung chứng từ, Xem lịch sử bồi thường và Tìm kiếm CSYT bảo lãnh.",
    summaryEn:
      "Full 23-page visual guide to using Papaya Care: Viewing e-Insurance Cards (self & dependents), checking remaining benefit limits, submitting online claims (< 10M VND), uploading additional documents, tracking claim status, and locating direct billing hospitals.",
    highlightsVi: [
      "Nộp hồ sơ bồi thường online cho yêu cầu dưới 10.000.000 VNĐ (trừ Tai nạn/Tử vong)",
      "Chuyển đổi xem thẻ và nộp hồ sơ cho Người thân/Con cái ngay trên cùng 1 tài khoản",
      "Theo dõi tiến độ xử lý hồ sơ và bổ sung chứng từ trực tiếp trên điện thoại",
    ],
    highlightsEn: [
      "Submit online claims for requests under 10,000,000 VND (except Accident/Death)",
      "Manage both Employee and Dependent e-cards and claims in one account",
      "Real-time claim tracking and instant document upload",
    ],
    keywords: [
      "hướng dẫn sử dụng app papaya",
      "nộp bồi thường online",
      "dưới 10 triệu",
      "papaya care",
      "bổ sung chứng từ",
      "thẻ bảo hiểm người phụ thuộc",
    ],
  },
  {
    id: "quy-tac-384-suc-khoe",
    titleVi: "Quy tắc Bảo hiểm Sức khỏe Toàn diện PJICO (Quyết định 384/2025/QĐ/TGĐ)",
    titleEn: "PJICO Comprehensive Health Insurance Policy Rules (Decision 384/2025)",
    originalFileName: "PJICO-Quy-tac-384-Bao-hiem-suc-khoe.pdf",
    fileUrl: "/documents/PJICO-Quy-tac-384-Bao-hiem-suc-khoe.pdf",
    fileFormat: "PDF",
    fileSize: "7.70 MB",
    pagesOrTypeVi: "21 trang · Quy tắc Bảo hiểm Sức khỏe",
    pagesOrTypeEn: "21 pages · Health Insurance Rules",
    audience: "shared",
    audienceLabelVi: "Nhân viên & Người thân",
    audienceLabelEn: "Employees & Dependents",
    category: "rules_exclusions",
    categoryLabelVi: "Quy tắc & Loại trừ PJICO",
    categoryLabelEn: "PJICO Rules & Exclusions",
    summaryVi:
      "Toàn văn Quy tắc Bảo hiểm Sức khỏe Toàn diện của Tổng Công ty Cổ phần Bảo hiểm Petrolimex (PJICO) ban hành theo Quyết định số 384/2025/QĐ/TGĐ ngày 30/06/2025: Định nghĩa thuật ngữ y khoa, phạm vi bảo hiểm gốc, thủ tục giải quyết quyền lợi và quy định pháp lý.",
    summaryEn:
      "Full official PJICO Comprehensive Health Insurance Policy Wording issued under Decision No. 384/2025/QĐ/TGĐ dated 30/06/2025: Medical definitions, base coverage scope, claim settlement terms, and legal provisions.",
    highlightsVi: [
      "Ban hành kèm Quyết định số 384/2025/QĐ/TGĐ ngày 30/06/2025 của TGĐ PJICO",
      "Giải thích chi tiết các định nghĩa: Bệnh đặc biệt, Bệnh có sẵn, Vật tư y tế...",
      "Làm căn cứ pháp lý chuẩn kết hợp với các điều khoản mở rộng riêng của Viettel IDC",
    ],
    highlightsEn: [
      "Issued under PJICO Decision No. 384/2025/QĐ/TGĐ dated 30/06/2025",
      "Detailed definitions of Pre-existing conditions, Special diseases, Medical supplies",
      "Base policy wording complemented by Viettel IDC's custom extensions",
    ],
    keywords: [
      "quy tắc 384",
      "quy tắc bảo hiểm sức khỏe",
      "384/2025",
      "pjico",
      "định nghĩa bệnh đặc biệt",
      "bệnh có sẵn",
    ],
  },
  {
    id: "quy-tac-383-tai-nan",
    titleVi: "Quy tắc Bảo hiểm Tai nạn Con người PJICO (Quyết định 383/2025/QĐ/TGĐ)",
    titleEn: "PJICO Personal Accident Insurance Policy Rules (Decision 383/2025)",
    originalFileName: "PJICO - Quy-tac-383-Bao-hiem-tai-nan.pdf",
    fileUrl: "/documents/pjico-quy-tac-383-bao-hiem-tai-nan.pdf",
    fileFormat: "PDF",
    fileSize: "5.69 MB",
    pagesOrTypeVi: "16 trang · Quy tắc Bảo hiểm Tai nạn",
    pagesOrTypeEn: "16 pages · Personal Accident Rules",
    audience: "shared",
    audienceLabelVi: "Nhân viên & Người thân",
    audienceLabelEn: "Employees & Dependents",
    category: "rules_exclusions",
    categoryLabelVi: "Quy tắc & Loại trừ PJICO",
    categoryLabelEn: "PJICO Rules & Exclusions",
    summaryVi:
      "Toàn văn Quy tắc Bảo hiểm Tai nạn Con người của PJICO ban hành theo Quyết định số 383/2025/QĐ/TGĐ ngày 30/06/2025, bao gồm Phụ lục Bảng tỷ lệ trả tiền bảo hiểm thương tật bộ phận/toàn bộ vĩnh viễn.",
    summaryEn:
      "Full official PJICO Personal Accident Insurance Policy Wording issued under Decision No. 383/2025/QĐ/TGĐ dated 30/06/2025, including the Permanent Disability Percentage Payout Schedule.",
    highlightsVi: [
      "Ban hành kèm Quyết định số 383/2025/QĐ/TGĐ ngày 30/06/2025 của TGĐ PJICO",
      "Đính kèm Bảng tỷ lệ trả tiền bảo hiểm thương tật do tai nạn",
      "Quy định chi tiết về phạm vi tai nạn sinh hoạt, lao động, giao thông",
    ],
    highlightsEn: [
      "Issued under PJICO Decision No. 383/2025/QĐ/TGĐ dated 30/06/2025",
      "Includes the official Permanent Disability Percentage Schedule",
      "Covers daily life, occupational, and traffic accidents",
    ],
    keywords: [
      "quy tắc 383",
      "quy tắc bảo hiểm tai nạn",
      "383/2025",
      "bảng tỷ lệ thương tật",
      "pjico",
    ],
  },
  {
    id: "loai-tru-bh-suc-khoe",
    titleVi: "Điểm Loại trừ Bảo hiểm Sức khỏe (Trích Chương III Quy tắc 384 PJICO)",
    titleEn: "Health Insurance Exclusions (Chapter III of PJICO Rule 384)",
    originalFileName: "Loại trừ BH Sức khỏe.pdf",
    fileUrl: "/documents/loai-tru-bh-suc-khoe.pdf",
    fileFormat: "PDF",
    fileSize: "997 KB",
    pagesOrTypeVi: "2 trang · 22 Điểm loại trừ Sức khỏe",
    pagesOrTypeEn: "2 pages · 22 Health Exclusion Clauses",
    audience: "shared",
    audienceLabelVi: "Nhân viên & Người thân",
    audienceLabelEn: "Employees & Dependents",
    category: "rules_exclusions",
    categoryLabelVi: "Quy tắc & Loại trừ PJICO",
    categoryLabelEn: "PJICO Rules & Exclusions",
    summaryVi:
      "Bản trích lục nhanh 22 điểm loại trừ trách nhiệm bảo hiểm sức khỏe tại Chương III Quy tắc 384/2025 của PJICO (Lưu ý: Một số điểm trong quy tắc chuẩn như Vitamin, Nước muối sinh lý, Mụn/rụng tóc/nám da điều trị y tế đã được mở rộng riêng trong Hợp đồng Viettel IDC).",
    summaryEn:
      "Quick-reference 2-page extract of the 22 Health Insurance Exclusion clauses from Chapter III of PJICO Rule 384/2025 (Note: Several standard exclusions such as therapeutic vitamins, saline nasal sprays, and medical acne/hair loss treatment are specially covered under Viettel IDC's 15 extensions).",
    highlightsVi: [
      "Tổng hợp ngắn gọn 22 khoản loại trừ bảo hiểm sức khỏe cần nắm rõ",
      "Đối chiếu với 15 Quyền lợi mở rộng của Viettel IDC để biết các mục được ưu đãi chi trả",
    ],
    highlightsEn: [
      "Concise summary of 22 standard health insurance exclusions",
      "Cross-reference with Viettel IDC's 15 Special Extensions for overridden benefits",
    ],
    keywords: [
      "loại trừ bảo hiểm sức khỏe",
      "điều khoản loại trừ",
      "không bảo hiểm",
      "22 điểm loại trừ",
      "health exclusions",
    ],
  },
  {
    id: "loai-tru-bh-tai-nan",
    titleVi: "Điểm Loại trừ Bảo hiểm Tai nạn (Trích Chương III Quy tắc 383 PJICO)",
    titleEn: "Personal Accident Insurance Exclusions (Chapter III of PJICO Rule 383)",
    originalFileName: "Loại trừ BH Tai nạn.pdf",
    fileUrl: "/documents/loai-tru-bh-tai-nan.pdf",
    fileFormat: "PDF",
    fileSize: "1.08 MB",
    pagesOrTypeVi: "2 trang · 24 Điểm loại trừ Tai nạn",
    pagesOrTypeEn: "2 pages · 24 Accident Exclusion Clauses",
    audience: "shared",
    audienceLabelVi: "Nhân viên & Người thân",
    audienceLabelEn: "Employees & Dependents",
    category: "rules_exclusions",
    categoryLabelVi: "Quy tắc & Loại trừ PJICO",
    categoryLabelEn: "PJICO Rules & Exclusions",
    summaryVi:
      "Bản trích lục nhanh 24 điểm loại trừ trách nhiệm bảo hiểm tai nạn tại Chương III Quy tắc 383/2025 của PJICO (vi phạm nồng độ cồn, không có GPLX hợp lệ, đánh nhau, thể thao mạo hiểm, ngộ độc thức ăn/đồ uống...).",
    summaryEn:
      "Quick-reference 2-page extract of the 24 Personal Accident Exclusion clauses from Chapter III of PJICO Rule 383/2025 (alcohol/drug violation, driving without valid license, fighting, extreme sports, food poisoning, etc.).",
    highlightsVi: [
      "Tổng hợp 24 điểm loại trừ bảo hiểm tai nạn con người",
      "Lưu ý: Đinh, nẹp, vis, đĩa đệm, chốt treo do tai nạn đã được Viettel IDC mở rộng chi trả 80/20",
    ],
    highlightsEn: [
      "Summary of 24 personal accident exclusion clauses",
      "Note: Surgical pins, plates, screws, and discs due to accidents are specially covered 80/20 for Viettel IDC",
    ],
    keywords: [
      "loại trừ bảo hiểm tai nạn",
      "24 điểm loại trừ",
      "nồng độ cồn",
      "giấy phép lái xe",
      "accident exclusions",
    ],
  },
];

export const SHEET_HEADERS = [
  "Mã Hồ Sơ",
  "Thời Gian Ghi Nhận",
  "Hợp Đồng",
  "Họ Tên CBNV",
  "Mã NV / Phòng Ban",
  "Số Điện Thoại",
  "Email",
  "Đối Tượng (NV / Người Thân)",
  "Mối Quan Hệ",
  "Giới Tính",
  "Tuổi",
  "Ngày Sinh / CCCD",
  "Nhóm Chương Trình (Nhóm 1/2/3)",
  "Hạn Mức Nội Trú",
  "Hạn Mức Ngoại Trú",
  "Trạng Thái / Ghi Chú",
];

export function registrationToSheetRows(reg: FamilyRegistration): (string | number)[][] {
  return reg.dependents.map((dep) => [
    reg.id,
    new Date(reg.createdAt).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
    reg.policyNumber,
    reg.employeeName,
    reg.employeeCode || "",
    reg.employeePhone,
    reg.employeeEmail,
    "Người thân",
    dep.relationship,
    dep.gender,
    dep.age,
    dep.dobOrId || "",
    `Nhóm ${dep.plan}`,
    dep.plan === "1" ? "630.000.000 ₫" : dep.plan === "2" ? "450.000.000 ₫" : "315.000.000 ₫",
    dep.plan === "1" ? "60.000.000 ₫" : dep.plan === "2" ? "19.000.000 ₫" : "14.000.000 ₫",
    "Đã thu xếp",
  ]);
}
