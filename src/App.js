import Home from './pages/Home'
import Buildings from './pages/Buildings'
// import Gym from './pages/Gym'
// import Schools from './pages/Schools'
// import Parks from './pages/Parks'
import Aboutus from './pages/Aboutus'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/app.css'
import Contactus from './pages/Contactus'
import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="buildings" element={<Buildings />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contactus" element={<Contactus />} />
      </Routes>
      <div>

        <Outlet />
      </div>
      <Footer />

    </>
  );
}

export default App;
