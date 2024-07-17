;

const TransactionRow = () => {
    return (
        <tr className="rounded-lg hover:bg-gray-100 shadow-md  border-2 hover:border-opacity-100 border-opacity-0">
            <td class=" px-4 py-2">Cash in</td>
            <td class=" px-4 py-2">
                <div>
                    <h1>Number:01405273462</h1>
                    <h1>Email:</h1>
                    <p>Transaction Id:</p>
                    <p>Role:User</p>
                </div>
            </td>
            <td class=" px-4 py-2">
            <div>
                    <h1>Number:01405273462</h1>
                    <h1>Amount:1999</h1>
                    <p>Role:User</p>
                </div>
            </td>
            <td class=" px-4 py-2">
                 <p>Status : successfull</p>
            </td>
        </tr>
    );
};

export default TransactionRow;