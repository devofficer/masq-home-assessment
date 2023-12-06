import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './styles/main.scss';
import WeatherComponent from './components/WeatherComponent';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherComponent />} />
      </Routes>
    </Router>
  );
}
