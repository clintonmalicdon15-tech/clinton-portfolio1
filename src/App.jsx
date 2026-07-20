import React, { useState, useEffect } from 'react';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);
  const [activeTab, setActiveTab] = useState('personal');
  
  // Real-time clock and event status logic
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // The event ends on July 26, 2026 at 23:59:59 (11:59 PM)
  const eventEndDate = new Date('2026-07-26T23:59:59');
  const isEventFinished = currentTime > eventEndDate;

  // Format the real-time clock
  const formattedDate = currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  const formattedTime = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Photography', href: '#photography' },
    { name: 'Projects', href: '#projects' },
  ];

  const personalPhotos = [
    {
      type: 'photo',
      src: "/clinton-portfolio1/coming-soon.jpg",
      quote: "SUPERNATURAL - NJ",
      inFrame: "Chrislynne Salas",
      photoBy: "****",
      camera: "N/A",
      event: "PROJECT Baron",
      facebookLink: "",
      isLocked: true 
    },
    {
      type: 'photo',
      src: "/clinton-portfolio1/photo2.jpg",
      quote: "LATINA - Al James",
      inFrame: "Mavi Jamen & Jomer Vincent Salamat",
      photoBy: "Clinton Malicdon",
      camera: "Fujifilm X-A3 | ISO 320 | F/5.3",
      event: "Photoshoot for CAF 2024",
      facebookLink: "https://www.facebook.com/share/p/1FiTqA7axd/"
    },
    {
      type: 'photo',
      src: "/clinton-portfolio1/photo1.jpg",
      quote: "An Art Gallery Could Never Be As Unique As You - mrld",
      inFrame: "Xenalyn Belencio",
      photoBy: "Clinton Malicdon",
      camera: "Nikon | Kitlens 18-55mm",
      event: "CULTURE AND THE ARTS FESTIVAL",
      facebookLink: "https://www.facebook.com/share/p/1CVTMTmjR9/"
    },
    {
      type: 'photo',
      src: "/clinton-portfolio1/photo3.jpg", 
      quote: "Hey Barbara - IV OF SPADES",
      inFrame: "Chrislynne Salas",
      photoBy: "Clinton Malicdon",
      camera: "Nikon | Sigma 70-300mm | ISO 800 | F/5.6",
      event: "PROJECT Zoldyck",
      facebookLink: "https://www.facebook.com/share/p/1CY1ZkZMTZ/"
    }, 
    {
      type: 'photo',
      src: "/clinton-portfolio1/photo4.jpg", 
      quote: "In My Prison - IV OF SPADES",
      inFrame: "N/A",
      photoBy: "Clinton Malicdon",
      camera: "Nikon | Nikkor 50mm | ISO 400 | F/2.8",
      event: "Battle of the Bands @CvSU - Imus Campus | Part I",
      facebookLink: "https://www.facebook.com/share/p/1J7dS2xm8u/"
    }, 
    {
      type: 'photo',
      src: "/clinton-portfolio1/photo6.jpg", 
      quote: "10. Scenery",
      inFrame: "Nicole Caratihan",
      photoBy: "Clinton Malicdon",
      camera: "Nikon | Tamron 70-300mm & Prime Lens 17-50mm | ISO 800 | 1/100s | F/5.6",
      event: "Local Culture and Arts Festival | Central Student Government - Imus Campus",
      facebookLink: "https://www.facebook.com/share/p/18ws5vweMV/"
    },
    {
      type: 'photo',
      src: "/clinton-portfolio1/photo5.jpg", 
      quote: "Monster - IV OF SPADES",
      inFrame: "N/A",
      photoBy: "Clinton Malicdon",
      camera: "Tecno Pova 7",
      event: "Battle of The Bands @Cavite State University - Imus Campus",
      facebookLink: "https://www.facebook.com/share/p/1BWCunuzoB/"
    },
    { isComingSoon: true },
    { isComingSoon: true }
  ];

  const clientPhotos = [
    {
      type: 'photo',
      src: "/clinton-portfolio1/client1.jpg",
      quote: "Love enduring through the ages.",
      inFrame: "Ramos Family",
      photoBy: "Clinton Malicdon",
      camera: "Nikon | Kitlens 18-55mm",
      event: "Wedding",
      facebookLink: ""
    },
    {
      type: 'photo',
      src: "/clinton-portfolio1/client2.jpg",
      quote: "Bringing fictional worlds into crystal clear reality.",
      inFrame: "Kyla Barnickel",
      photoBy: "Clinton Malicdon",
      camera: "Nikon | Kitlens 18-55mm",
      event: "Project COS",
      facebookLink: ""
    },
    {
      type: 'photo',
      src: "/clinton-portfolio1/client3.jpg",
      quote: "Visual journalism and deep storytelling within the community.",
      inFrame: "N/A",
      photoBy: "Clinton Malicdon",
      camera: "Nikon | Kitlens 18-55mm",
      event: "Photo Essay",
      facebookLink: ""
    },
    {
      type: 'photo',
      src: "/clinton-portfolio1/client4.jpg",
      quote: "Celebrating a milestone diamond jubilee of wonderful life.",
      inFrame: "Celebrant Family",
      photoBy: "Clinton Malicdon",
      camera: "Nikon | Kitlens 18-55mm",
      event: "60th Birthday Celebration",
      facebookLink: ""
    },
    {
      type: 'photo',
      src: "/clinton-portfolio1/client5.jpg",
      quote: "Stepping gracefully into adulthood and new chapters.",
      inFrame: "Debutante",
      photoBy: "Clinton Malicdon",
      camera: "Canon | 18-55mm",
      event: "18th Birthday Debut",
      facebookLink: ""
    },
    {
      type: 'photo',
      src: "/clinton-portfolio1/client6.JPG",
      quote: "Welcoming new light and spiritual beginnings.",
      inFrame: "Baby & Godparents",
      photoBy: "Clinton Malicdon",
      camera: "Fujifilm X-A3 | ISO 320 | F/5.3",
      event: "Binyag",
      facebookLink: ""
    },
    {
      type: 'photo',
      src: "/clinton-portfolio1/client7.jpg",
      quote: "Cherished milestones and family blessings.",
      inFrame: "Dominguez Family",
      photoBy: "Clinton Malicdon",
      camera: "Canon | 18-55mm",
      event: "Binyag (Part II)",
      facebookLink: ""
    },
    {
      type: 'photo',
      src: "/clinton-portfolio1/client8.png",
      quote: "High energy capture, frozen action, and intense athletic spirit.",
      inFrame: "Company Athletes",
      photoBy: "Clinton Malicdon",
      camera: "Canon | 18-55mm",
      event: "Sports Fest Tournament",
      facebookLink: ""
    },
    {
      type: 'photo',
      src: "/clinton-portfolio1/client9.jpg",
      quote: "A glamorous night full of youth, elegance, and memories.",
      inFrame: "Julieanne Sugordiano Sappari",
      photoBy: "Clinton Malicdon",
      camera: "Canon | 18-55mm",
      event: "18th Birthday",
      facebookLink: ""
    }
  ];

  const projectsData = [
    {
      type: 'project',
      src: "/clinton-portfolio1/capstone-project1.jpg",
      title: "Arduino Smart Lock Security System",
      description: "A comprehensive hardware and software security solution designed specifically for computer laboratories. It utilizes an Arduino microcontroller integrated with smart lock mechanisms to enhance access control, monitor entry logs, and ensure the safety of valuable laboratory equipment.",
      techStack: "Arduino | C++ | IoT | Hardware Diagnostics",
      docLink: "https://docs.google.com/document/d/1e6C-rx0NnnqEMk89tqtUgGU6kazNtPn5/edit?usp=sharing&ouid=109060579585891844869&rtpof=true&sd=true",
      isLocked: false 
    },
    {
      type: 'project',
      src: "/clinton-portfolio1/camerino-water.jpg",
      title: "Camerino Water Station Management System",
      description: "An administrative management system designed to streamline daily operations, track water deliveries, manage inventory, and securely maintain customer transaction records for a local water station.",
      techStack: "Java | MySQL | System Administration",
      docLink: "",
      isLocked: true
    }
  ];

  const currentGallery = activeTab === 'personal' ? personalPhotos : clientPhotos;

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 selection:bg-blue-600 selection:text-white antialiased">
      
      {/* Top Real-Time Status Bar - Centered and Mobile Responsive */}
      <div className="fixed top-0 left-0 w-full bg-[#0b1120] border-b border-slate-800 text-white z-50 px-2 sm:px-6 md:px-12 h-8 flex justify-center items-center text-[10px] sm:text-xs font-medium tracking-wide">
        <div className="flex items-center gap-2 md:gap-4 w-full justify-center">
          {!isEventFinished && (
            <div className="flex items-center gap-1.5 md:gap-2 truncate">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 font-bold uppercase tracking-wider hidden sm:inline">NEXT EVENT:</span>
              <span className="font-semibold text-slate-300 truncate max-w-[200px] sm:max-w-none">
                Philippine GameDev Expo "PGDX" July 24-26, 2026
              </span>
              <span className="text-slate-600 hidden md:inline ml-2">|</span>
            </div>
          )}
          
          {/* Clock: Short format on mobile, full format on desktop */}
          <div className="flex items-center gap-1.5 text-slate-400 font-mono flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span className="hidden md:inline">{formattedDate} - {formattedTime}</span>
            <span className="md:hidden">{formattedTime}</span>
          </div>
        </div>
      </div>

      {/* Sticky Modern Navbar (Fixed Height for exact mobile alignment) */}
      <nav className="fixed top-8 left-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-gray-100 shadow-sm h-[72px]">
        <div className="w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-black tracking-tighter text-gray-900 uppercase">
            CLINTON MALICDON<span className="text-blue-600">.</span>
          </h1>
          
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 lg:gap-8 text-xs font-bold uppercase tracking-wider text-gray-500">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-600 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact" 
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-emerald-500 hover:bg-emerald-600 rounded-full transition-all duration-300 shadow-[0_2px_10px_rgba(16,185,129,0.2)]"
            >
              Hire Me
            </a>
          </div>

          <button 
            className="md:hidden text-gray-900 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown - Flush precisely under the navbar (32px + 72px = 104px) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[104px] left-0 w-full bg-white shadow-xl z-30 flex flex-col px-6 py-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-blue-600 py-4 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center text-sm font-bold uppercase tracking-widest text-white bg-emerald-500 hover:bg-emerald-600 py-3 mt-4 rounded-xl transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="w-full pt-40 pb-16 md:pt-48 md:pb-28 px-6 md:px-12 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-7/12 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-900 mb-6 uppercase">
              IT Specialist <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">& Photographer.</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg text-center md:text-justify leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 font-medium">
              Hi, I'm Clinton B. Malicdon. A detail-oriented Information Technology graduate with hands-on experience in technical support, infrastructure maintenance, and visual storytelling.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#photography" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold tracking-wide uppercase hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all text-sm w-full sm:w-auto">
                View Portfolio
              </a>
              <a href="#about" className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-lg font-bold tracking-wide uppercase hover:border-gray-900 transition-all text-sm w-full sm:w-auto">
                About Me
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 flex justify-center items-center mt-8 md:mt-0">
            <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[4/5]">
              <div className="absolute inset-0 bg-blue-600 translate-x-4 translate-y-4 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img src="/clinton-portfolio1/profile.jpg" alt="Clinton B. Malicdon" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full py-20 md:py-24 bg-gray-50 border-y border-gray-100 px-6 md:px-12 scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-start">
          <div className="w-full md:w-1/3">
            <h3 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm text-center md:text-left">Introduction</h3>
            <h4 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase text-center md:text-left">About Me</h4>
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0">
            <p className="text-gray-600 text-justify md:text-left leading-relaxed text-base md:text-lg font-medium">
              Detail-oriented Information Technology graduate with hands-on experience in technical support, infrastructure maintenance, and system administration. Proven track record of ensuring operational continuity by proactively troubleshooting hardware, software, and networking issues. Adept at managing local office systems and coordinating technical logistics for community programs and administrative operations.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="w-full py-20 md:py-24 px-6 md:px-12 bg-white scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">Professional Journey</h3>
            <h4 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">Work Experience</h4>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3 sm:gap-4">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900">Technical Support</h4>
                  <p className="text-blue-600 font-semibold text-sm">Barangay Molino 1 Office</p>
                </div>
                <span className="inline-block bg-white text-gray-600 border border-gray-200 px-4 py-2 rounded-full text-xs font-bold tracking-wider w-max">July 2024 - July 2026</span>
              </div>
              <ul className="space-y-3 text-gray-600 text-justify text-sm leading-relaxed font-medium">
                <li>• Maintained critical IT infrastructure, including 15+ computer systems, printers, and network equipment, to ensure seamless day-to-day operations, achieving a 99% system uptime rate.</li>
                <li>• Resolved technical hardware and software issues through proactive monitoring and rapid diagnostics, resulting in a 25% reduction in weekly office workflow disruptions and downtime.</li>
                <li>• Coordinated creative and technical logistics, including photography and media support, to capture and archive critical data for 10+ major community assemblies and programs.</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3 sm:gap-4">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900">Sales Technician</h4>
                  <p className="text-blue-600 font-semibold text-sm">Kaansky & Z-BEN CCTV Trading</p>
                </div>
                <span className="inline-block bg-white text-gray-600 border border-gray-200 px-4 py-2 rounded-full text-xs font-bold tracking-wider w-max">Jan 2022 - Sept 2022</span>
              </div>
              <ul className="space-y-3 text-gray-600 text-justify text-sm leading-relaxed font-medium">
                <li>• Translated complex technical specifications into clear user benefits during computer hardware and CCTV product sales, to improve customer satisfaction ratings by 15% and drive monthly revenue.</li>
                <li>• Managed inventory tracking and product monitoring protocols for over 200+ SKU items, to ensure optimal stock levels and eliminate inventory discrepancies.</li>
                <li>• Executed cashier duties and generated accurate daily sales reports, to streamline retail financial tracking and achieve 100% accuracy in balancing the end-of-day ledger.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Skills Grid */}
      <section id="education" className="w-full py-20 md:py-24 px-6 md:px-12 bg-[#0b1120] text-white scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="text-center sm:text-left">
              <h3 className="text-blue-400 font-bold uppercase tracking-widest mb-2 text-sm">Academics</h3>
              <h4 className="text-3xl md:text-4xl font-black tracking-tight mb-10 uppercase">Education</h4>
            </div>
            
            <div className="relative border-l-2 border-slate-700 ml-4 md:ml-8 space-y-10 md:space-y-12">
              <div className="relative pl-8 md:pl-12 w-full flex flex-col items-start sm:items-center text-left sm:text-center">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] border-2 border-[#0b1120]"></div>
                
                <h5 className="text-lg md:text-xl font-bold text-white tracking-wide">BS in Information Technology</h5>
                <p className="text-blue-400 font-medium text-xs md:text-sm mb-1">Cavite State University - Imus Campus</p>
                <p className="text-slate-400 text-xs font-bold mb-3">2021 - 2025</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-2 max-w-lg">
                  <span className="text-white font-bold">Capstone:</span> Arduino Smart Lock Security System for Computer Laboratory.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
                  <span className="text-white font-bold">Leadership:</span> Senior Head Photographer (BITS), Documentation Committee (CSG & BITS).
                </p>
              </div>
              
              <div className="relative pl-8 md:pl-12 w-full flex flex-col items-start sm:items-center text-left sm:text-center">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] border-2 border-[#0b1120]"></div>
                
                <h5 className="text-lg md:text-xl font-bold text-white tracking-wide">Senior High School - ICT</h5>
                <p className="text-blue-400 font-medium text-xs md:text-sm mb-1">Informatics College Cavite</p>
                <p className="text-slate-400 text-xs font-bold mb-3">2019 - 2021</p>
                <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
                  <span className="text-white font-bold">Coursework:</span> Programming Strand | Software Development Fundamentals.
                </p>
              </div>
            </div>
          </div>

          <div id="skills" className="flex flex-col gap-12 scroll-mt-24 md:scroll-mt-32">
            <div>
              <h3 className="text-blue-400 font-bold uppercase tracking-widest mb-2 text-sm text-center sm:text-left">Capabilities</h3>
              <h4 className="text-3xl md:text-4xl font-black tracking-tight mb-8 uppercase text-center sm:text-left">Core Skills</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#151c2c] p-5 md:p-6 rounded-xl border border-slate-700/50">
                  <h5 className="text-base font-bold mb-3 flex items-center justify-center sm:justify-start gap-2">
                    <svg className="text-blue-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    Technical
                  </h5>
                  <p className="text-slate-400 text-center sm:text-left text-xs leading-relaxed">
                    Java, MySQL, PHP, VB.NET, VS CODE, Hardware/Software Diagnostics, Basic Networking, Creative Media Editing, MS Office Suite.
                  </p>
                </div>
                <div className="bg-[#151c2c] p-5 md:p-6 rounded-xl border border-slate-700/50">
                  <h5 className="text-base font-bold mb-3 flex items-center justify-center sm:justify-start gap-2">
                    <svg className="text-blue-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>
                    Professional
                  </h5>
                  <p className="text-slate-400 text-center sm:text-left text-xs leading-relaxed">
                    Task Prioritization, Time Management, Administrative Support.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-black tracking-tight mb-6 uppercase text-center sm:text-left">Certificates & Training</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 bg-[#151c2c] p-4 rounded-xl border border-slate-700/50">
                   <div className="bg-blue-500/20 p-1.5 rounded text-blue-400 flex-shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                   </div>
                   <p className="text-slate-300 text-xs font-semibold">Introduction to IoT and Digital Transformation</p>
                </li>
                <li className="flex items-center gap-3 bg-[#151c2c] p-4 rounded-xl border border-slate-700/50">
                   <div className="bg-blue-500/20 p-1.5 rounded text-blue-400 flex-shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                   </div>
                   <p className="text-slate-300 text-xs font-semibold">Accelerating Knowledge in Bacoor through AI (AKBAI)</p>
                </li>
                <li className="flex items-center gap-3 bg-[#151c2c] p-4 rounded-xl border border-slate-700/50">
                   <div className="bg-blue-500/20 p-1.5 rounded text-blue-400 flex-shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                   </div>
                   <p className="text-slate-300 text-xs font-semibold">The iStrike Program (Integrated Service Tracking)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section id="photography" className="w-full py-20 md:py-24 bg-white px-6 md:px-12 scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto mb-10 md:mb-12 flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">Portfolio</h3>
            <h4 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">Photography</h4>
          </div>
          
          <div className="flex bg-slate-100 p-1.5 rounded-full shadow-inner border border-gray-200/50">
            <button 
              onClick={() => setActiveTab('personal')}
              className={`px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-wider uppercase transition-all duration-300 ${activeTab === 'personal' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Personal Work
            </button>
            <button 
              onClick={() => setActiveTab('client')}
              className={`px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-wider uppercase transition-all duration-300 ${activeTab === 'client' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Client Projects
            </button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {currentGallery.map((photoObj, index) => {
            if (photoObj.isComingSoon) {
              return (
                <div key={`soon-${index}`} className="aspect-square bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center p-4 text-center select-none">
                  <svg className="text-gray-300 mb-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Coming Soon</span>
                </div>
              );
            }
            return (
              <div key={index} className="aspect-square overflow-hidden cursor-pointer group bg-gray-100 rounded-xl relative shadow-sm border border-gray-100" onClick={() => setLightboxData(photoObj)}>
                <img 
                  src={photoObj.src} 
                  alt={`${activeTab} project slot ${index + 1}`} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${photoObj.isLocked ? 'blur-md scale-105' : ''}`} 
                />
                
                {photoObj.isLocked && (
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center z-10 transition-colors duration-500 group-hover:bg-black/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <span className="text-white font-bold uppercase tracking-widest text-xs mt-3">Coming Up</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-500 flex items-center justify-center z-20 pointer-events-none">
                  <svg className={`text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 transform ${photoObj.isLocked ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Development Projects Section */}
      <section id="projects" className="w-full py-20 md:py-24 bg-gray-50 border-t border-gray-100 px-6 md:px-12 scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">Development & Coding</h3>
            <h4 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">Projects</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {projectsData.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer group flex flex-col"
                onClick={() => setLightboxData(project)}
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.isLocked ? 'blur-md' : ''}`} 
                  />
                  
                  {project.isLocked && (
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center z-10 transition-colors duration-500 group-hover:bg-black/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      <span className="text-white font-bold uppercase tracking-widest text-xs mt-3">Coming Up</span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-500 z-20 pointer-events-none"></div>
                </div>
                
                <div className="p-5 md:p-8 flex-1 flex flex-col justify-between bg-white z-30">
                  <div>
                    <h5 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{project.title}</h5>
                    <p className="text-xs md:text-sm text-gray-500 line-clamp-3 mb-4 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-blue-600">
                    {project.techStack}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 md:py-24 bg-[#1e1b4b] text-white px-6 md:px-12 scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-2 md:mb-3">Contact Me</h3>
            <p className="text-indigo-200 text-base md:text-lg">Let's build something together</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#2a2656] p-6 md:p-10 rounded-3xl shadow-xl border border-white/5 flex flex-col gap-6 md:gap-8">
              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Let's talk about everything!</h4>
                <p className="text-indigo-200 text-sm leading-relaxed text-justify md:text-left">
                  Don't like forms? Send me an email directly or connect with me on social media. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <div className="bg-[#1e1b4b]/50 p-4 md:p-5 rounded-2xl border border-white/5">
                  <span className="block text-xs text-indigo-300 mb-1">Email</span>
                  <span className="font-semibold text-xs md:text-sm">clinton.malicdon0@gmail.com</span>
                </div>
                <div className="bg-[#1e1b4b]/50 p-4 md:p-5 rounded-2xl border border-white/5">
                  <span className="block text-xs text-indigo-300 mb-1">Phone</span>
                  <span className="font-semibold text-xs md:text-sm">+63 969 180 9485</span>
                </div>
                <div className="bg-[#1e1b4b]/50 p-4 md:p-5 rounded-2xl border border-white/5">
                  <span className="block text-xs text-indigo-300 mb-1">Location</span>
                  <span className="font-semibold text-xs md:text-sm">Cavite, Philippines</span>
                </div>
              </div>
              
              <div>
                <span className="block text-xs text-indigo-300 mb-3 md:mb-4">Follow me on social media:</span>
                <div className="flex flex-wrap gap-3">
                   <a 
                     href="https://www.facebook.com/clinton.malicdon.2024" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-full bg-[#1e1b4b]/80 flex items-center justify-center hover:bg-indigo-500 transition-colors border border-white/5"
                   >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                   </a>
                   <a 
                     href="https://www.instagram.com/pesho.arvie/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-full bg-[#1e1b4b]/80 flex items-center justify-center hover:bg-indigo-500 transition-colors border border-white/5"
                   >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                   </a>
                   <a 
                     href="https://www.linkedin.com/in/clinton-malicdon-000995313/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-full bg-[#1e1b4b]/80 flex items-center justify-center hover:bg-indigo-500 transition-colors border border-white/5"
                   >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                   </a>
                </div>
              </div>
            </div>
            
            <div className="bg-[#2a2656] p-6 md:p-10 rounded-3xl shadow-xl border border-white/5 flex flex-col justify-between">
              
              {/* Working Contact Form */}
              <form action="https://formsubmit.co/clinton.malicdon0@gmail.com" method="POST" className="space-y-4 md:space-y-6">
                
                <input type="hidden" name="_subject" value="New message from Portfolio!" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-indigo-200 mb-1.5 md:mb-2">Your Name</label>
                    <input type="text" name="name" required placeholder="Full name" className="w-full bg-[#1e1b4b]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-400 transition-colors placeholder:text-indigo-200/40" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-indigo-200 mb-1.5 md:mb-2">Your Email</label>
                    <input type="email" name="email" required placeholder="name@email.com" className="w-full bg-[#1e1b4b]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-400 transition-colors placeholder:text-indigo-200/40" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-indigo-200 mb-1.5 md:mb-2">Subject</label>
                  <input type="text" name="subject" placeholder="Project inquiry" className="w-full bg-[#1e1b4b]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-400 transition-colors placeholder:text-indigo-200/40" />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-indigo-200 mb-1.5 md:mb-2">Message</label>
                  <textarea name="message" required rows="5" placeholder="Write your message..." className="w-full bg-[#1e1b4b]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-400 transition-colors resize-none placeholder:text-indigo-200/40"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-bold py-3.5 md:py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg text-sm md:text-base">
                  Send Message
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC POPUP BOX LIGHTBOX FOR BOTH PHOTOS AND PROJECTS */}
      {lightboxData && (
        <div className="fixed inset-0 bg-gray-950/98 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8" onClick={() => setLightboxData(null)}>
          <div className="bg-[#0d1527] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12 max-w-5xl w-full max-h-[85vh] md:max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors z-50 shadow-md" onClick={() => setLightboxData(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            <div className="md:col-span-7 flex items-center justify-center relative min-h-[250px] sm:min-h-[350px] md:min-h-[500px] overflow-hidden bg-black/50">
              <img 
                src={lightboxData.src} 
                alt="Expanded display" 
                className={`w-full h-full object-cover ${lightboxData.isLocked ? 'blur-xl scale-110' : ''}`} 
              />
              
              {/* Overlay if the item is locked inside the lightbox */}
              {lightboxData.isLocked && (
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span className="text-white font-black uppercase tracking-widest text-base md:text-lg mt-3 md:mt-4">Coming Up</span>
                </div>
              )}
            </div>
            
            <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-center text-center bg-[#0d1527] border-t md:border-t-0 md:border-l border-slate-800 text-white overflow-y-auto max-h-[50vh] md:max-h-full">
              
              {/* Conditional Rendering: If it's a IT/Dev Project */}
              {lightboxData.type === 'project' && (
                <>
                  <h4 className="text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-wide text-white uppercase leading-snug">{lightboxData.title}</h4>
                  <div className="border-b border-slate-800/80 pb-5 md:pb-6 mb-5 md:mb-6">
                    <p className="text-xs md:text-sm font-medium text-slate-300 leading-relaxed text-justify mb-4">{lightboxData.description}</p>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-blue-500 font-bold block">Tech Stack</span>
                    <p className="text-xs font-mono text-slate-400 mt-1.5 md:mt-2">{lightboxData.techStack}</p>
                  </div>
                  
                  {lightboxData.docLink && !lightboxData.isLocked && (
                    <a 
                      href={lightboxData.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-[10px] md:text-xs tracking-wider uppercase px-4 py-3 md:py-3.5 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-600/20"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                      Read Project Document
                    </a>
                  )}
                </>
              )}

              {/* Conditional Rendering: If it's a Photo */}
              {lightboxData.type === 'photo' && (
                <>
                  <h4 className="text-base md:text-xl font-black mb-4 md:mb-6 tracking-wide text-blue-400 uppercase leading-snug">"{lightboxData.quote}"</h4>
                  <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm font-medium text-slate-300 border-b border-slate-800/80 pb-5 md:pb-6">
                    <p><span className="font-semibold text-white">In Frame:</span> {lightboxData.inFrame || "N/A"}</p>
                    <p><span className="font-semibold text-white">Photo:</span> {lightboxData.photoBy}</p>
                    <p className="text-[10px] md:text-xs text-slate-400 font-mono mt-2 md:mt-3">Camera: {lightboxData.camera}</p>
                  </div>
                  <div className="mt-5 md:mt-6">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-blue-500 font-bold block mb-1">Event/Project Name</span>
                    <h5 className="text-white font-bold text-sm md:text-base tracking-wide mb-5 md:mb-6">{lightboxData.event}</h5>
                    
                    {lightboxData.facebookLink && !lightboxData.isLocked && (
                      <a 
                        href={lightboxData.facebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-[10px] md:text-xs tracking-wider uppercase px-4 py-3 md:py-3.5 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-600/20"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        View Full Project
                      </a>
                    )}
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;