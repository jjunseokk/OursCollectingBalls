import React, { useState, useEffect } from "react";
import '../style/reservation.scss';

import { useDispatch } from 'react-redux';
import { changeState, eventState, serviceState } from "../redux/store";

const ScheduleCheck = () => {
  // 이용약관 저장 state
  const [agreements, setAgreements] = useState({
    allChecked: false,
    agreement1: false,
    agreement2: false,
    agreement3: false,
  });

  const [event, setEvent] = useState(false);


  const dispatch = useDispatch();

  // form 데이터 저장 state
  const [formState, setFormState] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    inquiry: '',
  });

  // Form 핸들러
  const handleFormChange = (event) => {
    const { name, value } = event.target;

    // 휴대전화 번호에 하이푼(-) 추가
    if (name === 'phoneNumber') {
      const formattedPhoneNumber = formatPhoneNumber(value);
      setFormState((prevFormState) => ({
        ...prevFormState,
        [name]: formattedPhoneNumber,
      }));
    } else {
      setFormState((prevFormState) => ({
        ...prevFormState,
        [name]: value,
      }));
    }

    dispatch(serviceState({
      ...formState,
      [name]: value,
    }));
  };

  // 휴대전화 번호에 하이푼(-) 추가
  const formatPhoneNumber = (phoneNumber) => {
    // 숫자만 추출
    const digits = phoneNumber.replace(/\D/g, '');
    // 하이푼(-) 추가
    const formattedPhoneNumber = digits.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
    return formattedPhoneNumber;
  };


  // 이벤트 체크박스 변경 핸들러
  const handleEventCheckboxChange = () => {
    setEvent(!event);

    setAgreements((prevAgreements) => ({
      ...prevAgreements,
      agreement3: !agreements.agreement3,
    }));
  };

  // 체크박스 변경 핸들러
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'allChecked') {
      setAgreements((prevAgreements) => ({
        ...prevAgreements,
        allChecked: checked,
        agreement1: checked,
        agreement2: checked,
        agreement3: checked,
      }));
    } else {
      setAgreements((prevAgreements) => ({
        ...prevAgreements,
        [name]: checked,
      }));
    }

    // 체크박스 변경 시에도 event 상태를 업데이트
    setEvent((prevEvent) => !prevEvent);

    const allChecked = allCheckboxesChecked();
    dispatch(changeState(allChecked));
  };



  // 모두 동의했는지 확인
  const allCheckboxesChecked = () => {
    return agreements.agreement1 && agreements.agreement2;
  };



  useEffect(() => {
    const allChecked = allCheckboxesChecked();
    dispatch(changeState(allChecked));
    dispatch(eventState(event));
  }, [agreements, dispatch, event]);

  return (
    <div className="reservation-result">
      <div className="check-infor">
        <h4>예약자 정보</h4>
        <form>
          <label>
            <span>성함 <span style={{ color: 'red' }}>*</span> </span>
            <input
              type="text"
              name="name"
              placeholder="성함을 입력하세요."
              value={formState.name}
              onChange={handleFormChange}
            />
          </label>
          <label>
            <span>휴대전화 <span style={{ color: 'red' }}>*</span> </span>
            <input
              type="text"
              name="phoneNumber"
              maxLength='13'
              placeholder="전화번호를 입력하세요."
              value={formState.phoneNumber}
              onChange={handleFormChange}
            />
          </label>
          <label>
            <span>이메일  </span>
            <input
              type='email'
              name="email"
              placeholder="이메일을 입력하세요.."
              value={formState.email}
              onChange={handleFormChange}
            />
          </label>
          <label>
            <span>문의사항</span>
            <textarea
              name="inquiry"
              placeholder="문의사항을 남겨주세요"
              value={formState.inquiry}
              onChange={handleFormChange}
            />
          </label>
        </form>
      </div>

      <div className="agree-zone">
        <div className="agree-check">
          <input
            type="checkbox"
            style={{ marginRight: 10 }}
            name="allChecked"
            checked={agreements.allChecked}
            onChange={handleCheckboxChange}
          />
          <span>이용 약관(전체 동의)</span>
        </div>
        <div>
          <AgreeBox
            title='로스트볼 수거 예약 이용약관 동의(필수)'
            text={"제 1장 총직 \n 제 1 조 (목적) \n ① 이 약관은 볼수거예약시스템(https://www.ours-trading.com) 사이트(이하 '당 사이트'라 함)가 제공하는 모든 서비스(이하 '서비스')의 가입 및 이용조건/절차, 이용자와 당 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다. \n 제 2 조 (약관의 효력 및 변경) \n ① 당 사이트는 이용자가 본 약관 내용에 동의하는 것을 조건으로 이용자에게 서비스를 제공할 것이며, 이용자가 본 약관의 내요에 동의하는 경우 당 사이트의 서비스 제공 행위 및 이용자의 서비스 사용 행위에는 본 약관이 우선적으로 적용될 것입니다. \n ② 당 사이트는 본 약관을 사전 고지 없이 변경할 수 있으며, 변경된 약관은 당 사이트 내에 공지함으로써 이용자가 직접 확인하도록 할 것입니다. 이용자가 변경된 약관에 동의하지 아니하는 경우, 이용자는 서비스 신청을 취소할 수 있으며, 계속 사용의 경우는 약관 변경에 대한 동의로 간주됩니다. 변경된 약관은 공지와 동시에 그 효력이 발생됩니다. \n 제 3 조 (약관 외 준칙)\n ① 본 약관은 당 사이트가 제공하는 서비스에 관환 이용규정과 함께 적용됩니다. \n ② 본 약관에 명시되지 아니한 사항에 대해서는 전기통신기본법, 전기통신사업법, 정보통신윤리위원회심의규정, 정보통신 윤리강령, 프로그램보호법 및 기타 관련 법령의 규정 및 서비스별 안내의 취지에 따라 적용할 수 있습니다. \n 제 4 조 (용어의 정의) \n 본 약관에서 사용하는 용어의 정의는 다음과 같습니다. \n ① '이용자'라 함은 본약관에 따라 매장으로부터 발생하는 헌볼수거를 위해 개인 정보를 제공하고 서비스를 이용하는 자를 말합니다. \n ② 본 약관에서 정의하지 않은 용어는 관계법령 및 개별서비스에 대한 별도 약관 및 서비스별 안내에서 정하는 바에 의합니다. \n 제 2장 서비스 이용 계약 체결 \n 제 5 조 (이용 계약의 성립) \n ① 본 이용약관에 대한 동의는 이용자의 서비스 신청시 당 사이트 웹의 '동의'에 체크함으로 동의하는 것으로 간주됩니다. 약관 변경 시에도 이와 동일하며, 변경된 약관에 동의하지 않을 경우 서비스를 신청할 수가 없습니다. \n 제 6 조 (서비스 이용 신청 및 제한) \n ① 본 사이트를 이용자는 본 사이트에서 요청하는 제반정보를 제공하여야 합니다. \n ② 모든 이용자는 반드시 본인의 이름과 전화번호 정보 등을 사실대로 제동하여야만 서비스를 이용할 수 있으며, 이를 지키지 않은 이용자는 일체의 권리를 주장할 수 없습니다. \n ③ 당 사이트는 다음 각 호에 해당하는 이용계약에 대하여는 서비스를 취소할 수 있습니다. \n - 다른 사람의 명의를 사용하여 신청하였을 때 \n - 이용자의 개인정보를 허위로 기재하였거나 신청하였을 때 \n - 다른 사람의 당 사이트 서비스 이용을 방해하거나 그 정보를 도용하는 등의 행위를 하였을 때 \n - 당 사이트를 이용하여 법령과 본 약관이 금지하는 행위를 하였을 때 \n - 기타 당사이트가 정한 이용신청요건이 미비한 때 \n 당 사이트는 다음 각 항에 해당하는 경우 그 사유가 해소될 때까지 이용계약 성립을 유보할 수 있습니다. \n - 기술상 쟁애 사유가 있는 경우 \n 제 7 조 (개인정보의 보호) \n ① 이용자의 정보에 대해서는 정보 보호정책이 적용됩니다. \n ② 당 사이트의 이용자 정보는 다음과 같이 수집, 사용, 관리, 보호됩니다. \n - 이용자의 정보 수집 \n   • 당 사이트는 이용자의 당 사이트 서비스 신청 \n   • 커뮤니티 활동, 각종 이벤트 참가 \n   • 이용자의 정보 열람 이력에 대한 정보 \n - 이용자 정보의 사용 \n   • 당 사이트 서비스 제공과 관련해서 수집된 이용자의 신상정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다. \n   • 단, 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우 \n   • 범죄에 대한 수사상의 목적이 있거나 정보통신윤리 위원회의 요청이 있는 경우 \n   • 이용자가 당 사이트에 제공한 이용자정보를 스스로 공개한 경우 \n 제 8 조 (ours-trading의 의무) \n ① Ours-trading은 다음과 각 호의 사유가 발생한 경우를 제외하고 계속적, 안정적으로 서비스를 제공할 의무가 있습니다. \n - 서비스용 설비의 보수, 정기점검 또는 공사로 인한 부득이한 경우 \n - 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비를 중지한 경우 \n - 전시, 사변, 천재지변 또는 이에 준 하는 국가 비상사태가 발생하거나 발생할 우려가 있는 경우 \n - 설비 장애 또는 이용 폭주 등으로 인하여 서비스 이용에 지장이 있는 경우 \n ② Ours-trading은 이용자의 정보를 철저히 보안 유지하며, 양질의 서비스로 운영하거나 개선하는 데에만 사용하고, 이외의 다른 목적으로 타 기관 및 개인에게 제공하지 않습니다. \n 제 9 조 (이요자의 의무) \n ① 이용자는 관계 법령, 본 약관의 규정, 이용안내 및 서비스 상에 공지한 주의사항 , Ours-trading이 통지하는 사항을 준수하여야 하며, 기타 Ours-trading의 업무에 방해되는 행위를 하여서는 안됩니다. \n ② 이용자는 Ours-trading의 사전 동의 없이 서비스를 이용하여 어떠한 영리행위도 할 수 없으며, 법에 저촉되는 자료를 배포 또는 개재할 수 없습니다. \n ③ 이용자는 서비스와 관련하여 다음사항을 하여서는 안됩니다. \n - 서비스를 이용하여 얻은 정보를 Ours-trading의 사전 승낙 없이 복사, 복제, 번역, 출판, 방송 기타의 방법으로 사용하거나 이를 타인에게 제공하는 행위 \n - 자신의 홈페이지와 게시판에 음란물을 게재 또는 음란사이트를 링크하거나 유포 등 사회질서를 해치는 행위 \n - 해킹 또는 컴퓨터 바이러스를 유포하는 일, 타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위 \n - 다른 사용자의 개인정보를 수집, 저장하는 행위 \n - Ours-trading 직원, 운영자 등을 포함한 타인을 사칭하는 행위 \n -서비스를 통해 전송된 컨텐츠의 발신인을 위조하는 행위 \n - 타인을 스톡(stalk)하거나, 괴롭히는 행위 \n - 서비스의 운영에 지장을 주거나 줄 우려가 있는 일체의 행위, 기타 관계 법령에 위배되는 행위 \n 제 11 조 (면책 조항) \n ① Ours-trading은 이용자가 서비스를 통해 게재 또는 전송한 정보, 자료, 사실의 정확성, 신뢰성 등 내용에 관하여 어떠한 보증도 하지 아니하며 이용자의 서비스 자료에 대한 취사선택 또는 이용으로 발생하는 손해 등에 대해 책임을 지지 아니합니다. \n ② Ours-trading은 이용자의 서비스를 이용하여 기대하는 손익이나 서비스를 통하여 얻은 자료로 인 한 손해에 관하여 책임을 지지 아니합니다. \n ③ Ours-trading은 이용자 상호간 또는 회원과 제 3자 상호간에 서비스를 매개로 발생한 분쟁에 대해서는 개입할 의무가 없으며 이로 인한 손해를 배상할 책임도 없습니다. \n ④ Ours-trading은 이용자의 귀책사유로 인하여 서비스 이용의 장애가 발생한 경우에는 책임이 면제 됩니다. \n 제 4장 서비스이용 \n 제 12 조 (서비스 이용 범위) \n 이용자가 등록한 ID 하나로 당 사이트 내에서 제공하는 서비스를 이용할 수 있습니다. \n 제 13 조 (정보의 제공) \n Ours-trading은 이용자의 서비스 이용 중 필요가 있다고 인정되는 다양한 정보를 공지사항이나 유선, 전자우편 등의 방법으로 이용자에게 제공할 수 있습니다. \n 제 14 조 (컨텐츠 이용 요금) Ours-trading이 제공하는 서비스는 기본적으로 무료입니다. \n 제 15 조 (서비스의 이용 시간)\n ① 서비스의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 다만 Ours-trading이 업무상 또는 기술상의 이유로 서비스의 전부 또는 일부가 일시중지 되거나, 운영상의 목적으로 Ours-trading이 정한 기간에는 서비스의 전부 또는 일부를 일시중지 될 수 있습니다. 이러한 경우 Ours-trading은 사전 또는 사후 이를 공지합니다. \n 제 16 조 (서비스 제공의 중지) \n 무료 서비스의 경우, Ours-trading의 필요에 따라 언제든지 본 서비스의 전부 또는 일부를 수정하거나 중단 할 수 있으며, 이 경우 Ours-trading은 전자우편 또는 인터넷 홈페이지 등을 통하여 즉시 이를 고지합니다. \n 제 5장 계약 해지 및 서비스 이용 제한 \n 제 21 조 (서비스 이용 제한) \n Ours-trading은 이용자의 다음 사항에 해당하는 행위를 하였을 경우, 사전 통지 없이 이용 계약을 해지하거나 또는 기간을 정하여 서비스 이용을 중지할 수 있습니다. \n ① 공공 질서 및 미풍 양속에 반하는 경우 \n ② 국익 또는 사회적 공익을 저해할 목적으로 서비스 이용을 계획 또는 실행할 경우 \n ③ 기타 관련 법령이나 Ours-trading이 정한 이용조건에 위배되는 경우 \n 제 6장 부칙 \n 이 약관은 2023년 05월 00일 부터 시행됩니다. "}
            name="agreement1"
            checked={agreements.agreement1}
            onChange={handleCheckboxChange}
          />
          <AgreeBox
            title='개인정보 수집·이용 및 제3자 제공에 대한 동의(필수)'
            text={"개인정보 수집 이용 등에 대한 사전 동의 개인정보보호를 위한 이용자 동의사항(자세한 내용은 “개인정보취급방침”을 확인하시기 바랍니다.)\n 가. 개인정보의 수집·이용 목적 \n① 홈페이지 회원 가입 및 관리 회원 가입의사 확인 \n② 회원제 서비스 제공에 따른 본인 식별/인증 \n③ 회원자격 유지/관리 \n④ 제한적 본인 확인제 시행에 따른 본인확인 \n⑤ 서비스 부정이용 방지, 맞춤서비스 제공 \n⑥ 만 14세 미만 아동의 개인정보 처리시 법정대리인의 동의여부 확인 \n⑦ 각종 고지/통지, 고충처리, 계약서/청구서 발송 \n⑧ 재화 또는 서비스 제공 물품배송, 요금결제/정산 \n⑨ 서비스 제공, 콘텐츠 제공, 본인인증, 연령인증, 채권추심 \n나. 개인정보의 처리 \n① 고충처리 민원인의 신원 확인 \n② 민원사항 확인, 사실조사를 위한 연락/통지 \n③ 처리결과 통보 \n다. 수집하는 개인정보의 항목 \n① 서비스 제공/필수항목 : 성명, 연락처, 주소 \n② 선택항목 : 배출품목, 수량 ※ 인터넷 서비스 이용과정에서 IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록, 불량 이 용기록 등 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다. \n라. 개인정보의 보유 및 이용기간 \n① 홈페이지 회원 가입 및 관리 : 이용자 홈페이지 탈퇴시까지 \n② 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료시까지 관계 법령 위반에 따른 수사/조사 등이 진행중인 경우에는 해당 수사/조사 종료시까지 홈페이지 이용에 따른 채권/채무관계 잔존시에는 해당 채권/채무관계 정산시까지 \n③ 서비스 제공 : 재화/서비스 공급완료 및 요금결제/정산 완료시까지 \n④ 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료시까지 \n「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시/광고, 계약내용 및 이행 등 거래에 관한 기록 - 표시/광고에 관한 기록 : 6월 - 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년 - 소비자 불만 또는 분쟁처리에 관한 기록 : 3년 \n[통신비밀보호법」제41조에 따른 통신사실 확인자료 보관 - 가입자 전기통신일시, 개시/종료시간, 상대방 가입자번호, 사용도수, 발신기지국 위치추적자료 : 1년 - 컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료 : 3개월 \n마. 개인정보의 파기 ① Ours-trading은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정 보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다. \n② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다."}
          name="agreement2"
          checked={agreements.agreement2}
          onChange={handleCheckboxChange}
          />
          <input
            type="checkbox"
            name="agreement3"
            style={{ marginRight: 10 }}
            checked={agreements.agreement3}
            onChange={handleEventCheckboxChange}
          />
          <span>
            E-mail 및 SMS 광고성 정보 수진동의(선택) <br />
            <span style={{ fontSize: '0.5em' }}>
              다양한 프로모션 소식 및 신규 매장 정보를 보내드립니다.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

const AgreeBox = (props) => {
  const { title, text, name, checked, onChange } = props;

  return (
    <div>
      <input
        type="checkbox"
        style={{ marginRight: 10 }}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span style={{ display: 'inline-block', marginBottom: 10, width : '90%' }}>{title}</span>
      <div
        style={{
          border: '1px solid black',
          backgroundColor: 'white',
          overflow: 'auto',
          width: '90%',
          height: 200,
          margin: '10px auto',
          borderRadius: 20,
          whiteSpace: 'pre-line'
        }}
      >
        {text.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


export default ScheduleCheck;
