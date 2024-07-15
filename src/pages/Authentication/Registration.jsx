import Banner from '../../assets/singupBanner.png'
const Registration = () => {
    return (
        <div className="bg-white flex h-full ">
            <div className='h-full lg:flex hidden min-h-screen bg-[#FE1280] w-2/3 object-cover '>
                <img src={Banner} className='w-full h-full' alt="Singup Banner" />
            </div>
            <div className="lg:w-1/3 w-full  p-5 space-y-3 rounded-xl bg-white">
                <h1 className="text-2xl font-bold text-center text-[#FE1280]">Registration</h1>
                <form noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="Email" className="block dark:text-gray-600">Email</label>
                        <input type="email" name="Email" id="Email" placeholder="Please enter your email" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="Phone" className="block dark:text-gray-600">Phone number</label>
                        <input type="tel" name="Phone" id="Phone" placeholder="Please enter your phone number" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />
                        
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="pin" className="block dark:text-gray-600">5-digit PIN</label>
                        <input type="pin" name="pin" id="pin" placeholder="Please enter your 5-digit pin" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />
                        
                    </div>
                    <button className="btn btn-block rounded bg-[#FE1280] text-white">Register</button>
                </form>
                
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account ?
                    <a className="btn btn-link text-[#FE1280]">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Registration;