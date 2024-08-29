import Image from "next/image";
import StackedImages from "./widget/stackedImage";

export default function WelcomeText() {
  return (
    <div className="w-auto  flex flex-col justify-center  h-auto text-gray-950">
      <div className="w-auto mb-16">
        <StackedImages/>
      </div>
      <h1 className="text-3xl font-extrabold mb-4">
        Elevate Your Messaging Efficiency with Our Innovative Admin Tools
      </h1>
      <p className="text-sm">
        Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Contact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.
      </p>
    </div>
  );
}
