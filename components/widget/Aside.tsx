import { useState } from "react";

interface AsideProps {
  onSelectPage: (sectionId: string) => void;
}

export default function Aside({ onSelectPage }: AsideProps) {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (sectionId: string) => {
    setActiveLink(sectionId);
    onSelectPage(sectionId); 
  };

  return (
    <div className="pt-20 mt-10">
      <div className="flex pt-36">
        <aside className="fixed text-gray-700 pl-10 w-auto">
          <div className="px-4">
            <div className="absolute rounded-3xl left-10 top-0 w-1 bg-gray-500 h-full"></div>
            <nav className="pl-5">
              <ul>
                <li>
                  <p
                    onClick={() => handleClick("GetStarted")}
                    className={`cursor-pointer font-semibold py-1 rounded ${activeLink === "GetStarted" ? "text-gray-950 font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Get Started
                  </p>
                </li>
                <li>
                  <p
                    onClick={() => handleClick("Broadcast")}
                    className={`cursor-pointer font-semibold py-1 rounded ${activeLink === "Broadcast" ? "text-gray-950 font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Broadcast
                  </p>
                </li>
                <li>
                  <p
                    onClick={() => handleClick("Campaign")}
                    className={`cursor-pointer font-semibold py-1 rounded ${activeLink === "Campaign" ? "text-gray-950 font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Campaign
                  </p>
                </li>
                <li>
                  <p
                    onClick={() => handleClick("Auto")}
                    className={`cursor-pointer font-semibold py-1 rounded ${activeLink === "Auto" ? "text-gray-950 font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Auto Replay
                  </p>
                </li>
                <li>
                  <p
                    onClick={() => handleClick("Opportunity")}
                    className={`cursor-pointer font-semibold py-1 rounded ${activeLink === "Opportunity" ? "text-gray-950 font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Opportunity
                  </p>
                </li>
                <li>
                  <p
                    onClick={() => handleClick("Pricing")}
                    className={`cursor-pointer font-semibold py-1 rounded ${activeLink === "Pricing" ? "text-gray-950 font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Pricing
                  </p>
                </li>
                <li>
                  <p
                    onClick={() => handleClick("CombinedPage#Menu1")}
                    className={` cursor-pointer font-semibold py-1 rounded ${activeLink === "CombinedPage#Menu1" ? "text-white font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    FAQ
                  </p>
                </li>
                <li>
                  <p
                    onClick={() => handleClick("CombinedPage#Menu2")}
                    className={` cursor-pointer font-semibold py-1 rounded ${activeLink === "CombinedPage#Menu2" ? "text-white font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Contact Us
                  </p>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
