import { motion } from "motion/react";
import { Video, Globe2, Cuboid, ExternalLink } from "lucide-react";

export function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="bg-blue-50 border border-blue-100 p-6 md:p-8">
        <h2 className="text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2 text-slate-900">
          <span className="w-6 h-[3px] bg-blue-700 block shrink-0"></span> 
          Digital Assignments & Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Assignment 1 */}
          <div className="bg-white p-4 sm:p-6 border border-blue-200 shadow-sm flex flex-col group h-full">
            <p className="text-[10px] text-blue-600 font-black mb-1 italic uppercase underline decoration-2 flex justify-between items-center shrink-0">
              Case 01
              <Video className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
            </p>
            <h3 className="text-xl font-bold text-slate-900 mt-2 mb-4 shrink-0">4月20日作業</h3>
            <div className="flex-grow flex flex-col items-center justify-center bg-slate-50 border border-slate-100 p-2 relative overflow-hidden min-h-[220px]">
              <div className="w-full h-full min-h-[140px] bg-slate-900 flex items-center justify-center">
                <Video className="w-12 h-12 text-slate-700" />
              </div>
              <a 
                href="https://drive.google.com/file/d/1ZQrbBq1yFFkE4zlxtApSEwAhGgaTyaEt/view"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full block bg-white text-blue-900 border border-blue-200 text-center py-2 text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors shrink-0"
              >
                Watch Video <ExternalLink className="w-3 h-3 inline-block ml-1" />
              </a>
            </div>
          </div>

          {/* Assignment 2 */}
          <div className="bg-white p-4 sm:p-6 border border-blue-200 shadow-sm flex flex-col group h-full">
            <p className="text-[10px] text-blue-600 font-black mb-1 italic uppercase underline decoration-2 flex justify-between items-center shrink-0">
              Case 02
              <Globe2 className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
            </p>
            <h3 className="text-xl font-bold text-slate-900 mt-2 mb-4 shrink-0">AI 模擬旅遊</h3>
            <div className="flex-grow flex flex-col items-center justify-center bg-slate-50 border border-slate-100 p-2 relative overflow-hidden min-h-[220px]">
               <div className="w-full h-full min-h-[140px] bg-slate-100 flex items-center justify-center border border-slate-200 group overflow-hidden">
                 <Globe2 className="w-12 h-12 text-slate-300 transform group-hover:scale-110 transition-transform duration-500" />
               </div>
               <a 
                 href="https://drive.google.com/file/d/1PjtKajKYx3R4R7xgCM2VBcsJye32FEdN/view"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-3 w-full block bg-white text-blue-900 border border-blue-200 text-center py-2 text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors shrink-0"
               >
                 Watch Video <ExternalLink className="w-3 h-3 inline-block ml-1" />
               </a>
            </div>
          </div>

          {/* Assignment 3 */}
          <div className="bg-blue-700 text-white p-4 sm:p-6 shadow-md flex flex-col group relative overflow-hidden md:col-span-2 lg:col-span-1 border-2 border-blue-700 hover:bg-slate-900 transition-colors duration-500 h-full">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Cuboid className="w-32 h-32 transform rotate-12" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <p className="text-[10px] text-blue-200 font-black mb-1 italic uppercase underline decoration-2 flex justify-between items-center shrink-0">
                Interactive Case
                <Cuboid className="w-4 h-4 text-blue-300" />
              </p>
              <h3 className="text-xl font-bold mt-2 mb-4 shrink-0">個人公仔 3D Model</h3>
              
              <div className="flex-grow flex items-center justify-center border border-blue-500/50 bg-slate-900/50 p-1 mb-4 min-h-[220px]">
                 <iframe 
                   src="https://studio.tripo3d.ai/3d-model/f708357d-f836-40b8-a9af-d2c7d095e6f3?invite_code=VJPX94"
                   title="個人公仔 3D Model"
                   className="w-full h-full border-0 pointer-events-none"
                   tabIndex={-1}
                 ></iframe>
              </div>

              <a 
                href="https://studio.tripo3d.ai/3d-model/f708357d-f836-40b8-a9af-d2c7d095e6f3?invite_code=VJPX94"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block bg-white text-blue-900 text-center py-3 text-xs font-black uppercase tracking-widest hover:bg-blue-50 transition-colors"
              >
                Launch Model Viewer <ExternalLink className="w-3 h-3 inline-block ml-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
