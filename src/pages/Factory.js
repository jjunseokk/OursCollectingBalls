import React from 'react';
import '../style/factory.scss';


import factoryBack from '../img/factoryBack.png';
import factoryText from '../img/factoryText.png';

import stepOne from '../img/STEP 1.png';
import stepTwo from '../img/STEP 2.png';
import Line from '../img/stepLine.png';

import material_1 from '../img/material_1.png';
import material_2 from '../img/material_2.png';
import material_3 from '../img/material_3.png';

import circularEconomy from '../img/circularEconomy.png';

import factoryProcess from '../img/factoryProcess.png';

import stepTwo_1 from '../img/stepTwo_1.png';
import stepTwo_2 from '../img/stepTwo_2.png';
import stepTwo_3 from '../img/stepTwo_3.png';

import oneText from '../img/oneText.png';
import twoText from '../img/twoText.png';
import threeText from '../img/threeText.png';

import dot from '../img/dot.png';
import oursCycle from '../img/oursCycle.png';

const Factory = () => {
    return (
        <div className='factoryContainer'>
            <div className='banner'>
                <img src={factoryBack} alt=' ' />
                <img className='factoryText' src={factoryText} alt='' />
            </div>
            <div className='factoryWrap'>
                <div className='stepOne'>
                    <div className='stepTitle'>
                        <img src={stepOne} alt='' />
                        <img src={Line} alt='' />
                    </div>
                    <h3 className='stepSubTitle'>헌 골프공의 소재화 그리고 에코볼 제작</h3>
                    <div className='stepPartOne'>
                        <div>
                            <h3>01 레이어 분리</h3>
                            <p>커버와 코어 분리, <span>각 소재 분리화 진행</span></p>
                        </div>
                        <img src={material_1} alt='' />
                    </div>
                    <div className='stepPartOne'>
                        <img src={material_2} alt='' />
                        <div>
                            <h3>02 헌 골프공의 소재화</h3>
                            <p>OURS 특허기술로 <span>헌 골프공의 소재화</span>(원재료화)</p>
                        </div>
                    </div>
                    <div className='stepPartOne'>
                        <div>
                            <h3>03 에코볼의 탄생</h3>
                            <p>OURS의 소재와 신소재로 만들어진 <br /> <span>E-CORE / E-COVER</span></p>
                        </div>
                        <img src={material_3} alt='' />
                    </div>
                </div>
                <div className='circularEconomy'>
                    <img className='Text' src={circularEconomy} alt='' />
                    <h4>친환경 골프의 완성을 향해</h4>
                    <p>
                        코어와 커버를 분리, 원재료화 시키는 작업을 통해 <br />
                        <span>100% 에코볼로 리사이클링</span> 되는 OURS 프로그램.
                    </p>
                    <img className='process' src={factoryProcess} alt='' />
                </div>
                <div className='stepTwo'>
                    <div className='stepTitle'>
                        <img src={stepTwo} alt='' />
                        <img src={Line} alt='' />
                    </div>
                    <h3 className='stepSubTitle'>한 걸음 더 나아가 가치를 위한 연구</h3>
                    <div className='imgArea'>
                        <div className='one'>
                            <img src={stepTwo_1} alt='' />
                            <img className='text' src={oneText} alt='' />
                        </div>
                        <div className='two'>
                            <img src={stepTwo_2} alt='' />
                            <img className='text' src={twoText} alt='' />
                        </div>
                        <div className='three'>
                            <img src={stepTwo_3} alt='' />
                            <img className='text' src={threeText} alt='' />
                        </div>
                    </div>
                    <img className='dot' src={dot} alt='' />
                    <h1 className=''>
                        헌 골프공 100% 재활용 <br />
                        아이오노머(ionomer)를 추출하는 기술 개발
                    </h1>
                    <p>
                        두드림진만의 신기술로 헌 골프공에서 추출된 아이오노머로 새로운 친환경 원사를 추출 <br />
                        기성볼과 같은 퍼포먼스의 ‘ECO-BALL’ <br />
                        <span>골프시장의 선순환 구조를 만드는 프로젝트.</span> <br />
                        깨어 있는 모든 골퍼들과 소통하는 New Millennial Eco Lifestyle Brand <br />
                    </p>
                    <img className='cycle' src={oursCycle} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Factory