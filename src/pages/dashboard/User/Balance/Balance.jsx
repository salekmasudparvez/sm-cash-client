import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const Balance = () => {
    const axiosSecure = useAxiosSecure();
    const {userEmail}= useAuth()
    const {data}=useQuery({
        queryKey: ['balance'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/balance/${userEmail}`);
            const data = response.data
            return data
        }
    })
    const {_id,balance,ownerEmail,userID} = data || {}
    //console.log(data)
    return (
        <div className="flex h-full gap-9 items-center md:flex-row flex-col rounded min-w-full py-7 lg:px-8 px-4 ">
            <div className="flex flex-col justify-start items-center w-1/2 border p-4 py-8 shadow-md shadow-[#E2126D] rounded-lg">
                <div className="stat-title text-gray-800">Account balance</div>
                <div className="stat-value text-[#E2126D]">${balance?balance:"0"}</div>
                <div className="stat-actions">
                    <Link to="/dashboard/cashin" className="btn btn-sm bg-[#E2126D] text-white hover:bg-red-300">Add money</Link>
                </div>
            </div>

            <div className="flex flex-col justify-start items-center w-1/2 space-y-4 px-4 py-8 shadow-md shadow-[#E2126D] rounded-lg">
                <div className="stat-title text-gray-800">Recent Activity coming soon</div>
                <div className="stat-value "></div>
                <div className="space-x-2 p-3 flex">
                    <Link to="/dashboard/cashout" className="btn btn-sm bg-[#E2126D] text-white hover:bg-red-300">Cash out</Link>
                    <Link to="/dashboard/cashin" className="btn btn-sm bg-[#E2126D] text-white hover:bg-red-300">Cash in</Link>
                </div>
            </div>
        </div>
    );
};

export default Balance;