import React from "react";
import '../style/reservationSuccess.scss'
import { useNavigate } from "react-router-dom";




const ReservationSuccess = () => {

    const navigate = useNavigate();

    return (
        <div className="reservationSuccess-container">
            <div className="reservationSuccess-text">
                <h3>예약 완료</h3>
                <p>OURS BOX의 로스트볼 수거 신청이 성공적으로 완료되었습니다!</p>
                <p>예약한 신청을 확인하려면, 상단 ‘예약확인’을 클릭하여 더욱 상세한 정보를 보실 수 있습니다.<br/>
                    예약한 신청에 대한 문의사항은 (엑스페론 고객센터 031-742-5009) 전화 문의가 가능합니다.</p>
                <div>
                    <button onClick={
                        ()=>{
                            navigate('/');
                        }
                    }>홈으로 바로가기</button>
                    <button onClick={()=>{
                        navigate('/ReservationCheck')
                    }}>예약 내역 확인</button>
                </div>
            </div>

        </div>
    )
}


export default ReservationSuccess;