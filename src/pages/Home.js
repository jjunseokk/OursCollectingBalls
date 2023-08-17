import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../style/home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import emailjs from '@emailjs/browser';



import homeBack from '../img/homeBack.png';
import ecoGolfBack from '../img/ecoGolfback.png';
import ecoGolf from '../img/ecoGolf.png';
import ecoGolfText from '../img/ecoGolfText.png';
import weAre from '../img/weAre.gif';
import Line from '../img/Line.png';
import functionImg_1 from '../img/functionImg_1.png';
import functionImg_2 from '../img/functionImg_2.png';
import functionImg_3 from '../img/functionImg_3.png';
import functionImg_4 from '../img/functionImg_4.png';
import functionText_1 from '../img/functionText_1.png';
import functionText_2 from '../img/functionText_2.png';
import functionText_3 from '../img/functionText_3.png';
import functionText_4 from '../img/functionText_4.png';
import functionContent_1 from '../img/functionContent_1.png';
import functionContent_2 from '../img/functionContent_2.png';
import functionContent_3 from '../img/functionContent_3.png';
import functionContent_4 from '../img/functionContent_4.png';
import linkText_1 from '../img/linkText_1.png';
import linkText_2 from '../img/linkText_2.png';
import linkText_3 from '../img/linkText_3.png';
import linkText_4 from '../img/linkText_4.png';
import productionBg from '../img/productionBack.png';
import production_1 from '../img/production_1.png';
import production_2 from '../img/production_2.png';
import production_3 from '../img/production_3.png';
import ecoBalls from '../img/ecoBalls.png';
import ecoBallsText from '../img/ecoBallsText.png';
import rowLine from '../img/row-line.png';


