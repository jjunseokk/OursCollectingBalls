import React, { useEffect, useState } from "react";
import "../style/reservationList.scss";
import "../style/reservation.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import axios from "axios";
import { format } from "date-fns";


const ReservationList = () => {
    const dbData2 = useSelector((state) => state.dbData.dbData);

    const [dbData, setDbData] = useState([]);
    const [modal, setModal] = useState(false);


    useEffect(() => {
        const storedData = localStorage.getItem("dbData");
        if (storedData) {
            setDbData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        if (dbData2 && dbData2.length > 0) {
            setDbData(dbData2);
            localStorage.setItem("dbData", JSON.stringify(dbData2));
        }
    }, [dbData2]);

    // 페이지네이션을 위한 변수들
    const itemsPerPage = 10; // 페이지당 보여줄 항목 수
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

    const totalPages = Math.ceil((dbData && dbData.length) / itemsPerPage); // 총 페이지 수

    const currentItems =
        dbData &&
        dbData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    console.log("데이터", dbData);

    // 페이지 변경 함수
    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    // 예약내역취소 함수
    const cancelReservation = (index) => {

        const reservationkey = dbData[index].keyid;
        const reservationName = dbData[index].name;
        axios
            .post("/delete", { key: reservationkey, name: reservationName })
            .then((response) => {
                console.log(response);
                const updatedData = dbData.filter((item, i) => i !== index);
                setDbData(updatedData);
                localStorage.setItem("dbData", JSON.stringify(updatedData)); // 업데이트된 데이터로 localStorage 업데이트
            })
            .catch((error) => {
                console.error(error);
                alert("입력하신 예약자명과 전화번호를 확인해주세요.")
            });

        setModal(false);
        console.log(reservationkey);
    };

    return (
        <div className="reservationList-container">
            <div className="reservationList-text">
                <div>
                    <h3>예약 내역 조회하기</h3>
                    <p>
                        OURS 수거 정책
                        <br />
                        <br />
                        - 수거 일정 및 시간은 담당 매니저와 조율합니다.(*수거신청해주시면 담당매니저 배정 후 해피콜이 진행됩니다.)
                        <br />
                        <br />
                        - 수거후 약 2~3주 선별 작업 후 OURS 에코 보상이 진행 됩니다.
                        <br />
                        <br />
                        - 보상내역은 담당 매니저를 통해 상세내역 전달 및 리포트를 전달 받으실 수 있습니다.
                        <br />
                        <br />
                        - 모든 내역은 OURS 마이페이지에서 확인하실 수 있습니다.
                    </p>
                </div>
            </div>
            <div className="reservationList-area">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>매장명</th>
                                <th>주소</th>
                                <th>수거신청일시</th>
                                <th>예약등록시간</th>
                                <th>현재진행상태</th>
                                <th>수거진행사항</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems && currentItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <tr key={index}>
                                        <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                        <td>{item.shop}</td>
                                        <td>{item.place}</td>
                                        <td>{format(new Date(item.date), "yyyy-MM-dd")}</td>
                                        <td>{format(new Date(item.time), "yyyy-MM-dd HH:mm:ss")}</td>
                                        <td>{item.state}</td>
                                        <td>{item.comments ? item.comments : "-"}</td>
                                        {/* <td style={{ padding: 0 }}> */}
                                        <button onClick={() => { setModal(true) }}
                                            className="reserverBtn" >
                                            취소
                                        </button>
                                        {/* </td> */}
                                    </tr>
                                    <div className={modal ? "modal" : "none"}>
                                        <h3>예약 내역 취소하기</h3>
                                        <p>해당 예약 내역을 취소하시겠습니까?</p>
                                        <div className="modal-btnArea">
                                            <button onClick={() => {
                                                setModal(false);
                                            }}>뒤로가기</button>
                                            <button onClick={() => {
                                                cancelReservation(index)
                                            }}>취소하기</button>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>

                    <div className="event-pagination">
                        {currentPage > 1 && (
                            <button
                                className="event-pagination-button"
                                onClick={() => handleChangePage(currentPage - 1)}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                        )}
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={currentPage === index + 1 ? "event-active" : ""}
                                onClick={() => handleChangePage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <button
                                className="event-pagination-button"
                                onClick={() => handleChangePage(currentPage + 1)}
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReservationList;
