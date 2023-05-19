import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from "./components/Header";
import Footer from './components/Footer';
import Collect from './pages/Collect';
import Reservation from './pages/Reservation';
import ReservationCheck from './pages/ReservationCheck';
import ReservationSuccess from './pages/ReservationSuccess';
import ReservationList from './pages/ReservationList';
import Instruction from './pages/Instructions';
import Service from './pages/Service';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* 메인페이지 */}
        <Route path='/' element={<Home />} /> 
        {/* 수거 신청 */}
        <Route path='/collect' element={<Collect />} />
        {/* 예약페이지 */}
        <Route path='/reservation' element={<Reservation />} />
        {/* 예약확인 */}
        <Route path='/ReservationCheck' element={<ReservationCheck />} />
        {/* 예약완료 페이지 */}
        <Route path='/ReservationSuccess' element={<ReservationSuccess />} />
        {/* 예약내역 */}
        <Route path='/ReservationList' element={<ReservationList />} />
        {/* 이용안내페이지 */}
        <Route path='/Instruction' element={<Instruction/>}/>
        {/* 고객센터 */}
        <Route path='/Service' element={<Service/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
