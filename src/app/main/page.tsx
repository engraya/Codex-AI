'use client';

import { useState } from 'react';
import { FcRefresh } from "react-icons/fc";
import { PiSpinnerGap } from "react-icons/pi";
import CodeComponent from "@/components/CodeComponent";
import { toast } from 'react-toastify';
import TopHeader from '@/components/Layout/TopHeader';

function Main() {
    const [prompt, setPrompt] = useState('');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);


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
          toast.success('Code Generate Successfully!!..', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
              });
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    

  return (
    <>
        <main className="flex flex-col items-center">
          <TopHeader/>
      <div className="max-w-5xl w-full flex-col items-center justify-center text-sm lg:flex">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-md bg-transparent overflow-hidden">
          <input
            className="peer h-full w-full outline-none bg-gray-100 text-sm text-gray-900 pl-4 pr-12"
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
         {code && (<div className="mt-5 flex items-center justify-center gap-x-6"  onClick={handleClear}>
              <div className="flex flex-wrap justify-center gap-6">
                <div className={`submitDiv relative cursor-pointer`}>
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700" />
                  <div className="fold-bold flex justify-center items-center gap-1 relative h-full w-full rounded border-2 border-black bg-black px-2 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
                    <span>Refresh</span> <FcRefresh />
                  </div>
                </div>
              </div>
         </div>)}
   
        </div>
        <CodeComponent
          code={code}
          loading={loading}
        />

      </div>
     
    </main>

    </>

  )
}

export default Main






