import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Appointment from './Appointment/Appointment';
import Home from './Pages/Home/Home';
import Header from './Shared/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
