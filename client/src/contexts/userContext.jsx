import { createContext, useContext, useState, useEffect } from "react";
import { getUserDetails, logoutUser } from "../services/authServices.jsx";
import axios from "axios";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDetailsAdded, setIsDetailsAdded] = useState(false);
  const [patientDetail, setPatientDetail] = useState(null);
  const [doctorDetail, setDoctorDetail] = useState(null);

  const SERVER_DOMAIN = import.meta.env.VITE_SERVER_URL;
  console.log(SERVER_DOMAIN);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await getUserDetails();
        if (!response) {
          setIsLoading(false);
          setIsAuth(false);
          setUser(null);
          return;
        }

        const { user } = response.data;
        if (response) {
          setIsAuth(true);
          setUserId(user.id);
          setUserRole(user.role);
          setUser(user);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setIsLoading(false);
      }
    };

    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get(
          `${SERVER_DOMAIN}/api/v1/patient/get-details`,
          {
            withCredentials: true,
          }
        );
        console.log("Response - ", response.data);
        setPatientDetail(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        return null;
      }
    };

    const fetchDoctorDetails = async () => {
      try {
        const response = await axios.get(
          `${SERVER_DOMAIN}/api/v1/doctor/get-details`,
          {
            withCredentials: true,
          }
        );
        console.log("Response - ", response.data);
        setDoctorDetail(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        return null;
      }
    };

    fetchUserDetails();

    if (userRole === "patient") {
      fetchPatientDetails();
    } else if (userRole === "doctor") {
      fetchDoctorDetails();
    }
  }, [isAuth, userId, userRole]);

  const logout = async () => {
    setIsAuth(false);
    setUserId("");
    setUserRole("");
    setUser(null);
    logoutUser();
  };

  return (
    <UserContext.Provider
      value={{
        isAuth,
        setIsAuth,
        userId,
        setUserId,
        userRole,
        setUserRole,
        isLoading,
        user,
        setUser,
        logout,
        isDetailsAdded,
        setIsDetailsAdded,
        patientDetail,
        setPatientDetail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error(
      "useUserContext must be within a UserContextProvider. Make sure the component is wrapped in UserContextProvider"
    );

  return context;
};
