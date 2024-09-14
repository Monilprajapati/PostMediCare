import { createContext, useContext, useState, useEffect } from "react";
import { getUserDetails, logoutUser } from "../services/authServices.jsx";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

    fetchUserDetails();
  }, [isAuth, userId, userRole]);

  const logout = async () => {
    setIsAuth(false);
    setUserId("");
    setUserRole("");
    setUser(null);
    logoutUser()
  }

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
        logout
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
