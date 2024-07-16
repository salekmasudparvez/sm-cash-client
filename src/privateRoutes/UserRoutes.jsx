

import { Navigate, useLocation } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";
import { PropTypes } from 'prop-types';
import useAuth from "../hooks/useAuth";



const UserRoutes = ({ children }) => {
    const { loading, userEmail } = useAuth();
    const location = useLocation();
    

    if (userEmail) {
        return <>
            {children}
        </>
    }


    if (loading) {
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
    return <Navigate to='/login' state={location} replace={true}></Navigate>

};
UserRoutes.propTypes = {
    children: PropTypes.node.isRequired,
}
export default UserRoutes;