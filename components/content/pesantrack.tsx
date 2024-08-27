import { useDarkMode } from '@/context/DarkMode';
import React from 'react';

const PesanTrack: React.FC = () => {
    const {isDarkMode} =  useDarkMode();
    const dark = isDarkMode ?'bg-gray-900 text-white shadow-lg shadow-blue-500 ' : 'bg-white text-black';
    return (
        <div className={`${dark}  shadow-lg rounded-lg p-5 pb-2`}>
            <div className="text-lg font-semibold mb-2">Pesan terakhir</div>

            <div className="space-y-2">
                {/* Message 1 */}
                <div className="flex items-center gap-2 bg-gray-200  py-2 px-3 rounded-xl">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                        A
                    </div>
                    <div className="ml-4 flex-1  ">
                        <div className="text-xs text-gray-900 font-medium">Anda</div>
                        <div className="text-xs text-gray-500 truncate">Hai apa kabarmu hari ini? Semoga...</div>
                    </div>
                    <div className="ml-4">
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">Terkirim</span>
                    </div>
                </div>

                {/* Message 2 */}
                <div className="flex items-center gap-2 bg-gray-200 py-2 px-3 rounded-xl">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                        A
                    </div>
                    <div className="ml-4 flex-1">
                        <div className="text-xs text-gray-900 font-medium">Anda</div>
                        <div className="text-xs text-gray-500 truncate">Hai apa kabarmu hari ini? Semoga...</div>
                    </div>
                    <div className="ml-4">
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">Terkirim</span>
                    </div>
                </div>

                {/* Message 3 */}
                <div className="flex items-center gap-2 bg-gray-200 py-2 px-3 rounded-xl">
                    <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                        IA
                    </div>
                    <div className="ml-4 flex-1">
                        <div className="text-xs text-gray-900 font-medium">Imanuel Akbar</div>
                        <div className="text-xs text-gray-500 truncate">Hai apa kabarmu hari ini? Semoga...</div>
                    </div>
                    <div className="ml-4">
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">Diterima</span>
                    </div>
                </div>
            </div>

            <div className="mt-2 text-center ">
                <a href="#" className="text-blue-500 text-sm hover:underline">
                    Tampilkan lainnya
                </a>
            </div>
        </div>
    );
};

export default PesanTrack;
