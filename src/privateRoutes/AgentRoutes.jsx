

import { Navigate, useLocation } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";
import { PropTypes } from 'prop-types';
import useAuth from "../hooks/useAuth";
import userRole from "../hooks/userRole";



const AgentRoute = ({ children }) => {
    const { loading } = useAuth();
    const [role,isLoading] = userRole()
    const location = useLocation();


    if (role?.role==="agent") {
        return <>
            {children}
        </>
    }


    if (loading ||isLoading) {
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
AgentRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AgentRoute;