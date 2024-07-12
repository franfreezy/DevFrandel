import React from 'react';

export default function App() {
  return (
    <>
      <div className="min-h-screen">
        <div className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/src/assets/img3.jpg')" }}>
          
          <nav className="bg-gray-800 w-full p-4 fixed top-0">
            <div className="container mx-auto flex justify-between items-center">
              {/* Logo and Frandel */}
              <div className="flex items-center space-x-2">
              <img src="/src/assets/CTO.jpg" alt="Logo" className="h-16 w-16 object-cover rounded-full" />
                <a href="#home" className="text-white text-lg font-bold">Frandel</a>
              </div>
              
              {/* Middle Links */}
              <div className="flex space-x-4">
                <a href="#projects"className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Projects</a>
                <a href="#about" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">About</a>
                <a 
                  href="https://wa.me/+254729634366?text=Hello,%20I%20am%20interested%20in%20hiring%20you." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Hire Me
                </a>
                
              </div>
              
              {/* Download Resume Button */}
              <div className="flex space-x-2">
                <a 
                  href="/path-to-your-resume.pdf" 
                  download 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </nav>
        
        </div>
      </div>

      <div id="projects" className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/src/assets/img3.jpg')" }}>
        <h1 className="text-white text-3xl">Section 2</h1>
      </div>
      <div id="about" className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/src/assets/img3.jpg')" }}>
        <h1 className="text-white text-3xl">Section 3</h1>
      </div>
      <div className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/src/assets/img3.jpg')" }}>
        <h1 className="text-white text-3xl">Section 4</h1>
      </div>
    </>
  );
}
