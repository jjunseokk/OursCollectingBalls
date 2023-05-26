import React from "react";
import '../style/home.scss';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import EventCard from "../components/EventCard";

import main from '../img/main.png';
import text from '../img/text.png';
import collectIcon from '../img/collectIcon.png';
import btnBackground from '../img/btnBackground.png';
import process from '../img/miniProcess.png';


const LinkBox = styled.div`
    width: ${props => props.width};
    height: 350px;
    position: relative;
    padding: ${props => props.padding};
    border-radius: 60px;
    border: 1px solid black;
    cursor: pointer;

`

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="home-container">
            {/* <div className="home-main">
                <img src={main} alt="" width='100%' height="100%" />
            </div> */}
            <ParallaxBanner className="home-main" style={{ aspectRatio: '2 / 1' }}>
                <ParallaxBannerLayer image={main} speed={-100} />
                <ParallaxBannerLayer>
                    <div className="parallax-text">
                        <img src={text} alt="" />
                        <FontAwesomeIcon className="downIcon" icon={faAngleDoubleDown} />
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
            <div className="home-wrap">
                <div className="home-goLink">
                    <div>
                        <LinkBox width="59%" padding="50px" onClick={() => {
                            navigate('/reservation');
                        }}>
                            <p>
                                로스트볼  <br />
                                수거 신청
                            </p>
                            <img src={collectIcon} alt="" width='70px' height='70px' />
                            <FontAwesomeIcon icon={faChevronRight} style={{ position: 'absolute', bottom: 50, right: 70, fontSize: '2em' }} />
                        </LinkBox>
                        <LinkBox width="39%" padding="0" onClick={() => {
                            window.location.href = "https://theours.imweb.me/"
                        }}>
                            <img style={{ borderRadius: 60 }} src={btnBackground} alt="" width='100%' />
                        </LinkBox>
                    </div>
                </div>
                <div className="home-area">
                    <div className="title">
                        <img src={collectIcon} alt="" />
                        <h1><span>OURS BOX</span>는 폐기물로 자원 순환을 만듭니다.</h1>
                        <img src={collectIcon} alt="" />
                    </div>
                    <img src={process} alt="" width='100%'/>
                    {/* <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><EventCard title="event1" /></SwiperSlide>
                        <SwiperSlide><EventCard title="event1" /></SwiperSlide>
                        <SwiperSlide><EventCard title="event1" /></SwiperSlide>
                        <SwiperSlide><EventCard title="event1" /></SwiperSlide>
                        <SwiperSlide><EventCard title="event1" /></SwiperSlide>
                        <SwiperSlide><EventCard title="event1" /></SwiperSlide>
                        <SwiperSlide><EventCard title="event1" /></SwiperSlide>
                        <SwiperSlide><EventCard title="event1" /></SwiperSlide>
                        <SwiperSlide><EventCard title="event1" /></SwiperSlide>
                    </Swiper> */}
                </div>
                <div className="home-counseling">
                    <p>
                        <strong>OURS BOX 이용에 궁금한 점이 있나요?</strong> <br />
                        온라인 상담으로 문제를 해결해 보세요.
                    </p>
                    <button onClick={() => {
                        navigate('/Service');
                    }}>고객센터</button>
                </div>
            </div>
        </div>
    )
}


export default Home;