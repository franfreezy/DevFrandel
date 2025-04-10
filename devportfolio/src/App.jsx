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
  const projects = [
    {
      title: "Project Humanity",
      description: "Data analysis on UN datasets for humanitarian insights",
      image: "/assets/undata.png",
      link: "https://github.com/franfreezy/dataScience",
      technologies: ["Python", "Pandas", "Data Analysis"]
    },
    {
      title: "AgriX Cubesat",
      description: "JKUAT Satellite project for agricultural monitoring",
      image: "/assets/agrisat.png",
      link: "https://agroxsatsite.onrender.com",
      technologies: ["Hardware", "Space Tech", "IoT"]
    },
    {
      title: "Tafiti Cubesat",
      description: "TAFITI satellite project for space research",
      image: "/assets/tafiti.jpeg",
      link: "https://www.linkedin.com/company/tafiti-cubesat/",
      technologies: ["Space Tech", "Engineering", "Research"]
    },
    {
      title: "Smart Baby Crib",
      description: "IoT-enabled baby crib with monitoring sensors",
      image: "/assets/babycrib.jpeg",
      link: "https://github.com/franfreezy",
      technologies: ["IoT", "Arduino", "Sensors"]
    },
    {
      title: "Home Automation",
      description: "Web-controlled home automation system",
      image: "/assets/homeauto.jpeg",
      link: "https://github.com/franfreezy",
      technologies: ["IoT", "Web Control", "Automation"]
    },
    {
      title: "Robotics Project",
      description: "Autonomous robot with obstacle avoidance",
      image: "/assets/robot.jpeg",
      link: "https://github.com/franfreezy",
      technologies: ["Robotics", "Arduino", "Sensors"]
    },
    {
      title: "Aviator Bot",
      description: "Data mining bot for aviator platform",
      image: "/assets/aviator.jpeg",
      link: "https://github.com/franfreezy/AviatorBot",
      technologies: ["Python", "Data Mining", "Automation"]
    },
    {
      title: "Data Platform",
      description: "Full-stack financial data platform",
      image: "/assets/reactdjango.png",
      link: "https://github.com/franfreezy/FinancialAndMacroeconomicPlatform",
      technologies: ["React", "Django", "Full Stack"]
    },
    {
      title: "DSA Projects",
      description: "Data structures and algorithms implementations",
      image: "/assets/dsa.png",
      link: "https://github.com/franfreezy/DSA2.0",
      technologies: ["DSA", "Python", "Algorithms"]
    }
  ];
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    window.location.href = `https://wa.me/+254729634366?text=${message}`;
    setFormData({ name: '', email: '', message: '' });
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
        className="min-h-screen w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/img3.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>



        {/* Toggle Buttons for Mobile */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50 flex space-x-8 sm:hidden">
          <button
            onClick={() => setActiveContent('professional')}
            className={`flex flex-col items-center transition duration-300`}
          >
            <div className={`w-10 h-10 rounded-full ${activeContent === 'professional' ? 'bg-blue-700' : 'bg-blue-500'
              } mb-2`}></div>
            <span className={`text-sm text-white ${activeContent === 'professional' ? 'font-bold' : ''
              }`}>Professional</span>
          </button>
          <button
            onClick={() => setActiveContent('academic')}
            className={`flex flex-col items-center transition duration-300`}
          >
            <div className={`w-10 h-10 rounded-full ${activeContent === 'academic' ? 'bg-green-700' : 'bg-green-500'
              } mb-2`}></div>
            <span className={`text-sm text-white ${activeContent === 'academic' ? 'font-bold' : ''
              }`}>Academic</span>
          </button>
        </div>

        {/* Content Container */}
        <div className="relative z-20 pt-32 sm:pt-0 sm:flex">
          {/* Professional Experience */}
          <div className={`w-full sm:w-1/2 p-4 transition-all duration-300 ${activeContent === 'professional' ? 'block' : 'hidden sm:block'
            }`}>
            <div className="bg-black bg-opacity-50 rounded-lg p-4 h-[calc(100vh-150px)] overflow-y-auto">
              <h2 className="text-2xl font-bold text-white mb-4 sticky top-0 bg-black bg-opacity-50 p-2">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {professionalAchievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 bg-opacity-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-102 hover:bg-opacity-70"
                  >
                    <h3 className="text-lg font-semibold text-blue-400">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{achievement.year}</p>
                    <p className="text-white text-sm mt-2">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Qualifications */}
          <div className={`w-full sm:w-1/2 p-4 transition-all duration-300 ${activeContent === 'academic' ? 'block' : 'hidden sm:block'
            }`}>
            <div className="bg-black bg-opacity-50 rounded-lg p-4 h-[calc(100vh-150px)] overflow-y-auto">
              <h2 className="text-2xl font-bold text-white mb-4 sticky top-0 bg-black bg-opacity-50 p-2">
                Academic Qualifications
              </h2>
              <div className="space-y-4">
                {academicQualifications.map((qualification, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 bg-opacity-50 p-4 rounded-lg flex gap-4 transform transition-all duration-300 hover:scale-102 hover:bg-opacity-70"
                  >
                    <img
                      src={qualification.image}
                      alt={qualification.title}
                      className="w-12 h-12 object-cover rounded-full"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-green-400">{qualification.title}</h3>
                      <p className="text-white text-sm">{qualification.institution}</p>
                      <p className="text-gray-400 text-sm">{qualification.achievement}</p>
                      <p className="text-gray-400 text-sm">{qualification.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className="min-h-screen w-full bg-cover bg-center relative py-16"
        style={{ backgroundImage: "url('/assets/img3.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>

        {/* Section Title */}
        <div className="relative z-20 text-center mb-12">
          
          <p className="text-gray-300 max-w-2xl mx-auto px-4">
            Exploring innovation through technology and engineering
          </p>
        </div>

        {/* Projects Container with Scroll */}
        <div className="relative z-20 px-4 sm:px-8">
          <div className="bg-black bg-opacity-50 rounded-lg p-4 h-[calc(100vh-200px)] overflow-y-auto">
            {/* Mobile View */}
            <div className="block sm:hidden">
              <div className="block sm:hidden w-full px-4 relative z-20">
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-102"
                    >
                      <div className="relative h-48">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs px-2 py-1 bg-blue-600 bg-opacity-50 text-blue-200 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                          View Project
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90rem] mx-auto">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 bg-opacity-80 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-blue-600 bg-opacity-50 text-blue-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-20 text-center mt-4 text-gray-400">
          <p className="text-sm">Scroll to explore more projects</p>
          <div className="animate-bounce mt-2">↓</div>
        </div>
      </div>

      <div
        id="certifications"
        className="min-h-screen w-full bg-cover bg-center flex flex-col justify-center relative py-8"
        style={{ backgroundImage: "url('/assets/img3.jpg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Certifications</h1>
          <div className="flex-1 bg-black bg-opacity-50 rounded-lg p-6 backdrop-blur-sm overflow-y-auto">
            {/* Add your certifications content here */}
          </div>
        </div>
      </div>

      <div
        id="connect"
        className="min-h-screen w-full bg-cover bg-center flex flex-col justify-center relative py-8"
        style={{ backgroundImage: "url('/assets/img3.jpg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Let's Connect</h2>
          
          <div className="flex-1 max-w-6xl mx-auto w-full bg-black bg-opacity-50 rounded-lg p-6 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 h-full">
              {/* Contact Form */}
              <div className="space-y-6 z-50">
                <h3 className="text-2xl font-semibold text-white mb-4">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows="8"
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Social Links and Info */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Connect with me</h3>
                <div className="space-y-6">
                  <a
                    href="https://github.com/franfreezy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white hover:text-blue-400 transition duration-300"
                  >
                    <img src="/assets/github.png" alt="GitHub" className="h-8 w-8 rounded-full" />
                    <span>Follow on GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/frandel-wanjawa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white hover:text-blue-400 transition duration-300"
                  >
                    <img src="/assets/linkedin.png" alt="LinkedIn" className="h-8 w-8 rounded-full" />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com/codewithfreezy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white hover:text-blue-400 transition duration-300"
                  >
                    <img src="/assets/twitter.png" alt="Twitter" className="h-8 w-8 rounded-full" />
                    <span>Follow on Twitter</span>
                  </a>
                </div>

                <div className="mt-12 text-gray-300 space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="text-xl">📧</span>
                    <span>frandelwanjawa19@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-xl">📱</span>
                    <span>+254 729 634 366</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
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




      


    </>
  );
}
