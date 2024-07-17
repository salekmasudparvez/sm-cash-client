import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const SendMoney = () => {
    const { userEmail } = useAuth();
    const [send, setSend] = useState({})

    const { data } = useQuery({
        queryKey: ['balance1'],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/balance/${userEmail}`);
            const data = response.data
            return data
        }
    })
    //console.log(data)
    const { _id, balance, ownerEmail, userID } = data || {}
    const handleSendMoney = (e) => {
        e.preventDefault();

        const recNumber = e.target.recNumber.value;
        const amount = e.target.amount.value;
        const pin = e.target.pin.value;
        const SendMoney = {
            receiverNumber: recNumber,
            amount,
            pin,
            senderEmail: userEmail
        }
        setSend(SendMoney)
        document.getElementById('my_modal_5').showModal()

    }
    const balanceCalc = parseInt(balance);
    const sendAmount = parseInt(send?.amount||"0");
    const charge = sendAmount <= 100  ? 0 : 5;
    const calculatedBalance = balanceCalc - sendAmount - charge
    const sendMoneyWithChareg =sendAmount+charge
    //console.log(sendMoneyWithChareg)

    const confirmSendMoney = async (send) => {
        const sendDoc = {
            receiverNumber: send?.receiverNumber,
            amount: sendMoneyWithChareg,
            pin:send?.pin,
            senderEmail: userEmail,
             type:"send-money"
        }
        //console.log(sendDoc)
        try {
             const res = await axios.post('http://localhost:5000/sendmoney',sendDoc)
           console.log(res.data)
           if(res.data.message){
            toast.success(res.data.message)
            document.getElementById('my_modal_5').close()
           }
           document.getElementById('my_modal_5').close()
        } catch (error) {
            console.log(error)
            document.getElementById('my_modal_5').close()
        }
          
    }
    return (
        <div className="bg-white w-full h-full text-gray-800 py-6 ">

            <form onSubmit={handleSendMoney} className=" max-w-md mx-auto border-2 py-6">
                <h1 className="text-2xl text-red-400 font-bold p-6 text-center">Send Money</h1>
                <label className="form-control mx-auto w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter receiver's number</span>

                    </div>
                    <input type="tel" name="recNumber" placeholder="Receiver's number" className="input bg-gray-100 text-gray-800 input-bordered w-full max-w-xs" />

                </label>
                <label className="form-control mx-auto w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter amount</span>

                    </div>
                    <input type="number" name="amount" placeholder="Enter amount" className="input mx-auto text-gray-800 bg-gray-100 input-bordered w-full max-w-xs" />

                </label>
                <label className="form-control w-full mx-auto max-w-xs">
                    <div className="label">
                        <span className="label-text">5-digit PIN</span>

                    </div>
                    <input type="number" placeholder="Enter your PIN" name="pin" className="text-gray-800 input mx-auto input-bordered bg-gray-100 w-full max-w-xs" />

                </label>
                <div className="text-center">
                    <button type="submit" className="btn btn-block bg-[#E2126D] hover:bg-[#e2126c8d] mx-auto text-white  max-w-xs mt-8">Send</button>
                </div>
            </form>

            <dialog id="my_modal_5" className="modal modal-middle">
                <div className="modal-box bg-white text-gray-700">
                    <h3 className="font-bold text-xl">Please confirm send-money!</h3>

                    <p className="p-4 flex border rounded text-red-500 font-medium text-center bg-gray-500 bg-opacity-30">
                        {parseInt(send?.amount) >= 50 ?
                            <>
                                <div className="w-1/2">
                                    Current balance: {calculatedBalance}$
                                </div>
                                <div className="w-1/2">
                                    Charge :{charge}
                                </div>
                            </> :
                            <div className="w-full text-center text-red-500 font-medium">Transaction amount should be greater than 50$ </div>
                        }
                    </p>
                    <p className="p-4">
                        <ul className="list-decimal"><span className="text-lg font-bold text-[#E2126D]">Some rules</span>
                            <li className="do">For every transaction over 100 taka, a user has to pay a fee of 5 Taka.</li>
                            <li> An user needs to do a transaction with at least 50 taka.</li>
                        </ul>
                    </p>
                    <div className="modal-action">
                        <button onClick={() => confirmSendMoney(send)} className={`btn rounded bg-[#E2126D] ${parseInt(send?.amount) < 50 && "btn-disabled"} hover:bg-[#e2126ca4] text-black`}>Send</button>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn rounded bg-[#E2126D] text-black hover:bg-[#e2126ca4]">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default SendMoney;