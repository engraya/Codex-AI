import React from 'react'

function Footer() {
  return (
    <footer className="text-gray-900 py-4 z-10">
    <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Codex-AI. All rights reserved.</p>
    </div>
</footer>
  )
}

export default Footer