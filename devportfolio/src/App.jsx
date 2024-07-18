import React, { useState, useEffect } from 'react';

export default function App() {
  const [displayedText, setDisplayedText] = useState(''); //taking advantage of a useState () react hook
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // State to manage whether we're typing or erasing
  const texts = ['Frandel Wanjawa.', 'a Software Engineer.', 'a DSA Expert.', 'a Hardware Engineer.'];

  useEffect(() => {
    const typeText = () => {
      setDisplayedText((prev) => prev + texts[index][charIndex]);
      setCharIndex((prev) => prev + 1);
    };

    const eraseText = () => {
      setDisplayedText((prev) => prev.slice(0, -1));
      setCharIndex((prev) => prev - 1);
    };

    let currentTimeout;

    if (isTyping) {
      if (charIndex < texts[index].length) {
        currentTimeout = setTimeout(typeText, 100); // Typing speed
      } else {
        setTimeout(() => setIsTyping(false), 2000); // Pause before erasing
      }
    } else {
      if (charIndex > 0) {
        currentTimeout = setTimeout(eraseText, 100); // Erasing speed
      } else {
        setIsTyping(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(currentTimeout);
  }, [charIndex, isTyping, index, texts]);

  return (
    <>
      <div className="min-h-screen">
        <div className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/src/assets/img3.jpg')" }}>
          <nav className="bg-gray-800 w-full p-4 fixed top-0">
            <div className="container mx-auto flex justify-between items-center">
              {/* Logo and Frandel */}
              <div className="flex items-center space-x-2">
                <img src="/src/assets/CTO.jpg" alt="Logo" className="h-16 w-16 object-cover rounded-full" />
                <a href="#home" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Dev Freezy</a>
              </div>
              
              {/* Middle Links */}
              <div className="flex space-x-4">
                <a href="#projects" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Projects</a>
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
                  href="/src/assets/FrandelCV.pdf" 
                  download 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </nav>
          <div className="text-center text-white text-4xl">
            I am {displayedText}
          </div>
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
