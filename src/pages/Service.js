import React, { useState } from "react";
import '../style/service.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

import test from '../img/testimg.png';
import Inquiry from '../img/Inquiry.png';
import service from '../img/service.png';


const Active = styled.div`
padding: 20px;
display: block;
`
const AccordionText = styled.div`
display: none;
`
const QuestionBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #C5C5C5;
padding: 20px;
`

const Service = () => {


    return (
        <div className="service-container">
            <div className="service-title">
                <div>
                    <h1 style={{ fontWeight: 'bold' }}>고객센터</h1>
                    <h2 style={{ fontWeight: 'bold' }}>
                        OURS BOX 고객센터입니다 <br />
                        무엇을 도와드릴까요?
                    </h2>
                </div>
                <img style={{ width: '30%', marginRight: 40 }} src={service} alt="" />
            </div>
            <div className="question-area">
                <div className="question-title">
                    <p>자주 찾는 질문을 모아봤어요</p>
                </div>
                <div className="question">
                    <Accordion
                        title="수거신청 시, 몇일 이내 전화가 오나요?"
                        text="영업일 기준 3일 이내로 해피콜이 갑니다."
                    />
                    <Accordion
                        title="예약확인 및 예약취소는 어떻게 하나요?"
                        text="예약내역에서 취소하시거나, 해피콜 시 취소해주시면 됩니다."
                    />
                    <Accordion
                        title="수거 기준이 있나요?"
                        text="신청자격 보시면 유무료 기준이 나와있습니다."
                    />
                    <Accordion
                        title="수거 후 선별 기준이 무엇인가요?"
                        text="수거된 볼의 상태에 따라 등급을 나누어 보상을 해드리고 있습니다. S급부터~D급까지 선별되며 C-D급은 보상 정책에는 포함이 되지않고 무료로 폐기처리만 해드립니다."
                    />
                </div>
            </div>
            <div className="event-area">
                <div className="event-title">
                    <p>We are OURS</p>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                    <EventBox src={test} />
                    <EventBox src={test} />
                    <EventBox src={test} />
                </div>
            </div>
            <div className="notice-area">
                <div className="notice-title">
                    <p>알려드립니다</p>
                </div>
                <div className="notice">
                    <Accordion
                        title="회원정보 유효기간 연장 쿠폰 발행지연 안내"
                        text="예약취소는 고객센터에 예약 취소는 고객선터에"
                    />
                </div>
            </div>
            <div className="counseling-area">
                <div className="counseling-title">
                    <p>더 자세한 상담이 필요하신가요?</p>
                    <button><img src={Inquiry} width='20%' alt="" /> <a href="https://pf.kakao.com/_xnGFTT">1:1 문의</a></button>
                </div>
                <div className="counseling" style={{ padding: 20 }}>
                    <p style={{ fontSize: '0.5em', color: '#616161', margin: '5px 0px' }}>xperon 상담 운영시간</p>
                    <p style={{ fontWeight: 'bold' }}>전화 <span style={{ margin: '5px 0px 5px 5px' }}>031-742-5009</span></p>
                    <p style={{ fontWeight: 'bold', margin: '5px 0px' }}>채팅(카카오톡)</p>
                    <p style={{ fontSize: '0.7em', marginLeft: '4%', margin: '5px 0px' }}>평일 09:00~18:00 (공휴일 휴무)</p>
                </div>
            </div>
        </div>
    )
}

const Accordion = (props) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <QuestionBox onClick={() => { setShow(!show) }} >
                <p>{props.title}</p>
                {show ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}
            </QuestionBox>
            {show ? <Active><p style={{ padding: 20 }}>{props.text}</p></Active> : <AccordionText><p>{props.text}</p></AccordionText>}
        </>
    )
}

const EventBox = (props) => {
    return (
        <div style={{borderRadius : '40px', position : 'relative'}}>
            <img style={{ width: '100%', height : 300,borderRadius : 40 }} src={props.src} alt="" />
            <div className="eventBox" >
                <p>응원 멘트 달고 경품 신청하세요</p>
            </div>
        </div>
    )
}
export default Service;