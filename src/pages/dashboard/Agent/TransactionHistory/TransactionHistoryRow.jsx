

const TransactionHistoryRow = ({transaction}) => {
    const {amount,receiverNumber,senderEmail,timestamp,_id,type,status}=transaction||{};
    return (
        <tr>
        <td class="border px-4 py-2">{senderEmail}</td>
        <td class="border px-4 py-2">{_id}</td>
        <td class="border px-4 py-2">{amount}</td>
        <td class="border px-4 py-2">{status}</td>
        <td class="border px-4 py-2">{type}</td>
    </tr>
    );
};

export default TransactionHistoryRow;