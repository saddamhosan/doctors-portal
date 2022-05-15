import { Toaster } from "react-hot-toast";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAdmin from "./assets/RequireAdmin";
import RequireAuth from './assets/RequireAuth';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import AllUser from "./Pages/Dashboard/AllUser";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="myReview" element={<MyReview />} />
          <Route
            path="allUser"
            element={
              <RequireAdmin>
                <AllUser />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