const Home = () => {
    const [currentValue, setCurrentValue] = useState(0);
    // 일정구간 지나면 숫자가 촤라락
    const [count, setCount] = useState(0); // 초기값은 0입니다.
    const [showCnt, setShowCnt] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0); // scroll할 때 일정구간 계산을 담는 state

    // input
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const section3Ref = useRef(null);
    const form = useRef();

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





    const number = 2500000000;
    const duration = 2000; // 애니메이션 지속 시간 (밀리초)
    const fps = 60; // 초당 프레임 수
    const frameDuration = 1000 / fps;
    const totalFrames = duration / frameDuration;
    const frameIncrement = number / totalFrames;

    // 스크롤 이벤트
    useEffect(() => {
        const handleScroll = () => {
            const section3Top = section3Ref.current.offsetTop;
            const scroll = window.scrollY;

            setScrollPosition(scrollPosition);

            console.log("결과괎", section3Top, "<", scroll);
            if (section3Top < scroll) {
                setShowCnt(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    // 숫자 애니메이션
    useEffect(() => {
        if (showCnt) {
            const targetCount = 52500000; // 애니메이션의 최종 값입니다.
            const animationDuration = 2000; // 애니메이션의 지속 시간(밀리초)입니다.
            const frameDuration = 1000 / 60; // 1프레임의 지속 시간(밀리초)입니다.
            const totalFrames = Math.round(animationDuration / frameDuration); // 전체 프레임 수입니다.
            const countIncrement = Math.ceil(targetCount / totalFrames); // 각 프레임마다 증가할 값입니다.



            let frame = 0;
            const timer = setInterval(() => {
                frame++;
                setCount((prevCount) => {
                    if (frame === totalFrames) {
                        // 애니메이션이 끝난 후 최종 값을 설정합니다.
                        clearInterval(timer);
                        return targetCount;
                    } else {
                        // 각 프레임마다 값을 증가시킵니다.
                        return prevCount + countIncrement;
                    }
                });
            }, frameDuration);



            return () => {
                clearInterval(timer); // Clear the timer interval
            };
        }
    }, [showCnt]);


    useEffect(() => {
        if (showCnt) {
            let currentFrame = 0;
            let animationInterval;

            const animateValue = () => {
                if (currentFrame < totalFrames) {
                    animationInterval = requestAnimationFrame(animateValue);
                    currentFrame++;

                    setCurrentValue((prevValue) => prevValue + frameIncrement);
                } else {
                    setCurrentValue(number);
                }
            };

            animateValue();

            return () => {
                cancelAnimationFrame(animationInterval);
            };
        }
    }, [totalFrames, showCnt, frameIncrement]);

    const formattedValue = currentValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");


    // 핸드폰 번호 유효성 검사
    const reChangePhon = (e) => {
        const phone = e.target.value;

        setPhoneNumber(phone
            .replace(/[^0-9]/g, '') // 숫자를 제외한 모든 문자 제거
            .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`));
    }

    // 문의사항 전송버튼을 누르면 메일로 전송
    const handleSubmit = (e) => {
        e.preventDefault();

        if (phoneNumber.length >= 12) {
            emailjs.sendForm('service_7kaigvw', 'template_4vqdgvh', form.current, '8EppmrtyYZRvGZmgy')
                .then((result) => {
                    console.log(result.text);
                    alert("문의사항을 전송하였습니다. 확인 후 바로 회신드리겠습니다.");
                    setName("");
                    setPhoneNumber("");
                    setContent("");
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            alert("연락처를 확인해주세요.")
        }

    };

    return (
        <div className="home-container">

            <div className="home-main">
                <img src={homeBack} alt="" width='100%' />
                <div className="greenLine">
                    헌 볼 수거를 요청해보세요. OURS로 재탄생 됩니다. <span onClick={() => { navigate('/reservation') }}
                            style={{ color: "#00D44D", cursor: 'pointer' }}>지구를 지키러 가기  <FontAwesomeIcon icon={faCaretRight} /> </span>
                </div>
                <div className="parallax-text">
                    <div className="bannerText">
                        <h1>
                            HELLO, GREEN!
                        </h1>
                        <p>
                            "우리가 사랑하는 지구에서 골프를 계속 칠 수 있도록"
                        </p>
                    </div>

                    <FontAwesomeIcon className="downIcon" icon={faAngleDoubleDown} />
                </div>
            </div>


            <div className="home-wrap">
                <div className="home-goLink">
                    <img className="back" src={ecoGolfBack} alt="" />
                    <img className="text" src={ecoGolfText} alt="" ref={section3Ref} />
                    <img className="ball" src={ecoGolf} alt="" />
                </div>

                <div className="animationBox">
                    <div className="first-box">
                        <p>매년 유실되는 골프공</p>
                        <h1>약 <strong>{formattedValue}</strong>개 이상</h1>

                    </div>
                    <div className="second-box" >
                        <p>연간 폐 골프공으로 다시태어날 수 있는 아워스 에코볼</p>
                        <h1>약 <strong style={{ color: '#AEFF1E' }}>{count.toLocaleString()}</strong>개</h1>
                    </div>
                </div>

                <div className="WeAreOurs">
                    <div>
                        <p onClick={() => { navigate('/Ours') }}
                            style={{ color: "#00D44D", cursor: 'pointer' }}>더 알아보기 <FontAwesomeIcon icon={faCaretRight} /> </p>
                        <p className="title">YES, WE ARE OURS</p>
                        <p className="subTitle">헌 볼에서 에코볼로, 수거부터 업사이클까지</p>

                        <p className="content">
                            아워스는 지속가능한 가치를 제한합니다. <br />
                            아워스를 소비하는 것, 가장 가치있는 소비의 시작 <br />
                            아워스와 함께 인사해요! <span>HELLO, GREEN!</span>
                        </p>
                    </div>
                    {windowWidth <= 768 ? "" : <img className="Line" src={Line} alt="" />}
                    <img className="weAre" src={weAre} alt="" />
                </div>

                <div className="imgArea">
                    <div className="bottom">
                        <img src={functionImg_1} alt="" />
                        <img className="text" src={functionText_1} alt="" />
                        <img className="content" src={functionContent_1} alt="" />
                    </div>
                    <div className="top">
                        <img src={functionImg_2} alt="" />
                        <img style={{ scale: '0.8' }} className="text" src={functionText_2} alt="" />
                        <img className="content" src={functionContent_2} alt="" />
                    </div>
                    <div className="bottom">
                        <img src={functionImg_3} alt="" />
                        <img className="text" src={functionText_3} alt="" />
                        <img className="content" src={functionContent_3} alt="" />
                    </div>
                    <div className="top">
                        <img src={functionImg_4} alt="" />
                        <img className="text" src={functionText_4} alt="" />
                        <img style={{ scale: '1.2' }} className="content" src={functionContent_4} alt="" />
                    </div>
                </div>

                <div className="middleText">
                    <h1>
                        HELLO, GREEN!
                    </h1>
                    <p>
                        "우리가 사랑하는 지구에서 골프를 계속 칠 수 있도록"
                    </p>
                </div>

                <div className="linkBoxArea">
                    <div className="one">
                        <img src={linkText_1} alt="" />
                        <p className="learnMore" onClick={() => { navigate('/reservation') }}>더 알아보기 <FontAwesomeIcon icon={faCaretRight} /> </p>
                    </div>
                    <div className="two">
                        <img src={linkText_2} alt="" />
                        <p className="learnMore" onClick={() => { navigate('/OursBox') }}>더 알아보기 <FontAwesomeIcon icon={faCaretRight} /> </p>
                    </div>
                    <div className="three">
                        <img src={linkText_3} alt="" />
                        <p className="learnMore" onClick={() => { navigate('/Factory') }}>더 알아보기 <FontAwesomeIcon icon={faCaretRight} /> </p>
                    </div>
                    <div className="four">
                        <img src={linkText_4} alt="" />
                        <a className="learnMore" href="https://ours-event.com/" target="_blank" rel="noreferrer">더 알아보기 <FontAwesomeIcon icon={faCaretRight} /> </a>
                    </div>
                </div>

                <div className="productionArea">
                    <img src={productionBg} alt="" />
                    <div className="productionText">
                        <h3>OURS 제품 소개</h3>
                        <p>아워스의 100% 업사이클링으로  <br /> 지구를 지키는 방법을 직접 만나 <br /> 보세요.</p>
                    </div>
                    <div className="whiteBox">
                        <div>
                            <img src={production_1} alt="" />
                            <h1>OURS 에코볼</h1>
                        </div>
                        <div>
                            <img src={production_2} alt="" />
                            <h1>What is next?</h1>
                        </div>
                        <div>
                            <img src={production_3} alt="" />
                            <h1>What is next?</h1>
                        </div>
                    </div>
                </div>
                <div className="ecoBallsArea">
                    <img className="bg" src={ecoBalls} alt="" />
                    <img className="text" src={ecoBallsText} alt="" />
                </div>
                <div className="contactUs" id="section7-container" >
                    <div className="contact-area">
                        <h1 className="contact-title">
                            CONTACT <br />
                            <img src={rowLine} alt="line" />US
                        </h1>
                    </div>
                    <div className="contact-us">
                        <form ref={form} onSubmit={handleSubmit}>
                            <label>
                                <span>이름</span>
                                <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
                            </label>
                            <label>
                                <span>연락처</span>
                                <input type="tel" name="user_phone" maxLength='13' value={phoneNumber} onChange={(e) => reChangePhon(e)} />
                            </label>
                            <label>
                                <span>내용</span>
                                <textarea rows='20' name="message" value={content} onChange={(e) => setContent(e.target.value)} />
                            </label>
                            <div className="btnArea">
                                <button className="contact-btn" type="submit">작성</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;