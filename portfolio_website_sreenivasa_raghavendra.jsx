import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  ShieldCheck, Zap, BarChart3, Layers, 
  ArrowUpRight, Code2, Globe, Cpu, 
  CheckCircle2, Terminal, Briefcase, GraduationCap 
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [hours, setHours] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let h = 0;
    let p = 0;
    const interval = setInterval(() => {
      if (h < 8) h += 0.5;
      if (p < 70) p += 2;
      setHours(Math.min(8, Math.round(h)));
      setPercent(Math.min(70, Math.round(p)));
      if (h >= 8 && p >= 70) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div className="bg-[#FDFDFD] text-[#0B3D2E] min-h-screen font-sans selection:bg-[#0B3D2E] selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
        <div className="flex justify-between items-center px-8 md:px-12 py-5 max-w-7xl mx-auto">
          <div className="group cursor-pointer">
            <h1 className="text-lg font-black tracking-tighter leading-none uppercase">
              Sreenivasa<br/><span className="text-gray-400 group-hover:text-[#0B3D2E] transition-colors">Raghavendra</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-12">
            {['Expertise', 'Experience', 'Philosophy'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-[0.2em] font-bold hover:opacity-50 transition cursor-pointer">
                {item}
              </a>
            ))}
            <Button className="bg-[#0B3D2E] text-white rounded-full px-8 py-5 text-xs uppercase tracking-widest font-bold hover:scale-105 transition-all shadow-xl shadow-[#0B3D2E]/10">
              Start Project
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section ref={ref} className="relative pt-48 pb-32 overflow-hidden px-8 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3D2E]/5 text-[#0B3D2E] text-[10px] font-black uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0B3D2E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0B3D2E]"></span>
              </span>
              Available for Global Projects
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-7xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
              Systems<br/>Architected<br/>for <span className="italic font-light text-gray-400">Scale.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-gray-500 max-w-md leading-relaxed mb-10">
              I transform operational chaos into automated precision. Senior Business Architect specializing in high-stakes Zoho ecosystems.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-8">
               <a href="https://www.linkedin.com/in/sreenivasa-raghavendra-4674b6231/" target="_blank" rel="noreferrer">
                  <Button className="bg-[#0B3D2E] text-white rounded-full px-10 py-7 text-sm font-bold hover:shadow-2xl transition-all">
                    LinkedIn Profile <ArrowUpRight className="ml-2" size={18}/>
                  </Button>
               </a>
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />)}
                  <div className="pl-6 flex flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-tighter">50+ Global Implementations</span>
                  </div>
               </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="show" className="relative group">
            <div className="absolute inset-0 bg-[#0B3D2E] rounded-[3rem] rotate-3 scale-105 opacity-5 group-hover:rotate-0 transition-transform duration-700" />
            <div className="relative overflow-hidden rounded-[3rem] shadow-2xl">
              <img
                  src="https://i.ibb.co/FbymxHq7/Sree.jpg"
                  alt="Sreenivasa Raghavendra"
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
            </div>
            
            {/* FLOATING METRICS */}
            <div className="absolute -left-12 bottom-20 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-gray-100 z-20">
                <div className="text-4xl font-black text-[#0B3D2E] tracking-tighter">{hours}+</div>
                <div className="text-[9px] text-gray-400 uppercase font-black tracking-widest">Hrs Saved Weekly</div>
            </div>
            <div className="absolute -right-8 top-20 bg-[#0B3D2E] p-6 rounded-3xl shadow-2xl z-20 text-white">
                <div className="text-4xl font-black tracking-tighter">{percent}%</div>
                <div className="text-[9px] opacity-60 uppercase font-black tracking-widest">Manual Reduction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE - GRID */}
      <section id="expertise" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400 mb-4">Service Capabilities</h2>
              <h3 className="text-5xl font-bold tracking-tighter">Strategic Architecture meets Technical Excellence.</h3>
            </div>
            <p className="text-gray-400 text-sm max-w-xs uppercase font-bold leading-loose tracking-widest">
              From UK startups to US enterprises — bridging the gap.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { icon: <Cpu />, title: "Zoho Ecosystem", desc: "Expert implementation across CRM, Books, Creator, and Inventory suites." },
              { icon: <Terminal />, title: "Deluge Engineering", desc: "Custom script logic that powers complex cross-app data flows." },
              { icon: <ShieldCheck />, title: "Secure Architecture", desc: "Red Team mindset ensuring your growth is resilient to vulnerabilities." },
              { icon: <BarChart3 />, title: "Process Mapping", desc: "Visualizing chaos into streamlined, predictable business workflows." },
              { icon: <Globe />, title: "Global Scale", desc: "Architecting systems that support multi-currency, multi-region operations." },
              { icon: <Layers />, title: "Tech Integration", desc: "Seamlessly connecting Zoho with your existing modern tech stack." }
            ].map((item, idx) => (
              <div key={idx} className="p-12 border border-gray-100 hover:bg-[#F8FAF9] transition-all group relative overflow-hidden">
                <div className="text-[#0B3D2E]/20 group-hover:text-[#0B3D2E] transition-colors mb-8 transform group-hover:scale-110 duration-500">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE - DARK MODE CONTRAST */}
      <section id="experience" className="py-32 bg-[#0B3D2E] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40 mb-6 text-white">The Career Path</h2>
              <h3 className="text-5xl font-bold tracking-tighter sticky top-32">Experience &<br/>Execution.</h3>
            </div>
            
            <div className="md:col-span-8 space-y-24">
              {[
                {
                  company: "Dotsquares",
                  role: "Senior Business Architect",
                  period: "Present",
                  desc: "Leading high-level digital transformation for global clients as a Zoho Premium Partner. Architecting solutions that drive 7-figure efficiencies."
                },
                {
                  company: "Zoho Corporation",
                  role: "Project Manager",
                  period: "2021 — 2024",
                  desc: "Spearheaded the Creator Jumpstart team. Delivered custom-built applications for complex business use cases across various industries."
                },
                {
                  company: "Zoho Schools of Learning",
                  role: "Cybersecurity (Red Team)",
                  period: "2019 — 2021",
                  desc: "Internal penetration testing and security auditing. Developed a 'security-first' approach to software architecture that I apply today."
                }
              ].map((job, i) => (
                <div key={i} className="group relative">
                  <div className="text-[80px] font-black absolute -left-16 -top-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">0{i+1}</div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-3xl font-bold tracking-tight">{job.role}</h4>
                      <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-1">{job.company}</p>
                    </div>
                    <span className="font-mono text-xs opacity-40">{job.period}</span>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                    {job.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & PHILOSOPHY */}
      <section id="philosophy" className="py-32 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-24">
          <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-gray-100">
            <GraduationCap className="mb-8 opacity-20" size={48}/>
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Academic Thesis</h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              Choosing the <span className="text-[#0B3D2E] font-bold">Zoho Schools of Learning</span> over traditional university allowed for an intense, practical mastery of enterprise IT systems from day one.
            </p>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <p className="text-xs font-bold text-blue-700 uppercase tracking-widest">Vision: PhD in Life Sciences & Molecular Biology</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-8 tracking-tighter">Philosophy</h3>
            <div className="space-y-6">
              {[
                "Architecture must be secure by design, not by patch.",
                "Automation should liberate humans, not just replace them.",
                "Simplicity is the ultimate sophistication in business logic."
              ].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-[#0B3D2E] shrink-0" />
                  <p className="font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-40 text-center px-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0B3D2E]/5 rounded-full blur-[120px] -z-10" />
        <h2 className="text-7xl md:text-9xl font-bold tracking-[ -0.05em] mb-12 italic">Let's build.</h2>
        <a href="https://www.linkedin.com/in/sreenivasa-raghavendra-4674b6231/" target="_blank" rel="noreferrer">
          <Button className="bg-[#0B3D2E] text-white px-16 py-10 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-2xl">
            Inquire for Consultation
          </Button>
        </a>
        <p className="mt-12 text-xs uppercase font-black tracking-[0.5em] text-gray-400">Jaipur • London • New York</p>
      </section>

      <footer className="py-10 border-t border-gray-100 px-8 text-center">
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-30">
          © 2026 Sreenivasa Raghavendra. Built for Performance.
        </p>
      </footer>
    </div>
  );
}