import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import TransactionHistoryRow from "./TransactionHistoryRow";
import axios from "axios";


const TransactionHistory = () => {
    const { userEmail } = useAuth()
    const { data: transactionsHistory } = useQuery({
        queryKey: ['transactionsHistoryr'],
        queryFn: async () => {
            const response = await axios(`https://server-coral-nine.vercel.app/agentTransactions/${userEmail}`);
            const data = response.data
            return data
        }
    })
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

                    {transactionsHistory?.map((transaction, idx) => <TransactionHistoryRow key={idx} transaction={transaction} ></TransactionHistoryRow>)}


                </tbody>
            </table>
        </div>
    );
};

export default TransactionHistory;