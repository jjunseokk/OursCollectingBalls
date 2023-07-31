import React, { useState } from "react";
import '../style/service.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

import test from '../img/testimg.png';
import Inquiry from '../img/Inquiry.png';
import service from '../img/service.png';
import Ours_1 from '../img/weAreOurs1.png';
import Ours_2 from '../img/weAreOurs2.png';
import Ours_3 from '../img/weAreOurs3.png';

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
&:nth-child(7){
    border-bottom: none;
}
`

const Service = () => {


    return (
        <div className="service-container">
            <div className="service-title">
                <div>
                    <h1 style={{ fontWeight: 'bold' }}>고객센터</h1>
                    <h2 style={{ fontWeight: 'bold' }}>
                        OURS TRADING 고객센터입니다 <br />
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
                <div className="event-img">
                    <EventBox src={Ours_1} />
                    <EventBox src={Ours_2} />
                    <EventBox src={Ours_3} />
                </div>
            </div>
            <div className="notice-area">
                <div className="notice-title">
                    <p>보도자료</p>
                </div>
                <div className="notice">
                    <p><a href="https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202301190182" rel="noopener noreferrer" target="_blank">친환경 플랫폼회사 두드림진㈜ "헌 골프공에서 신재생 의류용 원사 추출"</a></p>
                    <p><a href="https://www.etnews.com/20230120000061" rel="noopener noreferrer" target="_blank">두드림진 “골프공서 섬유 뽑는다”</a></p>
                    <p><a href="http://www.fashionbiz.co.kr/article/view.asp?cate=1&sub_num=&idx=198916" rel="noopener noreferrer" target="_blank">GBGH, 'FAR5' 자원 순환 친환경 골프공 화제</a></p>
                    <p><a href="https://www.kdfnews.com/news/articleView.html?idxno=99599" rel="noopener noreferrer" target="_blank">대세 스포츠 골프도 에코바람, 국내 유일 에코 골프공 'FAR5' 출시 [KDF golf]</a></p>
                </div>
            </div>
            <div className="counseling-area">
                <div className="counseling-title">
                    <p>더 자세한 상담이 필요하신가요?</p>
                    <button><img src={Inquiry} width='20%' alt="" /> <a href="https://pf.kakao.com/_xnGFTT">1:1 문의</a></button>
                </div>
                <div className="counseling" style={{ padding: 40 }}>
                    <p style={{ fontSize: '1em', color: '#616161', margin: '10px 0px' }}>xperon 상담 운영시간</p>
                    <p style={{ fontWeight: 'bold', margin: '10px 0px' }}>전화 <span style={{ margin: '5px 0px 5px 5px' }}>031-742-5009</span> <span style={{ fontSize: '0.7em', marginLeft: '4%', margin: '5px 0px', color: '#616161' }}>평일 09:00~18:00 (공휴일 휴무)</span></p>
                    <p style={{ fontWeight: 'bold', margin: '5px 0px' }}>채팅(카카오톡) <span style={{ fontSize: '0.7em', marginLeft: '4%', margin: '5px 0px', color: '#616161' }}>평일 09:00~18:00 (공휴일 휴무)</span></p>

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
        <div style={{ borderRadius: '40px', position: 'relative' }}>
            <img style={{ width: '100%', height: 300, borderRadius: 40 }} src={props.src} alt="" />
        </div>
    )
}
export default Service;