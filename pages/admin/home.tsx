import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import AdminSidebar from '@/components/AdminSideBar'; // Adjust path as needed
import Placeholder from '@/components/Placeholder';
import { Calendar } from 'lucide-react'; // Import Calendar icon from Lucide

const AdminHome = () => {
    const { data: session, status } = useSession();
    const [greeting, setGreeting] = useState<string>('');
    const [currentDate, setCurrentDate] = useState<string>('');

    useEffect(() => {
        // Set greeting based on time of day
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting('Good morning');
        } else if (currentHour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }

        // Set current date and time
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        };
        setCurrentDate(now.toLocaleDateString('en-US', options));
    }, []);

    if (status === 'loading') {
        return <Placeholder />;
    }

    if (status === 'unauthenticated') {
        return <p>You must be logged in to access the admin dashboard.</p>;
    }

    const adminName = session?.user?.name || 'Admin';

    return (
        <AdminSidebar>
            <div className='bg-gray-100 p-6 w-auto h-full rounded-2xl'>
             
                <p className="text-2xl font-bold mb-4">
                    {greeting}, {adminName}. Welcome to the Admin Dashboard
                </p>
                <div className="flex items-center mt-10 justify-end text-gray-700 space-x-2">
                    <div className="flex flex-col items-end">
                        <p className='text-xs font-light mr-2'>Tanggal hari ini</p>
                        <span className='text-sm font-semibold text-gray-500 pr-3'>{currentDate}</span>
                    </div>
                    <Calendar className="w-7 h-7 text-gray-500" />
                </div>
            </div>
        </AdminSidebar>
    );
};

export default AdminHome;
