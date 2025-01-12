import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createContext } from "react";
import { setLoggedInUserData } from "@/redux/features/loggedInUserSlice";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(token)
    if (!token) {
      console.log("No token found. User not logged in.");
      return;
    }

    // Function to fetch data
    const fetchData = () => {
      axios({
        method: "GET",
        url: "https://borisdessy.softvencefsd.xyz/api/users/data",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => {
          dispatch(setLoggedInUserData(res?.data?.data));
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          localStorage.removeItem("token");
        });
    };

    // Initially fetch data
    fetchData();

    // Listen to route changes by checking window.location
    const onRouteChange = () => {
      fetchData();
    };

    // Listen for popstate (browser navigation) and pushState (programmatic navigation)
    window.addEventListener("popstate", onRouteChange);
    const originalPushState = window.history.pushState;
    window.history.pushState = (...args) => {
      originalPushState.apply(window.history, args);
      onRouteChange(); // Call on route change when pushState is triggered
    };

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("popstate", onRouteChange);
      window.history.pushState = originalPushState; // Restore original pushState method
    };
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setRole("user");
    dispatch(setLoggedInUserData(null)); // Reset Redux state
    window.location.href = "/";
  };

  const allValues = {
    isAuthenticated,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
