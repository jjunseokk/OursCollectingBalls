import React from "react";

import instagram from '../img/instar.png';
import blog from '../img/blog.png';
import youtube from '../img/youtube.png';
import logo from '../img/footerLogo.png';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const Navigate = (path) => {
        navigate(path)
    }
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <img src={logo} alt="" />
            </div>
            <div className="footer-infor">
                <p> <span onClick={() => { Navigate('/About') }}>회사소개</span> ⎮ <span onClick={() => { Navigate('/TermsOfUse') }}>이용약관</span>⎮ <span onClick={() => { Navigate('/Privacy') }}>개인정보 처리방침</span> ⎮ <span onClick={() => { Navigate('/RefuseCollectEmail') }}>이메일무단수집거부</span></p>
                <p>두드림진 ⎮ 경기도 성남시 중원구 상대원동 442-17 쌍용 IT 트윈타워 A동 701호(성남플랫폼센터)</p>
                <p>대표이사 박진홍 ⎮ 사업자번호 638-86-01093 ⎮ rnflzhd123@naver.com</p>
                <p>tel ⎮ 02-2070-5009 Fax ⎮ 0303-3445-0140</p>
            </div>
            <div className="footer-link">
                <a href="https://www.instagram.com/ours_ecoproject/"><img src={instagram} alt="" /></a>
                <a href="https://blog.naver.com/xperon"><img src={blog} alt="" /></a>
                <a href="https://www.youtube.com/@xperontv8278"><img src={youtube} alt="" /></a>
            </div>
        </div>
    )
}


export default Footer;