// import React, { createContext, useState, useEffect } from 'react';
// import jwtDecode from 'jwt-decode';
// import PropTypes from 'prop-types';

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   console.log(user)

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         const currentTime = Date.now() / 1000;
//         if (decodedToken.exp < currentTime) {
//           localStorage.removeItem('token');
//           setIsAuthenticated(false);
//           setUser(null);
//         } else {
//           setIsAuthenticated(true);
//           setUser(decodedToken.email);
//         }
//       } catch (error) {
//         console.error('Invalid token:', error);
//         localStorage.removeItem('token');
//         setIsAuthenticated(false);
//         setUser(null);
//       }
//     } else {
//       setIsAuthenticated(false);
//       setUser(null);
//     }
//   }, []);

//   const GetAllData = {
//     isAuthenticated,
//     user,
//     setIsAuthenticated,
//     setUser,
//   };

//   return (
//     <AuthContext.Provider value={GetAllData}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default AuthProvider;
