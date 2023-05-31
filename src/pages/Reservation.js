import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { format } from "date-fns";

import "../style/reservation.scss";
import ShopSearch from "../components/ShopSearch";
import Schedule from "../components/Schedule";
import ScheduleCheck from "../components/ScheduleCheck";

import progress_1 from '../img/progress_1.png';
import progress_2 from '../img/progress_2.png';
import progress_3 from '../img/progress_3.png';
import { timeState } from "../redux/store";

// 예약 컴포넌트
const Reservation = () => {
  const [step, setStep] = useState(0); // 현재 단계를 관리하는 상태
  const [showModal, setShowModal] = useState(false); // 모달 창을 보여주는 상태
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redux_data = useSelector((state) => state);
  const { checked, address, date, service, collect, } = redux_data;

  console.log("실제 데이터:", redux_data);

  // 다음 단계로 이동하는 함수
  const handleNext = () => {
    console.log(step);
    if (step === 0) {
      if (!collect.collect) {
        alert('수거량을 선택했는지 확인해주세요.');
      } else if (!address.add) {
        alert('장소를 선택했는지 확인해주세요.');
      } else {
        setStep((prevStep) => prevStep + 1);
      }
    } else if (step === 1) {
      if (!date.date) {
        alert('일시를 선택했는지 확인해주세요.')
      } else {
        setStep((prevStep) => prevStep + 1);
      }
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  let currentDate = new Date();
  const currentDateTimeString = format(currentDate, 'yyyy-MM-dd HH:mm:ss');



  useEffect(() => {
    dispatch(timeState(currentDateTimeString));
  }, [])

  // 이전 단계로 이동하는 함수
  const handlePrev = () => {
    if (step === 0) {
      alert("이전 작업이 없습니다.");
    } else {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleCancel = () => {
    navigate("/"); // 예약 취소 시 메인 페이지로 이동하는 함수
  };

  // 이용약관 확인 함수
  const handleReservationConfirmation = () => {
    if (!checked.checked) {
      alert("이용약관에 동의해주세요.");
    } else if (service.service.phoneNumber.length < 13) {
      alert("휴대전화 13자리를 입력하세요.")
    } else if (!service.service.name || !service.service.phoneNumber) {
      alert("성함과 휴대전화를 입력해주세요.");
    } else {
      setShowModal(true); // 예약 확인 모달 창을 보여주는 함수
    }
  };

  const handelSuccess = () => {
    axios.post('/user', redux_data)
      .then(response => {
        console.log(response.data);
        alert('예약이 확정되었습니다.');
        navigate('/ReservationSuccess');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderComponentAndProgressText = () => {
    let currentComponent;
    let progressText;

    switch (step) {
      case 0:
        currentComponent = <ShopSearch />; // 장소 검색 컴포넌트
        progressText = progress_1;
        break;
      case 1:
        currentComponent = <Schedule />; // 일정 선택 컴포넌트
        progressText = progress_2;
        break;
      case 2:
        currentComponent = <ScheduleCheck />; // 일정 확인 컴포넌트
        progressText = progress_3;
        break;
      default:
        currentComponent = <ShopSearch />;
    }

    return { currentComponent, progressText };
  };

  const isLastStep = step === 2;
  const { currentComponent, progressText } = renderComponentAndProgressText();
  const buttonStyles = {
    width: 50,
    height: 50,
    cursor: 'pointer',
    marginRight: 5,
    borderRadius: '50%'
  };


  return (
    <>
      <div className="reservation-container">
        <div className="progress-status">
          <div className="progress-text">
            <img src={progressText} style={{ width: '50%', marginTop: 5 }} alt="" />
          </div>
        </div>
        <div className="reservation-area">
          {currentComponent}
          <div className="reservation-btnArea">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                style={buttonStyles}
                onClick={handlePrev}
                disabled={step === 0}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <div style={{ padding: 0 }}>
                <button
                  style={{ ...buttonStyles, width: 60, borderRadius: 50 }}
                  onClick={handleCancel}
                >
                  취소
                </button>
                <button
                  style={{
                    ...buttonStyles,
                    border: "1px solid black",
                    backgroundColor: "#AEFF1E",
                  }}
                  onClick={isLastStep ? handleReservationConfirmation : handleNext}
                >
                  {isLastStep ? <FontAwesomeIcon icon={faArrowRight} /> : <FontAwesomeIcon icon={faArrowRight} />}

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={showModal ? "modal-container" : "none-modal"}>
        <div className="success-modal">
          <h3 style={{ position: "fixed", top: 0, left: 0, width: '100%', padding: 10 }}>예약 정보 확인하기</h3>
          <div className="modal-text">
            <p>성함</p><span>{service.service && service.service.name}</span>
            <p>전화번호</p><span>{service.service && service.service.phoneNumber}</span>
            <p>이메일 </p><span>{service.service && service.service.email}</span>
            <p>예약장소 </p><span>{address.add && address.add.address}</span>
            <p>예약날짜 </p><span>{date && date.date}</span>
            <p>로스트볼 수거량 </p><span>{collect && collect.collect}</span>
            <p>기타 문의사항 </p><span>{service.service && service.service.inquiry}</span>
          </div>
          <div className="btn-area">
            <button onClick={() => {
              setShowModal(false);
            }}>수정하기</button>
            <button onClick={() => {
              handelSuccess()
            }}>예약확정</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Reservation;
