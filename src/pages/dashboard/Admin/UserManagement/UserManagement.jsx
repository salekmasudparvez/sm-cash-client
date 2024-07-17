import UserManageRow from "./UserManageRow";

const UserManagement = () => {
    
    return (
        <div className="bg-white h-full w-full">
            <h1 className="text-2xl bg-white text-red-400 font-bold p-6 text-center">User Management</h1>
            <table class="bg-white min-w-full table-auto  max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-auto text-gray-800">
                <thead>
                    <tr>
                        <th class="px-4 py-2">Receiver's number</th>
                        <th class="px-4 py-2">Email</th>
                        <th class="px-4 py-2">Role</th>
                        <th class="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <UserManageRow/>
                    <UserManageRow/>
                    <UserManageRow/>
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;