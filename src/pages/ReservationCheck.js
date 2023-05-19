import React, { useState } from "react";
import '../style/reservationCheck.scss'
import { useNavigate } from "react-router-dom";

const ReservationCheck = () => {
    const navigate = useNavigate();

    // 폰번호 받는 state
    const [phoneNumber, setPhoneNumber] = useState('');

    // 폰번호 변경 시 이벤트 핸들러
    const handleChange = (event) => {
        const inputPhoneNumber = event.target.value;
        const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);
        setPhoneNumber(formattedPhoneNumber);
    };

    // 폰번호 형식 변환 함수
    const formatPhoneNumber = (inputPhoneNumber) => {
        // 입력된 값에서 한글을 제거합니다.
        const filteredPhoneNumber = inputPhoneNumber.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');

        // 하이픈을 제거한 숫자만 남기도록 합니다.
        const numericPhoneNumber = filteredPhoneNumber.replace(/-/g, '');

        // 숫자를 세 자리마다 하이픈으로 구분하여 조합합니다.
        const formattedPhoneNumber = numericPhoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

        return formattedPhoneNumber;
    };

    return (
        <div className="reservationCheck-container">
            <h4>예약내역</h4>
            <form>
                <label>
                    <span>예약자명</span>
                    <input type="text" placeholder="예약자명을 입력하세요." />
                </label>
                <label>
                    <span>휴대전화</span>
                    <input
                        type="tel"
                        placeholder="전화번호를 입력하세요."
                        maxLength="13"
                        value={phoneNumber}
                        onChange={handleChange}
                    />
                </label>
                <button type='button' onClick={() => {
                    navigate('/ReservationList');
                }}>예약확인</button>
            </form>
        </div>
    )
}

export default ReservationCheck;
