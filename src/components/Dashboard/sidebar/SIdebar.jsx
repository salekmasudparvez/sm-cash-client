
import React from 'react';
import { useCallback } from 'react';
import { slide as Menu } from 'react-burger-menu';
import useAuth from '../../../hooks/useAuth';
import userRole from '../../../hooks/userRole';
import SidebarMenu from './SidebarMenu';
import { Hourglass } from 'react-loader-spinner';
import { Icon } from '@iconify/react';



const SIdebar = ({ openModal }) => {
    const { userEmail, loading } = useAuth();
    const [role, isLoading] = userRole();
    //console.log(role.status)
    const showSettings = useCallback((event) => {
        event.preventDefault();
        // Add your settings functionality here
    }, []);

    const userSiderBarMenu = <>
        <SidebarMenu name="Balance" icon="icon-park-outline:bank-card" path="/" />

        {role?.status === "approved" &&
            <>
                <SidebarMenu name="Send money" icon="fa:send-o" path="/dashboard/send" />
                <SidebarMenu name="Cash in" icon="iconoir:hand-cash" path="/dashboard/cashin" />
                <SidebarMenu name="Cash out" icon="solar:cash-out-bold" path="/dashboard/cashout" />
                <SidebarMenu name="Transactions" icon="icon-park-outline:transaction-order" path="/dashboard/transaction" />
            </>}

    </>
    const agentSiderBarMenu = <>
        <SidebarMenu name="Balance" icon="icon-park-outline:bank-card" path="/" />

        {role?.status === "approved" &&
            <>
                <SidebarMenu name="Transactions management" icon="icon-park-outline:transaction-order" path="/dashboard/agent/transaction" />
                <SidebarMenu name="Transactions History" icon="icon-park-outline:transaction-order" path="/dashboard/agent/transactionhistory" />
            </>}
    </>

    const adminSiderBarMenu = <>
        <SidebarMenu name="User Management" icon="icon-park-outline:bank-card" path="/" />
    </>
    const extraMenu = <>
        {/* <button
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none"
        >
            <div className="grid place-items-center mr-4">
                <Icon icon="mdi:account-pending"></Icon>
            </div>
            Request for agent

        </button> */}
        {role?.status === "pending" && <SidebarMenu name="Status" icon="material-symbols:pending-actions-sharp" path="/dashboard/pending" />}
        <button
            onClick={openModal}
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none"
        >
            <div className="grid place-items-center mr-4">
                <Icon icon="carbon:logout"></Icon>
            </div>
            Logout

        </button>
    </>

    if (loading || !userEmail || !role || isLoading) {
        return (
            <div className="flex justify-center items-center w-full min-h-screen">
                <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#a81a57', '#E2126D']}
                />
            </div>
        )
    }
    return (
        <div className='bg-white'>
            <div className='lg:hidden w-full bg-[#E2126D] h-20'>

                <Menu>
                    {role?.role === "user" ? userSiderBarMenu : <></>}
                    {role?.role === "agent" ? agentSiderBarMenu : <></>}
                    {role?.role === "admin" ? adminSiderBarMenu : <></>}

                    {extraMenu}
                </Menu>
            </div>
            <div className="relative lg:flex hidden flex-col bg-clip-border rounded bg-white text-gray-700 min-h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 p-4">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-[#E2126D]">Account details</h5>
                </div>
                <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
                    {role?.role === "user" ? userSiderBarMenu : <></>}
                    {role?.role === "agent" ? agentSiderBarMenu : <></>}
                    {role?.role === "admin" ? adminSiderBarMenu : <></>}
                    {extraMenu}
                </nav>
            </div>
        </div>

    );
};

export default SIdebar;