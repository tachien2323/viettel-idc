"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { HeroAndGeneral } from "@/components/HeroAndGeneral";
import { BenefitsSection } from "@/components/BenefitsSection";
import { DocumentCenterSection } from "@/components/DocumentCenterSection";
import { ClaimsNotesContact } from "@/components/ClaimsNotesContact";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { DEFAULT_PLANS, InsurancePlan, TargetAudience } from "@/lib/types";

export default function HomePage() {
  const [plans, setPlans] = useState<InsurancePlan[]>(DEFAULT_PLANS);
  const [targetAudience, setTargetAudience] = useState<TargetAudience>("employee");
  const [chatOpen, setChatOpen] = useState(false);
  const [externalPrompt, setExternalPrompt] = useState<{
    text: string;
    nonce: number;
  } | null>(null);

  useEffect(() => {
    fetch("/api/plans")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.plans) && data.plans.length > 0) {
          setPlans(data.plans);
        }
      })
      .catch(() => {
        // fallback to DEFAULT_PLANS
      });
  }, []);

  const handleAskQuestionFromPage = (question: string) => {
    setChatOpen(true);
    setExternalPrompt({ text: question, nonce: Date.now() });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        targetAudience={targetAudience}
        onChangeAudience={setTargetAudience}
      />

      <main id="main-content" className="flex-1">
        <HeroAndGeneral
          targetAudience={targetAudience}
          onChangeAudience={setTargetAudience}
          onOpenChat={() => setChatOpen(true)}
        />

        <BenefitsSection
          plans={plans}
          targetAudience={targetAudience}
          onChangeAudience={setTargetAudience}
        />

        <DocumentCenterSection targetAudience={targetAudience} />

        <ClaimsNotesContact
          onAskQuestion={handleAskQuestionFromPage}
          onOpenChat={() => setChatOpen(true)}
        />
      </main>

      <ChatbotWidget
        isOpen={chatOpen}
        onToggle={setChatOpen}
        externalPrompt={externalPrompt}
      />
    </div>
  );
}
