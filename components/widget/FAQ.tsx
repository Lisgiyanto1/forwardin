'use client'
import { Accordion } from "flowbite-react";
import { SearchIcon } from "lucide-react";

export default function FAQ() {
    return (
        <div className="h-screen w-screen flex items-center justify-center  p-4">
            <div className="w-full max-w-2xl">

                <h2 className="text-white text-center text-2xl font-bold mb-6 lg:mt-0 mt-20">
                    Frequently Asked Questions
                </h2>


                <div className="relative mb-6 flex items-center rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full p-1 pl-3 border-none focus:ring-0"
                    />
                    <SearchIcon className="text-white ml-3" />
                </div>



                <Accordion alwaysOpen className="bg-white">
                    <Accordion.Panel className="bg-white">
                        <Accordion.Title className="font-semibold focus:ring-0">
                            Apa itu Forwardin?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-700">
                                Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, memanipulasi jamnya, serta sinkronisasi kontak WhatsApp dan kontak Google.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>

                </Accordion>

                <Accordion alwaysOpen className="bg-white mt-5">
                    <Accordion.Panel>
                        <Accordion.Title className="focus:ring-0">
                            Apakah Forwardin cocok untuk saya?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-700">
                                Penjelasan apakah Forwardin cocok untuk Anda.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>

                </Accordion>

                <Accordion alwaysOpen className="bg-white mt-5">
                    <Accordion.Panel>
                        <Accordion.Title className="focus:ring-0">
                            Apakah Forwardin perlu di-install ke komputer?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-700">
                                Penjelasan tentang instalasi Forwardin ke komputer.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>

                </Accordion>

            </div>
        </div>
    );
}
