import { Icon } from '@iconify/react';
import { useCallback } from 'react';
import { slide as Menu } from 'react-burger-menu';

const Navbar = () => {
    const showSettings = useCallback((event) => {
        event.preventDefault();
        // Add your settings functionality here
    }, []);
    return (
        <div className='bg-[#E2126D] min-h-20  z-10'>
            <div className='lg:hidden'>
                <Menu>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
                </Menu>
            </div>

            <div className="navbar  lg:flex hidden text-white ">
                <div className="flex-1 text-xl space-x-2 p-2">
                    <Icon icon="emojione-monotone:money-bag" />
                    <a className=" font-bold">SM Cash</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='btn rounded text-white hover:bg-[#fff] hover:text-black bg-[#E2126D] border-2 border-white hover:border-white'>Dashboard</a></li>
                       
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Navbar;