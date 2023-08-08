import React, { useState } from "react";

import { NewsPiece, NewsSectionProps } from "./NewsSection.types";
import {
  NewsSectionWrap,
  NewsSlider,
  NewsSliderContent,
  NewsSliderHider,
  SliderButton,
} from "./NewsSection.style";
import { SectionTitle, SectionTitleHighlight } from "../common/Section.style";
import { SectionChip } from "../common/SectionChip";
import { useMediaQuery } from "react-responsive";
import { colors } from "colors";
import { NewsCard } from "components/NewsCard";
import { ReactComponent as SideArrowSVG } from "assets/side-arrow.svg";

export const NewsSection: React.FC<NewsSectionProps> = () => {
  const mobile = useMediaQuery({
    query: "(max-width: 680px)",
  });

  const colorsMap: string[] = [
    "#EE7141",
    "#15B85B",
    colors.purpleMain,
    "#EE7141",
    "#15B85B",
  ];
  const news: NewsPiece[] = [
    {
      id: "1",
      author: "Дмитрий Соколов",
      readingTime: "4 мин",
      shortText:
        "Чат-бот — это программа, которая имитирует реальный разговор с пользователем",
    },
    {
      id: "2",
      author: "Дмитрий Соколов",
      readingTime: "4 мин",
      shortText:
        "Чат-бот — это программа, которая имитирует реальный разговор с пользователем",
    },
    {
      id: "3",
      author: "Дмитрий Соколов",
      readingTime: "4 мин",
      shortText:
        "Чат-бот — это программа, которая имитирует реальный разговор с пользователем",
    },
    {
      id: "4",
      author: "Дмитрий Соколов",
      readingTime: "4 мин",
      shortText:
        "Чат-бот — это программа, которая имитирует реальный разговор с пользователем",
    },
    {
      id: "5",
      author: "Дмитрий Соколов",
      readingTime: "4 мин",
      shortText:
        "Чат-бот — это программа, которая имитирует реальный разговор с пользователем",
    },
  ];

  const [selectedNews, setSelectedNews] = useState<number>(0);
  return (
    <NewsSectionWrap>
      <SectionChip color="#C2FDC5" textColor={colors.textBlack} mt="98px">
        Интересно
      </SectionChip>
      <SectionTitle mt={mobile ? "40px" : "16px"}>
        <SectionTitleHighlight>
          Новости <br />
        </SectionTitleHighlight>
        компании
      </SectionTitle>
      <NewsSlider>
        <NewsSliderHider>
          <NewsSliderContent selectedNews={selectedNews}>
            {news.map((n, i) => (
              <NewsCard
                newsPiece={n}
                even={i % 2 === 0}
                background={colorsMap[i]}
              />
            ))}
          </NewsSliderContent>
        </NewsSliderHider>
        <SliderButton
          inverse
          onClick={() => setSelectedNews((prev) => (prev === 0 ? 0 : prev - 1))}
        >
          <SideArrowSVG />
        </SliderButton>
        <SliderButton
          onClick={() => setSelectedNews((prev) => (prev === 2 ? 2 : prev + 1))}
        >
          <SideArrowSVG />
        </SliderButton>
      </NewsSlider>
    </NewsSectionWrap>
  );
};
