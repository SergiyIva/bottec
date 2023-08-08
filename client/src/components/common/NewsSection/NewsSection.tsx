import React from "react";

import { NewsPiece, NewsSectionProps } from "./NewsSection.types";
import {
  NewsSectionWrap,
  NewsSlider,
  NewsSliderContent,
  NewsSliderHider,
  SliderButton,
} from "./NewsSection.style";
import { SectionTitle, SectionTitleHighlight } from "../Section.style";
import { SectionChip } from "../SectionChip";
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
  return (
    <NewsSectionWrap>
      <SectionChip color="#C2FDC5" textColor={colors.textBlack}>
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
          <NewsSliderContent>
            {news.map((n, i) => (
              <NewsCard
                newsPiece={n}
                even={i % 2 === 0}
                background={colorsMap[i]}
              />
            ))}
          </NewsSliderContent>
        </NewsSliderHider>
        <SliderButton inverse>
          <SideArrowSVG />
        </SliderButton>
        <SliderButton>
          <SideArrowSVG />
        </SliderButton>
      </NewsSlider>
    </NewsSectionWrap>
  );
};
