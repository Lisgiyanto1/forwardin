'use client'
import { useState } from "react";
import { SearchIcon, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
    const [openPanel, setOpenPanel] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const faqs = [
        {
            question: "Apa itu Forwardin?",
            answer: "Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, memanipulasi jamnya, serta sinkronisasi kontak WhatsApp dan kontak Google.",
        },
        {
            question: "Apakah Forwardin cocok untuk saya?",
            answer: "Penjelasan apakah Forwardin cocok untuk Anda.",
        },
        {
            question: "Apakah Forwardin perlu di-install ke komputer?",
            answer: "Penjelasan tentang instalasi Forwardin ke komputer.",
        },
    ];

    const togglePanel = (index: number) => {
        setOpenPanel(openPanel === index ? null : index);
    };

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="h-auto w-screen flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">

                <h2 className="text-white text-center text-2xl font-bold mb-6 lg:mt-0 mt-20">
                    Frequently Asked Questions
                </h2>

                <div className="relative mb-6 flex items-center rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-1 pl-3 border-none focus:ring-0"
                    />
                    <SearchIcon className="text-white ml-3 cursor-pointer" />
                </div>

                {filteredFaqs.map((faq, index) => (
                    <div key={index} className="bg-white mb-5 rounded-xl shadow-md">
                        <div
                            className="flex justify-between items-center p-4 gap-2 cursor-pointer"
                            onClick={() => togglePanel(index)}
                        >
                            <h3 className="font-semibold text-lg">{faq.question}</h3>
                            <span className="bg-gray-900 text-white rounded-lg ">{openPanel === index ? <ChevronUp /> : <ChevronDown />}</span>
                        </div>
                        {openPanel === index && (
                            <div className="px-4 pb-4">
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </div>
    );
}
