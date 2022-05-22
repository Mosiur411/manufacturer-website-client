import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './componnets/pages/Blog/Blog';
import Home from './componnets/pages/Home/Home';
import Footer from './componnets/shared/Footer';
import Navbar from './componnets/shared/Navbar';
import NotFound from './componnets/shared/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
