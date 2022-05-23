import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './componnets/pages/Blog/Blog';
import Home from './componnets/pages/Home/Home';
import Footer from './componnets/shared/Footer';
import Navbar from './componnets/shared/Navbar';
import NotFound from './componnets/shared/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Login from './componnets/pages/Login/Login';
import Register from './componnets/pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import Dashboard from './componnets/pages/Dashboard/Dashboard';
function App() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
