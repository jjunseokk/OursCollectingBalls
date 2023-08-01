import React, { useEffect, useState } from "react";
import '../style/home.scss';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
// import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import axios from "axios";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import EventCard from "../components/EventCard";

import main from '../img/main.png';
import text from '../img/text.png';
import collectIcon from '../img/collectIcon.png';
import btnBackground from '../img/btnBackground.png';
import process from '../img/miniProcess.png';
import btnBack from '../img/btnBack.png';
import tradingText from '../img/Trading-text.png';
import trading from '../img/Trading.png';
import oursBoxText from '../img/OursBox-text.png';
import oursBox from '../img/OursBox.png';

const LinkBox = styled.div`
    width: ${props => props.width};
    height: 350px;
    position: relative;
    padding: ${props => props.padding};
    border-radius: 60px;
    border: 1px solid black;
    cursor: pointer;
    background: url(${btnBack}) no-repeat;
    background-size: cover;
`


const Home = () => {

    const navigate = useNavigate();
    // 큐빙 데이터 가져오기
    useEffect(() => {
        axios.post('/qving')
            .then(response => {
                console.log("큐빙 get", response.data.data);
            })
            .catch(error => console.error(error))
    }, []);



    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // 창 너비 변경 시 이벤트 핸들러
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // 이벤트 핸들러 등록
        window.addEventListener('resize', handleResize);

        // 컴포넌트 언마운트 시 이벤트 핸들러 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="home-container">
            {/* <ParallaxBanner className="home-main" style={{ aspectRatio: '2 / 1' }}>
                <ParallaxBannerLayer image={main} speed={-100} width="100%" />
                <ParallaxBannerLayer>
                    <div className="parallax-text">
                        <img src={text} alt="" />
                        <FontAwesomeIcon className="downIcon" icon={faAngleDoubleDown} />
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner> */}
            <div className="home-main">
                <img src={main} alt="" width='100%' />
                <div className="parallax-text">
                    <img src={text} alt="" />
                    {/* <FontAwesomeIcon className="downIcon" icon={faAngleDoubleDown} /> */}
                    <button onClick={() => { navigate('/reservation'); }}><p>신청하기</p><FontAwesomeIcon icon={faCaretRight} /></button>
                </div>
            </div>

            <div className="home-wrap">
                <div className="home-goLink">
                    <div>
                        <LinkBox className="ball-animation box" width="59%" padding="50px" onClick={() => {
                            navigate('/reservation');
                        }}>
                            <p>
                                헌볼  <br />
                                수거 신청
                            </p>
                            <img className="ours" src={collectIcon} alt="" width='70px' height='70px' />
                            <FontAwesomeIcon className="ours-arrow" icon={faArrowRight} />
                        </LinkBox>
                        <LinkBox className="box" width="39%" padding="0" onClick={() => {
                            window.location.href = "http://52.78.112.88/"
                        }}>
                            <img style={{ borderRadius: 60 }} src={btnBackground} alt="" width='100%' />
                        </LinkBox>
                    </div>
                </div>
                <div className="home-area">
                    <div className="title">
                        <img src={collectIcon} alt="" />
                        <h1><span>OURS TRADING</span>는 폐기물로 자원 순환을 만듭니다.</h1>
                        <img src={collectIcon} alt="" />
                    </div>
                    <img src={process} alt="" width='100%' />
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
                    <div>
                        <strong>OURS TRADING 이용에 궁금한 점이 있나요?</strong> <br />
                        온라인 상담으로 문제를 해결해 보세요.
                    </div>
                    <button onClick={() => {
                        navigate('/Service');
                    }}>고객센터</button>
                </div>
                {windowWidth <= 500 ? (
                    <>
                        <div className="home-project">
                            <div>
                                <img src={trading} alt="" />
                                <img src={tradingText} alt="" />
                            </div>
                            <div>
                                <img src={oursBox} alt="" />
                                <img src={oursBoxText} alt="" />
                            </div>
                            <button onClick={() => { navigate('/Service') }}>무상설치문의</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="home-project">
                            <div>
                                <img src={tradingText} alt="" />
                                <img src={trading} alt="" />
                            </div>
                            <div>
                                <img src={oursBox} alt="" />
                                <img src={oursBoxText} alt="" />
                            </div>
                            <button onClick={() => { navigate('/Service') }}>무상설치문의</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}


export default Home;