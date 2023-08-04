import React, { useState, useEffect } from 'react'
import '../style/ours.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import oursBack from '../img/oursBack.png';
import oursMobileBack from '../img/oursMobile.png';
import oursText from '../img/oursText.png';
import ours from '../img/ours.png';

import technology_1 from '../img/Technology_1.png';
import technology_2 from '../img/Technology_2.png';
import technology_3 from '../img/Technology_3.png';
import MobileTechnology_1 from '../img/MobileTechnology_1.png';
import MobileTechnology_2 from '../img/MobileTechnology_2.png';
import MobileTechnology_3 from '../img/MobileTechnology_3.png';

import campaign_1 from '../img/campaign1.png';
import campaign_2 from '../img/campaign2.png';

import oursProcess from '../img/oursProcess.png';
import content from '../img/contact.png';

import oursSlider1 from '../img/oursSlider1.png';
import oursSlider2 from '../img/oursSlider2.png';
import oursSlider3 from '../img/oursSlider3.png';
import oursSlider4 from '../img/oursSlider4.png';
import oursSlider5 from '../img/oursSlider5.png';

import campaignText_1 from '../img/campaignText1.png';
import campaignText_2 from '../img/campaignText2.png';
import dot from '../img/dot.png';

import map from '../img/map.png';

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "50px",

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: "10px",

            }
        },
    ]
};

