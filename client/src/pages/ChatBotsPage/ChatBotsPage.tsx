import { BotTypesSection } from "components/BotTypesSection";
import { ChatBotsBanner } from "components/ChatBotsBanner";
import { FaqSection } from "components/FaqSection";
import { NewsSection } from "components/NewsSection";
import { PageLayout } from "components/PageLayout";
import { ReviewsSection } from "components/ReviewsSection";
import { WhatsThatSection } from "components/WhatsThatSection";

import React from "react";

export const ChatBotsPage: React.FC = () => {
  return (
    <PageLayout>
      <ChatBotsBanner />
      <WhatsThatSection />
      <BotTypesSection />
      <ReviewsSection />
      <NewsSection />
      <FaqSection />
    </PageLayout>
  );
};
