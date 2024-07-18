import { useQuery } from "@tanstack/react-query";
import TransactionManagementRow from "./TransactionManagementRow";
import axios from "axios";

const TransactionManagement = () => {
    const {data}= useQuery({
        queryKey: ['transactionsManager'],
        queryFn: async () => {
            const response = await axios('');
            const data = response.data
            return data
        }
    })
    return (
        <div className="bg-white h-full w-full">
            <h1 className="text-2xl bg-white text-red-400 font-bold p-6 text-center">Transactions Management</h1>
            <table class="bg-white min-w-full table-auto  max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-auto text-gray-800">
                <thead>
                    <tr>
                        <th class="px-4 py-2">User's number</th>
                        <th class="px-4 py-2">Amount</th>
                        <th class="px-4 py-2">Pay method</th>
                        <th class="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                  
                   <TransactionManagementRow></TransactionManagementRow>
                   <TransactionManagementRow></TransactionManagementRow>
                   <TransactionManagementRow></TransactionManagementRow>
                    
                </tbody>
            </table>
        </div>
    );
};

export default TransactionManagement;