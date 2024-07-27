import { useQuery } from "@tanstack/react-query";
import TransactionRow from "./TransactionRow";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";

const Transaction = () => {
    const { userEmail } = useAuth()
    const { data: transactions } = useQuery({
        queryKey: ["transactions"],
        queryFn: async () => {
            const response = await axios(`https://server-coral-nine.vercel.app/transactions/${userEmail}`);
            const data = response.data
            return data
        }
    })

    return (
        <div className="bg-white h-full w-full">
            <h1 className="text-2xl bg-white w-full text-red-400 font-bold p-6 text-center">Transactions History</h1>
           <div className="overflow-y-auto overflow-x-auto">
           <table className="table md:tabs-md lg:table-lg table-xs w-full  max-h-[calc(100vh-80px)]  text-gray-800">
                <thead>
                    <tr>
                        <th class="px-4 py-2">Transaction ID</th>
                        <th class="px-4 py-2">Receiver's number</th>
                        <th class="px-4 py-2">Amount</th>
                        <th class="px-4 py-2">Status</th>
                        <th class="px-4 py-2">Pay method</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions?.map((transaction, idx) => <TransactionRow transaction={transaction} key={idx}></TransactionRow>)}
                </tbody>
            </table>
           </div>
        </div>
    );
};

export default Transaction;