"use client";

import React, { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TargetAudience } from "@/lib/types";
import {
  ShieldCheck,
  FolderDown,
  Globe,
  Menu,
  X,
  UserCheck,
  Users,
  ArrowLeftRight,
} from "lucide-react";

interface HeaderProps {
  targetAudience: TargetAudience;
  onChangeAudience: (audience: TargetAudience) => void;
}

export function Header({ targetAudience, onChangeAudience }: HeaderProps) {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#general", label: t.nav.general },
    { href: "#benefits", label: t.nav.benefits },
    { href: "#documents", label: t.nav.documents },
    { href: "#claims", label: t.nav.claims },
    { href: "#notes", label: t.nav.notes },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#180F50] text-white shadow-lg border-b border-white/10">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-[#34C8D2] focus:text-[#180F50] focus:px-4 focus:py-2 focus:rounded-lg font-semibold"
      >
        {t.brand.skipToContent}
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 lg:gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-[#34C8D2]/15 border border-[#34C8D2]/40 flex items-center justify-center text-[#34C8D2] group-hover:bg-[#34C8D2] group-hover:text-[#180F50] transition-colors shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-base sm:text-lg tracking-tight text-white whitespace-nowrap">
              {t.brand.company}
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-[#34C8D2] tracking-wide whitespace-nowrap">
              {t.brand.clientSub}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 shrink-0">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-[#E4E1F5] hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions: Quick Audience Switcher, Document Hub CTA & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Compact Audience Pill on Desktop/Tablet */}
          <div
            className="hidden md:inline-flex items-center bg-[#261B6E] border border-white/15 rounded-xl p-1 shrink-0"
            role="group"
            aria-label="Target audience switcher"
          >
            <button
              type="button"
              onClick={() => onChangeAudience("employee")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                targetAudience === "employee"
                  ? "bg-[#34C8D2] text-[#180F50] shadow-xs"
                  : "text-[#E4E1F5] hover:text-white"
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === "vi" ? "Nhân viên" : "Staff"}</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeAudience("dependent")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                targetAudience === "dependent"
                  ? "bg-[#34C8D2] text-[#180F50] shadow-xs"
                  : "text-[#E4E1F5] hover:text-white"
              }`}
            >
              <Users className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === "vi" ? "Người thân" : "Family"}</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeAudience("compare")}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                targetAudience === "compare"
                  ? "bg-[#34C8D2] text-[#180F50] shadow-xs"
                  : "text-[#E4E1F5] hover:text-white"
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === "vi" ? "So sánh" : "Compare"}</span>
            </button>
          </div>

          <a
            href="#documents"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#34C8D2] hover:bg-[#2bb5bf] text-[#180F50] font-bold text-xs sm:text-sm px-3.5 py-2.5 rounded-xl shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <FolderDown className="w-4 h-4 shrink-0" />
            <span>{t.nav.lookupDocsBtn}</span>
          </a>

          {/* Bilingual Toggle VI / EN */}
          <div
            className="inline-flex items-center gap-0.5 bg-[#261B6E] border border-[#34C8D2]/40 rounded-xl p-1 shrink-0 shadow-inner"
            role="group"
            aria-label="Language switcher"
          >
            <Globe className="w-3.5 h-3.5 text-[#34C8D2] ml-1.5 mr-0.5 hidden sm:block shrink-0" />
            <button
              type="button"
              onClick={() => setLang("vi")}
              aria-pressed={lang === "vi"}
              className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                lang === "vi"
                  ? "bg-[#34C8D2] text-[#180F50] shadow-xs"
                  : "text-white hover:text-[#34C8D2] hover:bg-white/10"
              }`}
            >
              VI
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                lang === "en"
                  ? "bg-[#34C8D2] text-[#180F50] shadow-xs"
                  : "text-white hover:text-[#34C8D2] hover:bg-white/10"
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/25 text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen ? (
        <div className="xl:hidden bg-[#180F50] border-t border-white/10 px-4 pt-3 pb-5 space-y-3 shadow-2xl">
          {/* Mobile Audience Switcher */}
          <div className="grid grid-cols-3 gap-1.5 bg-[#261B6E] p-1.5 rounded-xl border border-white/15">
            <button
              type="button"
              onClick={() => {
                onChangeAudience("employee");
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-2 rounded-lg text-xs font-bold text-center whitespace-nowrap ${
                targetAudience === "employee"
                  ? "bg-[#34C8D2] text-[#180F50]"
                  : "text-[#E4E1F5]"
              }`}
            >
              {lang === "vi" ? "Nhân viên" : "Employees"}
            </button>
            <button
              type="button"
              onClick={() => {
                onChangeAudience("dependent");
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-2 rounded-lg text-xs font-bold text-center whitespace-nowrap ${
                targetAudience === "dependent"
                  ? "bg-[#34C8D2] text-[#180F50]"
                  : "text-[#E4E1F5]"
              }`}
            >
              {lang === "vi" ? "Người thân" : "Dependents"}
            </button>
            <button
              type="button"
              onClick={() => {
                onChangeAudience("compare");
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-2 rounded-lg text-xs font-bold text-center whitespace-nowrap ${
                targetAudience === "compare"
                  ? "bg-[#34C8D2] text-[#180F50]"
                  : "text-[#E4E1F5]"
              }`}
            >
              {lang === "vi" ? "So sánh" : "Compare"}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#E4E1F5] hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-1">
            <a
              href="#documents"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#34C8D2] text-[#180F50] font-bold text-sm px-4 py-3 rounded-xl shadow-md"
            >
              <FolderDown className="w-4 h-4" />
              <span>{t.nav.lookupDocsBtn}</span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
