import React, { useState } from "react";
import '../style/reservationCheck.scss'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { dbState } from "../redux/store";

const ReservationCheck = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // 이름, 전화번호 받는 state
    const [reservationInfo, setReservationInfo] = useState({
        name: "",
        phoneNumber: "",
    });


    // 예약자명 입력 변경 핸들러
    const handleNameChange = (event) => {
        setReservationInfo((prevState) => ({
            ...prevState,
            name: event.target.value,
        }));
    };

    // 폰번호 변경 시 이벤트 핸들러,  휴대전화 입력 변경 핸들러
    const handleChange = (event) => {
        const inputPhoneNumber = event.target.value;
        const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);

        setReservationInfo((prevState) => ({
            ...prevState,
            phoneNumber: formattedPhoneNumber, // 변환된 전화번호를 설정
        }));
    };

    const checkReservation = () => {
        axios
            .post('/check', reservationInfo)
            .then(response => {
                if (response.data.exists) {
                    dispatch(dbState(response.data.result));
                    navigate('/ReservationList');
                    console.log("데이터가 알려줘", response)
                }
            })
            .catch(error => {
                console.error(error);
                alert('예약자명과 휴대전화를 맞게 입력했는지 확인해주세요.');
            });
    }

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
                    <input
                        type="text"
                        placeholder="예약자명을 입력하세요."
                        value={reservationInfo.name}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    <span>휴대전화</span>
                    <input
                        type="tel"
                        placeholder="전화번호를 입력하세요."
                        maxLength="13"
                        value={reservationInfo.phoneNumber}
                        onChange={handleChange}
                    />
                </label>
                <button type='button' onClick={() => {
                    checkReservation()
                }}>예약 내역 확인</button>
            </form>
        </div>
    )
}

export default ReservationCheck;
