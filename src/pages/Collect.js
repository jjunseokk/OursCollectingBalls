import React from "react";
import '../style/collect.scss'
import styled from 'styled-components';
import EventCard from "../components/EventCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import clock from '../img/clock.png';
import golf from '../img/golf.png';
import warning from '../img/warning.png';
import { useNavigate } from "react-router-dom";

const CollectBox = styled.div`
    width: 50%;
    position: relative;
    padding: 0;
    background-color: ${props => props.color};
    img{
        margin: 0 10px;
    }
`

const SwiperBox = styled.div`
    width: 100%;
    height: 150px;
    background-color: #AEFF1E;
`


const Collect = () => {
    
    const navigate = useNavigate();
    return (
        <div className="collect-container">
            <div className="collect-reservation">
                <CollectBox style={{ padding: 10 }}>
                    <h1>OURS BOX</h1>
                    <p style={{ marginBottom: 100 }}>
                        포스트볼 수거하고 다양한 혜택 받자! <br />
                        골프장 점주 수거 무료! <br />
                        헌볼에서 새공으로 아워스 하세요!
                    </p>

                    <Swiper
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><SwiperBox>dsd</SwiperBox></SwiperSlide>
                        <SwiperSlide><SwiperBox>dsd</SwiperBox></SwiperSlide>
                        <SwiperSlide><SwiperBox>dsd</SwiperBox></SwiperSlide>
                        <SwiperSlide><SwiperBox>dsd</SwiperBox></SwiperSlide>
                        <SwiperSlide><SwiperBox>dsd</SwiperBox></SwiperSlide>
                        <SwiperSlide><SwiperBox>dsd</SwiperBox></SwiperSlide>
                        <SwiperSlide><SwiperBox>dsd</SwiperBox></SwiperSlide>
                        <SwiperSlide><SwiperBox>dsd</SwiperBox></SwiperSlide>
                        <SwiperSlide><SwiperBox>dsd</SwiperBox></SwiperSlide>
                    </Swiper>
                </CollectBox>
                <CollectBox color="#FFFFFF">
                    <p style={{ paddingTop: 10 }}>
                        <img src={clock} alt="" width="10px" /> 언제 수거할까요?
                    </p>
                    <input className="collect-input" type='datetime-local' />

                    <p>
                        <img src={clock} alt="" width="10px" /> 어디서 이용하세요?
                    </p>
                    <select className="collect-option" >
                        <option style={{ color: "gray" }} value="null">수거지점</option>
                        <option>ssss</option>
                    </select>

                    <p>
                        <img src={golf} alt="" width="10px" /> 로스트볼 수거량
                    </p>
                    <div className="collect-weight">
                        <button>1톤 이하</button>
                        <button>1톤 이상</button>
                        <button>2톤 이상</button>
                        <button>5톤 이상</button>
                        <p style={{ color: 'red', fontSize: 2, marginTop: 5 }}>
                            <img src={warning} alt="" width="10px" /> 1톤 이하의 볼 수거는 추가 비용이 발생합니다.
                        </p>
                    </div>

                    <div className="collect-buttonArea">
                        <button>예약 확인</button>
                        <button onClick={()=>{
                            navigate('/reservation');
                        }}>빠른 예약</button>
                    </div>
                </CollectBox>
            </div>
            <div className="event-area">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><EventCard title="event1"/></SwiperSlide>
                    <SwiperSlide><EventCard title="event1"/></SwiperSlide>
                    <SwiperSlide><EventCard title="event1"/></SwiperSlide>
                    <SwiperSlide><EventCard title="event1"/></SwiperSlide>
                    <SwiperSlide><EventCard title="event1"/></SwiperSlide>
                    <SwiperSlide><EventCard title="event1"/></SwiperSlide>
                    <SwiperSlide><EventCard title="event1"/></SwiperSlide>
                    <SwiperSlide><EventCard title="event1"/></SwiperSlide>
                    <SwiperSlide><EventCard title="event1"/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}


export default Collect;