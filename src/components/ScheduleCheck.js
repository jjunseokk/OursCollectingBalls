import React, { useState, useEffect,  } from "react";
import '../style/reservation.scss';

import { useDispatch } from 'react-redux'
import { changeState } from "../redux/store";
import { serviceState } from "../redux/store";

const ScheduleCheck = () => {
    // 이용약관 저장 state
    const [agreements, setAgreements] = useState({
        allChecked: false,
        agreement1: false,
        agreement2: false,
    });
    const dispatch = useDispatch();

    // form데이터 저장 state
    const [formState, setFormState] = useState({
        name: '',
        phoneNumber: '',
        inquiry: '',
    });


    //form 핸들러
    const handleFormChange = (event) => {
        const { name, value } = event.target;

        if (name === 'phoneNumber') {
            const formattedPhoneNumber = formatPhoneNumber(value);
            setFormState((prevFormState) => ({
                ...prevFormState,
                [name]: formattedPhoneNumber,
            }));
        } else {
            setFormState((prevFormState) => ({
                ...prevFormState,
                [name]: value,
            }));
        }

        dispatch(serviceState({
            ...formState,
            [name]: value,
        }));
    };

    // 휴대전화 번호에 하이푼(-) 추가
    const formatPhoneNumber = (phoneNumber) => {
        // 숫자만 추출
        const digits = phoneNumber.replace(/\D/g, '');
        // 하이푼(-) 추가
        const formattedPhoneNumber = digits.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
        return formattedPhoneNumber;
    };

    // 체크박스 변경 핸들러
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        if (name === 'allChecked') {
            setAgreements({
                allChecked: checked,
                agreement1: checked,
                agreement2: checked,
            });
        } else {
            setAgreements((prevAgreements) => ({
                ...prevAgreements,
                [name]: checked,
            }));
        }

        const allChecked = allCheckboxesChecked();
        dispatch(changeState(allChecked));
    };

    // 모두 동의했는지 확인
    const allCheckboxesChecked = () => {
        return agreements.agreement1 && agreements.agreement2;
    };

    useEffect(() => {
        const allChecked = allCheckboxesChecked();
        dispatch(changeState(allChecked));
    }, [agreements, dispatch]);

    return (
        <div className="reservation-result">
            <div className="check-infor">
                <h4>예약자 정보</h4>
                <form>
                    <label>
                        <span>성함 : <span style={{ color: 'red' }}>*</span> </span>
                        <input
                            type="text"
                            name="name"
                            placeholder="성함을 입력하세요."
                            value={formState.name}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label>
                        <span>휴대전화 : <span style={{ color: 'red' }}>*</span> </span>
                        <input
                            type="text"
                            name="phoneNumber"
                            maxLength='13'
                            placeholder="전화번호를 입력하세요."
                            value={formState.phoneNumber}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label>
                        <span>문의사항 : </span>
                        <textarea
                            name="inquiry"
                            placeholder="문의사항을 남겨주세요"
                            value={formState.inquiry}
                            onChange={handleFormChange}
                        />
                    </label>
                </form>
            </div>

            <div className="agree-zone">
                <div className="agree-check">
                    <input
                        type="checkbox"
                        style={{ marginRight: 10 }}
                        name="allChecked"
                        checked={agreements.allChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span>이용 약관(전체 동의)</span>
                </div>
                <div>
                    <AgerrBox
                        title='로스트볼 수거 예약 이용약관 동의(필수)'
                        text='신청자는 하루 최대 2타임까지 예약이 가능합니다.
                신청 대학의 행사, 기타 일정 등으로 인하여 스튜디오 촬영이 중복될 경우 일정이 조정될 수 있습니다.
                예약 변경 및 취소는 예약 날짜로부터 2일 전까지 가능합니다.
                사용 시 내부 기자재 파손에 주의하며, 음식물 반입을 금지합니다.
                신청자는 저작권법 저촉 여부를 확인하여 저작권법을 준수하여야 하고 저작권 위배 및 분쟁 발생 시 책임은 신청인에게 있습니다.'
                        name="agreement1"
                        checked={agreements.agreement1}
                        onChange={handleCheckboxChange} />
                    <AgerrBox
                        title='개인정보 수집·이용 및 제3자 제공에 대한 동의(필수)'
                        text='개인정보의 수집·이용목적 : 대구·경북권역 공동활용 스튜디오 사용에 대한 예약
                        수집·제공하려는 개인정보의 항목 : 신청자의 인적사항(성명, 소속, 연락처)
                        개인정보 제3자 제공 : 예약시스템 이용 대학·권역·시스템관리자 및 시스템 유지보수 업체
                        개인정보의 보유·이용·제공기간 : 2년[개인정보처리방침 제2조(개인정보의 처리 및 보유기간)]
                        신청자는 개인정보보호법 제15조 제2항 제4호, 제17조2항5호에 따라 개인정보를 수집 및 이용에 관하여 거부할 수 있으며, 동의 거부에 따른 대구·경북권역 공동활용 스튜디오 사용 제한 등 불이익이 있을 수 있음'
                        name="agreement2"
                        checked={agreements.agreement2}
                        onChange={handleCheckboxChange} />
                    <input
                        type="checkbox"
                        name="agreement3"
                        style={{ marginRight: 10 }}
                        checked={agreements.agreement2}
                        onChange={handleCheckboxChange} />
                    <span>E-mail 및 SMS 광고성 정보 수진동의(선택) <br />
                        <span style={{ fontSize: '0.5em' }}>다양한 프로모션 소식 및 신규 매장 정보를 보내드립니다.</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

const AgerrBox = (props) => {
    const { title, text, name, checked, onChange } = props;

    return (
        <div>
            <input
                type="checkbox"
                style={{ marginRight: 10 }}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <span style={{ display: 'inline-block', marginBottom: 10 }}>{title}</span>
            <div
                style={{
                    border: '1px solid black',
                    backgroundColor: 'white',
                    overflow: 'auto',
                    width: '80%',
                    height: 100,
                    margin: '10px auto',
                }}
            >
                {text}
            </div>
        </div>
    );
};

export default ScheduleCheck;
