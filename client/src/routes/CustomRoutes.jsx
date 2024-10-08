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
import NotFound404 from "../components/NotFound404";
import PatientDashboard from "../pages/PatientDashboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import AddRequiredMedicalDetails from "../pages/AddRequiredMedicalDetails";
import MyPatients from "../components/MyPatients";
import DoctorAppointments from "../components/DoctorAppointments";
import MyResources from "../components/MyResources";
import ContactUs from "../components/ContactUs";
import Resources from "../components/Resources";
import CalenderView from "../components/CalenderView";
import Notification from "../components/Notification";
import PatientDashboardComponent from "../components/PatientDashboardComponent";
import Doctors from "../components/Doctors";
import DoctorAppointment from "../components/DoctorAppointment";
import DoctorDashboardComponent from "../components/DoctorDashboardComponent";
import PatientDetails from "../components/PatientDetails";
import AboutUs from "../pages/AboutUs";

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
        <Route
          index
          element={
            <div className="w-full flex justify-center items-center">
              <PatientDashboardComponent />
            </div>
          }
        />
        <Route path="precautions" element={<Precautions />} />
        <Route path="my-doctor" element={<MyDoctor />} />
        <Route path="calendar" element={<CalenderView />} />
        <Route path="notification" element={<Notification />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:doctorId" element={<DoctorAppointment />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="resources" element={<Resources />} />

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
        <Route index element={<DoctorDashboardComponent />} />
        <Route path="patients" element={<MyPatients />} />
        <Route path="appointment" element={<DoctorAppointments />} />
        <Route path="patient/:patientId" element={<PatientDetails />} />
        <Route path="my-resources" element={<MyResources />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="resources" element={<Resources />} />
        <Route path="*" element={<NotFound404 />} />
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
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
};

export default CustomRoutes;
