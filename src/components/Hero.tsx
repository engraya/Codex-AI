import React from 'react'
import Link from 'next/link'
import { ImGithub } from "react-icons/im";
function Hero() {
  return (
<div className="bg-[#0A0A0A] overflow-x-hidden">
  {/* Modern Hero Section */}
  <div className="relative min-h-[100dvh] overflow-hidden flex items-center justify-center">
    {/* Background Elements */}
    <div className="fixed inset-0">
      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/20 opacity-50" />
      {/* Animated Shapes - Responsive sizes */}
      <div className="absolute top-1/4 -left-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-[20rem] sm:w-[30rem] lg:w-[40rem] h-[20rem] sm:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl animate-float [animation-delay:-6s]" />
      {/* Glass Layer with reduced blur on mobile */}
      <div className="absolute inset-0 backdrop-blur-[50px] sm:backdrop-blur-[100px]" />
    </div>
    {/* Content Container with better padding for mobile */}
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
      {/* Main Grid with improved mobile layout */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          {/* Badge - Adjusted for mobile */}
          <div className="animate-reveal [animation-delay:0.2s] flex justify-center lg:justify-start">
            <div className="inline-flex items-center px-3 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-lg transform hover:scale-105 transition-transform">
              <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              <span className="ml-2 text-xs sm:text-sm text-white/70 tracking-wider">NEXT GENERATION</span>
            </div>
          </div>
          {/* Main Title - Responsive text sizes */}
          <div className="animate-reveal [animation-delay:0.4s]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <div className="block mt-2 text-white">Turn Ideas into Code using AI, Instantly with <span className="inline-block bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">Codex_AI</span></div>
              
            </h1>
          </div>
          {/* Description - Adjusted line length */}
          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto lg:mx-0 animate-reveal [animation-delay:0.6s]">
          Generate clean, production-ready UI components and code with the power of AI. Effortless. Fast. Scalable
          </p>
          {/* CTA Section - Better mobile layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-reveal [animation-delay:0.8s]">
            {/* Primary Button - Full width on mobile */}
            <Link href="/main" className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg blur-lg group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative flex items-center justify-center gap-2">
                <span className="text-white font-medium">Explore</span>
                <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
            {/* Secondary Button - Full width on mobile */}
            <Link href="https://github.com/engraya/Codex-AI" target='_blank'>
              <button className="sm:w-auto px-6 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg text-white/70 hover:bg-white/10 hover:text-white transition-all">
                <ImGithub />
              </button>
            </Link>

          </div>
        </div>
        {/* Right Column - Visual Element with better mobile scaling */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0 animate-reveal [animation-delay:1s]">
          {/* Morphing Shape Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[280px] sm:w-[350px] lg:w-[400px] h-[280px] sm:h-[350px] lg:h-[400px] animate-morph">
              {/* Glass Card with improved mobile appearance */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-[inherit] border border-white/10 shadow-2xl" />
              {/* Floating Elements - Responsive spacing */}
              <div className="absolute inset-4 sm:inset-6 flex flex-col justify-between p-4 sm:p-6">
                {/* Top Section */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 animate-pulse" />
                  <div className="h-1.5 sm:h-2 w-20 sm:w-24 bg-white/20 rounded-full" />
                  <div className="h-1.5 sm:h-2 w-24 sm:w-32 bg-white/10 rounded-full" />
                </div>
                {/* Middle Section */}
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="h-6 sm:h-8 w-20 sm:w-24 rounded-lg bg-gradient-to-r from-violet-500/20 to-cyan-500/20" />
                    <div className="h-1.5 sm:h-2 w-12 sm:w-16 bg-white/20 rounded-full" />
                  </div>
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-500/30 animate-float" />
                </div>
                {/* Bottom Section */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="h-1.5 sm:h-2 w-full bg-white/10 rounded-full" />
                  <div className="h-1.5 sm:h-2 w-3/4 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Hero