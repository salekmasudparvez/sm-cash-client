import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCallback } from 'react';
import { slide as Menu } from 'react-burger-menu';



const SIdebar = () => {
    const showSettings = useCallback((event) => {
        event.preventDefault();
        // Add your settings functionality here
    }, []);
    const menuItems = [
        {
            label: 'Balance',
            icon: 'icon-park-outline:bank-card',
            path: '/dashboard'
        },
        {
            label: 'Send money',
            icon: 'fa:send-o',
            path: '/sendmoney'

        },
        {
            label: 'Cash in',
            icon: 'iconoir:hand-cash',
            path: '/cashin'
        },
        {
            label: 'Cash out',
            icon: 'solar:cash-out-bold',
            path: '/cashout'

        },
        {
            label: 'Transactions',
            icon: 'icon-park-outline:transaction-order',
            path: '/transaction'

        }
    ]
    return (
        <>
        <div className='lg:hidden'>
            
                <Menu>
                   
                  {menuItems.map((item, index) => <a key={index} className="menu-item" href="/">{item.label}</a>)}
                    <a onClick={showSettings} className="menu-item--small" href="">Log out</a>
                </Menu>
            </div>
            <div className="relative lg:flex hidden flex-col bg-clip-border rounded bg-white text-gray-700 min-h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 p-4">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-[#E2126D]">Account details</h5>
                </div>
                <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
                    {menuItems.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            role="button"
                            tabIndex="0"
                            className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all bg-blue-100 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none" :

                                "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none"
                            }
                        >
                            <div className="grid place-items-center mr-4">
                                <Icon icon={item.icon}></Icon>
                            </div>
                            {item.label}
                            {item.count && (
                                <div className="grid place-items-center ml-auto justify-self-end">
                                    <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full">
                                        <span>{item.count}</span>
                                    </div>
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </>

    );
};

export default SIdebar;