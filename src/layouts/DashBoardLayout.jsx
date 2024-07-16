import { Outlet } from "react-router-dom";
import SIdebar from "../components/Dashboard/sidebar/SIdebar";

const DashBoardLayout = () => {
   
        
    return (
        <div className="lg:flex">
        <SIdebar> </SIdebar>
        <div className="h-screen overflow-y-auto overflow-x-auto flex-1 bg-white">
            <Outlet></Outlet>
        </div>
        </div>
    );
  };
  
 

    

export default DashBoardLayout;