import toast from 'react-hot-toast';
import axios from 'axios';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Field, Label, Select } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Registration = () => {
    const [loading, setLoading] = useState(false)
    const [selectRole, setSelectRole] = useState("");
    const navidate = useNavigate()
    const {setToken}= useAuth()



    const handleRegistration = async (event) => {
        event.preventDefault();
        setLoading(true)
        const username = event.target.username.value;
        const email = event.target.email.value;
        const phoneNumber = event.target.phoneNumber.value;
        const pinNumber = event.target.pinNumber.value;

        // Frontend validations
        if (!username) {
            setLoading(false)
            return toast.error('Please enter a username');
        }
        if (!email) {
            setLoading(false)
            return toast.error('Please enter a valid email');
        }
        if (!phoneNumber) {
            setLoading(false)
            return toast.error('Please enter a valid phone number');
        }
        if (!pinNumber) {
            setLoading(false)
            return toast.error('Please enter a valid PIN number');
        }
        if (pinNumber.length !== 5) {
            setLoading(false)
            return toast.error('Pin number should be 5 digits');
        }
        if (!selectRole) {
            setLoading(false)
            return toast.error('Please select a role');
        }

        const newUser = {
            username,
            email,
            phoneNumber,
            pinNumber,
            role: selectRole,
        };

        try {
            //console.log('Sending data:', newUser); // Log the data being sent

            const result = await axios.post('https://server-coral-nine.vercel.app/user', newUser);

            if (result) {
                console.log('Registration successful:', result.data);

                const userInfo = { email };
                axios.post('https://server-coral-nine.vercel.app/jwt', userInfo, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => {
                        if (res.data.token) {
                            //console.log(res);
                            localStorage.setItem('accessToken', res.data.token);
                            setToken(res?.data?.token)
                        }
                        toast.success(result.data.message);
                        setLoading(false)
                        navidate('/')

                    })
                    .catch(err => {
                        console.error('Error during axios request:', err);
                    });
                setLoading(false)
            }
            setLoading(false)
        } catch (error) {
            //console.error('Registration error:', error.response?.data?.error || error.message.error);
            toast.error(error.response?.data?.error);
            setLoading(false)
        }
    };

    return (
        <>
            <div className="flex h-full min-h-screen bg-red-300 bg-no-repeat bg-center bg-cover p-5 bg-[url('https://raw.githubusercontent.com/salekmasudparvez/sm-cash-client/main/src/assets/singupBanner.png')]">
      <div className="max-w-md mx-auto backdrop-blur-md w-full p-5 space-y-3 rounded-xl bg-white/90">
        <h1 className="text-2xl font-bold text-center text-[#FE1280]">Registration</h1>
        <form onSubmit={handleRegistration} className="space-y-1">
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
          <div className="text-gray-800">
            <Field>
              <Label className="text-gray-600">Select your role</Label>
              <div className="relative bg-slate-200">
                <Select
                  onChange={(e) => {
                    e.preventDefault();
                    setSelectRole(e.target.value);
                  }}
                  className={clsx(
                    'mt-3 block w-full appearance-none rounded-lg border-none bg-gray-100 text-gray-800 py-1.5 px-3 text-sm/6',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                    '*:text-black'
                  )}
                >
                  <option disabled selected>Role</option>
                  <option value="user">User</option>
                  <option value="agent">Agent</option>
                </Select>
                <ChevronDownIcon
                  className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                  aria-hidden="true"
                />
              </div>
            </Field>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="pin" className="block dark:text-gray-600">5-digit PIN</label>
            <input type="number" name="pinNumber" id="pin" placeholder="Please enter your 5-digit pin" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-[#FE1280] focus:outline" />
          </div>
          <button type="submit" className="btn btn-block rounded bg-[#FE1280] text-white">
            {loading && <span className="text-xl text-[#ffffff]"><Icon icon="line-md:loading-twotone-loop" /></span>}
            <span>Register</span>
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
          <Link to="/login" className="btn btn-link text-[#FE1280]">Login</Link>
        </p>
      </div>
    </div>
        </>

    );
};

export default Registration;