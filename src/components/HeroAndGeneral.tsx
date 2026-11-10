"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TargetAudience } from "@/lib/types";
import {
  FileCheck2,
  FolderDown,
  MessageSquareText,
  Building2,
  FileBadge,
  CalendarRange,
  Globe2,
  UserCheck,
  Users,
  Sparkles,
  Clock,
  Download,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

interface HeroAndGeneralProps {
  targetAudience: TargetAudience;
  onChangeAudience: (audience: TargetAudience) => void;
  onOpenChat: () => void;
}

export function HeroAndGeneral({
  targetAudience,
  onChangeAudience,
  onOpenChat,
}: HeroAndGeneralProps) {
  const { lang, t } = useLanguage();
  const icons = [Building2, FileBadge, CalendarRange, Globe2];

  const displayedChanges =
    targetAudience === "dependent"
      ? t.general.changesEmployee.slice(1)
      : t.general.changesEmployee;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#180F50] via-[#1E1460] to-[#122B59] text-white py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#34C8D2]/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#34C8D2]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#34C8D2]/40 text-[#34C8D2] text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 whitespace-nowrap">
            <span>{t.hero.badge}</span>
          </div>

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
            ) : (
              <>
                <span className="whitespace-nowrap">Viettel IDC</span>{" "}
                <span className="whitespace-nowrap">Health &amp; Accident</span>
                <br />
                <span className="whitespace-nowrap">Insurance Portal</span>
              </>
            )}
          </h1>

          {/* Main Hero Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 bg-[#34C8D2] hover:bg-[#2bb5bf] text-[#180F50] font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg transition-all whitespace-nowrap"
            >
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span>{t.hero.btnBenefits}</span>
            </a>

            <a
              href="#documents"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#EAF9FA] text-[#180F50] font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg transition-all whitespace-nowrap"
            >
              <FolderDown className="w-5 h-5 text-[#1FA3AD] shrink-0" />
              <span>{t.hero.btnDocuments}</span>
            </a>

            <a
              href="#claims"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/25 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all whitespace-nowrap"
            >
              <FileCheck2 className="w-5 h-5 text-[#34C8D2] shrink-0" />
              <span>{t.hero.btnClaims}</span>
            </a>

            <button
              type="button"
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-[#34C8D2]/40 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageSquareText className="w-5 h-5 text-[#34C8D2] shrink-0" />
              <span>{t.hero.btnChat}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section I: General Information + Target Audience Switcher */}
      <section id="general" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 space-y-8">
        {/* Global Target Audience Selector Bar */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-[#34C8D2] p-5 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#1FA3AD]">
                {t.audienceSwitcher.label}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => onChangeAudience("employee")}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                    targetAudience === "employee"
                      ? "bg-[#180F50] text-[#34C8D2] shadow-md"
                      : "bg-[#F7F8FC] text-[#4A4766] hover:bg-[#EAF9FA] hover:text-[#180F50] border border-[#E6E8F0]"
                  }`}
                >
                  <UserCheck className="w-4 h-4 shrink-0" />
                  <span>{t.audienceSwitcher.employee}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onChangeAudience("dependent")}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                    targetAudience === "dependent"
                      ? "bg-[#180F50] text-[#34C8D2] shadow-md"
                      : "bg-[#F7F8FC] text-[#4A4766] hover:bg-[#EAF9FA] hover:text-[#180F50] border border-[#E6E8F0]"
                  }`}
                >
                  <Users className="w-4 h-4 shrink-0" />
                  <span>{t.audienceSwitcher.dependent}</span>
                </button>
              </div>
            </div>

            {/* Quick Handbook Downloads for Both Audiences */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href="/documents/so-tay-bhsk-viettel-2026-nhan-vien.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold border transition-all whitespace-nowrap ${
                  targetAudience === "employee"
                    ? "bg-[#EAF9FA] border-[#34C8D2] text-[#180F50]"
                    : "bg-[#F7F8FC] border-[#E6E8F0] text-[#4A4766] hover:text-[#180F50]"
                }`}
              >
                <Download className="w-3.5 h-3.5 text-[#1FA3AD] shrink-0" />
                <span>{t.benefits.downloadHandbookEmployee}</span>
                <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
              </a>

              <a
                href="/documents/so-tay-bhsk-viettel-2026-nguoi-than.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold border transition-all whitespace-nowrap ${
                  targetAudience === "dependent"
                    ? "bg-[#EAF9FA] border-[#34C8D2] text-[#180F50]"
                    : "bg-[#F7F8FC] border-[#E6E8F0] text-[#4A4766] hover:text-[#180F50]"
                }`}
              >
                <Download className="w-3.5 h-3.5 text-[#1FA3AD] shrink-0" />
                <span>{t.benefits.downloadHandbookDependent}</span>
                <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
              </a>
            </div>
          </div>

          <div className="mt-3.5 pt-3.5 border-t border-[#E6E8F0] flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4766]">
            <span className="px-2.5 py-0.5 rounded-md bg-[#EAF9FA] text-[#180F50] font-bold text-xs whitespace-nowrap shrink-0 mt-0.5">
              {targetAudience === "employee"
                ? t.audienceSwitcher.employeeBadge
                : t.audienceSwitcher.dependentBadge}
            </span>
            <p className="leading-relaxed">
              {targetAudience === "employee"
                ? t.audienceSwitcher.employeeDesc
                : t.audienceSwitcher.dependentDesc}
            </p>
          </div>
        </div>

        {/* 4 General Policy Summary Cards */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E6E8F0] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-[#E6E8F0]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1FA3AD]">
                {t.general.sectionTag}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#180F50] mt-1">
                {t.general.title}
              </h2>
            </div>
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-[#EAF9FA] text-[#180F50] border border-[#34C8D2]/30 self-start sm:self-center whitespace-nowrap">
              {t.general.policyBadge}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E8F0] pt-6">
            {t.general.items.map((item, idx) => {
              const Icon = icons[idx] || Building2;
              return (
                <div
                  key={item.label}
                  className={`py-4 sm:py-2 ${
                    idx === 0 ? "sm:pr-6" : "sm:px-6"
                  } flex items-start gap-3.5`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF9FA] text-[#180F50] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#1FA3AD]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#4A4766] whitespace-nowrap">
                      {item.label}
                    </div>
                    <div className="text-base sm:text-lg font-extrabold text-[#180F50] mt-0.5 whitespace-nowrap">
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm text-[#4A4766] mt-0.5">
                      {item.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2026 - 2027 Key Policy Upgrades */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E6E8F0] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1FA3AD]">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>{lang === "vi" ? "ĐIỂM MỚI KỲ 2026 – 2027" : "2026 – 2027 POLICY UPGRADES"}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#180F50] mt-1">
                {targetAudience === "dependent"
                  ? t.general.changesTitleDependent
                  : t.general.changesTitleEmployee}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4766] mt-1">
                {t.general.changesSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedChanges.map((chg, idx) => (
              <div
                key={chg.title}
                className="bg-[#F7F8FC] rounded-xl border border-[#E6E8F0] p-4 sm:p-5 flex flex-col justify-between hover:border-[#34C8D2] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="w-7 h-7 rounded-lg bg-[#180F50] text-[#34C8D2] font-extrabold text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EAF9FA] text-[#1FA3AD] border border-[#34C8D2]/30 whitespace-nowrap">
                      {chg.tag}
                    </span>
                  </div>
                  <h4 className="font-bold text-[#180F50] text-sm sm:text-base leading-snug">
                    {chg.title}
                  </h4>
                  <p className="text-xs text-[#4A4766] mt-2 leading-relaxed">
                    {chg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Waiting Periods & Eligibility Comparison Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E6E8F0] p-6 sm:p-8">
          <div className="mb-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1FA3AD]">
              <Clock className="w-4 h-4 shrink-0" />
              <span>
                {lang === "vi"
                  ? "ĐIỀU KIỆN THAM GIA & THỜI GIAN CHỜ"
                  : "ELIGIBILITY & WAITING PERIODS"}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#180F50] mt-1">
              {t.general.waitingTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4766] mt-1">
              {t.general.waitingSubtitle}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#E6E8F0]">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#180F50] text-white">
                  <th className="p-3.5 sm:p-4 font-bold w-1/3">
                    {t.general.waitingCols.criteria}
                  </th>
                  <th className="p-3.5 sm:p-4 font-bold text-[#34C8D2]">
                    {targetAudience === "employee"
                      ? t.general.waitingCols.employee
                      : t.general.waitingCols.dependent}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E8F0]">
                {t.general.waitingRows.map((row) => (
                  <tr key={row.criteria} className="bg-white">
                    <th className="p-3.5 sm:p-4 font-bold text-[#180F50] align-top">
                      <span>{row.criteria}</span>
                    </th>
                    <td className="p-3.5 sm:p-4 text-[#4A4766] font-medium align-top leading-relaxed">
                      {targetAudience === "employee" ? row.employee : row.dependent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
