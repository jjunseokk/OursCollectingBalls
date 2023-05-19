import React, { useState } from "react";
import '../style/reservationList.scss';
import '../style/reservation.scss'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";



const ReservationList = () => {
    const tableData = [
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 강동구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 북구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 강동구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 북구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 강동구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 북구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 강동구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 북구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 강동구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 북구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 강동구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 북구 00가 1202 스크린 골프장', phone: '00-000-0000' },
    ];

    // 페이지네이션을 위한 변수들
    const itemsPerPage = 10; // 페이지당 보여줄 항목 수
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지


    const filteredItems = tableData.filter((item) => {
        const combinedItemData = `${item.spot} ${item.shop} ${item.address} ${item.phone}`.toLowerCase();
        return combinedItemData;
    });

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage); // 총 페이지 수

    const currentItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );



    // 페이지 변경 함수
    const handleChangePage = (page) => {
        setCurrentPage(page);
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
                                <th>지역</th>
                                <th>매장명</th>
                                <th>주소</th>
                                <th>전화번호</th>
                                <th>보기</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={`${item.spot}-${index}`}>
                                    <td>{item.spot}</td>
                                    <td>{item.shop}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <FontAwesomeIcon icon={faSearch} />
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
    )
}


export default ReservationList;