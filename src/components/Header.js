import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from '../img/oursLogo.png';
import navLogo from '../img/nav_logo.png';

const Header = () => {
    const navigate = useNavigate();
    const handleMenuClick = (path) => {
        navigate(path) // 페이지 이동
    };
    return (<>
        {/* --------메인화면 헤더------- */}

        <div className="home-navbar">
            <div className="navbar-logo" style={{ cursor: 'pointer', width: '12%'}} onClick={() => {
                navigate('/')
            }}><img src={Logo} alt="" /></div>
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
    </>)

}


export default Header;