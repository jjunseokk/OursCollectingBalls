import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from '../img/oursLogo.png';

const Header = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuClick = (path) => {
        navigate(path) // 페이지 이동
        setShowMenu(false);
    };

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
        <>
            {windowWidth <= 1023 ? (
                <>
                    <div className="home-navbar phone">

                        <div className="navbar-logo" style={{ cursor: 'pointer', width: '12 %' }} onClick={() => {
                            navigate('/')
                        }}><img src={Logo} style={{width : 100, marginTop : 6}} alt="" />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: 25, cursor:'pointer' }} onClick={() => {
                                setShowMenu(!showMenu);
                            }} />
                        </div>
                    </div>
                    <div className={showMenu ? "phone-menu active" : "phone-menu"}>
                        <p onClick={() => handleMenuClick('/reservation')}>예약</p>
                        <p onClick={() => handleMenuClick('/ReservationCheck')}>예약확인</p>
                        <p onClick={() => handleMenuClick('/Instruction')}>이용안내</p>
                        <p onClick={() => handleMenuClick('/Service')}>고객센터</p>
                    </div>
                </>
            ) :
                (
                    <div className="home-navbar">
                        <div className="navbar-logo" style={{ cursor: 'pointer', width: '12%' }} onClick={() => {
                            navigate('/')
                        }}><img src={Logo} alt="" />
                        </div>
                        <ul className="navbar-menu">
                            <li onClick={() => handleMenuClick('/reservation')}>예약</li>
                            <li onClick={() => handleMenuClick('/ReservationCheck')}>예약확인</li>
                            <li onClick={() => handleMenuClick('/Instruction')}>이용안내</li>
                            <li onClick={() => handleMenuClick('/Service')}>고객센터</li>
                        </ul>
                        <div className="outSite">
                            <span><a href="http://service.qving.co.kr/">큐빙</a></span>
                            <span><a href="http://www.xperon.co.kr/">엑스페론</a></span>
                            <span><a href="http://dodreamjin.com/">두드림진</a></span>
                        </div>
                    </div>
                )
            }
        </>
    )

}


export default Header;