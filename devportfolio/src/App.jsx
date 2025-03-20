import React, { useState, useEffect } from 'react';

export default function App() {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const texts = ['Frandel Wanjawa.', 'a Hardware Engineer.', 'a Data Engineer.', 'a Space Enthusiast.', 'a Problem Solver.'];
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['home', 'projects', 'about', 'connect'];
  let touchStartY = 0;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        navigateToSection(1); 
      } else if (event.key === 'ArrowUp') {
        navigateToSection(-1);
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  

  

  const handleScroll = (event) => {
    event.preventDefault(); 
    if (event.deltaY > 0) {
      navigateToSection(1); 
    } else {
      navigateToSection(-1);
    }
  };

  const navigateToSection = (direction) => {
    setCurrentSection((prev) => {
      const newIndex = Math.min(Math.max(prev + direction, 0), sections.length - 1);
      console.log(`Navigating from section ${prev} to section ${newIndex}`); // Debugging
      if (newIndex !== prev) {
        document.getElementById(sections[newIndex]).scrollIntoView({ behavior: 'smooth' });
      }
      return newIndex;
    });
  };

  const handleTouchStart = (event) => {
    touchStartY = event.touches[0].clientY;
  };
  
  const handleTouchEnd = (event) => {
    const touchEndY = event.changedTouches[0].clientY;
    const swipeThreshold = 20; 
  
    if (touchStartY - touchEndY > swipeThreshold) {
      
      navigateToSection(1);
    } else if (touchEndY - touchStartY > swipeThreshold) {
      
      navigateToSection(-1);
    }
  };

  

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

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleMpesaClick = () => {
    try {
      window.location.href = 'https://link.payd.one/REIhZC';
    } catch (error) {
      alert(error.message);
    }
  };
  const handleDiasporaClick = () => {
    try {
      window.location.href = 'https://web.mypayd.app/devfreezy';
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <>
      <div id="home" className="min-h-screen"
        onWheel={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-blue-900 to-black z-50">
            <div className="w-24 h-24 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <div
          className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/assets/img3.jpg')" }}
          onLoad={handleImageLoad}
        >
          <nav className="bg-transparent-900 w-full p-3 fixed top-0">
            <div className="container mx-auto flex justify-between items-center">

              <div className="flex items-center space-x-2">
                {!isMobileMenuOpen && (
                  <button
                    onClick={handleMobileMenuToggle}
                    className="text-white px-2 sm:px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    <div className="space-y-1">
                      <div className="w-6 h-1 bg-white"></div>
                      <div className="w-6 h-1 bg-white"></div>
                      <div className="w-6 h-1 bg-white"></div>
                    </div>
                  </button>
                )}
              </div>
              <div
                className={`fixed top-0 left-0 h-full bg-transparent-900 text-white z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                  } transition-transform duration-300`}
              >
                <button
                  onClick={handleMobileMenuToggle}
                  className="absolute top-4 right-4 text-white"
                >
                  ✕
                </button>
                <ul className="mt-16 space-y-4 px-4">
                  <li>
                    <a href="#home" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>
                      Frandel
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="/assets/Frandel.pdf" download className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>
                      Download Resume
                    </a>
                  </li>
                  <li>
                    <a href="#connect" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>
                      Connect
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+254729634366?text=Hello,%20Frandel." target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>
                      Chat
                    </a>
                  </li>
                  <li>
                    <a href="#blogs" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>
                      About
                    </a>
                  </li>

                </ul>
              </div>



              {/* Social Icons */}

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
          Donate
        </button>

        {isDropdownOpen && (
          <div className="fixed bottom-16 left-4 bg-white text-black rounded shadow-lg">
            <ul>
              <li className="p-2 hover:bg-green-700 cursor-pointer" onClick={handleMpesaClick}>
                M-Pesa
              </li>
              <li className="p-2 hover:bg-yellow-400 cursor-pointer" onClick={handleDiasporaClick}>
                Diaspora
              </li>
            </ul>
          </div>
        )}
      </div>

      <div id="projects" className="h-3/4 w-full bg-cover bg-center flex items-center justify-center flex-col p-4" style={{ backgroundImage: "url('/assets/img3.jpg')" }}>

        <div className="block sm:hidden w-full ">
          <ul className="space-y-2 mt-16">
            <li className="bg-white text-black p-4 rounded-lg shadow-lg h-12">
              <a href="https://github.com/franfreezy/dataScience" target="_blank" className="no-underline">Project Humanity</a>
            </li>
            <li className="bg-white text-black p-4 rounded-lg shadow-lg h-12">
              <a href="https://agroxsatsite.onrender.com" target="_blank" className="no-underline">AgriX cubesat</a>
            </li>
            <li className="bg-white text-black p-4 rounded-lg shadow-lg h-12">
              <a href="https://github.com/franfreezy/DSA2.0" target="_blank" className="no-underline">DSA</a>
            </li>
            <li className="bg-white text-black p-4 rounded-lg shadow-lg h-12">
              <a href="https://github.com/franfreezy" target="_blank" className="no-underline">Smart baby crib</a>
            </li>
            <li className="bg-white text-black p-4 rounded-lg shadow-lg h-12">
              <a href="https://github.com/franfreezy" target="_blank" className="no-underline">Home automation</a>
            </li>
            <li className="bg-white text-black p-4 rounded-lg shadow-lg h-12">
              <a href="https://github.com/franfreezy" target="_blank" className="no-underline">Robotics</a>
            </li>
            <li className="bg-white text-black p-4 rounded-lg shadow-lg h-12">
              <a href="https://github.com/franfreezy/AviatorBot" target="_blank" className="no-underline">Aviator bot</a>
            </li>
            <li className="bg-white text-black p-4 rounded-lg shadow-lg h-12">
              <a href="https://github.com/franfreezy/FinancialAndMacroeconomicPlatform" target="_blank" className="no-underline">Django React</a>
            </li>
            <li className="bg-white text-black p-4 rounded-lg shadow-lg h-12">
              <a href="https://www.linkedin.com/company/tafiti-cubesat/" target="_blank" className="no-underline">Tafiti cubesat</a>
            </li>

          </ul>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 ">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center h-48">
            <img src="/assets/undata.png" alt="UN data" className="w-full h-12 object-cover rounded-lg" />
            <h2 className="mt-4 text-lg font-semibold">Project Humanity</h2>
            <p className="mt-2 text-sm text-gray-600">Data analysis on Data from UN</p>
            <a href="https://github.com/franfreezy/dataScience" target="_blank" className="mt-4 text-black-500 no-underline">View on GitHub</a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center h-48">
            <img src="/assets/agrisat.png" alt="AgriX sat" className="w-full h-12 object-contain rounded-lg" />
            <h2 className="mt-4 text-lg font-semibold">AgriX SAT</h2>
            <p className="mt-2 text-sm text-gray-600">JKUAT Satellite project </p>
            <a href="https://agroxsatsite.onrender.com" target="_blank" className="mt-4 text-black-500 no-underline">Visit website</a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center h-48">
            <img src="/assets/tafiti.jpeg" alt="Tafiti" className="w-full h-12 object-contain rounded-lg" />
            <h2 className="mt-4 text-lg font-semibold">Tafiti cubesat</h2>
            <p className="mt-2 text-sm text-gray-600">TAFITI satellite project</p>
            <a href="https://www.linkedin.com/company/tafiti-cubesat/" target="_blank" className="mt-4 text-black-500 no-underline">View on LinkedIn</a>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center h-48">
            <img src="/assets/babycrib.jpeg" alt="babycrib" className="w-full h-12 object-contain rounded-lg" />
            <h2 className="mt-4 text-lg font-semibold">Smart baby crib</h2>
            <p className="mt-2 text-sm text-gray-600">Baby crib with sensors to monitor the baby </p>
            <a href="https://github.com/franfreezy" target="_blank" className="mt-4 text-black-500 no-underline">View on GitHub</a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center h-48">
            <img src="/assets/homeauto.jpeg" alt="HomeAuto" className="w-full h-12 object-contain rounded-lg" />
            <h2 className="mt-4 text-lg font-semibold">Home automation</h2>
            <p className="mt-2 text-sm text-gray-600">Controlling switches and lamps via the web</p>
            <a href="https://github.com/franfreezy" target="_blank" className="mt-4 text-black-500 no-underline">View on GitHub</a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center h-48">
            <img src="/assets/robot.jpeg" alt="Robotics" className="w-full h-12 object-contain rounded-lg" />
            <h2 className="mt-4 text-lg font-semibold">Robotics</h2>
            <p className="mt-2 text-sm text-gray-600">Obstacle avoidance and line following</p>
            <a href="https://github.com/franfreezy" target="_blank" className="mt-4 text-black-500 no-underline">View on GitHub</a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center h-48">
            <img src="/assets/aviator.jpeg" alt="Aviator" className="w-full h-12 object-contain rounded-lg" />
            <h2 className="mt-4 text-lg font-semibold">Aviator bot</h2>
            <p className="mt-2 text-sm text-gray-600">Bot to mine data in aviator</p>
            <a href="https://github.com/franfreezy/AviatorBot" target="_blank" className="mt-4 text-black-500 no-underline">View on GitHub</a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center h-48">
            <img src="/assets/reactdjango.png" alt="Data platform" className="w-full h-12 object-contain rounded-lg" />
            <h2 className="mt-4 text-lg font-semibold">Django React</h2>
            <p className="mt-2 text-sm text-gray-600">Backend-Frontend Data platform</p>
            <a href="https://github.com/franfreezy/FinancialAndMacroeconomicPlatform" target="_blank" className="mt-4 text-black-500 no-underline">View on GitHub</a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center h-48">
            <img src="/assets/dsa.png" alt="DSA" className="w-full h-12 object-contain rounded-lg" />
            <h2 className="mt-4 text-lg font-semibold">DSA</h2>
            <p className="mt-2 text-sm text-gray-600">Data structures and algos projects</p>
            <a href="https://github.com/franfreezy/DSA2.0" target="_blank" className="mt-4 text-black-500 no-underline">View on GitHub</a>
          </div>

        </div>
      </div>

      <div id="about" className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/assets/img3.jpg')" }}>
        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center px-4 font-serif">
          I am a dedicated and experienced software engineer passionate about developing innovative solutions to complex problems. With a strong background in various programming languages and technologies, I specialize in creating efficient, scalable applications. My expertise range from web development to embedded systems and data engineering. I am committed to continuous fast learning and staying up-to-date with the latest advancements in technology to deliver high-quality results. Let's work together to make the world a more habitable place for everyone.
        </p>
      </div>
      <div id="connect" className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/assets/img3.jpg')" }}>
        <div className="flex space-x-1">
          <a className="h-7 w-7 bg-cover rounded-full" style={{ backgroundImage: "url('/assets/github.png')" }} href="https://github.com/franfreezy"></a>
          <a className="h-7 w-7 bg-cover rounded-full" style={{ backgroundImage: "url('/assets/linkedin.png')" }} href="https://www.linkedin.com/in/frandel-wanjawa/"></a>
          <a className="h-7 w-7 bg-cover rounded-full" style={{ backgroundImage: "url('/assets/twitter.png')" }} href="https://twitter.com/codewithfreezy"></a>
        </div>
      </div>
    </>
  );
}
