import React, { useEffect, useState } from "react";
import '../style/reservation.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from 'react-redux'
import { addState, collectState } from "../redux/store";

import golf from '../img/golf.png';
import warning from '../img/warning.png';

const ShopSearch = () => {


    // 시/도 선택 시 선택 값이 들어가는 state
    const [Selected, setSelected] = useState("시/도");

    // 시/군/구 선택 시 선택 값이 들어가는 state
    const [Selected2, setSelected2] = useState("");

    // 검색 할때 저장하는 state
    const [searchTerm, setSearchTerm] = useState('');

    // 지역 선택 할 때 인덱스
    const [select, setSelect] = useState(null);

    // 지역 저장 state
    const [add, setAdd] = useState('');

    // 볼수거량 저장
    const [collect, setCollect] = useState('');

    // 버튼 액티브
    const [active, setActive] = useState('');

    const dispatch = useDispatch();

    // 지역 배열 값
    let city = ["시/도를 선택해주세요", "서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "대전광역시", "울산광역시", "세종특별자치시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상남도", "경상북도", "제주특별자치도",]
    let seoul = [
        "강동구", "송파구", "강남구", "서초구", "관악구", "동작구", "영등포구", "금천구", "구로구", "강서구", "양천구", "마포구", "서대문구", "은평구", "노원구", "도봉구", "강북구", "성북구", "중랑구", "동대문구", "광진구", "성동구", "용산구", "중구", "종로구",
    ]
    let busan = [
        "기장군", "사상구", "수영구", "연제구", "강서구", "금정구", "사하구", "해운대구", "북구", "남구", "동래구", "부산진구", "영도구", "동구", "서구", "중구",
    ]
    let deagu = [
        "달성군", "달서구", "수정구", "북구", "남구", "서구", "동구", "중구"
    ]
    let incheon = [
        "옹진군", "강화군", "서구", "계양구", "부평구", "남동구", "연수구", "미추홀구", "동구", "중구",
    ]
    let gwangjuMetropolitan = [
        "광산구", "북구", "남구", "서구", "동구",
    ]
    let deajeon = [
        "대덕구", "유성구", "서구", "중구", "동구",
    ]
    let ulsan = [
        "울주군", "북구", "동구", "남구", "중구",
    ]
    let sejong = [
        "반곡동", "소담동", "대평동", "보람동", "고운동", "종촌동", "아름동", "해밀동", "도담동", "다정동", "새롬동", "한솔동", "소정면", "전동면", "전의면", "연서면", "장군면", "금남면", "부강면", "연동면", "연기면", "조치원읍",
    ]
    let gyeonggido = [
        '고양시 덕양구', '고양시 일산구', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시 소사구', '부천시 오정구', '부천시 원미구', '성남시 분당구', '성남시 수정구', '성남시 중원구', '수원시 권선구', '수원시 장안구', '수원시 팔달구', '시흥시', '안산시 단원구', '안산시 상록구', '안성시', '안양시 동안구', '안양시 만안구', '오산시', '용인시', '의왕시', '의정부시', '이천시', '파주시', '평택시', '하남시', '화성시', '가평군', '양주군', '양평군', '여주군', '연천군', '포천군'
    ]
    let gangwondo = [
        "양양군", "고성군", "인제군", "양구군", "화천군", "철원군", "정선군", "평창군", "영월군", "횡성군", "홍천군", "삼척시", "속초시", "태백시", "동해시", "강릉시", "원주시", "춘천시",
    ]
    let chungbuk = [
        "단양군", "음성군", "괴산군", "진천군", "증평군", "영동군", "옥천군", "보은군", "제천시", "충주시", "청주시 청원구", "청주시 흥덕구", "청주시 서원구", "청주시 상당구", "청주시",
    ]

    let chungnam = [
        "태안군", "예산군", "홍성군", "청양군", "서천군", "부여군", "금산군", "당진시", "계롱시", "논산시", "서산시", "아산시", "보령시", "공주시", "천한시 서북구", "천안시 동남구", "천안시"
    ]
    let jeonbuk = [
        "부안군", "고창군", "순창군", "임실군", "장수군", "무주군", "진안군", "완주군", "김제시", "남원시", "정읍시", "익산시", "군산시", "전주시 덕진구", "전주시 완산구", "전주시"
    ]
    let jeonnam = [
        "신안군", "진도군", "완도군", "장성군", "영광군", "함평군", "무안군", "영암군", "해남군", "강진군", "장흥군", "화순군", "보성군", "고흥군", "구례군", "곡성군", "담양군", "광양시", "나주시", "순천시", "여수시", "목포시"
    ]
    let gyeongbuk = [
        "울릉군", "울진군", "봉화군", "예천군", "칠곡군", "성주군", "고령군", "청도군", "영덕군", "영양군", "청송군", "의성군", "군위군", "경산시", "문경시", "상주시", "영천시", "영주시", "구미시", "안동시", "김천시", "경주시", "포항시 북구", "포항시 남구", "포항시"
    ]
    let gyeongnam = [
        "함천군", "거창군", "함양군", "산청군", "하동군", "남해군", "고성군", "창녕군", "함안군", "의령군", "양산시", "거제시", "밀양시", "김해시", "사천시", "통영시", "진주시", "창원시 진해구", "창원시 마산회원구", "창원시 마산합포구", "창원시 성산구", "창원시 의창구", "창원시"
    ]
    let jeju = [
        "서귀포시", "제주시"
    ]


    //----시도..
    let opt;
    const showSelect = (e) => {
        let add = 0;
        setSelected(e.target.value);
        const Option = document.getElementById("modal");
        if (e.target.value === "서울특별시") {
            add = seoul;
        } else if (e.target.value === "부산광역시") {
            add = busan;
        } else if (e.target.value === "대구광역시") {
            add = deagu;
        } else if (e.target.value === "인천광역시") {
            add = incheon;
        } else if (e.target.value === "광주광역시") {
            add = gwangjuMetropolitan;
        } else if (e.target.value === "대전광역시") {
            add = deajeon;
        } else if (e.target.value === "울산광역시") {
            add = ulsan;
        } else if (e.target.value === "세종특별자치시") {
            add = sejong;
        } else if (e.target.value === "경기도") {
            add = gyeonggido;
        } else if (e.target.value === "강원도") {
            add = gangwondo;
        } else if (e.target.value === "충청북도") {
            add = chungbuk;
        } else if (e.target.value === "충청남도") {
            add = chungnam;
        } else if (e.target.value === "전라북도") {
            add = jeonbuk;
        } else if (e.target.value === "전라남도") {
            add = jeonnam;
        } else if (e.target.value === "경상북도") {
            add = gyeongbuk;
        } else if (e.target.value === "경상남도") {
            add = gyeongnam;
        } else if (e.target.value === "제주특별자치도") {
            add = jeju;
        }

        Option.options.length = 1;

        for (let i = 0; i < add.length; i++) {
            opt = document.createElement("option");
            opt.value = add[i];
            opt.innerHTML = add[i];
            Option.append(opt);
        }
    }


    // 테이블 항목을 위한 데이터
    const tableData = [
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 강동구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 중구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 북구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경상남도', shop: "Item 5", address: '창원시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '서울특별시', shop: "Item 6", address: '서울특별시 강남구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 7", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 8", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 9", address: '부산광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경상남도', shop: "Item 5", address: '창원시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 강서구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경상남도', shop: "Item 5", address: '창원시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 강동구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경상남도', shop: "Item 5", address: '창원시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 서초구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경상남도', shop: "Item 5", address: '창원시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 동작구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경상남도', shop: "Item 5", address: '창원시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경상남도', shop: "Item 5", address: '창원시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 마포구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경상남도', shop: "Item 5", address: '창원시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '서울특별시', shop: "Item 1", address: '서울특별시 노원구 00가 1211 스크린 골프장', phone: '00-000-0000' },
        { spot: '대구광역시', shop: "Item 2", address: '대구광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경기도', shop: "Item 3", address: '경기성남시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '부산광역시', shop: "Item 4", address: '부산광역시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
        { spot: '경상남도', shop: "Item 5", address: '창원시 00구 00가 1202 스크린 골프장', phone: '00-000-0000' },
    ];

    // 페이지네이션을 위한 변수들
    const itemsPerPage = 10; // 페이지당 보여줄 항목 수
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지


    // 지역과 매장명에 따라 필터링된 항목들을 반환하는 함수
    const filterItems = (items) => {
        const combinedSearchTerm = searchTerm.toLowerCase();
        return items.filter((item) => {
            const combinedItemData = `${item.spot} ${item.shop} ${item.address} ${item.phone}`.toLowerCase();
            const selectedRegion = Selected === '시/도' ? '' : Selected;
            const selectedArea = Selected2 === '구/군을 선택해주세요.' ? '' : Selected2;
            return (
                (combinedItemData.includes(combinedSearchTerm) || searchTerm.trim() === '') &&
                (selectedRegion === '' || item.spot.includes(selectedRegion)) &&
                (selectedArea === '' || item.address.includes(selectedArea))
            );
        });
    };

    // 검색어 및 지역에 따라 필터링된 항목들을 반환
    const filteredItems = filterItems(tableData);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage); // 총 페이지 수

    // 현재 페이지에서 필터링된 항목들을 표시하기 위해 currentItems 변수에 할당
    const currentItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // 구/군 선택
    const showDetailSelect = (e) => {
        setSelected2(e.target.value);
        setCurrentPage(1);
    }

    // 페이지 변경 함수
    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    // input 검색
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleInputChange = (index) => {
        setSelect(index);
        setAdd(currentItems[index]);
    };

    const colletSelect = (index) => {
        setCollect(index);
        setActive(index);
    }

    useEffect(() => {
        if (add) {
            const { spot, shop, address } = add;
            dispatch(addState({ spot, shop, address }));
            console.log("뭐지??", add);
        }
    }, [add, dispatch]);

    useEffect(() => {
        dispatch(collectState(collect));
    }, [collect, dispatch])


    return (
        <div className="reservation-result">
            <div className="shop-searchZone">
                <div className="shop">
                    <h4><img src={golf} alt="" width="10px" /> 로스트볼 수거량</h4>
                    <div className="collect-weight">
                        <button
                            onClick={() => {
                                colletSelect('1톤 이하');
                            }}
                            className={active === '1톤 이하' ? 'selected' : ''}
                        >
                            1톤 이하
                        </button>
                        <button
                            onClick={() => {
                                colletSelect('1톤 이상');
                            }}
                            className={active === '1톤 이상' ? 'selected' : ''}
                        >
                            1톤 이상
                        </button>
                        <button
                            onClick={() => {
                                colletSelect('2톤 이상');
                            }}
                            className={active === '2톤 이상' ? 'selected' : ''}
                        >
                            2톤 이상
                        </button>
                        <button
                            onClick={() => {
                                colletSelect('5톤 이상');
                            }}
                            className={active === '5톤 이상' ? 'selected' : ''}
                        >
                            5톤 이상
                        </button>
                    </div>
                    <p style={{ color: 'red', fontSize: 2, marginTop: 5 }}>
                        <img src={warning} alt="" width="10px" /> 1톤 이하의 볼 수거는 추가 비용이 발생합니다.
                    </p>
                </div>
                <div className="shop-search">
                    <h4>매장 찾기</h4>
                    <div className="shop-selectArea">
                        <select name="h_area1" onChange={showSelect} value={Selected} className="shop-select">
                            {city.map((item) => (
                                <option value={item} key={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        <select name="h_area2" id="modal" onChange={showDetailSelect} className="shop-select">
                            <option className='option'>구/군을 선택해주세요.</option>
                            <option className='option'>{Selected2}</option>
                        </select>
                    </div>
                    <input style={{ padding: 5 }} type="text" value={searchTerm} onChange={handleSearch} placeholder="매장명을 입력하세요." />
                    <FontAwesomeIcon icon={faSearch} className="shop-search" />
                </div>
            </div>
            <div className="shop-table">
                <table>
                    <thead>
                        <tr>
                            <th>지역</th>
                            <th>매장명</th>
                            <th>주소</th>
                            <th>전화번호</th>
                            <th>선택</th>
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
                                    <input
                                        type="checkbox"
                                        checked={select === index} // 선택된 인덱스에만 checked 속성 추가
                                        onChange={() => {
                                            handleInputChange(index);
                                        }}
                                    />
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
    )
}


export default ShopSearch;