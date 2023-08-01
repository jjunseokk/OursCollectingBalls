import React from "react";
import "../style/instruction.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import process from "../img/process.png";

const Instruction = () => {
  // let [clickTab, setClickTap] = useState(0);

  // const menuArr = [
  //   // { content: <OursBox />, text: "OURS BOX안내" },
  //   { content: <Collect />,},
  // ];

  // const selectMenuHandler = (index) => {
  //   setClickTap(index);
  // };

  const onButtonClick = () => {
    fetch("ours_Brochure.pdf").then(
      (response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download =
            "ours_Brochure.pdf";
          alink.click();
        });
      }
    );
  };

  return (
    <div className="instruction-container">
      <div className="section1">
        <h3 className="title">이용안내</h3>
        {/* <div className="tap-area">
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
        <div className="itemBox">{menuArr[clickTab].content}</div> */}
        <Collect />
      </div>
      <div className="section2">
        <h3>수거신청 전에 알아보세요.</h3>
        <button onClick={onButtonClick}>
          OURS TRADING 브로슈어
          <FontAwesomeIcon style={{ marginLeft: 5 }} icon={faDownload} />
        </button>
      </div>
      <div className="section3">
        <h3>헌볼 수거 프로세스</h3>
        <img
          style={{ marginBottom: 20 }}
          src={process}
          alt=""
        />
      </div>
      <div className="section4">
        <h3>신청 자격 기준</h3>
        <p>헌 골프공 수거신청을 원하는 점주는 누구나 신청 가능!</p>
      </div>

      <div className="section6">
        <h3>상담안내</h3>
        <p>
          상세한 경적 및 구매조건 확인을 원하시면 상담신청을 해주세요.
          전문상담원이 안내해드려요
        </p>
        <div>
          <p>
            OURS TRADING 고객센터 <strong>031-742-5009</strong>
          </p>
          <p>평일 09:00~18:00 (주말/공휴일 휴무)</p>
        </div>
        <p style={{ color: "#616161", fontSize: '0.9em' }}>
          고객센터 연결이 월활하지 않은 경우, 상담 요청시간 기준 24시간 이내 (영업일
          기준) 고객님이 남겨주신 연락처로 안내 드릴게요
        </p>
      </div>
    </div>
  );
};

// const OursBox = () => {
//   return (
//     <div className="component">
//       <h3>OURS BOX 수거 신청 사용방법</h3>
//       <p>OURS 트레이딩센터(홈페이지) 신청</p>
//       <p>공식 콜센터 신청</p>
//     </div>
//   );
// };

const Collect = () => {
  return (
    <div className="collectBox">
      <div className="component">
        <h3>수거신청 안내</h3>
        <div className="first">
          <p style={{marginBottom : 10}}>∙ OURS트레이닝센터(홈페이지) 신청</p>
          <p>∙ 공식 콜센터 요청</p>
        </div>
      </div>
      <div className="component">
        <h3>신청자격 기준</h3>
        <div className="second">
          <p>무료 : 3만알 이상(헌볼, 레인지볼 등)</p>
          <p>유료 : 3만알 이하(헌볼, 레인지볼 등)</p>
          <p>OURS 수거 전용 포대를 드립니다. </p>
        </div>
        <p style={{ textAlign: 'right', padding: 5, fontSize : "0.9em", color : 'gray' }}>*포대기준으로 유무를 판별</p>

      </div>
    </div>

  );
};

export default Instruction;
