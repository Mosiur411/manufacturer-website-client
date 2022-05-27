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
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './componnets/pages/Dashboard/Dashboard';
import RequireAuth from './componnets/shared/RequireAuth';
import AddReview from './componnets/pages/Dashboard/Add Review/AddReview';
import MyOrders from './componnets/pages/Dashboard/My Orders/MyOrders';
import MyProfile from './componnets/pages/Dashboard/My Profile/MyProfile';
import ManageOrder from './componnets/pages/Dashboard/Manage Order/ManageOrder';
import AddProduct from './componnets/pages/Dashboard/Add Product/AddProduct';
import ManageProducts from './componnets/pages/Dashboard/Manage Products/ManageProducts';
import MakeAdmin from './componnets/pages/Dashboard/Make Admin/MakeAdmin';
import PurchasePages from './componnets/pages/Home/PurchasePages';
import Payment from './componnets/pages/Dashboard/Payment/Payment';
import Profile from './componnets/pages/Profile/Profile';
function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="profile" element={<Profile/>}/>
        <Route path="purchasePages/:id" element={<RequireAuth>
          <PurchasePages />
        </RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route path="" element={<MyOrders/>}/>
          <Route path="addReview" element={<AddReview/>}/>
          <Route path="payment/:id" element={<Payment/>}/>
          <Route path="myProfile" element={<MyProfile/>}/>
          <Route path="manageOrder" element={<ManageOrder/>}/>
          <Route path="addProduct" element={<AddProduct/>}/>
          <Route path="manageProducts" element={<ManageProducts/>}/>
          <Route path="makeAdmin" element={<MakeAdmin/>}/>
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
