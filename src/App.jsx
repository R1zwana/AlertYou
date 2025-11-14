import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import SafeRoutePage from './Pages/SafeRoutePage';
import ReportEmergencyPage from './Pages/ReportEmergencyPage';
import ResourcesPage from './Pages/ResourcesPage';
import SheltersPage from './Pages/SheltersPage';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/safe-route" element={<SafeRoutePage />} />
          <Route path="/report-emergency" element={<ReportEmergencyPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/shelters" element={<SheltersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
