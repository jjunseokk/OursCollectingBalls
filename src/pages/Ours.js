import React, { useEffect, useState } from 'react';
import '../style/event.scss';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faArrowRight, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import eventBanner from '../img/eventBanner.png';
import eventBannerText from '../img/eventBannerText.png';
import businessText from '../img/businessText.png';
import businessImg_1 from '../img/business_1.png';
import businessImg_2 from '../img/business_2.png';
import businessImg_3 from '../img/business_3.png';
import businessText_1 from '../img/business_Text_1.png';
import businessText_2 from '../img/business_Text_2.png';
import businessText_3 from '../img/business_Text_3.png';
import helloGreen from '../img/helloGreen.png';
import helloText from '../img/helloText.png';
import contact from '../img/contact.png';
import Cycle from '../img/cycleImg.png';
import management from '../img/management.png';
import eventBannerText2 from '../img/eventBannerText2.png';
import Logo from '../img/oursLogo.png';
import slogan from '../img/slogan.png';

const Ours = () => {
    const businessBox = [
        {
            backSrc: businessImg_1,
            textSrc: businessText_1,
            UrlSrc: "/reservation",
            alt: 'Image 1',
        },
        {
            backSrc: businessImg_2,
            textSrc: businessText_2,
            alt: 'Image 2',
            UrlSrc: '/Event'
        },
        {
            backSrc: businessImg_3,
            textSrc: businessText_3,
            UrlSrc: "/Factory",
            alt: 'Image 3',
        },
    ]

    const navigate = useNavigate();

    const [isBusinessTextVisible, setIsBusinessTextVisible] = useState(false);
    // 스크롤 시 숫자 증가를 위한 상태 변수
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const targetValue1 = 100; // 목표치 1: 100%
    const targetValue2 = 2500000000; // 목표치 2: 2,500,000,000
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleScroll = () => {
            const businessTextElement = document.querySelector('.showLine');
            if (businessTextElement) {
                const rect = businessTextElement.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                setIsBusinessTextVisible(isVisible);
            }
        };

        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // 스크롤 이벤트 리스너 추가
        const handleScroll = () => {
            const showAnimationElement = document.querySelector('.showAnimation');
            if (showAnimationElement) {
                const rect = showAnimationElement.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

                // 스크롤이 .showAnimation에 도달하면 숫자를 올리는 애니메이션 시작
                if (isVisible && counter1 < targetValue1) {
                    // 0부터 목표치까지 1씩 증가시키며 애니메이션 효과 구현
                    const interval1 = setInterval(() => {
                        setCounter1((prevCounter) => {
                            const increment = 1; // 증가량
                            const nextCounter = prevCounter + increment;
                            // 목표치 이상이면 목표치로 설정하고 애니메이션 종료
                            if (nextCounter >= targetValue1) {
                                clearInterval(interval1);
                                return targetValue1;
                            }
                            return nextCounter;
                        });
                    }, 50); // 10ms마다 숫자 증가 (숫자 증가 속도 조절 가능)
                }

                // 스크롤이 .showAnimation에 도달하면 숫자를 올리는 애니메이션 시작
                if (isVisible && counter2 < targetValue2) {
                    // 0부터 목표치까지 1씩 증가시키며 애니메이션 효과 구현
                    const interval2 = setInterval(() => {
                        setCounter2((prevCounter) => {
                            const increment = 1000000; // 증가량 (25억)
                            const nextCounter = prevCounter + increment;
                            // 목표치 이상이면 목표치로 설정하고 애니메이션 종료
                            if (nextCounter >= targetValue2) {
                                clearInterval(interval2);
                                return targetValue2;
                            }
                            return nextCounter;
                        });
                    }, 0.1); // 10ms마다 숫자 증가 (숫자 증가 속도 조절 가능)
                }
            }
        };

        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [counter1, counter2]);



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
        <div className='eventContainer'>
            <div className='banner' >
                <img src={eventBanner} alt='' width='100%' height="100%" />
                <div className='event'>
                    <img className='text' src={eventBannerText} alt='' />
                    <img style={{ marginTop: 80 }} className='text' src={eventBannerText2} alt='' />
                </div>
                <FontAwesomeIcon className='down' icon={faAngleDoubleDown} />
            </div>
            <div className='EventWrap'>
                <div className='oursMission'>
                    <span>OURS MISSION</span>
                    <img src={Logo} alt='' />
                    <div className='greenLine'>
                        <p>
                            폐 골프공은 완전 분쇄하여 완벽한 새 공을 만들어내는 특허 받은 재생산 기술을 통해, {windowWidth <= 390 ? null : <br />}
                            무분별하게 발생하는 로스트볼로 인한 자연오염을 방지하는{windowWidth <= 390 ? null : <br />}
                            New Millennial Eco Lifestyle GOLF BRAND
                        </p>
                    </div>
                </div>
                <div className='oursMission'>
                    <span>OURS SLOGAN</span>
                    <img src={slogan} alt='' />
                    <div className='greenLine'>
                        <p>
                            OURS의 슬로건 HELLO, GREEN은  “모두 자연에서 만나자” 라는 뜻과{windowWidth <= 390 ? null : <br />}
                            자연을 상징하는 GREEN임과 동시에 골프의 GREEN으로{windowWidth <= 390 ? null : <br />}
                            중의적 표현을 담고 있습니다.
                        </p>
                    </div>
                </div>
                <div className='oursBusiness'>
                    <div className='businessText'>
                        <h1>친환경 순환 골프 비즈니스</h1>
                        <h1><img src={businessText} alt='' />의 기술은</h1>
                        <h1><span className={isBusinessTextVisible ? 'showLine active' : 'showLine'}>새로운 친환경 골프 시장</span>을 만듭니다.</h1>
                    </div>
                    <div className='businessImg'>
                        {businessBox.map((item, index) => (
                            <div className='ImgBox' key={index}>
                                <img className='back' src={item.backSrc} alt='' />
                                <img className='text' src={item.textSrc} alt='' />
                                <p onClick={() => { navigate(item.UrlSrc) }} className='SeeMore'>자세히 보기 <FontAwesomeIcon icon={faArrowRight} /></p>
                            </div>
                        ))}
                    </div>
                    <div className='businessHello'>
                        <img src={helloGreen} alt='helloGreen' width='100%' />
                        <div className='contact'>
                            <img src={helloText} alt='helloText' />
                            <button><a href='http://52.78.112.88/'>자세히 보기</a> <FontAwesomeIcon icon={faCaretRight} /></button>
                        </div>
                    </div>
                    <div className='OursEnvironment'>
                        <h1>
                            <img src={businessText} alt='' />를 통해 <br />
                            변경되는 환경
                        </h1>
                        <div className='showAnimation'>
                            <p>매년 유실되는 골프공</p>
                            <h1>{counter2.toLocaleString()}개 +</h1>
                            <hr />
                            <p>OURS 재활용</p>
                            <h1 className='pen'>{counter1.toLocaleString()}%</h1>
                            <hr />
                        </div>
                    </div>
                    <div className='businessContact'>
                        <h1>OURS의 친환경 골프란?</h1>

                        <p>
                            OURS는 소비에서 폐기로 끝나는 시장이 아닌 소비에서 수거, 리싸이클링을 <br />
                            통한 다시 재소비로 이루는 친환경 순환경제 골프시장을 목표로 합니다.<br />
                            <br />
                            순 환경제의 핵심은 헌 골프공을 수거하여 <br />
                            '100% 재활용을 하는가, 0% 버려지는 것은 없는가' <br />
                            이를 위해 인공지능 및 빅데이터와 자체적인 기술을 통해, ECO GOLF를 구축합니다.
                        </p>
                        <img src={contact} alt='contact' />
                    </div>
                    <img src={Cycle} alt='' width='100%' />
                    <img src={management} alt='' width='100%' />

                </div>
            </div>

        </div>
    )
}

export default Ours;