'use client'

import { Button } from "flowbite-react";
import { ArrowRightIcon } from "lucide-react";

export default function NewPage() {
  return (
    <div className="h-screen w-screen bg-gray-100 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('/background.png')`, margin: '0', padding: '0' }}>
      <div className="flex items-center pt-36 justify-center h-full">
        <div className="w-full lg:ml-44 lg:w-10/12 flex flex-col lg:flex-row justify-between items-center lg:items-start">

          {/* Content Section */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col w-full px-4">
              <p className="text-4xl font-extrabold mb-4">
                New Page Title
              </p>
              <p className="text-base font-semibold mb-4">
                This is the content for the new page. You can add more details here as needed.
              </p>
              <div className="flex items-center">
                <Button
                  color="dark"
                  onClick={() => ""}
                  className="text-white hover:bg-gray-600 px-4 rounded-lg"
                >
                  Call to Action
                </Button>
                <div className="bg-gray-600 h-full ml-4 py-3 px-4 rounded-lg">
                  <ArrowRightIcon className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
