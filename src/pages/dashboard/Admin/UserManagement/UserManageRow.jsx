import { Description, Field, Label, Select } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Hourglass } from 'react-loader-spinner';


const UserManageRow = ({ isLoading, refetch, user, setBlock }) => {
    const { phoneNumber, email, role, status, username } = user || {};
    //console.log(status)
    const handleRole = (e) => {
        setBlock({ user, status: e.target.value, isOpen: true })
    }

    if (isLoading) {
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
    return (
        <tr>
            <td className="border px-4 py-2">{username}</td>
            <td className="border px-4 py-2">
                <div>
                    <h1>{email}</h1>
                    <h1>{phoneNumber}</h1>
                </div>
            </td>
            <td className="border px-4 py-2">{role}</td>
            <td className="border px-4 py-2 relative">
                <Select
                    onChange={handleRole}
                    defaultValue={status}
                    className={`mt-3 block w-full appearance-none rounded-lg border-none py-1.5 px-3 text-sm/6 text-gray-700 focus:outline-none ${status === "pending" ? 'bg-gray-100' :
                            status === "rejected" ? 'bg-red-200' :
                                status === "approved" ? 'bg-green-200' : ''
                        }`}
                >
                    <option disabled value="pending">Select</option>
                    <option value="approved">Activate</option>
                    <option value="rejected">Block</option>
                </Select>
                <ChevronDownIcon
                    className="pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                    aria-hidden="true"
                />
            </td>
        </tr>

    );
};

export default UserManageRow;