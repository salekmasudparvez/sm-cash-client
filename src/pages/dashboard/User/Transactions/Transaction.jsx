import TransactionRow from "./TransactionRow";

const Transaction = () => {
    return (
        <div className="bg-white h-full w-full">
            <h1 className="text-2xl bg-white text-red-400 font-bold p-6 text-center">Transactions History</h1>
            <table class="bg-white min-w-full table-auto  max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-auto text-gray-800">
                <thead>
                    <tr>
                        <th class="px-4 py-2">Receiver's number</th>
                        <th class="px-4 py-2">Transaction ID</th>
                        <th class="px-4 py-2">Amount</th>
                        <th class="px-4 py-2">Status</th>
                        <th class="px-4 py-2">Pay method</th>
                    </tr>
                </thead>
                <tbody>
                  
                    <TransactionRow></TransactionRow>
                    <TransactionRow></TransactionRow>
                    <TransactionRow></TransactionRow>
                    
                </tbody>
            </table>
        </div>
    );
};

export default Transaction;