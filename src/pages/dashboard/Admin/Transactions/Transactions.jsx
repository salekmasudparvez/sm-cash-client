import TransactionRow from "./TransactionRow";


const Transactions = () => {

    return (
        <div className="bg-white h-full w-full">
            <h1 className="text-2xl bg-white text-red-400 font-bold p-6 text-center">User Management</h1>
            <table class="bg-white min-w-full table-auto  max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-auto text-gray-800">
                <thead>
                    <tr>
                        <th class="px-4 py-2">Method</th>
                        <th class="px-4 py-2">From</th>
                        <th class="px-4 py-2">To</th>
                        <th class="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                   <TransactionRow/>
                   <TransactionRow/>
                   <TransactionRow/>
                </tbody>
            </table>
           
        </div>
    );
};

export default Transactions;