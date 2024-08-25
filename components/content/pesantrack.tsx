import React from 'react';

const PesanTrack: React.FC = () => {
    return (
        <div className=" ml-5 bg-white shadow-lg rounded-lg p-6">
            <div className="text-lg font-semibold mb-4">Pesan terakhir</div>

            <div className="space-y-4">
                {/* Message 1 */}
                <div className="flex items-center">
                    <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                        A
                    </div>
                    <div className="ml-4 flex-1">
                        <div className="text-sm font-medium">Anda</div>
                        <div className="text-sm text-gray-500 truncate">Hai apa kabarmu hari ini? Semoga...</div>
                    </div>
                    <div className="ml-4">
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">Terkirim</span>
                    </div>
                </div>

                {/* Message 2 */}
                <div className="flex items-center">
                    <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                        A
                    </div>
                    <div className="ml-4 flex-1">
                        <div className="text-sm font-medium">Anda</div>
                        <div className="text-sm text-gray-500 truncate">Hai apa kabarmu hari ini? Semoga...</div>
                    </div>
                    <div className="ml-4">
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">Terkirim</span>
                    </div>
                </div>

                {/* Message 3 */}
                <div className="flex items-center">
                    <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                        IA
                    </div>
                    <div className="ml-4 flex-1">
                        <div className="text-sm font-medium">Imanuel Akbar</div>
                        <div className="text-sm text-gray-500 truncate">Hai apa kabarmu hari ini? Semoga...</div>
                    </div>
                    <div className="ml-4">
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">Diterima</span>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-center">
                <a href="#" className="text-blue-500 text-sm hover:underline">
                    Tampilkan lainnya
                </a>
            </div>
        </div>
    );
};

export default PesanTrack;
