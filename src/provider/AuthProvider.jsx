import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Hourglass } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

  const [userEmail, setUserEmail] = useState(null);
  const [loading,setLoading]=useState(false)
  const[getToken,setToken]=useState(localStorage.getItem('accessToken'))


  const checkAuth = () => {
    setLoading(true)
    const token = localStorage.getItem('accessToken');
    setToken(token)
    
  };


  const logout = () => {
    localStorage.removeItem('accessToken');
    setUserEmail(null);
    checkAuth();
    return <Navigate to="/th" replace={true}/>
  };

  // Check authentication status when the component mounts
  useEffect(() => {
    setLoading(true)
    checkAuth();
    const token =getToken ;
 
    if(token){
        const decoded = jwtDecode(token);
        setUserEmail(decoded?.email)
        setLoading(false)
    }
     setLoading(false)
    

  }, [logout,getToken,loading]);

  if(getToken){
    if (loading || !userEmail ) {
      return (<div className="flex justify-center items-center w-full min-h-screen">
          <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={['#a81a57', '#E2126D']}
          />
      </div>)
  }
  }else{
    if (loading  ) {
      return (<div className="flex justify-center items-center w-full min-h-screen">
          <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={['#a81a57', '#E2126D']}
          />
      </div>)
  }
  }

  return (
    <AuthContext.Provider value={{  logout ,userEmail,loading ,setToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;