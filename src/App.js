import Home from './pages/Home'
import Buildings from './pages/Buildings'
// import Gym from './pages/Gym'
// import Schools from './pages/Schools'
// import Parks from './pages/Parks'
import Aboutus from './pages/Aboutus'
import Header from './components/Header'

import Contactus from './pages/Contactus'
import {
  Routes,
  Route,

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
    </>
  );
}

export default App;
