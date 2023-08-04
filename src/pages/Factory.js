import React from 'react';
import '../style/factory.scss';


import factoryBack from '../img/factoryBack.png';
import factoryText from '../img/factoryText.png';

import stepOne from '../img/STEP 1.png';
import Line from '../img/stpeLine.png';

import material_1 from '../img/material_1.png';
import material_2 from '../img/material_2.png';
import material_3 from '../img/material_3.png';

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
                        <img src={stepOne} alt=''/>
                        <img src={Line} alt=''/>
                    </div>
                    <p>헌 골프공의 소재화 그리고 에코볼 제작</p>

                </div>
            </div>
        </div>
    )
}

export default Factory