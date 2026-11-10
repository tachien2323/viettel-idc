"use client";

import React, { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { InsurancePlan, PlanCode, TargetAudience } from "@/lib/types";
import {
  ShieldAlert,
  Hospital,
  Baby,
  Stethoscope,
  Sparkles,
  UserCheck,
  Users,
  Download,
} from "lucide-react";

interface BenefitsSectionProps {
  plans: InsurancePlan[];
  targetAudience: TargetAudience;
  onChangeAudience: (audience: TargetAudience) => void;
}

type BenefitTab = "overview" | "inpatient" | "maternity" | "outpatient" | "extensions";

interface BenefitRowData {
  labelVi: string;
  labelEn: string;
  subVi?: string;
  subEn?: string;
  g1: string;
  g2: string;
  g3: string;
  highlight?: boolean;
  diffBadgeVi?: string;
  diffBadgeEn?: string;
}

export function BenefitsSection({
  plans,
  targetAudience,
  onChangeAudience,
}: BenefitsSectionProps) {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<BenefitTab>("overview");

  const getPlan = (code: PlanCode) =>
    plans.find((p) => p.code === code) || plans[0];
  const group1 = getPlan("1");
  const group2 = getPlan("2");
  const group3 = getPlan("3");

  const roomBoardG1 =
    targetAudience === "employee"
      ? "25.000.000 ₫/ngày"
      : "15.000.000 ₫/ngày";

  const roomBoardG1En =
    targetAudience === "employee"
      ? "25,000,000 VND/day"
      : "15,000,000 VND/day";

  const accidentLeaveG1 =
    targetAudience === "dependent"
      ? lang === "vi"
        ? "Không áp dụng (Chỉ áp dụng cho Nhân viên: 1.000.000 ₫/ngày)"
        : "Not applicable (Employees only: 1,000,000 VND/day)"
      : "1.000.000 ₫/ngày (Chỉ áp dụng Nhân viên)";

  const accidentLeaveG2 =
    targetAudience === "dependent"
      ? lang === "vi"
        ? "Không áp dụng (Chỉ áp dụng cho Nhân viên: 500.000 ₫/ngày)"
        : "Not applicable (Employees only: 500,000 VND/day)"
      : "500.000 ₫/ngày (Chỉ áp dụng Nhân viên)";

  const accidentLeaveG3 =
    targetAudience === "dependent"
      ? lang === "vi"
        ? "Không áp dụng (Chỉ áp dụng cho Nhân viên: 300.000 ₫/ngày)"
        : "Not applicable (Employees only: 300,000 VND/day)"
      : "300.000 ₫/ngày (Chỉ áp dụng Nhân viên)";

  const overviewRows: BenefitRowData[] = [
    {
      labelVi: "I. Tử vong hoặc Thương tật toàn bộ vĩnh viễn do Tai nạn",
      labelEn: "I. Accidental Death or Total Permanent Disability",
      subVi: "Phạm vi địa lý: Toàn cầu (Thương tật bộ phận vĩnh viễn trả % theo Bảng tỷ lệ thương tật)",
      subEn: "Geographical scope: Worldwide (Partial permanent disability paid per schedule %)",
      g1: group1?.accidentDeathLimit || "500.000.000 ₫/năm",
      g2: group2?.accidentDeathLimit || "300.000.000 ₫/năm",
      g3: group3?.accidentDeathLimit || "210.000.000 ₫/năm",
      highlight: true,
    },
    {
      labelVi: "II. Chi phí y tế do Tai nạn (Nội trú & Ngoại trú)",
      labelEn: "II. Accidental Medical Expenses (Inpatient & Outpatient)",
      subVi: "Nhóm 1 & 2: Toàn cầu · Nhóm 3: Việt Nam",
      subEn: "Groups 1 & 2: Worldwide · Group 3: Vietnam",
      g1: group1?.accidentMedicalLimit || "300.000.000 ₫/năm (Toàn cầu)",
      g2: group2?.accidentMedicalLimit || "250.000.000 ₫/năm (Toàn cầu)",
      g3: group3?.accidentMedicalLimit || "210.000.000 ₫/năm (Việt Nam)",
      highlight: true,
    },
    {
      labelVi: "Trợ cấp nằm viện do tai nạn khi dùng BHYT thanh toán >= 70%",
      labelEn: "Hospital Cash Allowance (Accident) when BHYT pays >= 70%",
      g1: "400.000 ₫/ngày",
      g2: "350.000 ₫/ngày",
      g3: "210.000 ₫/ngày",
    },
    {
      labelVi: "Trợ cấp nghỉ điều trị tai nạn theo chỉ định Bác sĩ (Tối đa 60 ngày/năm)",
      labelEn: "Accident Medical Leave Allowance prescribed by Doctor (Max 60 days/yr)",
      subVi: "Lưu ý: Quyền lợi này chỉ áp dụng đối với Cán bộ nhân viên",
      subEn: "Note: Applicable exclusively to Employees",
      g1: accidentLeaveG1,
      g2: accidentLeaveG2,
      g3: accidentLeaveG3,
      diffBadgeVi: "Chỉ áp dụng NV",
      diffBadgeEn: "Staff Only",
    },
    {
      labelVi: "Nha khoa cấp cứu / Thai sản cấp cứu / Vật lý trị liệu nội trú do tai nạn",
      labelEn: "Emergency Dental / Maternity / Inpatient Physiotherapy due to Accident",
      subVi: "Chi trả theo chi phí thực tế, tối đa đến Số tiền bảo hiểm Chi phí y tế tai nạn",
      subEn: "Reimbursed at actual cost up to the Accidental Medical limit",
      g1: "Chi trả thực tế tối đa 300.000.000 ₫",
      g2: "Chi trả thực tế tối đa 250.000.000 ₫",
      g3: "Chi trả thực tế tối đa 210.000.000 ₫",
    },
    {
      labelVi: "Vận chuyển cấp cứu do tai nạn (Xe cứu thương hoặc Taxi)",
      labelEn: "Emergency Ambulance / Taxi Transport (Accident)",
      subVi: "Loại trừ đường hàng không; Chi phí taxi tối đa 500.000 ₫/người/năm",
      subEn: "Excludes air ambulance; Taxi capped at 500,000 VND/person/year",
      g1: "Chi trả thực tế (Taxi tối đa 500.000 ₫/năm)",
      g2: "Chi trả thực tế (Taxi tối đa 500.000 ₫/năm)",
      g3: "Chi trả thực tế (Taxi tối đa 500.000 ₫/năm)",
    },
    {
      labelVi: "Hỗ trợ giáo dục / người con (Tối đa 02 con hợp pháp dưới 18 tuổi)",
      labelEn: "Education Support per Child (Max 2 children < 18 yrs if Employee dies by accident)",
      subVi: "Áp dụng khi bố/mẹ là Nhân viên tử vong do tai nạn",
      subEn: "Applies if insured Employee parent passes away due to an accident",
      g1: "10.000.000 ₫/năm",
      g2: "8.000.000 ₫/năm",
      g3: "5.000.000 ₫/năm",
    },
    {
      labelVi: "Chi phí mai táng trong trường hợp tử vong do tai nạn",
      labelEn: "Accidental Death Burial Allowance",
      g1: "5.000.000 ₫/năm",
      g2: "4.000.000 ₫/năm",
      g3: "3.000.000 ₫/năm",
    },
  ];

  const inpatientRows: BenefitRowData[] = [
    {
      labelVi: "1. Tử vong / TTTBVV do ốm bệnh, thai sản",
      labelEn: "1. Death / Total Permanent Disability due to Illness or Maternity",
      subVi: "Tử vong không rõ nguyên nhân (trừ tai nạn): Nhóm 1: 170tr · Nhóm 2: 100tr · Nhóm 3: 70tr",
      subEn: "Death of unknown cause (excl. accident): Group 1: 170M · Group 2: 100M · Group 3: 70M VND",
      g1: group1?.illnessDeathLimit || "500.000.000 ₫/năm",
      g2: group2?.illnessDeathLimit || "300.000.000 ₫/năm",
      g3: group3?.illnessDeathLimit || "210.000.000 ₫/năm",
    },
    {
      labelVi: "2. TỔNG HẠN MỨC ĐIỀU TRỊ NỘI TRÚ & PHẪU THUẬT DO ỐM BỆNH, THAI SẢN",
      labelEn: "2. TOTAL INPATIENT & SURGERY LIMIT (ILLNESS & MATERNITY)",
      subVi: "Phạm vi địa lý: Nhóm 1: Châu Á · Nhóm 2 & Nhóm 3: Việt Nam",
      subEn: "Geographical scope: Group 1: Asia · Groups 2 & 3: Vietnam",
      g1: group1?.inpatientTotalLimit || "630.000.000 ₫/năm (Châu Á)",
      g2: group2?.inpatientTotalLimit || "450.000.000 ₫/năm (Việt Nam)",
      g3: group3?.inpatientTotalLimit || "315.000.000 ₫/năm (Việt Nam)",
      highlight: true,
    },
    {
      labelVi: "2.1 Chi phí nằm viện (Bao gồm cả điều trị trong ngày & chi phí BV tổng hợp)",
      labelEn: "2.1 Hospitalization Expenses (Including Day-Care & General Hospital Charges)",
      g1: group1?.hospitalizationSubLimit || "210.000.000 ₫/năm",
      g2: group2?.hospitalizationSubLimit || "150.000.000 ₫/năm",
      g3: group3?.hospitalizationSubLimit || "105.000.000 ₫/năm",
    },
    {
      labelVi: "Viện phí & Tiền phòng đơn tiêu chuẩn (Tối đa 60 ngày/năm)",
      labelEn: "Room & Board — Standard Single Room (Max 60 days/year)",
      g1: lang === "vi" ? roomBoardG1 : roomBoardG1En,
      g2: group2?.roomBoardEmployeeLimit || "7.500.000 ₫/ngày",
      g3: group3?.roomBoardEmployeeLimit || "5.250.000 ₫/ngày",
      highlight: true,
    },
    {
      labelVi: "Phòng chăm sóc đặc biệt (ICU) (Không giới hạn số ngày nằm viện)",
      labelEn: "Intensive Care Unit (ICU) (Unlimited days)",
      g1: "210.000.000 ₫/năm",
      g2: "150.000.000 ₫/năm",
      g3: "105.000.000 ₫/năm",
    },
    {
      labelVi: "2.2 Chi phí Phẫu thuật (Nội trú, trong ngày, ngoại trú, thủ thuật nội trú, cấy ghép nội tạng)",
      labelEn: "2.2 Surgery Expenses (Inpatient, Day-care, Outpatient Surgery & Organ Transplant)",
      g1: group1?.surgeryLimit || "210.000.000 ₫/năm",
      g2: group2?.surgeryLimit || "150.000.000 ₫/năm",
      g3: group3?.surgeryLimit || "105.000.000 ₫/năm",
    },
    {
      labelVi: "2.3 Điều trị cấp cứu khẩn cấp nguy kịch tính mạng",
      labelEn: "2.3 Life-Threatening Emergency Treatment",
      g1: "210.000.000 ₫/năm",
      g2: "150.000.000 ₫/năm",
      g3: "105.000.000 ₫/năm",
    },
    {
      labelVi: "2.4 Chi phí xe cứu thương đường bộ tại Việt Nam (Taxi tối đa 500.000 ₫/vụ)",
      labelEn: "2.4 Ground Ambulance in Vietnam (Taxi up to 500,000 VND/case)",
      g1: "210.000.000 ₫/năm",
      g2: "150.000.000 ₫/năm",
      g3: "105.000.000 ₫/năm",
    },
    {
      labelVi: "2.5 Trợ cấp nằm viện tại BV công và có dùng BHYT thanh toán > 50% (Tối đa 60 ngày/năm)",
      labelEn: "2.5 Public Hospital Cash Allowance when BHYT pays > 50% (Max 60 days/yr)",
      g1: "500.000 ₫/ngày",
      g2: "400.000 ₫/ngày",
      g3: "300.000 ₫/ngày",
    },
    {
      labelVi: "2.6 Chi phí khám/xét nghiệm trong vòng 30 ngày ngay trước khi nhập viện",
      labelEn: "2.6 Pre-Hospitalization Expenses (within 30 days prior to admission)",
      g1: group1?.prePostHospitalLimit || "12.500.000 ₫/năm",
      g2: group2?.prePostHospitalLimit || "7.500.000 ₫/năm",
      g3: group3?.prePostHospitalLimit || "5.250.000 ₫/năm",
    },
    {
      labelVi: "2.7 Chi phí điều trị trong vòng 30 ngày ngay sau khi xuất viện",
      labelEn: "2.7 Post-Hospitalization Expenses (within 30 days after discharge)",
      g1: "12.500.000 ₫/năm",
      g2: "7.500.000 ₫/năm",
      g3: "5.250.000 ₫/năm",
    },
    {
      labelVi: "2.8 Chi phí y tá chăm sóc tại nhà ngay sau khi xuất viện (Tối đa 30 ngày/năm)",
      labelEn: "2.8 Home Nursing Care after Discharge (Max 30 days/year)",
      g1: "12.500.000 ₫/năm",
      g2: "7.500.000 ₫/năm",
      g3: "5.250.000 ₫/năm",
    },
    {
      labelVi: "2.9 Trợ cấp mai táng (Tử vong tại bệnh viện) & 2.10 Phục hồi chức năng",
      labelEn: "2.9 Hospital Death Burial Allowance & 2.10 Rehabilitation",
      subVi: "Mai táng: 5tr / 4tr / 3tr · Phục hồi chức năng tối đa: 12,5tr / 7,5tr / 5,25tr/ngày",
      subEn: "Burial: 5M / 4M / 3M · Rehabilitation max: 12.5M / 7.5M / 5.25M VND/day",
      g1: "Mai táng 5tr · PHCN 12,5tr/ngày",
      g2: "Mai táng 4tr · PHCN 7,5tr/ngày",
      g3: "Mai táng 3tr · PHCN 5,25tr/ngày",
    },
  ];

  const maternityRows: BenefitRowData[] = [
    {
      labelVi: "Quy định Thời gian chờ Thai sản (Sinh đẻ & Biến chứng thai sản)",
      labelEn: "Maternity Waiting Period (Childbirth & Maternity Complications)",
      g1:
        targetAudience === "employee"
          ? "Sinh đẻ: Chờ tỷ lệ 270 ngày · Biến chứng: Chờ tỷ lệ 60 ngày"
          : "Sinh đẻ: Chờ đủ 270 ngày · Biến chứng: Chờ đủ 60 ngày",
      g2:
        targetAudience === "employee"
          ? "Sinh đẻ: Chờ tỷ lệ 270 ngày · Biến chứng: Chờ tỷ lệ 60 ngày"
          : "Sinh đẻ: Chờ đủ 270 ngày · Biến chứng: Chờ đủ 60 ngày",
      g3:
        targetAudience === "employee"
          ? "Sinh đẻ: Chờ tỷ lệ 270 ngày · Biến chứng: Chờ tỷ lệ 60 ngày"
          : "Sinh đẻ: Chờ đủ 270 ngày · Biến chứng: Chờ đủ 60 ngày",
    },
    {
      labelVi: "Sinh thường (Hoặc điều trị biến chứng thai sản không phẫu thuật)",
      labelEn: "Normal Delivery (or Non-Surgical Maternity Complications)",
      subVi: "Chi trả theo mục 2.1 (Chi phí nằm viện) và tối đa đến hạn mức phụ bên cạnh",
      subEn: "Reimbursed per Section 2.1 (Hospitalization) up to the sub-limit",
      g1: group1?.normalDeliveryLimit || "25.000.000 ₫/năm",
      g2: group2?.normalDeliveryLimit || "20.000.000 ₫/năm",
      g3: group3?.normalDeliveryLimit || "15.000.000 ₫/năm",
      highlight: true,
    },
    {
      labelVi: "Sinh mổ (Hoặc điều trị biến chứng thai sản có phẫu thuật)",
      labelEn: "C-Section Delivery (or Surgical Maternity Complications)",
      subVi: "Chi trả theo mục 2.1 + 2.2 (Nằm viện + Phẫu thuật) và tối đa đến hạn mức phụ",
      subEn: "Reimbursed per Sections 2.1 + 2.2 up to the sub-limit",
      g1: group1?.cSectionDeliveryLimit || "35.000.000 ₫/năm",
      g2: group2?.cSectionDeliveryLimit || "30.000.000 ₫/năm",
      g3: group3?.cSectionDeliveryLimit || "25.000.000 ₫/năm",
      highlight: true,
    },
    {
      labelVi: "Trợ cấp khi sinh tại Bệnh viện công (Không bao gồm khoa tự nguyện)",
      labelEn: "Public Hospital Delivery Allowance (Standard ward only)",
      g1: "1.000.000 ₫",
      g2: "1.000.000 ₫",
      g3: "1.000.000 ₫",
    },
    {
      labelVi: "Trợ cấp khi sinh tại BV công và có dùng BHYT thanh toán > 70% viện phí",
      labelEn: "Public Hospital Delivery Allowance with BHYT paying > 70% (Standard ward)",
      g1: "Sinh thường: 2.000.000 ₫ · Sinh mổ: 3.000.000 ₫",
      g2: "Sinh thường: 2.000.000 ₫ · Sinh mổ: 3.000.000 ₫",
      g3: "Sinh thường: 2.000.000 ₫ · Sinh mổ: 3.000.000 ₫",
    },
    {
      labelVi: "Chi phí chăm sóc em bé sau sinh tại viện (Tiêm chủng, XN, vật tư, giường bé...)",
      labelEn: "Newborn Care at Hospital (Vaccination, tests, supplies, baby cot)",
      g1: "800.000 ₫",
      g2: "800.000 ₫",
      g3: "800.000 ₫",
    },
    {
      labelVi: "Điều trị bất thường hoặc bệnh cấp tính ở trẻ mới sinh (7 ngày đầu & mẹ chưa xuất viện)",
      labelEn: "Acute Illness / Abnormality Treatment for Newborn (First 7 days before mother's discharge)",
      g1: "1.050.000 ₫/năm",
      g2: "750.000 ₫/năm",
      g3: "525.000 ₫/năm",
    },
  ];

  const outpatientRows: BenefitRowData[] = [
    {
      labelVi: "3. TỔNG HẠN MỨC ĐIỀU TRỊ NGOẠI TRÚ DO ỐM BỆNH / NĂM",
      labelEn: "3. TOTAL OUTPATIENT TREATMENT LIMIT / YEAR",
      g1: group1?.outpatientTotalLimit || "60.000.000 ₫/năm",
      g2: group2?.outpatientTotalLimit || "19.000.000 ₫/năm",
      g3: group3?.outpatientTotalLimit || "14.000.000 ₫/năm",
      highlight: true,
    },
    {
      labelVi: "Giới hạn chi phí cho mỗi lần khám Ngoại trú",
      labelEn: "Per-Visit Limit for Outpatient Consultation & Prescription",
      subVi: "Bao gồm tiền khám BS, thuốc theo đơn, xét nghiệm, X-quang, siêu âm, vật tư y tế, biến chứng thai sản ngoại trú, thủ thuật ngoại trú",
      subEn: "Includes consultation, prescription drugs, lab tests, X-ray, ultrasound, supplies, outpatient procedures",
      g1: lang === "vi" ? group1?.outpatientPerVisitLimitVi : group1?.outpatientPerVisitLimitEn,
      g2: lang === "vi" ? group2?.outpatientPerVisitLimitVi : group2?.outpatientPerVisitLimitEn,
      g3: lang === "vi" ? group3?.outpatientPerVisitLimitVi : group3?.outpatientPerVisitLimitEn,
      highlight: true,
    },
    {
      labelVi: "Chi phí điều trị Răng cơ bản (Nha khoa)",
      labelEn: "Basic Dental Care Limit / Year",
      subVi: "Khám, X-quang răng, viêm nướu, nha chu, trám răng (amalgam/composite/fuji), điều trị tủy, cạo vôi răng, nhổ răng bệnh lý",
      subEn: "Check-up, X-ray, gingivitis, periodontitis, fillings, root canal, scaling/polishing, pathological extraction",
      g1: group1?.dentalLimit || "12.000.000 ₫/năm",
      g2: group2?.dentalLimit || "5.100.000 ₫/năm",
      g3: group3?.dentalLimit || "3.600.000 ₫/năm",
      highlight: true,
    },
    {
      labelVi: "Khám thai định kỳ / năm",
      labelEn: "Routine Prenatal Check-ups / Year",
      subVi: "Bao gồm chi phí khám bác sĩ, siêu âm 2D, 3D, xét nghiệm nước tiểu, xét nghiệm máu cơ bản",
      subEn: "Includes doctor fee, 2D/3D ultrasound, urinalysis, and basic blood tests",
      g1: group1?.prenatalCheckupLimit || "4.000.000 ₫/năm",
      g2: group2?.prenatalCheckupLimit || "2.000.000 ₫/năm",
      g3: group3?.prenatalCheckupLimit || "1.200.000 ₫/năm",
    },
    {
      labelVi: "Vật lý trị liệu, trị liệu bức xạ, nhiệt, ánh sáng (Tối đa 60 ngày/năm)",
      labelEn: "Outpatient Physiotherapy, Radiotherapy, Heat/Light Therapy (Max 60 days/yr)",
      g1: group1?.physiotherapyLimit || "600.000 ₫/ngày",
      g2: group2?.physiotherapyLimit || "200.000 ₫/ngày",
      g3: group3?.physiotherapyLimit || "140.000 ₫/ngày",
    },
  ];

  const activeRows =
    activeTab === "overview"
      ? overviewRows
      : activeTab === "inpatient"
      ? inpatientRows
      : activeTab === "maternity"
      ? maternityRows
      : outpatientRows;

  return (
    <section id="benefits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1FA3AD]">
            {t.benefits.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#180F50] mt-1">
            {t.benefits.title}
          </h2>
          <p className="text-[#4A4766] mt-2 text-base">{t.benefits.subtitle}</p>
        </div>

        {/* Synchronized Target Audience Switcher in Benefits Header */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onChangeAudience("employee")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              targetAudience === "employee"
                ? "bg-[#180F50] text-[#34C8D2] shadow-sm"
                : "bg-white text-[#4A4766] border border-[#E6E8F0] hover:border-[#180F50]"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5 shrink-0" />
            <span>{t.audienceSwitcher.employee}</span>
          </button>

          <button
            type="button"
            onClick={() => onChangeAudience("dependent")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              targetAudience === "dependent"
                ? "bg-[#180F50] text-[#34C8D2] shadow-sm"
                : "bg-white text-[#4A4766] border border-[#E6E8F0] hover:border-[#180F50]"
            }`}
          >
            <Users className="w-3.5 h-3.5 shrink-0" />
            <span>{t.audienceSwitcher.dependent}</span>
          </button>
        </div>
      </div>

      {/* 5 Benefit Category Tabs */}
      <div className="mt-8 flex flex-wrap gap-2 bg-white p-2 rounded-2xl border border-[#E6E8F0] shadow-xs">
        <button
          type="button"
          onClick={() => setActiveTab("overview")}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === "overview"
              ? "bg-[#180F50] text-[#34C8D2] shadow-xs"
              : "text-[#4A4766] hover:bg-[#F7F8FC] hover:text-[#180F50]"
          }`}
        >
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>{t.benefits.tabs.overview}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("inpatient")}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === "inpatient"
              ? "bg-[#180F50] text-[#34C8D2] shadow-xs"
              : "text-[#4A4766] hover:bg-[#F7F8FC] hover:text-[#180F50]"
          }`}
        >
          <Hospital className="w-4 h-4 shrink-0" />
          <span>{t.benefits.tabs.inpatient}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("maternity")}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === "maternity"
              ? "bg-[#180F50] text-[#34C8D2] shadow-xs"
              : "text-[#4A4766] hover:bg-[#F7F8FC] hover:text-[#180F50]"
          }`}
        >
          <Baby className="w-4 h-4 shrink-0" />
          <span>{t.benefits.tabs.maternity}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("outpatient")}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === "outpatient"
              ? "bg-[#180F50] text-[#34C8D2] shadow-xs"
              : "text-[#4A4766] hover:bg-[#F7F8FC] hover:text-[#180F50]"
          }`}
        >
          <Stethoscope className="w-4 h-4 shrink-0" />
          <span>{t.benefits.tabs.outpatient}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("extensions")}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === "extensions"
              ? "bg-[#180F50] text-[#34C8D2] shadow-xs"
              : "text-[#4A4766] hover:bg-[#F7F8FC] hover:text-[#180F50]"
          }`}
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>{t.benefits.tabs.extensions}</span>
        </button>
      </div>

      {/* Tab Content: 15 Special Extensions Grid */}
      {activeTab === "extensions" ? (
        <div className="mt-6 bg-white rounded-2xl border border-[#E6E8F0] p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#180F50]">
              {t.benefits.extensionsTitle}
            </h3>
            <p className="text-sm text-[#4A4766] mt-1">
              {t.benefits.extensionsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.benefits.extensionsList.map((ext) => (
              <div
                key={ext.num}
                className="bg-[#F7F8FC] rounded-xl border border-[#E6E8F0] p-5 flex flex-col justify-between hover:border-[#34C8D2] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-[#180F50] text-[#34C8D2] font-extrabold text-xs flex items-center justify-center shrink-0">
                      {ext.num}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EAF9FA] text-[#180F50] border border-[#34C8D2]/30">
                      {ext.limit}
                    </span>
                  </div>
                  <h4 className="font-bold text-[#180F50] text-sm sm:text-base leading-snug">
                    {ext.title}
                  </h4>
                  <p className="text-xs text-[#4A4766] mt-2 leading-relaxed">
                    {ext.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Tab Content: Responsive 3-Group Comparison Table */
        <div className="mt-6 bg-white rounded-2xl border border-[#E6E8F0] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1FA3AD] mb-1">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>
                  {targetAudience === "employee"
                    ? t.audienceSwitcher.employeeBadge
                    : t.audienceSwitcher.dependentBadge}
                </span>
              </div>
              <h3 id="plans-table-caption" className="text-xl sm:text-2xl font-extrabold text-[#180F50]">
                {activeTab === "overview"
                  ? t.benefits.tabs.overview
                  : activeTab === "inpatient"
                  ? t.benefits.tabs.inpatient
                  : activeTab === "maternity"
                  ? t.benefits.tabs.maternity
                  : t.benefits.tabs.outpatient}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="/documents/so-tay-bhsk-viettel-2026-nhan-vien.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#EAF9FA] hover:bg-[#34C8D2] text-[#180F50] font-bold text-xs transition-colors whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>{t.benefits.downloadHandbookEmployee}</span>
              </a>
              <a
                href="/documents/so-tay-bhsk-viettel-2026-nguoi-than.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F7F8FC] hover:bg-[#34C8D2] text-[#180F50] border border-[#E6E8F0] font-bold text-xs transition-colors whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>{t.benefits.downloadHandbookDependent}</span>
              </a>
            </div>
          </div>

          <div
            tabIndex={0}
            role="region"
            aria-labelledby="plans-table-caption"
            className="table-wrapper"
          >
            <table
              className="bt-benefits-table text-left text-sm"
              style={
                {
                  "--label-2": lang === "vi" ? "Nhóm 1 (TGĐ/PTGĐ)" : "Group 1 (CEO/Deputy)",
                  "--label-3": lang === "vi" ? "Nhóm 2 (CBQL HRL13+)" : "Group 2 (HRL13+)",
                  "--label-4": lang === "vi" ? "Nhóm 3 (Nhân viên)" : "Group 3 (Staff)",
                } as React.CSSProperties
              }
            >
              <thead>
                <tr className="bg-[#180F50] text-white">
                  <th className="p-4 font-bold text-sm rounded-tl-xl w-2/5">
                    {t.benefits.colBenefit}
                  </th>
                  {[group1, group2, group3].map((p, i) => (
                    <th
                      key={p.code}
                      className={`p-4 font-bold text-sm ${
                        i === 2 ? "rounded-tr-xl" : ""
                      }`}
                    >
                      <div className="text-[#34C8D2] text-xs uppercase tracking-wider">
                        {lang === "vi" ? p.nameVi : p.nameEn}
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                        {lang === "vi" ? p.tierVi : p.tierEn}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E8F0]">
                {activeRows.map((row) => (
                  <tr
                    key={row.labelVi}
                    className={row.highlight ? "bg-[#EAF9FA]/50" : "bg-white"}
                  >
                    <th
                      className={`p-4 font-semibold text-[#180F50] align-top ${
                        row.highlight ? "bg-[#EAF9FA]" : "bg-white"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={row.highlight ? "font-extrabold" : "font-bold"}>
                          {lang === "vi" ? row.labelVi : row.labelEn}
                        </span>
                        {row.diffBadgeVi ? (
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-[#180F50] text-[#34C8D2] whitespace-nowrap">
                            {lang === "vi" ? row.diffBadgeVi : row.diffBadgeEn}
                          </span>
                        ) : null}
                      </div>
                      {(lang === "vi" ? row.subVi : row.subEn) ? (
                        <div className="text-xs font-normal text-[#4A4766] mt-1 leading-relaxed">
                          {lang === "vi" ? row.subVi : row.subEn}
                        </div>
                      ) : null}
                    </th>
                    <td
                      className={`p-4 align-top ${
                        row.highlight
                          ? "font-extrabold text-[#180F50] text-sm sm:text-base"
                          : "font-medium text-[#4A4766]"
                      }`}
                    >
                      {row.g1}
                    </td>
                    <td
                      className={`p-4 align-top ${
                        row.highlight
                          ? "font-extrabold text-[#180F50] text-sm sm:text-base"
                          : "font-medium text-[#4A4766]"
                      }`}
                    >
                      {row.g2}
                    </td>
                    <td
                      className={`p-4 align-top ${
                        row.highlight
                          ? "font-extrabold text-[#180F50] text-sm sm:text-base"
                          : "font-medium text-[#4A4766]"
                      }`}
                    >
                      {row.g3}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
