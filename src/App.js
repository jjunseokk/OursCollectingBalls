import './App.scss';
import { ParallaxProvider } from "react-scroll-parallax";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from "./components/Header";
import Footer from './components/Footer';
// import Collect from './pages/Collect';
import Reservation from './pages/Reservation';
import ReservationCheck from './pages/ReservationCheck';
import ReservationSuccess from './pages/ReservationSuccess';
import ReservationList from './pages/ReservationList';
import Instruction from './pages/Instructions';
import Service from './pages/Service';
import TermsOfUse from './pages/TermsOfUse';
import RefuseCollectEmail from './pages/RefuseCollectEmail';
import Privacy from './pages/Privacy';
import About from './pages/About';
import OursBox from './pages/OursBox';
import Ours from './pages/Ours';
import Factory from './pages/Factory';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <Routes>
          {/* 메인페이지 */}
          <Route path='/' element={<Home />} />
          {/* 수거 신청 */}
          {/* <Route path='/collect' element={<Collect />} /> */}
          {/* 예약페이지 */}
          <Route path='/reservation' element={<Reservation />} />
          {/* 예약확인 */}
          <Route path='/ReservationCheck' element={<ReservationCheck />} />
          {/* 예약완료 페이지 */}
          <Route path='/ReservationSuccess' element={<ReservationSuccess />} />
          {/* 예약내역 */}
          <Route path='/ReservationList' element={<ReservationList />} />
          {/* 이용안내페이지 */}
          <Route path='/Instruction' element={<Instruction />} />
          {/* 고객센터 */}
          <Route path='/Service' element={<Service />} />
          {/* 이용약관 */}
          <Route path='/TermsOfUse' element={<TermsOfUse />} />
          {/* 이메일무단수집거부 */}
          <Route path='/RefuseCollectEmail' element={<RefuseCollectEmail />} />
          {/* 개인정보 취급방침 */}
          <Route path='/Privacy' element={<Privacy />} />
          {/* 회사소개 */}
          <Route path='/About' element={<About />} />
          {/* 아워스 */}
          <Route path='/Ours' element={<Ours />} />
          {/* 아워스박스 */}
          <Route path='/OursBox' element={<OursBox />} />
          {/* 팩토리 */}
          <Route path='/Factory' element={<Factory />} />
        </Routes>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
