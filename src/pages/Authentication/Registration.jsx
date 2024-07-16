import toast from 'react-hot-toast';
import Banner from '../../assets/singupBanner.png'
import  axios  from 'axios';
import { useState } from 'react';
import { Icon } from '@iconify/react';


const Registration = () => {
     const [loading, setLoading]=useState(false)

    const handleRegistration = async (event) => {
        event.preventDefault();
        setLoading(true)
        const username = event.target.username.value;
        const email = event.target.email.value;
        const phoneNumber = event.target.phoneNumber.value;
        const pinNumber = event.target.pinNumber.value;
      
        // Frontend validations
        if (!username) {
          return toast.error('Please enter a username');
        }
        if (!email) {
          return toast.error('Please enter a valid email');
        }
        if (!phoneNumber) {
          return toast.error('Please enter a valid phone number');
        }
        if (!pinNumber) {
          return toast.error('Please enter a valid PIN number');
        }
        if (pinNumber.length !== 5) {
          return toast.error('Pin number should be 5 digits');
        }
      
        const newUser = {
          username,
          email,
          phoneNumber,
          pinNumber,
        };
      
        try {
          //console.log('Sending data:', newUser); // Log the data being sent
      
          const result = await axios.post('http://localhost:5000/user', newUser);
      
          if (result) {
            console.log('Registration successful:', result.data);
            
            const userInfo = { email };
            axios.post('http://localhost:5000/jwt', userInfo, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (res.data.token) {
                    //console.log(res);
                    localStorage.setItem('accessToken', res.data.token);
                }
                toast.success(result.data.message);
                setLoading(false)
            })
            .catch(err => {
                console.error('Error during axios request:', err);
            });
          }
          setLoading(false)
        } catch (error) {
          //console.error('Registration error:', error.response?.data?.error || error.message.error);
          toast.error(error.response?.data?.error);
          setLoading(false)
        }
      };
      
    return (
        <div className="bg-white flex h-full ">
            <div className='h-full lg:flex hidden min-h-screen bg-[#FE1280] w-2/3 object-cover '>
                <img src={Banner} className='w-full h-full' alt="Singup Banner" />
            </div>
            <div className="lg:w-1/3 w-full  p-5 space-y-3 rounded-xl bg-white">
                <h1 className="text-2xl font-bold text-center text-[#FE1280]">Registration</h1>
                <form onSubmit={handleRegistration} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="Email" className="block dark:text-gray-600">Email</label>
                        <input type="email" name="email" id="Email" placeholder="Please enter your email" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="Phone" className="block dark:text-gray-600">Phone number</label>
                        <input type="tel" name="phoneNumber" id="Phone" placeholder="Please enter your phone number" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />
                        
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="pin" className="block dark:text-gray-600">5-digit PIN</label>
                        <input type="number" name="pinNumber" id="pin" placeholder="Please enter your 5-digit pin" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />
                        
                    </div>
                    <button className="btn btn-block rounded bg-[#FE1280] text-white">
                        {loading && <span className='text-xl text-[#ffffff]'><Icon icon="line-md:loading-twotone-loop"/></span> }
                        <span>Register</span></button>
                </form>
                
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account ?
                    <a className="btn btn-link text-[#FE1280]">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Registration;