'use client';
import { Button } from "flowbite-react";
import { pricingPlans } from "@/dummy/Pricing";

export default function Pricing() {
    return (
        <div className="w-screen h-auto py-10 pb-10 lg:mx-0 bg-gray-100 bg-cover bg-center overflow-hidden">
            <div className="flex items-center justify-center w-auto flex-col h-auto">
                <div className="lg:w-1/2 mb-5 text-center">
                    <h1 className="font-bold lg:font-extrabold text-gray-950 text-xl lg:text-3xl">
                        Our Pricing
                    </h1>
                    <h2 className="text-3xl font-extrabold lg:hidden mt-2">
                        Subscription
                    </h2>
                </div>


                <div className="bg-white shadow-2xl flex flex-row rounded-3xl w-auto mb-5">
                    <Button className="rounded-3xl text-base bg-white text-black py-1 px-3">
                        Montly
                    </Button>
                    <Button className="rounded-3xl text-base bg-blue-500 py-1 px-3">
                        Yearly
                    </Button>
                </div>

                <div className="bg-blue-400 mb-4 text-sm font-medium shadow-md shadow-blue-900 rounded-lg py-1 px-3">
                    <p>Hemat hingga 25% dengan paket tahunan</p>
                </div>

                <div className="w-full lg:ml-20 h-auto lg:w-10/12 flex flex-wrap justify-center gap-6">
                    {pricingPlans.slice(0, 4).map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-lg p-3 text-center w-60 ${plan.highlight ? 'bg-white border-2 shadow-2xl border-yellow-400' : 'bg-transparent'}`}
                        >
                            <h3 className="text-lg text-left font-bold">{plan.title}</h3>
                            <p className="mt-2 text-left text-xs font-medium text-gray-600">{plan.description}</p> {/* Description Below Title */}
                            <p className="mt-4 text-left text-xl font-bold">{plan.price}</p>
                            {plan.annualPrice && <p className="text-xs text-left font-extralight text-gray-500">{plan.annualPrice}</p>}
                            <Button className={`mt-4 ${plan.buttonColor} text-white w-full py-1 px-4 rounded-xl`}>
                                {plan.buttonText}
                            </Button>
                            <ul className="mt-6 text-sm text-gray-600">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center py-1">
                                        {feature.icon}
                                        <span className="font-semibold text-xs mr-2">{feature.value}</span> {feature.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
