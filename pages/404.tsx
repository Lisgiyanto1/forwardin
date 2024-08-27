import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'flowbite-react';
import { useSession } from 'next-auth/react';

export default function Custom404() {
    const { data: session, status } = useSession();
    const isAdmin = session?.user?.role === 'admin';

    return (
        <div className="h-screen pt-32 flex flex-col items-center justify-center bg-gray-100 text-center p-6">
            <div className="mb-6">
                <Image
                    src="/404.png" 
                    alt="404 Error"
                    width={300}
                    height={300}
                />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-4">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link href={isAdmin ? "/admin/home" : "/"}>
                <Button className="bg-blue-500 rounded-2xl hover:bg-blue-600 text-white px-6 py-1 ">
                    {isAdmin ? "Go to Admin Home" : "Go Back Home"}
                </Button>
            </Link>
        </div>
    );
}
