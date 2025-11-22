import React, { useState } from 'react';
import { 
  Hexagon, 
  Database, 
  ScanLine, 
  Activity, 
  ArrowRight, 
  Users, 
  Building2, 
  Microscope, 
  FileCheck,
  Menu,
  X,
  Github,
  Linkedin,
  ShieldCheck,
  Atom,
  School
} from 'lucide-react';
import ImpactCharts from './components/ImpactCharts';
import AiSafetyDemo from './components/AiSafetyDemo';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-teal-600 p-1.5 rounded-lg">
               <Hexagon className="text-white" size={24} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-extrabold text-slate-800 tracking-tight">WADEx</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#problem" className="hover:text-teal-600 transition-colors">The Problem</a>
            <a href="#solution" className="hover:text-teal-600 transition-colors">Solution</a>
            <a href="#demo" className="hover:text-teal-600 transition-colors">Live Demo</a>
            <a href="#team" className="hover:text-teal-600 transition-colors">Team</a>
            <a href="#contact" className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">
              Take Survey
            </a>
          </nav>

          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-lg absolute w-full">
            <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">The Problem</a>
            <a href="#solution" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">Solution</a>
            <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">Live Demo</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">Team</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-teal-600 font-bold">Take Survey</a>
          </div>
        )}
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <div className="max-w-4xl z-10">
              <div className="inline-block px-3 py-1 mb-4 bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider rounded-full">
                Reimagining Lab Safety
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                The Intelligent <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Waste Ecosystem
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
                We connect IoT hardware with cloud compliance to eliminate the "information black box" in chemical waste. 
                Prevent explosions, streamline EPA audits, and automate records—all from a standard 20L bucket.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold text-center hover:bg-teal-700 transition-all shadow-lg shadow-teal-200 flex items-center justify-center gap-2">
                  Join the Pilot Program <ArrowRight size={18} />
                </a>
                <a href="#solution" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold text-center hover:bg-slate-50 transition-all">
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The "Black Box" Problem</h2>
              <p className="text-slate-600 text-lg">
                Laboratories face critical risks due to opaque records and manual processes. 
                From EPA fines reaching $37,500 per day to dangerous chemical reactions, the status quo is unsustainable.
              </p>
            </div>
            
            <ImpactCharts />

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { 
                  title: "Safety Risks", 
                  desc: "Incompatible mixtures can cause reactions or explosions. Difficult compatibility judgments are often left to guesswork.",
                  icon: <Activity className="text-red-500" size={32} />
                },
                { 
                  title: "Compliance Burdens", 
                  desc: "Strict EPA, RCRA, and GB standards make audits error-prone. Manual logs are often illegible or incomplete.",
                  icon: <FileCheck className="text-orange-500" size={32} />
                },
                { 
                  title: "Operational Delays", 
                  desc: "Time-consuming manual inspections and opaque content records slow down disposal and research workflows.",
                  icon: <Database className="text-blue-500" size={32} />
                }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Modular. <br/>Smart. <br/><span className="text-teal-400">Compliance-Ready.</span></h2>
                <p className="text-slate-400 text-lg mb-6">
                  We don't overhaul your workflow; we upgrade your bucket. Our system adapts to standard 20L containers, bringing digital intelligence to physical waste.
                </p>
                <ul className="space-y-4">
                  {[
                    "Retrofittable Smart Lid",
                    "Barcode & Chemical ID Scanning",
                    "Real-time VOC & Temp Monitoring",
                    "Automated Cloud Logging",
                    "OLED On-site Feedback"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-4 text-teal-400">
                    <ScanLine size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Hardware Layer</h4>
                  <p className="text-slate-400 text-sm">
                    A robust lid and weighing base integrated with sensors. It identifies chemicals via barcode, detects gas leaks (VOC), and monitors temperature stability.
                  </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                    <Database size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Cloud Platform</h4>
                  <p className="text-slate-400 text-sm">
                    Data transmits instantly for compatibility checks using rule-based algorithms (e.g., oxidizers vs reducers) and generates audit-ready logs.
                  </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                    <Activity size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">AI Integration</h4>
                  <p className="text-slate-400 text-sm">
                    Machine Learning models detect anomalies in waste accumulation and predict potential reactions before they become critical incidents.
                  </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mb-4 text-green-400">
                    <Users size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">User Focus</h4>
                  <p className="text-slate-400 text-sm">
                    Designed for School Lab Managers, TAs, and Small Research Groups. Streamlines manual checks and enhances audit readiness without heavy infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Demo Section */}
        <AiSafetyDemo />

        {/* Target Audience */}
        <section className="py-24 bg-slate-50">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold text-slate-900 mb-12">Built For Agile Lab Environments</h2>
             <div className="flex flex-wrap justify-center gap-6">
               {[
                 { label: "University Teaching Labs", icon: <School size={20} /> },
                 { label: "Academic Research", icon: <Microscope size={20} /> },
                 { label: "Small Private Labs", icon: <Atom size={20} /> },
                 { label: "School Safety Officers", icon: <ShieldCheck size={20} /> },
               ].map((audience, i) => (
                 <div key={i} className="flex items-center gap-3 px-6 py-4 bg-white rounded-full shadow-sm border border-slate-200 text-slate-700 font-medium">
                    {audience.icon}
                    {audience.label}
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Who We Are</h2>
              <p className="text-slate-600">
                We are a team of six NYU students, ranging from freshmen to graduates, united by a passion for hardware integration and global ESG impact.
              </p>
            </div>
            <div className="bg-gradient-to-r from-slate-50 to-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="flex -space-x-4">
                {[1,2,3,4,5,6].map((n) => (
                  <div key={n} className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">
                    NYU
                  </div>
                ))}
              </div>
              <div className="flex-1">
                <p className="text-slate-700 italic mb-4">
                  "Our mission is to create digitized tools that solve 'information black box' issues in chemical waste management, ensuring compliance with frameworks like EPA, RCRA, and Chinese GB standards."
                </p>
                <div className="flex gap-4 text-sm font-bold text-slate-900">
                  <span>🇺🇸 US Market</span>
                  <span>🇨🇳 China Market</span>
                  <span>🌍 Developing Regions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="py-24 bg-teal-900 text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Help Us Shape the Future of Safety</h2>
            <p className="text-teal-100 mb-8 text-lg">
              We are currently in the early prototype phase and seeking input from domain experts like you. 
              Your feedback will directly influence our sensor priorities and interface design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-teal-900 rounded-lg font-bold hover:bg-teal-50 transition-colors">
                Take 2-Min Survey
              </button>
              <button className="px-8 py-4 bg-transparent border border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
                Schedule Interview
              </button>
            </div>
            <p className="mt-8 text-sm text-teal-300">
              Help us build a practical tool that meets real needs, potentially saving time on audits and reducing incident risks.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Hexagon size={20} strokeWidth={2.5} />
            <span className="font-bold text-white">WADEx</span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} NYU Capstone Project Group. All rights reserved.
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Github className="hover:text-white cursor-pointer" size={20} />
            <Linkedin className="hover:text-white cursor-pointer" size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;