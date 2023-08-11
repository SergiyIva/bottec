import {SectionText, SectionTitle, SectionTitleHighlight} from "../../../components/common/Section.style.tsx";
import {
    BottomIconDivider,
    ImageWrap,
    ImageWrap1,
    IphoneMockup,
    SectionCard,
    SolutionCardContent,
    SolutionCardDescription,
    SolutionCardRealization,
    SolutionCardTitle,
    SolutionSectionWrap,
    SolutionsGrid, TgMokup, TopIconDivider
} from "./WhatIs.styles.ts";

import iphone14mu from "assets/iphone14mu.png";
import tg from "assets/webapps/whatis/tg.png";
import {ReactComponent as TgIcon} from "assets/webapps/whatis/tg.svg";
import {useInView} from "react-intersection-observer";

type WhatIsProps = {

};
export const WhatIs = ({}: WhatIsProps) => {
    const [titleRef, titleInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [firstCardRef, firstCardInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    return (
        <SolutionSectionWrap>
            <SectionTitle
                ref={titleRef}
                visible={titleInView}
            >
                <SectionTitleHighlight>
                    Что такое <br />
                </SectionTitleHighlight>
                web-apps в Telegram?
            </SectionTitle>
            <SectionText
                ref={titleRef}
                visible={titleInView}
            >
                Telegram Web Apps - это веб-приложения внутри телеграмм-бота, представляющее собой встроенные в интерфейс мессенджера сайты
            </SectionText>
            <SolutionsGrid>
                <SectionCard
                    wide
                    gridArea={"first"}
                    ref={firstCardRef}
                    visible={firstCardInView}
                >
                    <SolutionCardContent>
                        <div>
                            <SolutionCardTitle>
                                Приложения Telegram известны
                                своей скоростью, гибкостью
                                и кроссплатформенным дизайном.
                            </SolutionCardTitle>
                            <SolutionCardDescription>
                                Благодаря Web Apps Вы можете интегрировать
                                веб-приложения к своим ботам, открывающимся
                                в дополнительном окне, что значительно расширяет инструментарий, а, следовательно, и функционал
                                телеграм-ботов.
                            </SolutionCardDescription>
                            <SolutionCardRealization>TELEGRAM</SolutionCardRealization>
                        </div>
                    </SolutionCardContent>
                    <ImageWrap1>
                        <IphoneMockup>
                            <img src={iphone14mu} alt={"iphone image"} />
                        </IphoneMockup>

                    </ImageWrap1>
                    <ImageWrap>
                        <TgMokup>
                            <img src={tg} alt={"Telegram icon"}/>
                        </TgMokup>
                    </ImageWrap>
                    <TopIconDivider>
                        <TgIcon/>
                    </TopIconDivider>
<BottomIconDivider>
    <TgIcon/>
</BottomIconDivider>
                </SectionCard>
            </SolutionsGrid>
        </SolutionSectionWrap>
    );
};