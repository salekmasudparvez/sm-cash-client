import { Outlet } from "react-router-dom";
import SIdebar from "../components/Dashboard/sidebar/SIdebar";
import useAuth from "../hooks/useAuth";


const DashBoardLayout = () => {
  const {logout}=useAuth()

    const closeModal=()=> {
        logout()

    }

    const openModal = () => {
        document.getElementById('my_modal_5').showModal()
    }

    return (
        <div className="lg:flex">
            <SIdebar openModal={openModal}> </SIdebar>
            <div className="h-screen overflow-y-auto overflow-x-auto flex-1 bg-white">
                <Outlet></Outlet>
            </div>
           
            <dialog id="my_modal_5" className="modal backdrop-blur-sm modal-middle">
                <div className="modal-box bg-white rounded text-gray-700">
                    <h3 className="font-bold text-lg">Are you sure?!</h3>
                    <p className="py-4">Click on the confirm for logout</p>
                    <div className="modal-action">
                        <button onClick={closeModal} className="btn rounded btn-sm bg-[#E2126D] hover:bg-[#e2126cac] text-white">Confirm</button>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn rounded btn-sm bg-[#E2126D] hover:bg-[#e2126cac] text-white">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};





export default DashBoardLayout;