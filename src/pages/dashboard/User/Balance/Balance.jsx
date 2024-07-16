

const Balance = () => {
    return (
        <div className="flex h-full md:flex-row flex-col bg-white rounded min-w-full py-7 lg:px-8 px-4 ">
            <div className="flex flex-col justify-start items-center w-1/2">
                <div className="stat-title text-gray-800">Account balance</div>
                <div className="stat-value text-red-400">$89,400</div>
                <div className="stat-actions">
                    <button className="btn btn-sm bg-red-400 text-white hover:bg-red-300">Add money</button>
                </div>
            </div>

            <div className="flex flex-col justify-start items-center w-1/2">
                <div className="stat-title text-gray-800">Current balance</div>
                <div className="stat-value ">$89,400</div>
                <div className="space-x-2 p-3">
                    <button className="btn btn-sm bg-red-400 text-white hover:bg-red-300">Cash out</button>
                    <button className="btn btn-sm bg-red-400 text-white hover:bg-red-300">Cash in</button>
                </div>
            </div>
        </div>
    );
};

export default Balance;