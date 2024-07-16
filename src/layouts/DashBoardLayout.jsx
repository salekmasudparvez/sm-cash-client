import { Outlet } from "react-router-dom";
import SIdebar from "../components/Dashboard/sidebar/SIdebar";

const DashBoardLayout = () => {
   
        
    return (
        <div className="flex">
        <SIdebar> </SIdebar>
        <div className="h-screen overflow-y-auto overflow-x-auto">
            <Outlet></Outlet>
        </div>
        </div>
    );
  };
  
 

    

export default DashBoardLayout;