import React, { useState, useEffect } from 'react';
import '../style/reservation.scss';

import { useDispatch } from 'react-redux';
import { dateState } from '../redux/store';

const Schedule = () => {
  // 날짜
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const dispatch = useDispatch();

  // 이전 달로 이동
  const handlePrevMonth = () => {
    setDate(prevDate => {
      const prevMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
      return prevMonth;
    });
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    setDate(prevDate => {
      const nextMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
      return nextMonth;
    });
  };

  // 날짜를 클릭했을 때 처리
  const handleDateClick = (day) => {
    const clickedDate = new Date(date.getFullYear(), date.getMonth(), day);
    const year = clickedDate.getFullYear();
    const month = clickedDate.getMonth() + 1;
    const formattedDate = `${year}-${month}-${day}`;

    setSelectedDate(formattedDate);
  };

  // 시간을 클릭했을 때 처리
  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  useEffect(() => {
    // 선택한 날짜와 시간이 변경될 때마다 dispatch 호출
    if (selectedDate || selectedTime) {
      const payload = {
        date: selectedDate || '',
        time: selectedTime || '',
      };
      dispatch(dateState(payload));
    }
  }, [selectedDate, selectedTime, dispatch]);

  // 캘린더를 렌더링
  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDays = [];

    // 첫 날짜 전에 빈 날짜 채우기
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`blank-${i}`} className="calendar-day blank"></div>);
    }

    // 해당 월의 날짜 렌더링
    for (let day = 1; day <= daysInMonth; day++) {
      const currentYear = date.getFullYear();
      const currentMonth = date.getMonth() + 1;
      const currentDate = day;

      const isSelected = selectedDate === `${currentYear}-${currentMonth}-${currentDate}`;

      calendarDays.push(
        <div
          key={day}
          className={`calendar-day ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className='reservation-result'>
      <div className="calendar-container">
        <h4>예약 일정 살펴보기</h4>
        <div className="calendar-header">
          <button className="prev-month-button" onClick={handlePrevMonth}>&lt;</button>
          <h2 className="calendar-month">{date.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
          <button className="next-month-button" onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="calendar-days">
          <div className="calendar-day">SUN</div>
          <div className="calendar-day">MON</div>
          <div className="calendar-day">TUE</div>
          <div className="calendar-day">WED</div>
          <div className="calendar-day">THU</div>
          <div className="calendar-day">FRI</div>
          <div className="calendar-day">SAT</div>
        </div>
        <div className="calendar-grid">
          {renderCalendar()}
        </div>

        <div className='clock-container'>
          <h4>예약 가능 시간</h4>
          <div className='clock-select'>
            <button
              className={selectedTime === '오전' ? 'click' : ''}
              onClick={() => handleTimeClick('오전')}
            >
              오전
            </button>
            <button
              className={selectedTime === '오후' ? 'click' : ''}
              onClick={() => handleTimeClick('오후')}
            >
              오후
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
