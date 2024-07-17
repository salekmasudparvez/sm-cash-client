import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const PendingPage = () => {
    return (
        <section className="flex items-center h-full sm:p-16 bg-white text-gray-700">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <div className="text-9xl text-[#E2126D]">
                    <Icon icon="gridicons:status" />
                </div>
                <p className="text-3xl">Your request is pending please wailt</p>
                <Link to="/" className="px-8 py-3 font-semibold rounded bg-[#E2126D] text-gray-100">Back to homepage</Link>
            </div>
        </section>
    );
};

export default PendingPage;