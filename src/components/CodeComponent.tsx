"use client";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { toast } from 'react-toastify';
import LoadingSpinner from "./LoadingSpinner";
interface GeneratedComponentProps {
    code: string;
    loading : boolean
}



function CodeComponent({ code, loading } : GeneratedComponentProps) {

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        toast.success('Code Copied!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
  
        // Reset copied state after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    };


  return (
    <div className="relative w-[300px] md:w-[700px] mx-auto mt-8">
  <div className="bg-gray-900 text-white p-4 rounded-md">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-400 flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" /></span>
        {code && (<button onClick={handleCopy} className="bg-gray-800 code flex justify-center items-center gap-2 whitespace-nowrap hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md" data-clipboard-target="#code">
        {copied ? "Copied!" : <><span>Copy</span><FaRegCopy /></>}
      </button>)}

    </div>
    {code ? (
        <>
        <div className="overflow-x-auto">
        <pre id="code" className="text-gray-300 bg-gray-800 code p-4 rounded-md whitespace-pre overflow-x-auto">
            <div>
            {code}
            </div></pre>
        </div>
        </>
    ) : (
        <>
         {loading ? (<div className="py-20 px-2 justify-center items-center max-auto">
            <LoadingSpinner />
         </div>) : (<div className="py-10 px-2">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                <div className="md:flex">
                <div className="w-full p-3">
                    <div className="relative h-48 rounded-lg border-dashed border-2 border-teal-300 bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                        <div className="flex flex-col items-center">
                        <i className="fa fa-folder-open fa-4x text-blue-700" />
                        <span className="block text-gray-700 font-normal text-center">No Code generated yet!. <br /> Enter a prompt to generate your code.</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>)}
        </>
  
    )}
   
  </div>
</div>

  )
}

export default CodeComponent