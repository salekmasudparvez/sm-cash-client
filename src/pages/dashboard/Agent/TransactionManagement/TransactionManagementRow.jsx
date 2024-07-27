import { Description, Field, Label, Select } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const TransactionManagementRow = ({ transaction ,setTrans}) => {
    const { senderEmail, receiverNumber, amount, timestamp, status, type } = transaction || {}
    //console.log(transaction)
    const handleRequest = (event) => {
        //console.log(event.target.value);
        setTrans({ trans: transaction, status: event.target.value })
         document.getElementById('trans').showModal()
    }
    return (
        <tr className='rounded-full border-none bg-gray-100 hover:bg-gray-200'>

            <td class="text-center px-4 py-2">{senderEmail}</td>
            <td class="text-center px-4 py-2">
                <div className=' flex flex-col items-start '>
                    <h1>Amout:{amount}</h1>
                    <h1>Date:{timestamp.split("T")[0]}</h1>
                </div>

            </td>
            <td class="text-center px-4 py-2 "><span className={`${type==="cash-in" ? "bg-green-300 ":"bg-red-300"} px-2 py-1 rounded-full`}>{type}</span></td>
            <td class="text-center px-4 py-2">
                <Select
                    disabled={status==="failed" || status ==="successful"? true :false}
                    onChange={handleRequest}
                    value={status}
                    className={`mt-3 block w-full appearance-none rounded-lg border-none py-1.5 px-3 text-sm/6 text-gray-700 focus:outline-none ${status === "pending" ? 'bg-gray-200 hover:bg-white' :
                        status === "failed" ? 'bg-red-200' :
                            status === "successful" ? 'bg-green-200' : ''
                        }`}
                >
                    <option disabled value="pending">Select</option>
                    <option value="successful">Confirm</option>
                    <option value="failed">Cancel</option>
                </Select>
                <ChevronDownIcon
                    className="pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                    aria-hidden="true"
                />
            </td>
        </tr>
    );
};

export default TransactionManagementRow;