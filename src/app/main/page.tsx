'use client';

import { FaRegCopy } from "react-icons/fa";
import { useState } from 'react';
import { FcRefresh } from "react-icons/fc";
import { PiSpinnerGap } from "react-icons/pi";
import CodeComponent from "@/components/CodeComponent";

function Main() {
    const [prompt, setPrompt] = useState('');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');


    const handleClear = () => {
      setPrompt("");
      setCode("");
    };
  
    function removeMarkdown(text : string) {
      const start = text.indexOf("```jsx");
      const end = text.lastIndexOf("```");
    
      if (start !== -1 && end > start) {
        return text.slice(start + 6, end); // Remove "`jsx" and "`"
      }
    
      return text; // No code block found, return original text
    }
  


    const handleGenerate = async () => {
      setLoading(true); // Start loading
    
      try {
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ body: prompt })
        });
    
        const data = await response.json();
        console.log("Response from API",data);
        if (response.ok) {
          setCode(removeMarkdown(data.code));
          setData(data.code);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    
  
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code);
        alert("Code copied to clipboard")
      } catch (err) {
        console.error('Failed to copy: ', err)
      }
    }

    

  return (
    <>
        <main className="flex min-h-screen flex-col items-center">
      <div className="max-w-5xl w-full flex-col items-center justify-center text-sm lg:flex">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-md bg-transparent overflow-hidden">
          <input
            className="peer h-full w-full outline-none bg-gray-100 text-sm text-gray-700 pl-4 pr-12"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a promp to generate a code.."
          />
        </div>

        <div className='flex gap-3 justify-center items-center mx-auto' >
        <div className="mt-5 flex items-center justify-center gap-x-6" onClick={handleGenerate}>
              <div className="flex flex-wrap justify-center gap-6">
                <div
                  className={`submitDiv relative cursor-pointer ${!prompt ? 'opacity-50 pointer-events-none' : ''}`}
                >
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700" />
                  <span className="fold-bold whitespace-nowrap relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
                    {loading ? <PiSpinnerGap className="animate-spin" /> : "Generate →"}
                  </span>
                </div>
              </div>
         </div>
         <div className="mt-5 flex items-center justify-center gap-x-6"  onClick={handleCopy}>
              <div className="flex flex-wrap justify-center gap-6">
                <div
                  className={`submitDiv relative cursor-pointer`}
                >
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700" />
                  <span className="fold-bold relative flex justify-center items-center gap-2  h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
                    <span>Copy</span><FaRegCopy />
                  </span>
                </div>
              </div>
         </div>
         <div className="mt-5 flex items-center justify-center gap-x-6"  onClick={handleClear}>
              <div className="flex flex-wrap justify-center gap-6">
                <div className={`submitDiv relative cursor-pointer`}>
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700" />
                  <div className="fold-bold flex justify-center items-center gap-1 relative h-full w-full rounded border-2 border-black bg-black px-2 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
                    <span>Refresh</span> <FcRefresh />
                  </div>
                </div>
              </div>
         </div>
        </div>
        <CodeComponent
        code={code}
        />
      </div>
     
    </main>

    </>

  )
}

export default Main






