import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const useAuth =()=>{
    const data = useContext(AuthContext);
    return data
}
export default useAuth