import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [loading,setLoading]=useState(false)


  const checkAuth = () => {

    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(!!token);
  };


  const logout = () => {
    localStorage.removeItem('accessToken');
    setUserEmail(null);
    checkAuth();
  };

  // Check authentication status when the component mounts
  useEffect(() => {
    setLoading(true)
    checkAuth();
    const token = localStorage.getItem('accessToken');
    
    if(token){
        const decoded = jwtDecode(token);
        setUserEmail(decoded?.email)
        setLoading(false)
    }else{
        setUserEmail(null)
        setLoading(false)
    }
    

  }, [logout]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout ,userEmail,loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;