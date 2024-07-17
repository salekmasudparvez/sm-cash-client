import axios from "axios";
import UserManageRow from "./UserManageRow";
import { useQuery } from '@tanstack/react-query';
import { useState } from "react";
import {  Dialog, DialogPanel, DialogTitle ,DialogBackdrop} from '@headlessui/react'
import toast from "react-hot-toast";

const UserManagement = () => {
    let [isOpen, setIsOpen] = useState(true)
    const [dataBlock, setBlock] = useState({ user: "", status: "", isOpen: false });
    //console.log(dataBlock)
    const { isLoading, refetch, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axios('http://localhost:5000/admin/users');
            const data = response.data
            return data;
        },
    })
  const updateRole =async(dataBlock)=>{
    try {
       const res = await axios.patch('http://localhost:5000/admin/user',{
        id: dataBlock.user._id,
        status: dataBlock.status,
        email: dataBlock.user.email
       })
       console.log(res.data?.modifiedCount)
       if(res.data?.modifiedCount>0){
        toast.success('Account activated successfully');
        setBlock({ user: "", status: "", isOpen: false })
        refetch()
       }
       setBlock({ user: "", status: "", isOpen: false })
       refetch()
    } catch (error) {
        console.log(error)
        setBlock({ user: "", status: "", isOpen: false })
    }
    
  }
    return (
        <div className="bg-white h-full w-full">
            <h1 className="text-2xl bg-white text-red-400 font-bold p-6 text-center">User Management</h1>
            <table class="bg-white min-w-full table-auto  max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-auto text-gray-800">
                <thead>
                    <tr>
                        <th class="px-4 py-2">Name</th>
                        <th class="px-4 py-2">Email & number</th>
                        <th class="px-4 py-2">Role</th>
                        <th class="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, idx) =>
                        <UserManageRow
                            key={idx} user={user}
                            refetch={refetch}
                            isLoading={isLoading}
                            setBlock={setBlock}
                        />
                    )}
                </tbody>
            </table>
           
            <Dialog open={dataBlock.isOpen} onClose={()=>setBlock({user:"",status:"",isOpen:false})} className="relative z-50 ">
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-20 backdrop-blur-md" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-gray-100 text-gray-700 shadow-lg  p-12">
                        <DialogTitle className="font-bold">Are you sure? </DialogTitle>
                        <p>Are you sure you want to {dataBlock?.status} this account? </p>
                        <div className="flex gap-4">
                            <button onClick={()=>setBlock({user:"",status:"",isOpen:false})}>Cancel</button>
                            <button onClick={()=>updateRole(dataBlock)}>Confirm</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};

export default UserManagement;