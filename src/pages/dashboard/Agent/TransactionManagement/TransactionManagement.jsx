import { useQuery } from "@tanstack/react-query";
import TransactionManagementRow from "./TransactionManagementRow";
import axios from "axios";
import { useState } from "react";
import useAuth from './../../../../hooks/useAuth';
import { toast } from 'react-hot-toast';


const TransactionManagement = () => {
    const [open, setOpen] = useState(false);
    const { userEmail } = useAuth()
    const [getTrans, setTrans] = useState({ trans: "", status: '' })
    const {refetch, data: transactionsManage } = useQuery({
        queryKey: ['transactionsManager'],
        queryFn: async () => {
            const response = await axios('https://server-coral-nine.vercel.app/request/transactions');
            const data = response.data
            return data
        }
    })
    const {refetch:refetchNotify, data } = useQuery({
        queryKey: ['transactionsCount'],
        queryFn: async () => {
            const response = await axios.get('https://server-coral-nine.vercel.app/notify');
            const data = response.data
            return data
        }
    })
    const { data: balance } = useQuery({
        queryKey: ['balance1'],
        queryFn: async () => {
            const response = await axios(`https://server-coral-nine.vercel.app/balance/${userEmail}`);
            const data = response.data
            return data
        }
    })
    
    const mainBalance = balance?.balance;
    let updatedBalance = ""
    if (getTrans?.trans?.type === "cash-in") {
        updatedBalance = parseInt(mainBalance) - parseInt(getTrans?.trans?.amount)
    } else {
        updatedBalance = parseInt(mainBalance) + parseInt(getTrans?.trans?.amount)
    }

    const handleConfirm = async () => {
        try {
          // Prepare the update document
          const updateDoc = {
            id: getTrans?.trans._id,
            status: getTrans?.status,
            agentEmail: userEmail,
            agentNumber: getTrans?.trans?.receiverNumber,
            senderEmail: getTrans?.trans?.senderEmail,
            amount: getTrans?.trans?.amount,
            type: getTrans?.trans?.type
          };
           console.log(updateDoc)
          // Send the patch request
          const res = await axios.patch('https://server-coral-nine.vercel.app/status', updateDoc);
          console.log(res);
      
          // Check the response and the status
          if (res.data) {
            if (getTrans?.status === "successful") {
              toast.success("Completed successfully");
              refetchNotify()
              refetch()
            } else if (getTrans?.status === "failed") {
              toast.success("Cancelled successfully");
              refetchNotify()
              refetch()
            }
            // Close the dialog
            const dialog = document.getElementById('trans');
            if (dialog) {
              dialog.close();
            }
          }
        } catch (error) {
          console.error("An error occurred:", error);
          toast.error("An error occurred while updating the status");
          const dialog = document.getElementById('trans');
          if (dialog) {
            dialog.close();
          }
        }
      };
      

    return (
        <div className="bg-white h-full w-full">

            <div className="navbar px-3 md:px-9 ">
                <h1 className="text-2xl navbar-start bg-white text-red-400 font-bold p-6 text-center">Transactions Management</h1>

                <div className="navbar-end">
                    <button title="Notification" type="button" className="relative z-10 w-fit items-center p-3 bg-white hover:bg-white rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E2126D" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        {data?.pendingCount > 0 && <button onClick={() => setOpen(!open)} className="absolute top-1 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full  ">{data?.pendingCount || 0}</button>}

                        {open && <a onCanPlay={() => setOpen(false)} className={`min-w-[250px] block absolute right-5 max-w-sm p-6 bg-white text-gray-700 border border-gray-200 rounded-lg shadow hover:bg-gray-100`}>

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 ">Notification</h5>
                            <p className="font-normal text-gray-700">Your {data?.pendingCount || 0} request pending </p>
                        </a>}
                    </button>



                </div>

            </div>
            <div className="overflow-y-auto overflow-x-auto">
                 <table class="bg-white table md:tabs-md lg:table-lg table-xs w-full  max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-auto text-gray-800">
                <thead>
                    <tr>
                        <th class="px-4 py-2">User's Email</th>
                        <th class="px-4 py-2">Amount & Date</th>
                        <th class="px-4 py-2">Pay method</th>
                        <th class="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsManage?.map((transaction, idx) => <TransactionManagementRow key={idx} setTrans={setTrans} transaction={transaction} ></TransactionManagementRow>)}
                </tbody>
            </table>
            </div>
           
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="trans" className="modal modal-middle rounded">
                <div className="modal-box bg-white text-gray-600 rounded">
                    <h3 className="font-bold text-lg">Are you sure?</h3>
                    <p className="py-4">You won't be able to revert this </p>
                    <div className="bg-gray-100 px-2 py-2 w-full rounded flex">
                        <div className="w-2/3">
                            <h1>User email:{getTrans?.trans?.senderEmail}</h1>
                            <h1>Amount:{getTrans?.trans?.amount}</h1>
                            <h1>Your balance:{updatedBalance}</h1>
                        </div>
                        <div className="w-1/3 flex justify-center items-center">
                            {getTrans?.trans?.type === "cash-in" && <a className="bg-red-300 text-white px-2 py-2 rounded-full text-center w-full">Cash in </a>}
                            {getTrans?.trans?.type === "cash-out" && <a className="bg-green-300 text-white px-2 py-2 rounded-full text-center w-full">Cash out </a>}
                        </div>
                    </div>
                    <div className="modal-action">
                        <button onClick={handleConfirm} className="btn btn-success btn-sm rounded border-none outline-none text-white">Confirm</button>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm bg-[#E2126D] rounded hover:bg-[#e2126c94] focus:bg-[#E2126D] border-none outline-none text-white">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    );
};

export default TransactionManagement;