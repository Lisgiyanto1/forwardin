// components/NavbarMinimal.tsx
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavbarMinimal: FC = () => {
    return (
        <nav className="flex top-0 lg:left-0 justify-center lg:justify-start w-full lg:bg-gray-100  p-4 z-50">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/icon.png" width={200} height={6} alt="Logo" className="h-9 sm:h-9" />
                </Link>
            </div>
        </nav>
    );
};

export default NavbarMinimal;
