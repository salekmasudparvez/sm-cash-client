import { Link } from 'react-router-dom';
import Banner from '../../assets/LoginBanner.png'
const Login = () => {
    return (
        <div className="lg:bg-white p-5 lg:p-0 lg:bg-[url('')] bg-[url('https://raw.githubusercontent.com/salekmasudparvez/sm-cash-client/main/src/assets/LoginBanner.png')] bg-no-repeat bg-center bg-cover flex h-full ">
            <div className='h-full lg:flex hidden min-h-screen bg-[#FE1280] w-2/3 object-cover '>
                <img src={Banner} className='w-full h-full' alt="Singup Banner" />
            </div>
            <div className='h-full min-h-screen lg:w-1/3 w-full flex justify-center items-center'>
            <div className=" w-full  p-5 space-y-4 rounded-xl bg-white">
                <h1 className="text-2xl font-bold text-center text-[#FE1280]">Login now</h1>
                <form noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Enter (email/phone number)</label>
                        <input type="text" name="email" id="email" placeholder="(email/phone number)" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />
                    </div>
                    
                    <div className="space-y-1 text-sm">
                        <label htmlFor="pin" className="block dark:text-gray-600">5-digit PIN</label>
                        <input type="pin" name="pin" id="pin" placeholder="Please enter your 5-digit pin" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />
                        
                    </div>
                    <button className="btn btn-block rounded bg-[#FE1280] text-white">Login</button>
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