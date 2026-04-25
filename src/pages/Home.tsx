import { motion } from "motion/react";
import { User, Globe, Award, MonitorPlay, FileText } from "lucide-react";
import { cn } from "../lib/utils";

export function Home() {
  const certifications = [
    "基本安全",
    "保全職責",
    "保全意識",
    "救生艇操縱",
    "進階滅火",
    "醫療急救",
    "管理級雷達ARPA",
    "操作級雷達ARPA",
    "通用級GMDSS訓練",
    "助理級航行當值",
  ];

  const computerSkills = [
    "Microsoft Office",
    "Word",
    "Excel",
    "PowerPoint",
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6"
    >
      <div className="md:col-span-4 flex flex-col gap-6">
        {/* Basic Info */}
        <div className="bg-white p-6 border-l-8 border-blue-700 shadow-sm relative">
          <User className="absolute top-4 right-4 w-12 h-12 text-slate-100" />
          <h2 className="text-xs font-black uppercase tracking-tighter mb-4 border-b border-slate-200 pb-2 flex items-center justify-between z-10 relative">
            Basic Information
          </h2>
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Zodiac</p>
              <p className="font-serif italic text-lg text-slate-800">雙子座</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Blood Type</p>
              <p className="font-serif italic text-lg text-slate-800">型 A</p>
            </div>
            <div className="col-span-2 mt-2">
              <p className="text-[10px] text-slate-400 uppercase font-bold flex items-center gap-1 mb-2">
                <Globe className="w-3 h-3 block" /> Languages
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 px-2 py-1 text-xs font-bold text-slate-700 border border-slate-200 leading-none">
                  英文 TOEIC 430
                </span>
                <span className="bg-slate-100 px-2 py-1 text-xs font-bold text-slate-700 border border-slate-200 leading-none">
                  台語尚可
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Computer Skills */}
        <div className="bg-slate-900 text-white p-6 flex-grow shadow-sm">
          <h2 className="text-xs font-black uppercase tracking-widest mb-4 text-blue-400 flex items-center gap-2">
            <MonitorPlay className="w-4 h-4" />
            Software Mastery
          </h2>
          <div className="space-y-4 flex flex-col h-full opacity-90">
            <div className="flex justify-between items-end border-b border-slate-800 pb-2">
              <span className="text-sm font-medium leading-none">電腦程式</span>
              <span className="text-[10px] opacity-70 text-right leading-none max-w-[140px]">{computerSkills.join(", ")}</span>
            </div>
            <div className="h-1 bg-slate-800 w-full shrink-0">
              <div className="h-full bg-blue-500 w-[95%]"></div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-mono mt-auto pt-4">
              [Proficient in document formatting, spreadsheet management, and presentation design.]
            </p>
          </div>
        </div>
      </div>

      <div className="md:col-span-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full flex-grow">
          {/* Autobiography */}
          <div className="bg-white p-6 shadow-sm flex flex-col border border-slate-200">
            <h2 className="text-xs font-black uppercase tracking-tighter mb-4 border-b border-slate-200 pb-2 flex items-center gap-2 text-slate-900">
              <FileText className="w-4 h-4" />
              Autobiography
            </h2>
            <div className="text-sm leading-relaxed text-slate-600 space-y-4 font-medium h-fit">
              <p>
                我是薛富淋，就讀於<strong className="text-slate-900 font-bold mix-blend-multiply bg-blue-100 px-1">國立高雄科技大學</strong>。家庭教育培養我獨立負責與謹慎的態度，在校期間我參與系學會擔任文書股長，從中讓我學到如何有效的完成文書作業，並對 Excel、Word、PowerPoint 等相關軟體熟悉。
              </p>
              <p>
                我也擔任班級的學務股長、副班代，負責班上的訂書及班費管理等作業，從中訓練我做事謹慎、條理分明、重視細節的習慣。
              </p>
              <div className="border-l-4 border-blue-700 pl-3 italic text-slate-700 bg-slate-50 p-3 mt-4">
                我認為自己是個樂觀進取、抗壓性強的人。航海這份職業吸引我的是薪資待遇和增加國際觀，我希望能將在校所學的專業知識與英文能力應用於此，並為公司帶來貢獻。
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white p-6 shadow-sm border border-slate-200 flex flex-col">
            <h2 className="text-xs font-black uppercase tracking-tighter mb-4 border-b border-slate-200 pb-2 flex items-center gap-2 text-slate-900 mt-2 md:mt-0">
              <Award className="w-4 h-4" />
              Professional Certificates
            </h2>
            <div className="grid grid-cols-1 gap-1.5 flex-grow content-start">
              {certifications.map((cert, i) => (
                <div key={cert} className={cn(
                  "flex items-center gap-3 text-xs font-bold p-2 transition-colors hover:bg-blue-50 hover:text-blue-900",
                  i % 2 === 0 ? "bg-slate-50 border border-slate-100" : "bg-white"
                )}>
                  <span className="w-2.5 h-2.5 bg-blue-700 block shrink-0"></span>
                  <span className="text-slate-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
