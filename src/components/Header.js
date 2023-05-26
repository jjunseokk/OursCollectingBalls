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
        <div className="home-header">
            <div>
                <span onClick={() => handleMenuClick('/Service')}>FAQ</span>
                <span onClick={()=>{window.location.href='https://pf.kakao.com/_xnGFTT'}}>1:1 문의</span>
            </div>
            <div>
                <a href="https://theours.imweb.me/"><img src={navLogo} alt="" /></a>
            </div>
            <div>
                <span><a href="http://service.qving.co.kr/">큐빙</a></span>
                <span><a href="http://www.xperon.co.kr/">엑스페론</a></span>
                <span><a href="http://dodreamjin.com/">두드림진</a></span>
            </div>
        </div>
        <div className="home-navbar">
            <div className="navbar-logo" style={{ cursor: 'pointer', width: '15%', marginLeft: '10%', padding: '24px 5px' }} onClick={() => {
                navigate('/')
            }}><img src={Logo} alt="" width='100%' /></div>
            <ul className="navbar-menu">
                <li onClick={() => handleMenuClick('/reservation')}>예약</li>
                <li onClick={() => handleMenuClick('/ReservationCheck')}>예약확인</li>
                <li onClick={() => handleMenuClick('/Instruction')}>이용안내</li>
                <li onClick={() => handleMenuClick('/Service')}>고객센터</li>
                <li onClick={() => handleMenuClick('/')}>이벤트</li>
            </ul>
        </div>
    </>)

}


export default Header;