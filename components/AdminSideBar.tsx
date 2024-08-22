import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface AdminSidebarProps {
    children: ReactNode;
}


export default function AdminSidebar({ children }: AdminSidebarProps) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === 'loading') return;

        if (!session || session.user.role !== 'admin') {
            router.push('/signin');
        } else {
            setLoading(false);
        }
    }, [session, status, router]);

    if (loading) return <div>Loading...</div>;
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 h-screen bg-gray-800 text-white">
                <div className="p-4">
                    <h2 className="text-2xl font-bold">Admin Panel</h2>
                    <nav className="mt-10">
                        <ul>
                            <li>
                                <Link href="/admin/home">
                                    <p className="block p-2 hover:bg-gray-700">Dashboard</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/users">
                                    <p className="block p-2 hover:bg-gray-700">Users</p>
                                </Link>
                            </li>
                            {/* Add more admin-specific links here */}
                            <li>
                                <button
                                    onClick={() => signOut({ redirect: false })}
                                    className="block p-2 mt-4 hover:bg-gray-700"
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4">
                {children}
            </main>
        </div>
    );
}
