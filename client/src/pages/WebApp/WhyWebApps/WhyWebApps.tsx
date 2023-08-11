import {useMediaQuery} from "react-responsive";
import _ from "lodash";

import {
    BackGround,
    CardDescription,
    CardText,
    CardTitle, FlexDivider, Phone, PhoneContainer,
    WhyUsCard,
    WhyUsDivider,
    WhyUsSectionBackgroundWrap,
    WhyUsSectionWrap, WhyUsWrapper
} from "./WhyWebApps.style.tsx";
import {SectionText, SectionTitle, SectionTitleHighlight} from "../../../components/common/Section.style.tsx";
import phone from "assets/iphonemock.png"
import {ReactComponent as Comfort} from "assets/webapps/whyIt/comfort.svg"
import {ReactComponent as Community} from "assets/webapps/whyIt/community.svg"
import {ReactComponent as Flex} from "assets/webapps/whyIt/flex.svg"
import {ReactComponent as Inovate} from "assets/webapps/whyIt/inovate.svg"
import {ReactComponent as Joint} from "assets/webapps/whyIt/joint.svg"
import {ReactComponent as Touch} from "assets/webapps/whyIt/touch.svg"
import {ArrowButton} from "../../../components/common/ArrowButton";
import {useInView} from "react-intersection-observer";
import  {ReactElement} from "react";
import {ReviewsSliderWrap} from "../../../components/ReviewsSlider/ReviewsSlider.style.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

type WhyWebAppsProps = {
    
};
type Item = {
    id: string
    title: string
    description: string
    img: ReactElement
}
const items: Item[] = [{
    id: "1",
    title: "Универсальность",
    description: "Практически полностью заменяет любое мобильное приложение или сайт",
    img: <Touch />
},
    {
        id: "2",
        title: "Гибкость",
        description: "Создает бесконечно гибкие интерфейсы с помощью JavaScript",
        img: <Flex />
    },
    {
        id: "3",
        title: "Удобство запуска",
        description: "Запускает веб-приложение с помощью кнопки меню и вложений (подменю)",
        img: <Comfort />
    },
    {
        id: "4",
        title: "Объединяет",
        description: "Взаимодействует с внешними сервисами и подключается к любой платежной или CRM системе",
        img: <Joint />
    },
    {
        id: "5",
        title: "Инновационность",
        description: "Реализует полноценный графический интерфейс, придуманный вами",
        img: <Inovate />
    },
    {
        id: "6",
        title: "Взаимодействие",
        description: "Доставляет различные индивидуальные push-уведомления вашим пользователям",
        img: <Community />
    }
]

export const WhyWebApps = ({}: WhyWebAppsProps) => {
    const [titleRef, titleInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const mobile = useMediaQuery({
        query: "(max-width: 578px)",
    });
    return (
        <WhyUsSectionBackgroundWrap>
            <WhyUsSectionWrap>
                <SectionTitle
                    ref={titleRef}
                    visible={titleInView}
                >
                    <SectionTitleHighlight>
                        Почему
                    </SectionTitleHighlight>
                    {" "}лучше <br />
                    выбирать <SectionTitleHighlight>
                    WebApps
                </SectionTitleHighlight>
                </SectionTitle>
                <SectionText
                    ref={titleRef}
                    visible={titleInView}
                    maxWidth="480px" mt={mobile ? "8px" : "36px"}>
                    Telegram Web Apps - это веб-приложения внутри телеграмм-бота, представляющее собой встроенные в интерфейс мессенджера, сайты
                </SectionText>
                <WhyUsWrapper>
                    <PhoneContainer>
                        <Phone>
                            <FlexDivider>
                                <img src={phone} alt={"Phone image"}/>
                                <ArrowButton outlined greyBg>Оставить заявку</ArrowButton>
                            </FlexDivider>
                        </Phone>
                    </PhoneContainer>
                    {mobile ? (
                        <div>
                            <Swiper
                                spaceBetween={16}
                                slidesPerView={2}
                                autoHeight={true}
                                initialSlide={1}
                                autoplay={{ delay: 5000 }}
                                modules={[Autoplay]}
                                centeredSlides={true}
                            >
                                {items.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Card item={item} />
                                    </SwiperSlide>
                                ))}

                                {/*<div className="swiper-pagination"></div>*/}
                            </Swiper>
                        </div>
                    ) : (_(items)
                        .chunk(2)
                        .value()
                        .map(([a,b], i)=>(
                            <WhyUsDivider key={i}>
                                <Card item={a}/>
                                <Card item={b} />
                            </WhyUsDivider>
                        )))}
                </WhyUsWrapper>
            </WhyUsSectionWrap>
        </WhyUsSectionBackgroundWrap>
    );
};

type CardProps = {
    item: Item
}
const Card = ({item}: CardProps) => {
   return <WhyUsCard>
        <BackGround/>
        <CardText>
            {item.img}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
                {item.description}
            </CardDescription>
        </CardText>
    </WhyUsCard>
}