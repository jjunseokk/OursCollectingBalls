import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faCaretUp, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Logo from '../img/oursLogo.png';

const Header = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false); // 햄버거 메뉴
    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleMenuClick = (path) => {
        navigate(path) // 페이지 이동
        setShowMenu(false);
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [hoveredMenu, setHoveredMenu] = useState(null);


    const handleMenuHover = (menu) => {
        setHoveredMenu(menu);
    };


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
        <>
            {windowWidth <= 1023 ? (
                <>
                    <div className="phone">
                        <div className="navbar-logo" onClick={() => {
                            navigate('/')
                        }}><img src={Logo} style={{ width: 100, marginTop: 6 }} alt="" />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: 25, cursor: 'pointer' }} onClick={() => {
                                setShowMenu(!showMenu);
                            }} />
                        </div>
                    </div>

                    <div className={showMenu ? "phone-menu phone-menuActive" : "phone-menu"}>
                        <h2>Trade</h2>
                        <ul className="tradeMenu">
                            <li onClick={() => { handleMenuClick('/reservation') }}>수거예약</li>
                            <li onClick={() => { handleMenuClick('/ReservationCheck') }}>예약확인</li>
                            <li onClick={() => { handleMenuClick('/Instruction') }}>이용안내</li>
                        </ul>
                        <ul className="mainMenu">
                            <li onClick={() => handleMenuClick('/Ours')}>아워스</li>
                            <li onClick={() => setShowSubMenu((prev) => prev === 'project' ? null : 'project')}> 프로젝트 {showSubMenu === 'project' ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
                                {showSubMenu === 'project' && (
                                    <ul className="project active">
                                        <li onClick={() => { alert("관심을 가져주셔서 감사합니다. 아직 준비중입니다.") }}>에코볼</li>
                                        <li onClick={() => { handleMenuClick('/reservation') }}>수거 프로젝트</li>
                                        <li onClick={() => { handleMenuClick('/Factory') }}>팩토리</li>
                                    </ul>
                                )}
                            </li>
                            <li onClick={() => setShowSubMenu((prev) => prev === 'platform' ? null : 'platform')}>플랫폼 {showSubMenu === 'platform' ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
                                {showSubMenu === 'platform' && (
                                    <ul className="project active">
                                        <li onClick={() => { handleMenuClick('/OursBox') }}>아워박스</li>
                                        <li onClick={() => { handleMenuClick('/reservation') }}>대용량 수거</li>
                                    </ul>
                                )}
                            </li>
                            {/* 나머지 메뉴들도 같은 패턴으로 추가 */}
                            <li onClick={() => setShowSubMenu((prev) => prev === 'campaign' ? null : 'campaign')}>캠페인 {showSubMenu === 'campaign' ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
                                {showSubMenu === 'campaign' && (
                                    <ul className="project active">
                                        <li><a href="https://ours-event.com/" target="_blank" rel="noreferrer" >대회 캠페인</a></li>
                                        <li onClick={() => { alert("관심을 가져주셔서 감사합니다. 아직 준비중입니다.") }}>사회적 캠페인</li>
                                        <li onClick={() => { alert("관심을 가져주셔서 감사합니다. 아직 준비중입니다.") }}>친환경 골프대회</li>
                                    </ul>
                                )}
                            </li>
                            {/* 나머지 메뉴들도 같은 패턴으로 추가 */}
                            <li onClick={() => handleMenuClick('/Service')}>고객지원</li>
                        </ul>
                    </div>
                </>
            ) :
                (
                    <div className="home-navbar">
                        <div className="navbar-logo" onClick={() => {
                            navigate('/')
                        }}><img src={Logo} alt="" />
                        </div>
                        <ul className="navbar-menu">
                            <li onClick={() => handleMenuClick('/Ours')}>아워스</li>
                            <li
                                onMouseEnter={() => { handleMenuHover("project") }}
                                onMouseLeave={() => { handleMenuHover(null) }}
                            >
                                프로젝트
                                <ul className={hoveredMenu === "project" ? "active" : "subMenu"}>
                                    <li onClick={() => { alert("관심을 가져주셔서 감사합니다. 아직 준비중입니다.") }}>에코볼</li>
                                    <li onClick={() => { handleMenuClick('/reservation') }}>수거 프로젝트</li>
                                    <li onClick={() => { handleMenuClick('/Factory') }}>팩토리</li>
                                </ul>
                            </li>
                            <li
                                onMouseEnter={() => { handleMenuHover("platform") }}
                                onMouseLeave={() => { handleMenuHover(null) }}
                            >
                                플랫폼
                                <ul className={hoveredMenu === "platform" ? "active" : "subMenu"}>
                                    <li onClick={() => { handleMenuClick('/OursBox') }}>아워박스</li>
                                    <li onClick={() => { handleMenuClick('/reservation') }}>대용량 수거</li>
                                </ul>
                            </li>
                            <li
                                onMouseEnter={() => { handleMenuHover("campaign") }}
                                onMouseLeave={() => { handleMenuHover(null) }}>
                                캠페인
                                <ul className={hoveredMenu === "campaign" ? "active" : "subMenu"}>
                                    <li><a href="https://ours-event.com/" target="_blank" rel="noreferrer" >대회 캠페인</a></li>
                                    <li onClick={() => { alert("관심을 가져주셔서 감사합니다. 아직 준비중입니다.") }}>사회적 캠페인</li>
                                    <li onClick={() => { alert("관심을 가져주셔서 감사합니다. 아직 준비중입니다.") }}>친환경 골프대회</li>
                                </ul>
                            </li>
                            <li onClick={() => handleMenuClick('/Service')}>고객지원</li>
                        </ul>
                        <div className="outSite">
                            <FontAwesomeIcon className="cart" icon={faCartShopping} />
                            <ul className="trade"
                                onMouseEnter={() => { handleMenuHover("bar") }}
                                onMouseLeave={() => { handleMenuHover(null) }}>
                                <span className="menuBar">
                                    <FontAwesomeIcon icon={faBars} />
                                </span>

                                <ul className={hoveredMenu === "bar" ? "tradeActive" : "tradeUl"}>
                                    <li onClick={() => { handleMenuClick('/reservation') }}>수거예약</li>
                                    <li onClick={() => { handleMenuClick('/ReservationCheck') }}>예약확인</li>
                                    <li onClick={() => { handleMenuClick('/Instruction') }}>이용안내</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                )
            }
        </>
    )

}


export default Header;