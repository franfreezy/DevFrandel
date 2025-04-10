import React, { useState, useEffect } from 'react';

export default function App() {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const texts = ['Frandel Wanjawa.', 'a Software Engineer.', 'a Hardware Engineer.', 'a Data Engineer.', 'an SDG champion .'];
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState('down');
  const sections = ['home', 'about', 'projects', 'certifications', 'connect', 'blogs'];
  const [currentProfessionalIndex, setCurrentProfessionalIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const professionalAchievements = [
    {
      title: "CEO and Founder Tethics Electrics Grp.",
      year: "2025 April - Current",
      description: "Leading a team of developers to build cutting-edge solutions that address real-world challenges.",
    },
    {
      title: "TT$C Subsystem Lead-Tafiti Project Kenya Space Agency",
      year: "2024 Jan - 2025 March",
      description: "Led the communication and Ground Station Subsystem  .",
    },
    {
      title: "Engineering Intern - Egypro EAst Africa Ltd.",
      year: "2023 Jan- 2023 May",
      description: "Maintained Safaricom Boosters.",
    },
    {
      title: "Engineering Intern- Gearbox and Fedha",
      year: "2022 Jan  - 2022 May",
      description: "Developed hardware and firmware for smart devices.",
    },
    {
      title: "Census Enumerator",
      year: "2019 July - 2019 August ",
      description: "Collected and relayed data for the 2019 Kenya Census.",
    },

  ];
  const [currentAcademicIndex, setCurrentAcademicIndex] = useState(0);
  const academicQualifications = [
    {
      image: "/assets/graduationhat.jpeg",
      title: "Bachelor's Degree in Electronic and Computer Engineering",
      institution: "JKUAT",
      achievement: "Graduate with Honors",
      year: "2019 - 2025",
    },
    {
      image: "/assets/tie.png",
      title: "Kenya Certificate of Secondary Education",
      institution: "Friends School Kamusinga",
      achievement: "A-(minus)",
      year: "2015 - 2018",
    },
    {
      image: "/assets/book.png",
      title: "Kenya Certificate of Primary Education",
      institution: "The King David Preparatory- Kolanya",
      achievement: "400 marks",
      year: "2014",
    },
  ];

  const [activeContent, setActiveContent] = useState('professional');

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

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setCurrentProfessionalIndex((prevIndex) => (prevIndex + 1) % professionalAchievements.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoSlide, professionalAchievements.length]);

  useEffect(() => {
    const academicInterval = setInterval(() => {
      setCurrentAcademicIndex((prevIndex) => (prevIndex + 1) % academicQualifications.length);
    }, 10000);
    return () => clearInterval(academicInterval);
  }, []);

  const navigateToSection = (direction) => {
    setCurrentSection((prev) => {
      const newIndex = Math.min(Math.max(prev + direction, 0), sections.length - 1);

      if (newIndex !== prev) {
        const targetSection = document.getElementById(sections[newIndex]);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      setDirection(direction === 1 ? 'down' : 'up');

      return newIndex;
    });
  };

  const calculatePercentage = () => {
    return Math.round(((currentSection + 1) / sections.length) * 100);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
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
        currentTimeout = setTimeout(typeText, 150);
      } else {
        setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (charIndex > 0) {
        currentTimeout = setTimeout(eraseText, 100);
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
      <div id="home" className="min-h-screen">
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-blue-900 to-black z-50">
            <div className="w-24 h-24 border-8 border-blue-500 border-t-transparent rounded-full animate-spin z-100"></div>
          </div>
        )}
        {!isLoading && (
          <>
            {/* Navigation Bar */}
            <nav className="bg-transparent-900 w-full p-3 fixed top-0 z-50">
              <div className="container  flex   items-center">
                <div className="flex  items-center w-full">
                  {!isMobileMenuOpen && (
                    <button
                      onClick={() => setIsMobileMenuOpen((prev) => !prev)}
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
                <div className="relative" style={{ overflow: 'visible' }}>
                  <div
                    className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-90 text-white z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                      } transition-transform duration-300`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={handleMobileMenuToggle}
                      className="absolute top-4 right-4 text-white z-50"
                    >
                      ✕
                    </button>
                    <ul className="mt-16 space-y-4 px-4 z-100">
                      <li>
                        <a
                          href="#home"
                          className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
                          onClick={handleMenuClick}
                        >
                          <span role="img" aria-label="Home">🏠</span>
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#about"
                          className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                          onClick={handleMenuClick}
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#projects"
                          className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                          onClick={handleMenuClick}
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          href="#certifications"
                          className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                          onClick={handleMenuClick}
                        >
                          Certifications
                        </a>
                      </li>
                      <li>
                        <a
                          href="#connect"
                          className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                          onClick={handleMenuClick}
                        >
                          Connect
                        </a>
                      </li>
                      <li>
                        <a
                          href="#blogs"
                          className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                          onClick={handleMenuClick}
                        >
                          Blogs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>

            {/* Donate Button */}
            <button
              onClick={handleDropdownToggle}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 fixed bottom-4 left-4"
            >
              Donate
            </button>

            {/* Scroll Button */}
            <div
              className="fixed bottom-4 right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50"
              style={{
                background: `conic-gradient(#3b82f6 ${calculatePercentage()}%, #e5e7eb ${calculatePercentage()}%)`,
              }}
            >
              <button
                onClick={() => {
                  if (currentSection === sections.length - 1) {
                    setDirection('up');
                    navigateToSection(-1);
                  } else if (currentSection === 0) {
                    setDirection('down');
                    navigateToSection(1);
                  } else {
                    const nextDirection = direction === 'down' ? 1 : -1;
                    setDirection(nextDirection === 1 ? 'down' : 'up');
                    navigateToSection(nextDirection);
                  }
                }}
                className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300 z-50"
              >
                {currentSection === sections.length - 1 ? '↑' : currentSection === 0 ? '↓' : direction === 'down' ? '↓' : '↑'}
              </button>
            </div>
          </>
        )}
        <div
          className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center relative"
          style={{ backgroundImage: "url('/assets/img3.jpg')" }}
          onLoad={handleImageLoad}
        >

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-0"></div>





          <div className="z-10">
            <img src="/assets/CTO.jpg" alt="Logo" className="h-40 w-40 sm:h-80 sm:w-80 object-cover rounded-full" />
          </div>


          <div className="z-10 mt-4 sm:mt-10">
            <h1 className="text-center text-white text-2xl sm:text-4xl animate-bounce">I am {displayedText}</h1>
          </div>

          <button
            onClick={handleDropdownToggle}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 fixed bottom-4 left-4"
          >
            Donate
          </button>

          {isDropdownOpen && (
            <div className="fixed bottom-16 left-4 bg-white text-black rounded shadow-lg z-50">
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
      </div>



            <div
        id="about"
        className="h-screen w-full bg-cover bg-center flex flex-col justify-center relative"
        style={{ backgroundImage: "url('/assets/img3.jpg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-0"></div>
      
        {/* Two Small Balls for Small Screens */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4 sm:hidden">
          <button
            onClick={() => setActiveContent('professional')}
            className={`w-8 h-8 rounded-full transition duration-300 ${
              activeContent === 'professional' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'
            }`}
            title="Professional Experience"
          ></button>
          <button
            onClick={() => setActiveContent('academic')}
            className={`w-8 h-8 rounded-full transition duration-300 ${
              activeContent === 'academic' ? 'bg-green-700' : 'bg-green-500 hover:bg-green-700'
            }`}
            title="Academic Competencies"
          ></button>
        </div>
      
        {/* Content Display */}
        <div className="z-20 flex flex-col justify-center items-center text-white h-full w-full px-4 sm:px-8">
          {/* For Small Screens: Toggle Content */}
          <div className="sm:hidden">
            {activeContent === 'professional' && (
              <div className="w-full text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Professional Experience</h3>
                <img src="/assets/engineer.png" alt="Engineer" className="w-28 h-28 mx-auto mb-4 object-contain" />
                <h4 className="text-lg font-semibold mt-2">{professionalAchievements[currentProfessionalIndex].title}</h4>
                <p className="text-gray-300">{professionalAchievements[currentProfessionalIndex].year}</p>
                <p className="text-gray-200 mt-2">{professionalAchievements[currentProfessionalIndex].description}</p>
              </div>
            )}
      
            {activeContent === 'academic' && (
              <div className="w-full text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Academic Competencies</h3>
                <img
                  src={academicQualifications[currentAcademicIndex].image}
                  alt="Academic Qualification"
                  className="w-20 h-20 mx-auto mb-2 object-contain"
                />
                <h4 className="text-md font-semibold mt-2">{academicQualifications[currentAcademicIndex].title}</h4>
                <p className="text-sm text-gray-300">{academicQualifications[currentAcademicIndex].institution}</p>
                <p className="text-sm text-gray-300">{academicQualifications[currentAcademicIndex].achievement}</p>
                <p className="text-sm text-gray-300">{academicQualifications[currentAcademicIndex].year}</p>
              </div>
            )}
          </div>
      
          {/* For Large Screens: Show Both Contents */}
          <div className="hidden sm:flex sm:space-x-8">
            {/* Professional Experience */}
            <div className="w-1/2 text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Professional Experience</h3>
              <img src="/assets/engineer.png" alt="Engineer" className="w-28 h-28 mx-auto mb-4 object-contain" />
              <h4 className="text-lg font-semibold mt-2">{professionalAchievements[currentProfessionalIndex].title}</h4>
              <p className="text-gray-300">{professionalAchievements[currentProfessionalIndex].year}</p>
              <p className="text-gray-200 mt-2">{professionalAchievements[currentProfessionalIndex].description}</p>
            </div>
      
            {/* Academic Competencies */}
            <div className="w-1/2 text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Academic Competencies</h3>
              <img
                src={academicQualifications[currentAcademicIndex].image}
                alt="Academic Qualification"
                className="w-20 h-20 mx-auto mb-2 object-contain"
              />
              <h4 className="text-md font-semibold mt-2">{academicQualifications[currentAcademicIndex].title}</h4>
              <p className="text-sm text-gray-300">{academicQualifications[currentAcademicIndex].institution}</p>
              <p className="text-sm text-gray-300">{academicQualifications[currentAcademicIndex].achievement}</p>
              <p className="text-sm text-gray-300">{academicQualifications[currentAcademicIndex].year}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className="h-screen w-full bg-cover bg-center flex flex-col justify-center relative"
        style={{ backgroundImage: "url('/assets/img3.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>

        {/* Content */}
        <div className="z-20 p-4 sm:p-6 rounded-lg shadow-lg max-w-7xl text-white h-[90%] flex flex-col gap-8">
          <h1 className="text-center text-4xl font-bold">Projects</h1>
          {/* Add your content here */}
        </div>
      </div>

      <div
        id="certifications"
        className="h-screen w-full bg-cover bg-center flex flex-col justify-center relative"
        style={{ backgroundImage: "url('/assets/img3.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>

        {/* Content */}
        <div className="z-20 p-4 sm:p-6 rounded-lg shadow-lg max-w-7xl text-white h-[90%] flex flex-col gap-8">
          <h1 className="text-center text-4xl font-bold">Certifications</h1>
          {/* Add your content here */}
        </div>
      </div>

      <div
        id="connect"
        className="h-screen w-full bg-cover bg-center flex flex-col justify-center relative"
        style={{ backgroundImage: "url('/assets/img3.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>

        {/* Content */}
        <div className="z-20 p-4 sm:p-6 rounded-lg shadow-lg max-w-7xl text-white h-[90%] flex flex-col gap-8">
          <h1 className="text-center text-4xl font-bold">Connect</h1>
          {/* Add your content here */}
        </div>
      </div>

      <div
        id="blogs"
        className="h-screen w-full bg-cover bg-center flex flex-col justify-center relative"
        style={{ backgroundImage: "url('/assets/img3.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>

        {/* Content */}
        <div className="z-20 p-4 sm:p-6 rounded-lg shadow-lg max-w-7xl text-white h-[90%] flex flex-col gap-8">
          <h1 className="text-center text-4xl font-bold">Blogs</h1>
          {/* Add your content here */}
        </div>
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

      <div id="certifications" className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/assets/img3.jpg')" }}>
        Certifications
      </div>

      <div id="connect" className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/assets/img3.jpg')" }}>
        <div className="flex space-x-1">
          <a href="https://wa.me/+254729634366?text=Hello,%20Frandel." target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={handleMenuClick}>
            Chat
          </a>
          <a className="h-7 w-7 bg-cover rounded-full" style={{ backgroundImage: "url('/assets/github.png')" }} href="https://github.com/franfreezy"></a>
          <a className="h-7 w-7 bg-cover rounded-full" style={{ backgroundImage: "url('/assets/linkedin.png')" }} href="https://www.linkedin.com/in/frandel-wanjawa/"></a>
          <a className="h-7 w-7 bg-cover rounded-full" style={{ backgroundImage: "url('/assets/twitter.png')" }} href="https://twitter.com/codewithfreezy"></a>
        </div>
      </div>

      <div id="blogs" className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/assets/img3.jpg')" }}>
        Blogs
      </div>


    </>
  );
}
