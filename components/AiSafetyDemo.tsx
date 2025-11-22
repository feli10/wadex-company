import React, { useState } from 'react';
import { checkChemicalCompatibility } from '../services/geminiService';
import { MessageSquare, FlaskConical, ShieldCheck, AlertTriangle, Loader2 } from 'lucide-react';
import WasteLevelViz from './WasteLevelViz';

const AiSafetyDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [wasteLevel, setWasteLevel] = useState(65);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    
    // Simulate slight delay for realism + API call
    const result = await checkChemicalCompatibility(input);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left: Description */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm font-medium border border-teal-500/30">
              <ShieldCheck size={16} />
              <span>Live Compatibility Engine</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              AI-Powered <span className="text-teal-400">Compatibility Checks</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our cloud system utilizes rule-based algorithms enhanced by AI to detect potential hazards before they happen. 
              Simulate a waste addition below to see how our system advises lab technicians in real-time.
            </p>
          </div>

          {/* Right: Interactive Demo */}
          <div className="lg:w-1/2 w-full bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Dashboard Side */}
            <div className="w-full md:w-1/3 bg-slate-100 p-6 flex flex-col items-center border-r border-slate-200">
              <h3 className="font-semibold text-slate-700 mb-4">Bucket #A-104</h3>
              <WasteLevelViz level={wasteLevel} color="#0d9488" />
              <div className="mt-6 w-full space-y-3">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>VOC</span>
                  <span className="text-green-600 font-mono">SAFE</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Temp</span>
                  <span className="font-mono">22°C</span>
                </div>
                 <div className="flex justify-between text-xs text-slate-500">
                  <span>Last Scan</span>
                  <span className="font-mono">10m ago</span>
                </div>
              </div>
              
              {/* Interactive slider for fun */}
              <div className="mt-6 w-full">
                <label className="text-xs text-slate-500 mb-1 block">Simulate Fill Level</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={wasteLevel} 
                  onChange={(e) => setWasteLevel(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-teal-600"
                />
              </div>
            </div>

            {/* Chat Side */}
            <div className="w-full md:w-2/3 p-6 flex flex-col">
               <div className="mb-4">
                 <h3 className="font-bold text-lg flex items-center gap-2">
                   <FlaskConical className="text-teal-600" size={20} />
                   New Waste Entry
                 </h3>
                 <p className="text-sm text-slate-500">Type a chemical mix to check compatibility (e.g., "Adding Acetone to Bleach").</p>
               </div>

               <div className="flex-grow bg-slate-50 rounded-lg border border-slate-200 p-4 mb-4 min-h-[200px] overflow-y-auto">
                  {response ? (
                    <div className="flex items-start gap-3">
                       <div className="bg-teal-100 p-2 rounded-full">
                         <ShieldCheck size={18} className="text-teal-700" />
                       </div>
                       <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 text-sm leading-relaxed">
                         {response}
                       </div>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 text-sm text-center p-4">
                      <MessageSquare size={32} className="mb-2 opacity-20" />
                      <p>System Ready. Waiting for chemical ID scan or manual input...</p>
                    </div>
                  )}
               </div>

               <form onSubmit={handleCheck} className="relative">
                 <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., Can I mix nitric acid with ethanol?"
                    className="w-full pl-4 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                 />
                 <button 
                  type="submit" 
                  disabled={loading}
                  className="absolute right-2 top-2 p-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50 transition-colors"
                 >
                   {loading ? <Loader2 className="animate-spin" size={20} /> : <ShieldCheck size={20} />}
                 </button>
               </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSafetyDemo;