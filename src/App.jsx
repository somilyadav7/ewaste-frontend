import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Facilities from "./Components/Facilities";
import Recycle from "./Components/Recycle";
import Ewaste from "./Components/Ewaste";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
import Smartphone from "./Components/Recycle/Smartphone";
import Laptop from "./Components/Recycle/Laptop";
import Other from "./Components/Recycle/Other";
import Accessories from "./Components/Recycle/Accessories";
import Refrigerator from "./Components/Recycle/Refrigerator";
import Television from "./Components/Recycle/Television";
import Signin from "./Components/Signin";
import BlogDetail from "./Components/education/[id]/Blog";
import Rules from "./Components/Rules";
import AdminSignin from "./Components/Admin/AdminSignin";
import UserProfile from "./Components/Profile/UserProfile";
import { useState } from "react";
import AdminProfile from "./Components/Profile/AdminProfile";
import UpdateUser from "./Components/Profile/UpdateUser";
import { getUserName } from "./Components/Auth";
import UpdateOrder from "./Components/Profile/UpdateOrder";
import OrdersProfile from "./Components/Profile/OrdersProfile";
import AdminOrders from "./Components/Profile/AdminOrders";
import ProtectedRoute from "./Utils/ProtectedRoute";
import Footer from "./Components/Footer";
import UserUpdate from "./Components/Profile/UserUpdate";
import ViewOrder from "./Components/Profile/ViewOrder";

function App() {
  const [user, setUser] = useState(getUserName());

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/ewaste" element={<Ewaste />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education/:id" element={<BlogDetail />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/signin"
            element={<Signin user={user} setUser={setUser} />}
          />
          <Route
            path="/adminsignin"
            element={<AdminSignin user={user} setUser={setUser} />}
          />

          <Route
            path="/recycle"
            element={
              <ProtectedRoute user={user}>
                <Recycle />
              </ProtectedRoute>
            }
          />
          <Route
            path="/recycle/Smartphone"
            element={
              <ProtectedRoute user={user}>
                <Smartphone user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/recycle/Laptop"
            element={
              <ProtectedRoute user={user}>
                <Laptop user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/recycle/Accessories"
            element={
              <ProtectedRoute user={user}>
                <Accessories user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/recycle/Refrigerator"
            element={
              <ProtectedRoute user={user}>
                <Refrigerator user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/recycle/Television"
            element={
              <ProtectedRoute user={user}>
                <Television user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/recycle/Other"
            element={
              <ProtectedRoute user={user}>
                <Other user={user} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/userprofile"
            element={
              <ProtectedRoute user={user}>
                <UserProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/adminprofile"
            element={
              <ProtectedRoute user={user} requiredRole="admin">
                <AdminProfile />
              </ProtectedRoute>
            }
          />
          {/* admin */}
          <Route
            path="/update-user/:id"
            element={
              <ProtectedRoute user={user} requiredRole="admin">
                <UpdateUser />
              </ProtectedRoute>
            }
          />
          {/* user */}
          <Route
            path="/update-order/:id"
            element={
              <ProtectedRoute user={user}>
                <UpdateOrder />
              </ProtectedRoute>
            }
          />
          {/* admin */}
          <Route
            path="/orderprofile"
            element={
              <ProtectedRoute user={user} requiredRole="admin">
                <OrdersProfile />
              </ProtectedRoute>
            }
          />
          {/* admin */}
          <Route
            path="/order-update/:id"
            element={
              <ProtectedRoute user={user} requiredRole="admin">
                <AdminOrders />
              </ProtectedRoute>
            }
          />
          {/* user */}
          <Route
            path="/user-update/:id"
            element={
              <ProtectedRoute user={user}>
                <UserUpdate />
              </ProtectedRoute>
            }
          />
          {/* admin */}
          <Route
            path="/view-order/:username"
            element={
              <ProtectedRoute user={user} requiredRole="admin">
                <ViewOrder />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
