import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { jwtDecode } from "jwt-decode";



export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const LogOutUser = () => {

        return signOut(auth)
    }
    

   
    const GetAllData = {
        user, LogOutUser, creatUserPassword, signInWithPassword, loading, setLoading, setUser
    }
    return (
        <AuthContext.Provider value={GetAllData}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.element
}

export default AuthProvider;