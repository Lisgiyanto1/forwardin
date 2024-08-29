import { useState } from "react";
import { Link } from 'react-scroll';

interface AsideProps {
  onSelectPage: (sectionId: string) => void;
}

export default function Aside({ onSelectPage }: AsideProps) {
  const [activeLink, setActiveLink] = useState("GetStarted");

  const handleClick = (sectionId: string) => {
    setActiveLink(sectionId);
    onSelectPage(sectionId); 
  };

  return (
    <div className="pt-20 mt-10">
      <div className="flex pt-36">
        <aside className="fixed text-gray-700 pl-10 w-auto z-50">
          <div className="px-4">
            <div className="absolute rounded-3xl left-10 top-0 w-1 bg-gray-500 h-full"></div>
            <nav className="pl-5">
              <ul>
                <li>
                  <Link
                    to="GetStarted"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0} 
                    onClick={() => handleClick("GetStarted")}
                    className={`cursor-pointer font-semibold py-1 rounded ${activeLink === "GetStarted" ? "text-gray-950 font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link
                    to="Broadcast"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    onClick={() => handleClick("Broadcast")}
                    className={`cursor-pointer font-semibold py-1 rounded ${activeLink === "Broadcast" ? "text-gray-950 font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Broadcast
                  </Link>
                </li>
                <li>
                  <Link
                    to="Campaign"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    onClick={() => handleClick("Campaign")}
                    className={`cursor-pointer font-semibold py-1 rounded ${activeLink === "Campaign" ? "text-gray-950 font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Campaign
                  </Link>
                </li>
                <li>
                  <Link
                    to="Auto"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    onClick={() => handleClick("Auto")}
                    className={`cursor-pointer font-semibold py-1 rounded ${activeLink === "Auto" ? "text-gray-950 font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Auto Replay
                  </Link>
                </li>
                <li>
                  <Link
                    to="Opportunity"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    onClick={() => handleClick("Opportunity")}
                    className={`cursor-pointer font-semibold py-1 rounded ${activeLink === "Opportunity" ? "text-gray-950 font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Opportunity
                  </Link>
                </li>
                <li>
                  <Link
                    to="Pricing"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    onClick={() => handleClick("Pricing")}
                    className={`cursor-pointer font-semibold py-1 rounded ${activeLink === "Pricing" ? "text-gray-950 font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="CombinedPage#Menu1"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    onClick={() => handleClick("CombinedPage#Menu1")}
                    className={` cursor-pointer font-semibold py-1 rounded ${activeLink === "CombinedPage#Menu1" ? "text-white font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="CombinedPage#Menu2"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    onClick={() => handleClick("CombinedPage#Menu2")}
                    className={` cursor-pointer font-semibold py-1 rounded ${activeLink === "CombinedPage#Menu2" ? "text-white font-bold" : "text-gray-300 hover:text-gray-800"}`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
