import React, { useState, useEffect } from 'react';

export default function App() {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div id="home" className="min-h-screen">
        <div className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/src/assets/img3.jpg')" }}>
        <nav className="bg-gray-900 w-full p-3 fixed top-0">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo and Frandel */}
    <div className="flex items-center space-x-2">
      <a href="#home" className="text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Dev Freezy</a>
      <a href="#about" className="text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">About</a>
      <a href="#blog" className="text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Blogs</a>
    </div>
    
    {/* Middle Links */}
    <div className="flex space-x-2">
      <a href="#projects" className="text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Projects</a>
      <a href="/src/assets/FrandelCV.pdf" download className="text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Download Resume</a>
      <a href="https://wa.me/+254729634366?text=Hello,%20I%20am%20interested%20in%20hiring%20you." target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Hire Me</a>
    </div>
    
    {/* Social Icons */}
    <div className="flex space-x-1">
      <a className="h-7 w-7 bg-cover rounded-full" style={{ backgroundImage: "url('/src/assets/github.png')" }} href="https://github.com/franfreezy"></a>
      <a className="h-7 w-7 bg-cover rounded-full" style={{ backgroundImage: "url('/src/assets/linkedin.png')" }} href="https://www.linkedin.com/in/frandel-wanjawa/"></a>
      <a className="h-7 w-7 bg-cover rounded-full" style={{ backgroundImage: "url('/src/assets/twitter.png')" }} href="https://twitter.com/codewithfreezy"></a>
    </div>
  </div>
</nav>

          <img src="/src/assets/CTO.jpg" alt="Logo" className="h-80 w-80 object-cover rounded-full" />
          <h1>  </h1>
          <div className="text-center text-white text-4xl">
            I am {displayedText}
          </div>
        </div>

        <button
          onClick={handleDropdownToggle}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 fixed bottom-4 left-4"
        >
          Uncle Please
        </button>

        {isDropdownOpen && (
          <div className="absolute bottom-16 left-4 bg-white text-black rounded shadow-lg">
            <ul>
              <li className="p-2 hover:bg-green-700 cursor-pointer" onClick={() => alert('M-Pesa transfer')}>
                M-Pesa
              </li>
              <li className="p-2 hover:bg-yellow-400 cursor-pointer" onClick={() => alert('Visa transfer')}>
                Visa
              </li>
            </ul>
          </div>
        )}
      </div>

      <div id="projects" className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/src/assets/img3.jpg')" }}>
        <h1 className="text-white text-3xl">Projects onboarded soon. For now take a glance at the CV</h1>
      </div>
      <div id="about" className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/src/assets/img3.jpg')" }}>
        <h1 className="text-white text-3xl">About comig up in a few</h1>
      </div>
      <div id="blog" className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/src/assets/img3.jpg')" }}>
        <h1 className="text-white text-3xl">Blogs coming up in a few</h1>
      </div>
    </>
  );
}
