;

const TransactionRow = ({transaction}) => {
    const {amount,receiverNumber,senderEmail,timestamp,_id,type,status}=transaction||{};
    return (
        <tr className="rounded-lg hover:bg-gray-100 shadow-md  border-2 hover:border-opacity-100 border-opacity-0">
            <td class=" px-4 py-2">Cash in</td>
            <td class=" px-4 py-2">
                <div>
                    <h1>Date:{timestamp.split('T')[0]}</h1>
                    <h1>Email:{senderEmail}</h1>
                    <p>Transaction Id:{_id}</p>
                    <p>Role:User</p>
                </div>
            </td>
            <td class=" px-4 py-2">
            <div>
                    <h1>Number:{receiverNumber}</h1>
                    <h1>Amount:{amount}</h1>
                    <p>Role:{type==="cash-in" || type==="cash-out"?"Agent":"User"}</p>
                </div>
            </td>
            <td class=" px-4 py-2">
                 <p>Status : {status}</p>
            </td>
        </tr>
    );
};

export default TransactionRow;