import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import OurApproach from './OurApproach';
import SATRegistration from './SATRegistration';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/sat-registration" element={<SATRegistration />} />
      </Routes>
    </Router>
  );
}
