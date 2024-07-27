import { useQuery } from "@tanstack/react-query";
import TransactionRow from "./TransactionRow";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";


const Transactions = () => {
    const { userEmail } = useAuth()
    const { data } = useQuery({
        queryKey: ["transactionsAdmin"],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/admin/transactions/${userEmail}`);
            const data = response.data;
            return data;
        }
    });
    //console.log(data)

    return (
        <div className="bg-white h-full w-full">
            <h1 className="text-2xl bg-white text-red-400 font-bold p-6 text-center">User Management</h1>
            <div className="overflow-y-auto overflow-x-auto">
                <table class="bg-white table md:tabs-md lg:table-lg table-xs w-full  max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-auto text-gray-800">
                    <thead>
                        <tr>
                            <th class="px-4 py-2">Method</th>
                            <th class="px-4 py-2">From</th>
                            <th class="px-4 py-2">To</th>
                            <th class="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((transaction, idx) => <TransactionRow key={idx} transaction={transaction} />)}
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Transactions;