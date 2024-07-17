import { Description, Field, Label, Select } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react';
const UserManageRow = () => {
    const [valueRole,setValueRole]=useState("")
    const handleRole =(e)=>{
        console.log(e.target.value)
        setValueRole(e.target.value)
    }
    return (
        <tr>
            <td class="border px-4 py-2">01405729408</td>
            <td class="border px-4 py-2">Emai</td>
            <td class="border px-4 py-2">Role</td>
            <td class="border px-4 py-2">
               
                <Select
                onChange={handleRole}
                value={valueRole}
                    className={`mt-3 block w-full appearance-none rounded-lg border-none ${valueRole==="" && 'bg-gray-100'} ${valueRole==="rejected" && 'bg-red-200'} ${valueRole==="approved" && 'bg-green-200'} py-1.5 px-3 text-sm/6 text-gray-700 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25`}
                >
                    <option disabled value="">Select</option>
                    <option value="approved">Activate</option>
                    <option value="rejected">Block</option>
                </Select>
                <ChevronDownIcon
                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                    aria-hidden="true"
                />
            </td>
        </tr>
    );
};

export default UserManageRow;