import React from "react";
import '../style/home.scss';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import EventCard from "../components/EventCard";

import main from '../img/main.png';



const LinkBox = styled.div`
    background-color: ${props => props.color};
    width: ${props => props.width};
    height: 350px;
    position: relative;
    padding: 50px;
    border-radius: 60px;
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
                <ParallaxBannerLayer image={main} speed={-50} />
                <ParallaxBannerLayer>
                    <h1 className="parallax-text">Ours Box</h1>
                </ParallaxBannerLayer>
            </ParallaxBanner>
            <div className="home-wrap">
                <div className="home-goLink">
                    <div>
                        <LinkBox color="white" width="55%" onClick={() => {
                            navigate('/reservation');
                        }}>
                            <p>
                                로스트볼  <br />
                                수거 신청
                            </p>
                            <FontAwesomeIcon icon={faChevronRight} style={{ position: 'absolute', bottom: 50, right: 70, fontSize: '2em' }} />
                        </LinkBox>
                        <LinkBox width="35%" color="#AEFF1E">
                            <p>
                                이벤트
                            </p>
                            <p style={{ position: 'absolute', bottom: 20, }}>
                                헌볼 줄게 <br /> 새볼 다오
                            </p>
                            <FontAwesomeIcon icon={faChevronRight} style={{ position: 'absolute', bottom: 50, right: 70, fontSize: '2em' }} />
                        </LinkBox>
                    </div>
                </div>
                <div className="home-area">
                    <Swiper
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
                    </Swiper>
                </div>
                <div className="home-counseling">
                    <p>
                        <strong>OURS BOX 이용에 궁금한 점이 있나요?</strong> <br /><br />
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