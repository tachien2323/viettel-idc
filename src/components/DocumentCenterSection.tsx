"use client";

import React, { useMemo, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  DocumentAudienceFilter,
  DocumentCategoryFilter,
  TargetAudience,
  VIETTEL_DOCUMENTS,
} from "@/lib/types";
import {
  Search,
  Download,
  ExternalLink,
  BookOpen,
  FileText,
  AlertTriangle,
  Smartphone,
  Building2,
  ShieldCheck,
  UserCheck,
  Users,
  Layers,
  X,
  CheckCircle2,
} from "lucide-react";

interface DocumentCenterSectionProps {
  targetAudience: TargetAudience;
}

export function DocumentCenterSection({ targetAudience }: DocumentCenterSectionProps) {
  const { lang, t } = useLanguage();
  const [audienceFilter, setAudienceFilter] = useState<DocumentAudienceFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<DocumentCategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [includeSharedWhenFiltered, setIncludeSharedWhenFiltered] = useState(true);

  const quickSearchChips =
    lang === "vi"
      ? [
          { label: "Sổ tay Nhân viên", query: "sổ tay nhân viên" },
          { label: "Sổ tay Người thân", query: "sổ tay người thân" },
          { label: "Giấy yêu cầu bồi thường", query: "claim form" },
          { label: "Biên bản tai nạn", query: "biên bản tai nạn" },
          { label: "530 Viện bảo lãnh", query: "bảo lãnh viện phí" },
          { label: "Blacklist PJICO", query: "blacklist" },
          { label: "App Papaya Care", query: "papaya" },
          { label: "Điểm loại trừ", query: "loại trừ" },
        ]
      : [
          { label: "Employee Handbook", query: "employee handbook" },
          { label: "Dependent Handbook", query: "dependent handbook" },
          { label: "Claim Form", query: "claim form" },
          { label: "Accident Report", query: "accident report" },
          { label: "530 Direct Billing", query: "direct billing" },
          { label: "PJICO Blacklist", query: "blacklist" },
          { label: "Papaya Care App", query: "papaya" },
          { label: "Exclusions", query: "exclusions" },
        ];

  const filteredDocuments = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return VIETTEL_DOCUMENTS.filter((doc) => {
      // 1. Audience filter
      if (audienceFilter === "employee") {
        if (includeSharedWhenFiltered) {
          if (doc.audience !== "employee" && doc.audience !== "shared") return false;
        } else {
          if (doc.audience !== "employee") return false;
        }
      } else if (audienceFilter === "dependent") {
        if (includeSharedWhenFiltered) {
          if (doc.audience !== "dependent" && doc.audience !== "shared") return false;
        } else {
          if (doc.audience !== "dependent") return false;
        }
      } else if (audienceFilter === "shared") {
        if (doc.audience !== "shared") return false;
      }

      // 2. Category filter
      if (categoryFilter !== "all" && doc.category !== categoryFilter) {
        return false;
      }

      // 3. Keyword search
      if (q) {
        const haystack = [
          doc.titleVi,
          doc.titleEn,
          doc.originalFileName,
          doc.summaryVi,
          doc.summaryEn,
          doc.categoryLabelVi,
          doc.categoryLabelEn,
          ...doc.highlightsVi,
          ...doc.highlightsEn,
          ...doc.keywords,
        ]
          .join(" ")
          .replace(/\u00A0/g, " ")
          .toLowerCase();

        const tokens = q.split(/\s+/);
        const matchesAll = tokens.every((tok) => haystack.includes(tok));
        if (!matchesAll) return false;
      }

      return true;
    }).sort((a, b) => {
      // Prioritize the active targetAudience's handbook at the top
      if (targetAudience === "employee") {
        if (a.audience === "employee" && b.audience !== "employee") return -1;
        if (b.audience === "employee" && a.audience !== "employee") return 1;
      } else if (targetAudience === "dependent") {
        if (a.audience === "dependent" && b.audience !== "dependent") return -1;
        if (b.audience === "dependent" && a.audience !== "dependent") return 1;
      }
      return 0;
    });
  }, [audienceFilter, categoryFilter, searchQuery, includeSharedWhenFiltered, targetAudience]);

  const getCategoryIcon = (category: string, isWarning?: boolean) => {
    if (isWarning) return AlertTriangle;
    switch (category) {
      case "handbook":
        return BookOpen;
      case "forms":
        return FileText;
      case "network_blacklist":
        return Building2;
      case "papaya_app":
        return Smartphone;
      case "rules_exclusions":
        return ShieldCheck;
      default:
        return FileText;
    }
  };

  return (
    <section
      id="documents"
      className="bg-gradient-to-b from-[#180F50] to-[#12254A] text-white py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#34C8D2] bg-white/10 px-3.5 py-1 rounded-full border border-[#34C8D2]/30">
            {t.documents.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
            {t.documents.title}
          </h2>
          <p className="text-[#E4E1F5] mt-2 text-sm sm:text-base leading-relaxed">
            {t.documents.subtitle}
          </p>
        </div>

        {/* Search & Multi-Filter Control Panel */}
        <div className="mt-8 bg-white rounded-3xl p-5 sm:p-7 text-[#180F50] shadow-2xl border border-white/20 space-y-5">
          {/* Search Input Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#1FA3AD] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.documents.searchPlaceholder}
              className="w-full pl-12 pr-11 py-3.5 rounded-2xl bg-[#F7F8FC] border-2 border-[#E6E8F0] focus:border-[#180F50] focus:bg-white text-sm sm:text-base text-[#180F50] font-medium focus:outline-none transition-all"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-[#4A4766] hover:text-[#180F50] hover:bg-[#E6E8F0]/50 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            ) : null}
          </div>

          {/* Quick Keyword Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-[#4A4766] mr-1">
              {lang === "vi" ? "Tìm nhanh:" : "Quick tags:"}
            </span>
            {quickSearchChips.map((chip) => {
              const isSelected = searchQuery.toLowerCase() === chip.query.toLowerCase();
              return (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() =>
                    setSearchQuery(isSelected ? "" : chip.query)
                  }
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-[#180F50] text-[#34C8D2]"
                      : "bg-[#EAF9FA] hover:bg-[#34C8D2] text-[#180F50]"
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>

          {/* Filter Row 1: Target Audience Filter */}
          <div className="pt-3 border-t border-[#E6E8F0] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#4A4766] mr-1">
                {t.documents.audienceFilterLabel}
              </span>

              <button
                type="button"
                onClick={() => setAudienceFilter("all")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  audienceFilter === "all"
                    ? "bg-[#180F50] text-[#34C8D2] shadow-xs"
                    : "bg-[#F7F8FC] text-[#4A4766] hover:text-[#180F50] border border-[#E6E8F0]"
                }`}
              >
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>{t.documents.audienceFilters.all}</span>
              </button>

              <button
                type="button"
                onClick={() => setAudienceFilter("employee")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  audienceFilter === "employee"
                    ? "bg-[#180F50] text-[#34C8D2] shadow-xs"
                    : "bg-[#F7F8FC] text-[#4A4766] hover:text-[#180F50] border border-[#E6E8F0]"
                }`}
              >
                <UserCheck className="w-3.5 h-3.5 shrink-0" />
                <span>{t.documents.audienceFilters.employee}</span>
              </button>

              <button
                type="button"
                onClick={() => setAudienceFilter("dependent")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  audienceFilter === "dependent"
                    ? "bg-[#180F50] text-[#34C8D2] shadow-xs"
                    : "bg-[#F7F8FC] text-[#4A4766] hover:text-[#180F50] border border-[#E6E8F0]"
                }`}
              >
                <Users className="w-3.5 h-3.5 shrink-0" />
                <span>{t.documents.audienceFilters.dependent}</span>
              </button>

              <button
                type="button"
                onClick={() => setAudienceFilter("shared")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  audienceFilter === "shared"
                    ? "bg-[#180F50] text-[#34C8D2] shadow-xs"
                    : "bg-[#F7F8FC] text-[#4A4766] hover:text-[#180F50] border border-[#E6E8F0]"
                }`}
              >
                <FileText className="w-3.5 h-3.5 shrink-0" />
                <span>{t.documents.audienceFilters.shared}</span>
              </button>
            </div>

            {(audienceFilter === "employee" || audienceFilter === "dependent") && (
              <label className="inline-flex items-center gap-2 text-xs font-semibold text-[#180F50] bg-[#EAF9FA] px-3 py-1.5 rounded-xl border border-[#34C8D2]/40 cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={includeSharedWhenFiltered}
                  onChange={(e) => setIncludeSharedWhenFiltered(e.target.checked)}
                  className="rounded accent-[#180F50]"
                />
                <span>
                  {lang === "vi"
                    ? "Hiển thị kèm biểu mẫu & danh sách bảo lãnh dùng chung"
                    : "Include shared claim forms & hospital network"}
                </span>
              </label>
            )}
          </div>

          {/* Filter Row 2: Document Category Filter */}
          <div className="pt-3 border-t border-[#E6E8F0] flex flex-wrap items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#4A4766] mr-1">
              {t.documents.categoryFilterLabel}
            </span>

            {(
              [
                "all",
                "handbook",
                "forms",
                "network_blacklist",
                "papaya_app",
                "rules_exclusions",
              ] as DocumentCategoryFilter[]
            ).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  categoryFilter === cat
                    ? "bg-[#34C8D2] text-[#180F50] shadow-xs"
                    : "bg-[#F7F8FC] text-[#4A4766] hover:text-[#180F50] border border-[#E6E8F0]"
                }`}
              >
                {t.documents.categoryFilters[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count Bar */}
        <div className="mt-6 flex items-center justify-between text-xs sm:text-sm text-[#E4E1F5]">
          <div>
            {lang === "vi" ? (
              <span>
                Đang hiển thị <strong className="text-[#34C8D2]">{filteredDocuments.length}</strong> / 12 tài liệu gốc trong thư mục dự án
              </span>
            ) : (
              <span>
                Showing <strong className="text-[#34C8D2]">{filteredDocuments.length}</strong> of 12 official documents
              </span>
            )}
          </div>
          {(audienceFilter !== "all" || categoryFilter !== "all" || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setAudienceFilter("all");
                setCategoryFilter("all");
                setSearchQuery("");
              }}
              className="text-[#34C8D2] hover:underline font-bold cursor-pointer"
            >
              {t.documents.resetFilterBtn}
            </button>
          )}
        </div>

        {/* Document Cards Grid */}
        {filteredDocuments.length === 0 ? (
          <div className="mt-6 bg-white/10 border border-white/20 rounded-2xl p-10 text-center space-y-4">
            <p className="text-base text-[#E4E1F5]">{t.documents.noResult}</p>
            <button
              type="button"
              onClick={() => {
                setAudienceFilter("all");
                setCategoryFilter("all");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-2 bg-[#34C8D2] text-[#180F50] font-bold text-sm px-5 py-2.5 rounded-xl cursor-pointer"
            >
              {t.documents.resetFilterBtn}
            </button>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDocuments.map((doc) => {
              const Icon = getCategoryIcon(doc.category, doc.isWarning);
              const isPinnedForTarget =
                (targetAudience === "employee" && doc.audience === "employee") ||
                (targetAudience === "dependent" && doc.audience === "dependent");

              return (
                <div
                  key={doc.id}
                  className={`bg-white text-[#180F50] rounded-2xl p-6 flex flex-col justify-between shadow-lg transition-all border-2 ${
                    doc.isWarning
                      ? "border-red-300 hover:border-red-500"
                      : isPinnedForTarget
                      ? "border-[#34C8D2] ring-2 ring-[#34C8D2]/40"
                      : "border-transparent hover:border-[#34C8D2]"
                  }`}
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            doc.isWarning
                              ? "bg-red-50 text-red-600 border border-red-200"
                              : doc.audience === "employee"
                              ? "bg-[#180F50] text-[#34C8D2]"
                              : doc.audience === "dependent"
                              ? "bg-[#1FA3AD] text-white"
                              : "bg-[#EAF9FA] text-[#180F50]"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span
                            className={`inline-block text-[11px] font-extrabold px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                              doc.audience === "employee"
                                ? "bg-[#180F50] text-[#34C8D2]"
                                : doc.audience === "dependent"
                                ? "bg-[#1FA3AD] text-white"
                                : "bg-[#EAF9FA] text-[#180F50]"
                            }`}
                          >
                            {lang === "vi" ? doc.audienceLabelVi : doc.audienceLabelEn}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`text-xs font-extrabold px-2.5 py-1 rounded-lg shrink-0 whitespace-nowrap ${
                          doc.fileFormat === "DOC"
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : doc.isWarning
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : "bg-[#F7F8FC] text-[#180F50] border border-[#E6E8F0]"
                        }`}
                      >
                        {doc.fileFormat} · {doc.fileSize}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-base sm:text-lg text-[#180F50] leading-snug">
                      {lang === "vi" ? doc.titleVi : doc.titleEn}
                    </h3>

                    {/* Summary */}
                    <p className="mt-3 text-xs sm:text-sm text-[#4A4766] leading-relaxed">
                      {lang === "vi" ? doc.summaryVi : doc.summaryEn}
                    </p>

                    {/* Key Highlights */}
                    <ul className="mt-3.5 space-y-1.5 border-t border-[#E6E8F0] pt-3">
                      {(lang === "vi" ? doc.highlightsVi : doc.highlightsEn).map(
                        (hl, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-[#180F50] font-medium"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1FA3AD] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons: Preview & Direct Download */}
                  <div className="mt-5 pt-4 border-t border-[#E6E8F0] grid grid-cols-2 gap-2.5">
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#F7F8FC] hover:bg-[#EAF9FA] text-[#180F50] border border-[#E6E8F0] font-bold text-xs transition-colors whitespace-nowrap"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#1FA3AD] shrink-0" />
                      <span>{t.documents.viewOnlineBtn}</span>
                    </a>

                    <a
                      href={doc.fileUrl}
                      download={doc.originalFileName}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#180F50] hover:bg-[#34C8D2] text-white hover:text-[#180F50] font-bold text-xs transition-colors whitespace-nowrap"
                    >
                      <Download className="w-3.5 h-3.5 shrink-0" />
                      <span>{t.documents.downloadFileBtn}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
