import React, { useState, useEffect } from 'react';

export default function App() {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const texts = ['Frandel Wanjawa.', 'a Software Engineer.', 'a DSA Expert.', 'an Embedded Systems Engineer.', 'a Data Engineer.', 'an Electronics and computer Engineering student'];

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

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMpesaClick = () => {
    try {
      window.location.href = 'https://web.mypayd.app/devfreezy'; 
    } catch (error) {
      alert(error.message); 
    }
  };
  

  return (
    <>
      <div id="home" className="min-h-screen">
        <div className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: "url('/assets/img3.jpg')" }}>
          <nav className="bg-gray-900 w-full p-3 fixed top-0">
            <div className="container mx-auto flex justify-between items-center">
              {/* Logo and Mobile Menu Toggle */}
              <div className="flex items-center space-x-2">
                <a onClick={handleMobileMenuToggle} href="#home" className="text-white px-2 sm:px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Dev Freezy</a>
                <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-900 absolute top-12 left-0 w-full`}>
                  <a href="#about" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>About</a>
                  <a href="#blog" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>Blogs</a>
                  <a href="#projects" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>Projects</a>
                  <a href="/assets/FrandelResumeTemplate.pdf" download className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>Download Resume</a>
                  <a href="https://wa.me/+254729634366?text=Hello,%20I%20am%20interested%20in%20hiring%20you." target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>Hire Me</a>
                </div>
              </div>

              {/* Middle Links */}
              <div className="hidden sm:flex space-x-2">
                <a href="#projects" className="text-white px-2 sm:px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Projects</a>
                <a href="#about" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" >About</a>
                <a href="#blog" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" >Blogs</a>
                <a href="/assets/FrandelResumeTemplate.pdf" download className="text-white px-2 sm:px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Download Resume</a>
                <a href="https://wa.me/+254729634366?text=Hello,%20I%20am%20interested%20in%20hiring%20you." target="_blank" rel="noopener noreferrer" className="text-white px-2 sm:px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Hire Me</a>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-1">
                <a className="h-7 w-7 bg-cover rounded-full" style={{ backgroundImage: "url('/assets/github.png')" }} href="https://github.com/franfreezy"></a>
                <a className="h-7 w-7 bg-cover rounded-full" style={{ backgroundImage: "url('/assets/linkedin.png')" }} href="https://www.linkedin.com/in/frandel-wanjawa/"></a>
                <a className="h-7 w-7 bg-cover rounded-full" style={{ backgroundImage: "url('/assets/twitter.png')" }} href="https://twitter.com/codewithfreezy"></a>
              </div>
            </div>
          </nav>

          <img src="/assets/CTO.jpg" alt="Logo" className="h-40 w-40 sm:h-80 sm:w-80 object-cover rounded-full" />
          <br />
          <h1 className="text-center text-white text-2xl sm:text-4xl mt-4 sm:mt-0">I am {displayedText}</h1>
        </div>

        <button
          onClick={handleDropdownToggle}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 fixed bottom-4 left-4"
        >
          Uncle Please
        </button>

        {isDropdownOpen && (
          <div className="fixed bottom-16 left-4 bg-white text-black rounded shadow-lg">
            <ul>
              <li className="p-2 hover:bg-green-700 cursor-pointer" onClick={handleMpesaClick}>
                M-Pesa
              </li>
              <li className="p-2 hover:bg-yellow-400 cursor-pointer" onClick={handleMpesaClick}>
                Visa
              </li>
            </ul>
          </div>
        )}
      </div>

      <div id="projects" className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/assets/img3.jpg')" }}>
        <h1 className="text-white text-2xl sm:text-3xl text-center px-4">Projects onboarded soon. For now take a glance at the CV</h1>
      </div>
      <div id="about" className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/assets/img3.jpg')" }}>
        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center px-4 font-serif">
          I am a dedicated and experienced software engineer passionate about developing innovative solutions to complex problems. With a strong background in various programming languages and technologies, I specialize in creating efficient, scalable applications. My expertise ranges from web development to embedded systems and data engineering. I am committed to continuous learning and staying up-to-date with the latest advancements in technology to deliver high-quality results. Let's work together to make the world a more habitable place for everyone.
        </p>
      </div>
    </>
  );
}
