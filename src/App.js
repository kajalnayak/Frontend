import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRout from "./components/Routes/ProtectedRout";
import PublicRoute from "./components/Routes/PublicRoute";
import Donar from "./pages/Dashboard/Donar";
import Hospitals from "./pages/Dashboard/Hospital";
import OrganisationPage from "./pages/Dashboard/OrganisationPage";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Donation";
 import Analytics from "./pages/Dashboard/Analytics";
 import DonarList from "./pages/Admin/DonarList";
 import HospitalList from "./pages/Admin/HospitalList";
 import OrgList from "./pages/Admin/OrgList";
 import AdminHome from "./pages/Admin/AdminHome";





function App() {
  return (
     <>
    <ToastContainer/>
    <Routes>
         <Route
          path="/admin"
          element={
            <ProtectedRout>
              <AdminHome />
            </ProtectedRout>
          }
        /> 

       <Route
          path="/donar-list"
          element={
            <ProtectedRout>
              <DonarList />
            </ProtectedRout>
          }
        /> 

        <Route
          path="/hospital-list"
          element={
            <ProtectedRout>
              <HospitalList />
            </ProtectedRout>
          }
        />

        <Route
          path="/org-list"
          element={
            <ProtectedRout>
              <OrgList />
            </ProtectedRout>
          }
        />

        <Route
          path="/hospital"
          element={
            <ProtectedRout>
              <Hospitals />
            </ProtectedRout>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRout>
              <Analytics />
            </ProtectedRout>
          }
        />

        <Route
          path="/consumer"
          element={
            <ProtectedRout>
              <Consumer />
            </ProtectedRout>
          }
        />

        <Route
          path="/donation"
          element={
            <ProtectedRout>
              <Donation />
            </ProtectedRout>
          }
        />

        <Route
          path="/orgnaisation"
          element={
            <ProtectedRout>
              <OrganisationPage />
            </ProtectedRout>
          }
        />

        <Route
          path="/donar"
          element={
            <ProtectedRout>
              <Donar />
            </ProtectedRout>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRout>
              <HomePage />
            </ProtectedRout>
          }
        />

         <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        /> 


        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

      </Routes>
   </> 

  );
}

export default App;


 