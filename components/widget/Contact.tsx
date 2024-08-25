'use client'

import { Footer } from "flowbite-react";
import Image from "next/image";


export default function Contact() {
    return (

        <div className="flex flex-col h-auto mt-20">
            <div className="h-auto w-auto flex items-center justify-center">
                <div className="w-full pt-20">

                    <div className="flex flex-col md:flex-row mx-20 ">

                        <div className="  rounded-md lg:pl-36 pl-0">

                            <Image
                                src="/icon2.png"
                                alt="dashboard"
                                width={200}
                                height={200}
                                className="object-cover mb-3 text-"
                            />

                            <p className="text-slate-100 text-sm pr-20
                        ">
                                Fowardin is your ultimate communication management solution. We empower businesses of all sizes with efficient message forwarding, streamlined contact management, and powerful campaign scheduling. Our mission is to simplify your communication processes, helping you engage with your audience effectively and effortlessly. Join us in transforming your communication game today!

                            </p>
                        </div>

                        <div className="rounded-md pl-20 pr-20 mt-5">
                            <h4 className="text-white text-lg font-bold mb-2">
                                Contact Us
                            </h4>
                            <p className="text-slate-100 text-sm">
                                Join our mailing list to receive updates, exclusive content, and early access to upcoming events. By signing up, you become an integral part of our community, spreading the message of compassion and making a difference.
                            </p>
                            <div className="text-slate-100 text-sm mt-4">

                                <ul>
                                    <li>
                                        Email: info@fowarin
                                    </li>

                                    <li>
                                        Phone : +1 (123) 456-7890
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className=" rounded-md lg:pl-10 pl-0 w-full mt-5 ">
                            <h4 className="text-white text-lg font-bold mb-2">
                                Let`s Talk
                            </h4>
                            <ul className="text-slate-100 text-sm">
                                <li className="cursor-pointer">Facebook</li>
                                <li className="cursor-pointer">Instagram</li>
                                <li className="cursor-pointer">Twitter</li>
                            </ul>

                        </div>


                    </div>
                </div>


            </div>
            <div className="flex flex-row items-center mb-10 lg:mb-20 mt-40  w-full justify-center space-x-3">
                <p className="text-slate-100 font-light">Powered By</p>
                <span>
                    <Image
                        src="/logo.svg"
                        alt="dashboard"
                        width={200}
                        height={200}
                        className="object-cover w-36 lg:w-0"
                    />
                </span>
            </div>
        </div>
    );
}