
import { formatISO, parseISO } from 'date-fns';

const TransactionRow = ({transaction}) => {
    console.log(transaction);
    const {amount,receiverNumber,senderEmail,timestamp,_id,type,status}=transaction||{};
    const date = formatISO(timestamp)
    return (
        <tr>
            <td class="border px-4 py-2">{_id}</td>
            <td class="border px-4 py-2">{receiverNumber}</td>
            <td class="border px-4 py-2">{amount}</td>
            <td class="border px-4 py-2">{status}</td>
            <td class="border px-4 py-2">{type}</td>
        </tr>
    );
};

export default TransactionRow;