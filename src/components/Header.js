import React from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const handleMenuClick = (path) => {
        navigate(path) // 페이지 이동
        window.location.reload(); // 새로고침
    };
    return (<>
        {/* --------메인화면 헤더------- */}
        <div className="home-header">
            <div>
                <span onClick={() => handleMenuClick('/collect')}>수거신청</span>
                <span>1:1 문의</span>
            </div>

            <div>
                <span><a href="http://service.qving.co.kr/">큐빙</a></span>
                <span><a href="http://www.xperon.co.kr/">엑스페론</a></span>
                <span><a href="http://dodreamjin.com/">두드림진</a></span>
            </div>
        </div>
        <div className="home-navbar">
            <div className="navbar-logo" style={{ cursor: 'pointer' }} onClick={() => {
                navigate('/')
            }}>로고 영역</div>
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