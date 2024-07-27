import { Link, useActionData, useNavigate } from 'react-router-dom';
import Banner from '../../assets/LoginBanner.png'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import useAuth from '../../hooks/useAuth';



const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const {setToken}=useAuth()

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        
        const emailOrNumber = event.target.emailNum.value;
        const pin = event.target.pin.value;
    
        if (!emailOrNumber) {
            toast.error('Please enter email/number');
            setLoading(false);
            return;
        }
        if (!pin) {
            toast.error('Please enter PIN');
            setLoading(false);
            return;
        }
    
        try {
            const response = await axios.post("https://server-coral-nine.vercel.app/login", {
                emailNumber: emailOrNumber,
                pin: pin,
            });
            //console.log(response)
            if(response?.data?.token){
                setToken(response?.data?.token)
                localStorage.setItem('accessToken', response?.data?.token);
                
                toast.success("Successfully logged in");
                setLoading(false);
                navigate('/')
            } 
            setLoading(false);
        } catch (error) {
            console.error(error.response?.data?.error);
            toast.error(error.response?.data?.error || 'An error occurred');
            setLoading(false);
            
        }
    };
    
    return (
        <div className="lg:bg-white p-5 lg:p-0 lg:bg-[url('')] bg-[url('https://raw.githubusercontent.com/salekmasudparvez/sm-cash-client/main/src/assets/LoginBanner.png')] bg-no-repeat bg-center bg-cover flex h-full ">
            <div className='h-full lg:flex hidden min-h-screen bg-[#FE1280] w-2/3 object-cover '>
                <img src={Banner} className='w-full h-full' alt="Singup Banner" />
            </div>
            <div className='h-full min-h-screen lg:w-1/3 w-full flex justify-center items-center'>
                <div className=" w-full  p-5 space-y-4 rounded-xl bg-white">
                    <h1 className="text-2xl font-bold text-center text-[#FE1280]">Login now</h1>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">Enter (email/phone number)</label>
                            <input type="text" name="emailNum" id="email" placeholder="(email/phone number)" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="pin" className="block dark:text-gray-600">5-digit PIN</label>
                            <input type="number" name="pin" id="pin" placeholder="Please enter your 5-digit pin" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />

                        </div>
                        <button type='submit' className="btn btn-block rounded bg-[#FE1280] text-white">
                            {loading && <span className='text-xl text-[#ffffff]'><Icon icon="line-md:loading-twotone-loop" /></span>}
                            <span>Login</span>
                        </button>
                        
                    </form>

                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have any account ?
                        <Link to="/registration" className="btn btn-link text-[#FE1280]">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;