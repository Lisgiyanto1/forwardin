import React from 'react';

const Paket: React.FC = () => {
    return (
        <div className=" mx-auto  h-64   bg-white shadow-lg rounded-lg p-8 ">
            <div className="flex justify-between items-center">
                <div className='flex  flex-row justify-center gap-2 items-top'>
                    <span className="text-gray-800 font-medium w-16">Paket saat ini</span>
                    <h2 className="text-2xl font-extrabold "> Starter</h2>
                    <span className='bg-gray-900  my-1 px-3 rounded-2xl text-white font-light text-center h-6 flex justify-center items-center'>free</span>

                </div>
                <div>
                    <span className="text-sm text-gray-400">Aktif sampai dengan</span>
                    <p className="text-sm font-semibold">Selasa, 29 Agustus 2023</p>
                </div>
            </div>
            <div className='flex flex-row gap-8 justify-between'>
                <div className="mt-6 w-80">
                    <div className='flex flex-row gap-8'>
                        <div className="flex justify-between">
                            <span className='font-medium '>Devices</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                            <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                            <span className="text-gray-500 text-xs">8 dari 10 tersedia</span>
                        </div>
                    </div>



                    <div className='flex flex-row gap-6 pt-5'>

                        <div className="flex justify-between">
                            <span className='font-medium'>Contacts</span>

                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '5%' }}></div>
                            <span className="text-gray-500 text-xs">5 dari 100 tersedia</span>
                        </div>
                    </div>

                </div>
                <div className="mt-6 text-right">
                    <p className="text-sm font-medium text-gray-500 mb-4">
                        Upgrade paket untuk meningkatkan batasan fitur yang ada
                    </p>
                    <button className="bg-white w-full font-semibold border bottom-3  border-blue-600 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600">
                        Upgrade Paket
                    </button>
                </div>
            </div>


            <div className="mt-4 text-center">
                <a href="#" className="text-blue-500 text-sm hover:underline">
                    Tampilkan kapasitas fitur lainnya
                </a>
            </div>
        </div>
    );
};

export default Paket;
