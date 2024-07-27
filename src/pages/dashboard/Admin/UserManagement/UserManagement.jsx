import axios from "axios";
import UserManageRow from "./UserManageRow";
import { useQuery } from '@tanstack/react-query';
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'
import toast from "react-hot-toast";

const UserManagement = () => {
    let [isOpen, setIsOpen] = useState(true);
    const [search, setSearch] = useState(null);
    const [dataBlock, setBlock] = useState({ user: "", status: "", isOpen: false });
    //console.log(dataBlock)
    const { isLoading, refetch, data:users } = useQuery({
        queryKey: ['users',search],
        queryFn: async () => {
            let uri = 'https://server-coral-nine.vercel.app/admin/users'
            if(search){
                uri = `https://server-coral-nine.vercel.app/admin/users?name=${search}`
            }
            console.log(uri)
            const response = await axios(uri);
            const data = response.data
            return data;
        },
    })
    const updateRole = async (dataBlock) => {
        try {
            const initialMoney = dataBlock?.user?.role==="agent"?10000:40;
            const res = await axios.patch('https://server-coral-nine.vercel.app/admin/user', {
                id: dataBlock.user._id,
                status: dataBlock?.status,
                email: dataBlock.user.email,
                phoneNumber: dataBlock?.user.phoneNumber,
                initialMoney:initialMoney

            })
            console.log(res.data?.modifiedCount)
            if (res.data?.modifiedCount > 0) {
                toast.success(`Account ${dataBlock?.status} successfully`);
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
    const handleSearch =async(event)=>{
       event.preventDefault()
       const getName = event.target.name.value;
       setSearch(getName)
       refetch()
    }
    return (
        <div className="bg-white h-full w-full">
            <div className="navbar justify-center">
                <div className="flex-1 md:flex hidden">
                    <a className="text-[#E2126D] font-bold text-xl">User management</a>
                </div>
                <form onSubmit={handleSearch} className="flex-none gap-2">
                    <label className="input bg-red-100 text-gray-600 px-0 pl-5 rounded-full flex items-center justify-between gap-2">
                        <input type="text" name="name" className="grow rounded-md placeholder:text-gray-600" placeholder="Search by name" />
                        <button type="submit" className="btn btn-circle glass bg-[#E2126D] hover:bg-[#e2126c85]">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#fff"
                            className="h-5 w-5 opacity-100">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                        </button>
                        
                    </label>

                </form>
            </div>
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
                            key={idx}
                            user={user}
                            refetch={refetch}
                            isLoading={isLoading}
                            setBlock={setBlock}
                        />
                    )}
                </tbody>
            </table>

            <Dialog open={dataBlock.isOpen} onClose={() => setBlock({ user: "", status: "", isOpen: false })} className="relative z-50 ">
                <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-20 backdrop-blur-md" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-gray-100 text-gray-700 shadow-lg  p-12">
                        <DialogTitle className="font-bold">Are you sure? </DialogTitle>
                        <p>Are you sure you want to {dataBlock?.status} this account? </p>
                        <div className="flex gap-4">
                            <button onClick={() => setBlock({ user: "", status: "", isOpen: false })}>Cancel</button>
                            <button onClick={() => updateRole(dataBlock)}>Confirm</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};

export default UserManagement;