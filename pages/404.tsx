import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'flowbite-react';

export default function Custom404() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
            <div className="mb-6">
                <Image
                    src="/404-error.svg" // Optional image for visual effect
                    alt="404 Error"
                    width={300}
                    height={300}
                />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
                The page you`re looking for doesn`t exist or has been moved.
            </p>
            <Link href="/">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
                    Go Back Home
                </Button>
            </Link>
        </div>
    );
}
