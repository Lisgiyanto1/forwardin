'use client'
import { Button } from "flowbite-react";
import { ArrowRightIcon } from "lucide-react";
import Image from 'next/image';
import { useRouter } from "next/router";

export default function WelcomeGet() {
  const router = useRouter();
  const handleGet=()=>{
      router.push('/signup')
  }
  return (
    <div className="h-auto w-screen bg-gray-100 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('/background.png')`, margin: '0', padding: '0' }}>
      <div className="flex items-center justify-center h-full">
        <div className="w-full lg:ml-44 pt-44 lg:pt-0  lg:w-10/12  flex flex-col lg:flex-row justify-between items-center lg:items-start">

      
          <div className="w-full lg:w-full lg:order-1">
            <Image
              src="/img.png"
              alt="dashboard"
              width={900}
              height={900}
              className="object-cover"
            />
          </div>

      
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col w-full px-4">
              <p className="text-4xl font-extrabold mb-4">
                Elevate Your Messaging Efficiency with Our Innovative Admin Tools
              </p>
              <p className="text-base font-semibold mb-4">
                Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.
              </p>
              <div className="flex items-center">
                <Button
                  color="dark"
                  onClick={handleGet}
                  className="text-white hover:bg-gray-600 px-4 rounded-lg rounded-tr-none rounded-br-none"
                >
                  Daftar Sekarang
                </Button>
                <div className="bg-gray-600 h-full ml-4 py-3 px-4 rounded-lg rounded-tl-none rounded-bl-none border-l-2 border-white">
                  <ArrowRightIcon className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
