import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";

const Cashout = () => {
    const {userEmail}= useAuth()
    const handleCashOut = async(e) => {
        e.preventDefault();
        const recNumber = e.target.recNumber.value;
        const amount = e.target.amount.value;
        const pin = e.target.pin.value;
        const cashOut = {
            senderEmail: userEmail, receiverNumber: recNumber, amount: amount, pin, type: "cash-out"
        }
        try {
            const res = await axios.post('http://localhost:5000/cashin', cashOut)
            if (res.data.message) {
                toast.success("Cash out request successfully")
            }
            // console.log(cashIn)
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="bg-white w-full h-full text-gray-800 py-6 ">

            <form onSubmit={handleCashOut} className=" max-w-md mx-auto border-2 py-6">
                <h1 className="text-2xl text-red-400 font-bold p-6 text-center">Cash Out</h1>
                <label className="form-control mx-auto w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter agent's number</span>

                    </div>
                    <input type="tel" name="recNumber" placeholder="Agent's number" className="input bg-gray-100 text-gray-800 input-bordered w-full max-w-xs" />

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
                    <button type="submit" className="btn btn-block bg-[#E2126D] hover:bg-[#e2126c8d] mx-auto  max-w-xs mt-8 text-white">Cash Out</button>
                </div>
            </form>
        </div>
    );
};

export default Cashout;