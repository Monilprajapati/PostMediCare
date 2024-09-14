import roleOptions from "../constants/roleOptions";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import UserAuthForm from "../pages/UserAuthForm";
import VerifyOtp from "../pages/VerifyOtp";
import UpdatePassword from "../pages/UpdatePassword";
import ForgotPassword from "../pages/ForgotPassword";
import { useUserContext } from "../contexts/userContext";
import UserProfile from "../pages/UserProfile";
import HomePage from "../pages/HomePage";
import GoogleSignInButton from "../components/GoogleSignInButton";
import Precautions from "../components/Precautions/Precautions";
import MyDoctor from "../components/MyDoctor/MyDoctor";
import Appointments from "../components/Appointments";
import Recommendations from "../components/Recommendations";
import NotFound404 from "../components/NotFound404";
import PatientDashboard from "../pages/PatientDashboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import AddRequiredMedicalDetails from "../pages/AddRequiredMedicalDetails";

const CustomRoutes = () => {
  const { userRole } = useUserContext();

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <UserAuthForm type="login" />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <UserAuthForm type="register" />
          </PublicRoute>
        }
      />

      <Route
        path="/verifyOtp"
        element={
          <PublicRoute>
            <VerifyOtp />
          </PublicRoute>
        }
      />

      <Route
        path="/forgot-password"
        element={
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        }
      />

      <Route
        path="/reset-password/:userId"
        element={
          <PublicRoute>
            <UpdatePassword />
          </PublicRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute role={userRole}>
            <UserProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patient-dashboard"
        element={
          <ProtectedRoute role={roleOptions[0].value}>
            <PatientDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<div className="w-full flex justify-center items-center">Hi there</div>} />
        <Route path="precautions" element={<Precautions />} />
        <Route path="my-doctor" element={<MyDoctor />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>

      <Route
        path="/doctor-dashboard"
        element={
          <ProtectedRoute role={roleOptions[1].value}>
            <DoctorDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<div className="w-full flex justify-center items-center">
          Hi there default
        </div>} />
        <Route path="something" element={<div className="w-full flex justify-center items-center">
          Hi there 2 (some path)
        </div>} />
      </Route>

      <Route
        path="/google-login"
        element={
          <PublicRoute>
            <GoogleSignInButton />
          </PublicRoute>
        }
      />
      <Route
        path="/add-required-medical-details"
        element={
          <ProtectedRoute role={roleOptions[0].value}>
            <AddRequiredMedicalDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <PublicRoute>
            <HomePage />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default CustomRoutes;
