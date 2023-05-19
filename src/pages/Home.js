import React from "react";
import '../style/home.scss';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const LinkBox = styled.div`
    background-color: ${props => props.color};
    width: 45%;
    height: 350px;
    padding: 20px;
    position: relative;
    padding: 20px;
    cursor: pointer;
`

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="home-wrap">
                <p>
                    <strong>로스트 볼 수거 신청하고</strong> <br />
                    포인트로 새공 구매하자!
                </p>
                <div className="home-goLink">
                    <div>
                        <LinkBox color="white" onClick={()=>{
                            navigate('/reservation');
                        }}>
                            <p>
                                로스트볼 <FontAwesomeIcon icon={faArrowRight} /> <br />
                                수거 신청
                            </p>
                        </LinkBox>
                        <LinkBox color="#AEFF1E">
                            <p>
                                이벤트 <FontAwesomeIcon icon={faArrowRight} />
                            </p>
                            <p style={{ position: 'absolute', bottom: 20 }}>
                                헌볼 줄게 새볼 다오
                            </p>
                        </LinkBox>
                    </div>
                </div>
                <div className="home-area">

                </div>
                <div className="home-counseling">
                    <p>
                        <strong>OURS BOX 이용에 궁금한 점이 있나요?</strong> <br /><br />
                        온라인 상담으로 문제를 해결해 보세요.
                    </p>
                    <button><a href="https://pf.kakao.com/_xnGFTT">고객센터</a></button>
                </div>
            </div>
        </div>
    )
}


export default Home;