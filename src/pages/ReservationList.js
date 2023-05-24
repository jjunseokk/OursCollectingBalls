import React, { useEffect, useState } from "react";
import "../style/reservationList.scss";
import "../style/reservation.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import axios from "axios";

const ReservationList = () => {
    const dbData2 = useSelector((state) => state.dbData.dbData);

    const [dbData, setDbData] = useState([]);
    console.log(dbData);

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

    // 페이지 변경 함수
    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const cancelReservation = (index) => {
        const reservationDate = dbData[index].date;
        const reservationName = dbData[index].name;
        axios
            .post("/delete", { date: reservationDate, name: reservationName })
            .then((response) => {
                console.log(response);
                const updatedData = dbData.filter((item, i) => i !== index);
                setDbData(updatedData);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <div className="reservationList-container">
            <div className="reservationList-text">
                <div>
                    <h3>예약 내역 조회하기</h3>
                    <p>
                        예약자명과 예약 시 등록한 <br />
                        연락처로 검색이 가능합니다.
                        <br /><br />
                        취소하고 싶은 예약을 말씀해 주시면 <br />
                        담당자가 취소해드립니다.
                        <br /><br />
                        일정 변경, 등 기타 문의는 사전 1주일 <br />
                        이전에 문의 부탁드립니다.
                    </p>
                </div>
                <button><a href="https://pf.kakao.com/_xnGFTT">1:1 문의하기</a></button>
            </div>
            <div className="reservationList-area">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>지역</th>
                                <th>매장명</th>
                                <th>주소</th>
                                <th colSpan='2'>예약일시</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems && currentItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{item.spot}</td>
                                    <td>{item.shop}</td>
                                    <td>{item.place}</td>
                                    <td>{item.date}</td>
                                    <td style={{ padding: 0 }}>
                                        <button onClick={() => { cancelReservation(index) }}
                                            style={{ width: '100%', height: '30px', border: 'none', margin: 0, backgroundColor: "#AEFF1E", cursor: 'pointer' }}
                                        >
                                            예약취소
                                        </button>
                                    </td>
                                </tr>
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