const Ours = () => {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {

            const handleResize = () => {
                setWindowSize({
                    // 현재 브라우저의 가로, 세로 길이로 셋팅
                    width: window.innerWidth,
                    height: window.innerHeight,

                });
            }

            // resize 이벤트가 발생할 때 handleResize 함수가 실행되도록 한다.
            window.addEventListener("resize", handleResize);

            // 초기값을 설정할 수 있도록 handleResize 함수를 한 번 실행시킨다.
            handleResize();

            // 이벤트 리스너를 제거하여 이벤트 리스너가 리사이즈될 때마다 계속해서 생겨나지 않도록 처리한다. (clean up)
            return () => window.removeEventListener("resize", handleResize);
        } else {
            return () => window.removeEventListener("resize", () => {
                return null
            });
        }
    }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행

    console.log(windowSize);
    return (
        <div className='oursContainer' >
            <div className='banner'>
                {windowSize.width <= 494 ? <img className='background' src={oursMobileBack} alt='' /> : <img className='background' src={oursBack} alt='' />}
                <div className='bannerContent'>
                    <img src={oursText} alt='' />
                    <img src={ours} alt='' />
                </div>
            </div>
            <div className='oursWrap'>
                {windowSize.width <= 494 ? (
                    <div className='MobileTechnologyArea'>
                        <div className='MobileTechnology1'>
                            <img src={MobileTechnology_1} alt='' />
                        </div>
                        <div className='MobileTechnology2'>
                            <img src={MobileTechnology_2} alt='' />
                        </div>
                        <div className='MobileTechnology3'>
                            <img src={MobileTechnology_3} alt='' />
                        </div>

                    </div>
                ) : (
                    <div className='technologyArea'>
                        <img className='technology1' src={technology_1} alt='' />
                        <img className='technology2' src={technology_2} alt='' />
                        <img className='technology3' src={technology_3} alt='' />
                    </div>
                )}

                <div className='platform'>
                    {windowSize.width <= 494 ? (<div className='title'></div>) : (
                        <div className='title'>
                            <hr className='line' />
                            <div>
                                <h2>아워박스 플랫폼</h2>
                                <p>전국 골프장에서 만나는 <span>골프공 교환 플랫폼</span></p>
                            </div>
                        </div>
                    )}

                    <div className='campaignArea' style={{ height: `${windowSize.width / 1.8}px` }}>
                        <img className='campaign1' src={campaign_1} alt='' />
                        <img className='campaign2' src={campaign_2} alt='' />
                        <div>
                            <p>
                                지속가능한 미래의 골프문화를 위한 브랜드 <br />
                                OURS의 ESG를 통해 실천하는 새로운 ECO GOLF LIFESTYLE
                            </p>
                            <p className='re'>RE:100 CAMPAIGN</p>
                        </div>
                    </div>
                    <div className='process' style={{ height: `${windowSize.width >= 1800? `${windowSize.width / 1.5}px`:`${windowSize.width / 1.2}`}px` }}>
                        <h1>OURS BOX PROCESS</h1>
                        <p>
                            간단하게, 그러나 가치있게! <br />
                            친환경 골프의 시작을 골퍼들과 함께 합니다.
                        </p>
                        <img className='oursBox' src={oursProcess} alt='' />
                        <img className='oursBack' src={content} alt='' />
                    </div>
                    <div className='oursSlick'>
                        <h1>OURS BOX CAMPAIGN</h1>
                        <p>전국 골프장에서 만나는 골프공 교환 플랫폼</p>
                        <Slider {...settings}>
                            <div>
                                <img src={oursSlider1} alt='' />
                            </div>
                            <div>
                                <img src={oursSlider2} alt='' />
                            </div>
                            <div>
                                <img src={oursSlider3} alt='' />
                            </div>
                            <div>
                                <img src={oursSlider4} alt='' />
                            </div>
                            <div>
                                <img src={oursSlider5} alt='' />
                            </div>
                        </Slider>
                    </div>
                    <div className='campaign'>
                        <div>
                            <img src={campaignText_1} alt='' />
                        </div>
                        <div className='campaignText2'>
                            <img src={campaignText_2} alt='' />
                        </div>
                        <img className='dot' src={dot} alt='' />
                        <div className='campaignText'>
                            <h1>OURS 이제는 필수 캠페인으로!</h1>
                            <p>OURS는 전국 골프장과 기업, 정부와 함께하는 공동체 캠페인 입니다.</p>
                        </div>
                        <div className='campaignMap'>
                            <img src={map} alt='' />
                            <div>
                                <h4>OURS BOX 서울/경기지역 배치 골프장 LIST</h4>
                                <p>안양CC/ 인서울27골프클럽 / 태릉체력단련장/ 고양컨트리클럽 / 뉴코리아컨트리클럽 /서울한양컨트리클럽 / 일산 스프링힐스컨트리클럽 / 올림픽컨트리클럽 / 한양파인컨트리클럽 / 123골프클럽/ 강남300컨트리클럽 / 곤지암골프클럽 / 그린힐컨트리클럽 / 남촌골프클럽 / 뉴서울컨트리클럽 / 서창퍼블릭골프클럽/이스트밸리컨트리클럽/ 중부컨트리클럽 / 큐로컨트리클럽 / 안양CC / 88 CC / 골드 CC / 글렌로스 CC / 남부 CC / 레이크사이드 CC / 레이크힐스용인 CC / 블루원용인 CC / 써닝포인트 CC세현 CC / 서서울 CC / 서원밸리 CC / 서원힐스 CC / 스마트KU골프파빌리온 / 타이거 CC / 파주 CC / 노스팜CC / 제이퍼플릭 G.C / 남양주 CC / 비전힐스 CC /양주 CC / 해비치 CC / 김포 씨사이드 CC / 레이크우드 CC / 송추 CC / 안성 베네스트 CC / 골프존 카운티 안성 W / 마에스트로 CC / 신안 CC / 아덴힐 CC / 에덴블루 CC /파인크리크CC / 골프존카운티 안성H / 골프존카운티 안성Q / 루나힐스 안성 / 안성CC / 윈체스트CC / 뉴스프링빌 CC / 더반 CC / 마이다스 CC / 블랙스톤이천 CC /비에비스타 CC / 이천 CC / 사우스스프링 / 화천스 CC / 더크로스비CC / 에이치원골프클럽 / 웰링턴CC / 스카이밸리 CC / 자유 CC / 트리니티CC / 이포CC /블루헤런CC / 360도CC / 스카이밸리CC / 여주신라CC / 캐슬파인CC / 여주썬밸리CC / 소피아그린CC / 페럼CC / 렉스필드CC / 세라지오CC / 해슬리 나인브릿지 /여주 금강 / 아리지CC / 빅토리아CC / 솔모로CC / 티클라우드 CC / 청북 CC / 베어크리크 CC / 포천힐스 CC / 대유몽베르 / 필로스CC / 락가든CC / 포천아도니스 /일동레이크 / 포레스트힐CC / 샴발라CC / 푸른솔포천CC / 참밸리CC / 리베라 CC / 라비돌리조트 CC / 링크나인 GC / 발리오스 CC / 화성 GC / 가평 베네스트 CC / 리앤리 CC / 썬힐CC / 베뉴지CC / 크리스탈밸리CC / 프리스틴밸리CC / 아난티서울CC / 남춘천CC / 더플레이어스GC / 라데나GC / 베어크리크 춘천 / 라비에벨CC /로드힐스 골프&리조트 / 스프링베일GC / 오너스GC / 제이드팰리스GC / 파가니카CC / 휘슬링락CC</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ours