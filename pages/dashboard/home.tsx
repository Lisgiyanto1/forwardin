import Placeholder from '@/components/Placeholder';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import GetStarted from '@/components/widget/GetStarted';

export default function Dashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (status === 'loading') {
            setLoading(true);
            const timeout = navigator.onLine ? 3000 : 6000; 
            setTimeout(() => {
                setLoading(false);
            }, timeout);
        }
    }, [status]);

    if (status === 'loading') {
        return <Placeholder />;
    }

    if (!session || session.user.role !== 'user') {
        router.push('/');
        return null;
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-slate-100">
            {session.user ? (
                <>
                    {/* <div className=' align-middle'>
                        <h1 className='font-bold left-0'>Welcome, {session.user.name}</h1>
                       
                    </div> */}
                    <GetStarted />
                </>

            ) : (
                <div className='flex justify-center items-center '><h1>
                </h1>
                    SILAHKAN LOGIN DULU !
                </div>
            )}
        </div>
    );
}
