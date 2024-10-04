import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';  
import RapidScatDetail from './pages/RapidScatDetail';  // Page for RAPIDSCAT mission
import MarsRoverDetail from './pages/MarsRoverDetail';  // Page for MARS ROVER mission

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission/rapidscat" element={<RapidScatDetail />} />  
        <Route path="/mission/mars-rover" element={<MarsRoverDetail />} />  
      </Routes>
    </Router>
  );
}

export default App;
