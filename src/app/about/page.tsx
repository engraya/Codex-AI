import React from 'react'
import Image from 'next/image'
import { codeImage } from '@/assets'
function AboutPage() {
  return (
    <div className="sm:flex justify-center mx-auto items-center max-w-screen-xl">
    <div className="p-10">
      <div className="image object-center text-center">
        <Image src={codeImage} width={250} height={250} alt='about-image'  />
      </div>
    </div>
    <div className="sm:w-1/2 p-5">
      <div className="text">
       <h1 className="my-4 font-bold text-3xl  sm:text-4xl bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 inline-block text-transparent bg-clip-text"> Codex_AI</h1>
        <p className="text-gray-700">
        CodexAI is an innovative AI-powered UI and code generation tool designed to accelerate frontend and full-stack development. Whether you are a developer, designer, or entrepreneur, CodexAI simplifies the process of creating modern, responsive, and scalable user interfaces with AI-driven intelligence.

With seamless integration of React, Tailwind CSS, and Next.js, CodexAI helps you generate production-ready UI components and boilerplate code effortlessly, allowing you to focus on building great experiences rather than writing repetitive code..
        </p>
      </div>
    </div>
  </div>
  )
}

export default AboutPage