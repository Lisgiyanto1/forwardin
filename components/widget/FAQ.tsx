'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SearchIcon, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
    const [openPanel, setOpenPanel] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");

    const faqs = [
        {
            question: "What is Forwardin?",
            answer: "Forwardin is a WhatsApp message management tool designed to help you send messages to multiple numbers and groups simultaneously. It also offers advanced features like auto-reply, broadcast features, scheduling, and syncing WhatsApp contacts with Google contacts.",
        },
        {
            question: "Is Forwardin suitable for me?",
            answer: "Explanation of whether Forwardin is suitable for you.",
        },
        {
            question: "Does Forwardin need to be installed on a computer?",
            answer: "Explanation about installing Forwardin on a computer.",
        },
    ];

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 300);

        return () => clearTimeout(handler);
    }, [searchQuery]);

    const togglePanel = (index: number) => {
        setOpenPanel(openPanel === index ? null : index);
    };

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen w-screen flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                <h2 className="text-white text-center text-2xl font-bold mb-6 lg:mt-0 mt-20">
                    Frequently Asked Questions
                </h2>

                <div className="relative mb-6 flex items-center rounded-lg overflow-hidden shadow-sm border border-gray-300">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 pl-4 border-none focus:ring-0 focus:outline-none"
                        aria-label="Search FAQs"
                    />
                    <SearchIcon className="text-gray-50 mx-2 cursor-pointer" />
                </div>

                {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="bg-white mb-5 rounded-xl shadow-md"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div
                                className="flex justify-between items-center p-4 gap-2 cursor-pointer hover:rounded-xl hover:bg-gray-100 transition-colors"
                                onClick={() => togglePanel(index)}
                                aria-expanded={openPanel === index}
                                role="button"
                            >

                                <motion.h3 initial={{ opacity: 0, height: "auto" }}
                                    animate={{ opacity: 3, height: "auto" }}
                                    exit={{ opacity: 0, height: "auto" }}
                                    transition={{ duration: 2.5 }}
                                    className="font-semibold text-lg">{faq.question}</motion.h3>
                                <span className="bg-gray-900 text-white rounded-lg p-1">
                                    {openPanel === index ? <ChevronUp /> : <ChevronDown />}
                                </span>
                            </div>
                            {openPanel === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: "auto" }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                    className="px-4 pb-4"
                                >

                                    <TypingAnimation



                                        text={faq.answer} />
                                </motion.div>
                            )}
                        </motion.div>
                    ))
                ) : (
                    <p className="bg-gray-800 rounded-xl py-1 text-gray-500 text-center">No FAQs match your search query.</p>
                )}
            </div>
        </div>
    );
}


function TypingAnimation({ text }: { text: string }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, 50); // Adjust the speed of the typing effect here

        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-700 font-medium"
        >
            {displayedText}
        </motion.p>
    );
}