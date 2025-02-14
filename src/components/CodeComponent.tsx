"use client";

import parse from "html-react-parser";
import { FaRegCopy } from "react-icons/fa";
interface GeneratedComponentProps {
    code: string;
}

function CodeComponent({ code } : GeneratedComponentProps) {
  return (
    <div className="relative w-[300px] md:w-[700px] mx-auto mt-24">
  <div className="bg-gray-900 text-white p-4 rounded-md">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-400 flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" /></span><button className="bg-gray-800 code flex justify-center items-center gap-2 whitespace-nowrap hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md" data-clipboard-target="#code">
        <span>Copy</span><FaRegCopy />
      </button>
    </div>
    <div className="overflow-x-auto">
      <pre id="code" className="text-gray-300 bg-gray-800 code p-4 rounded-md whitespace-pre overflow-x-auto">
        <div>
        {code}
        </div></pre>
    </div>
  </div>
</div>

  )
}

export default CodeComponent