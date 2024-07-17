import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';

const SidebarMenu = ({name,icon,path}) => {
    return (
        <NavLink
            end
            to={path}
            role="button"
            tabIndex="0"
            className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all bg-blue-100 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none" :

                "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none"
            }
        >
            <div className="grid place-items-center mr-4">
                <Icon icon={icon}></Icon>
            </div>
            {name}
        </NavLink>
    );
};

export default SidebarMenu;