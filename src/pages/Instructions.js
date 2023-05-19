import React, { useState } from "react";
import "../style/instruction.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import process from "../img/process.png";
import delivery from "../img/delivery.png";
import navigation from "../img/navigation.png";

const Instruction = () => {
  let [clickTab, setClickTap] = useState(0);

  const menuArr = [
    { content: <OursBox />, text: "OURS BOX안내" },
    { content: <Collect />, text: "수거신청안내" },
  ];

  const selectMenuHandler = (index) => {
    setClickTap(index);
  };

  const onButtonClick = () => {
    fetch("Smart Unmanned Platform Cubing_Business Introduction.pdf").then(
      (response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download =
            "Smart Unmanned Platform Cubing_Business Introduction.pdf";
          alink.click();
        });
      }
    );
  };

  return (
    <div className="instruction-container">
      <div className="section1">
        <h3 className="title">이용안내</h3>
        <div className="tap-area">
          {menuArr.map((el, index) => (
            <p
              key={index}
              className={
                index === clickTab ? "submenu focused" : "submenu"
              }
              onClick={() => selectMenuHandler(index)}
            >
              {el.text}
            </p>
          ))}
        </div>
        <div className="itemBox">{menuArr[clickTab].content}</div>
      </div>
      <div className="section2">
        <h3>수거신청 전에 알아보세요.</h3>
        <button onClick={onButtonClick}>
          OURS BOX 브로슈어
          <FontAwesomeIcon style={{ marginLeft: 5 }} icon={faDownload} />
        </button>
      </div>
      <div className="section3">
        <h3>로스트볼 수거 프로세스</h3>
        <img
          style={{ marginBottom: 20 }}
          src={process}
          alt=""
          width="70%"
        />
      </div>
      <div className="section4">
        <h3>신청 자격 기준</h3>
        <p>골프장과 로스트볼을 갖고 있는 점주는 누구나 신청 가능!</p>
      </div>
      <div className="section5">
        <h3>OURS BOX가 제공하는 또다른 혜택</h3>
        <div className="img-area">
          <img src={delivery} alt="" />
          <img src={navigation} alt="" />
        </div>
      </div>
      <div className="section6">
        <h3>상담안내</h3>
        <p>
          상세한 경적 및 구매조건 확인을 원하시면 상담신청을 해주세요.
          전문상담원이 안내해드려요
        </p>
        <div>
          <p>
            OURS BOX 고객센터 <strong>031-742-5009</strong>
          </p>
          <p>평일 09:00~18:00 (주말/공휴일 휴무)</p>
        </div>
        <p style={{ color: "#616161" }}>
          고객센터 연결이 월활하지 않은 경우, 상담 요청시간 기준 24시간 이내 (영업일
          기준) 고객님이 남겨주신 연락처로 안내 드릴게요
        </p>
      </div>
    </div>
  );
};

const OursBox = () => {
  return (
    <div className="component">
      <h3>OURS BOX 수거 신청 사용방법</h3>
      <p>이용방법이용</p>
      <p>이용방법이용</p>
      <p>이용방법이용</p>
      <p>이용방법이용</p>
      <p>이용방법이용</p>
      <p>이용방법이용</p>
      <p>이용방법이용</p>
    </div>
  );
};

const Collect = () => {
  return (
    <div className="component">
      <h3>수거신청안내</h3>
      <p>수거신청안내</p>
      <p>수거신청안내</p>
      <p>수거신청안내</p>
      <p>수거신청안내</p>
      <p>수거신청안내</p>
      <p>수거신청안내</p>
      <p>수거신청안내</p>
      <p>수거신청안내</p>
    </div>
  );
};

export default Instruction;
