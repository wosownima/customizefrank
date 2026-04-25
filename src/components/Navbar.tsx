import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { User, Briefcase } from "lucide-react";

export function Navbar() {
  const location = useLocation();

  const links = [
    { name: "關於我", path: "/", icon: User },
    { name: "作品集", path: "/portfolio", icon: Briefcase },
  ];

  return (
    <header className="w-full bg-slate-100 pt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between border-b-2 border-slate-900 pb-4">
        <div>
          <Link to="/" className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase hover:text-blue-700 transition-colors">
            FRANK <span className="text-blue-700">薛富淋</span>
          </Link>
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mt-1">Professional Maritime Profile & Digital Portfolio</p>
        </div>
        <div className="flex gap-4 sm:gap-8 text-right">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex flex-col items-end group",
                  isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                )}
              >
                <span className="block text-[10px] uppercase font-bold flex items-center gap-1 group-hover:text-blue-700">
                  <Icon className="w-3 h-3" />
                  {link.name === "關於我" ? "Profile" : "Work"}
                </span>
                <span className="font-semibold italic uppercase whitespace-nowrap text-xs md:text-sm pt-1">
                  {link.name}
                </span>
                {isActive && <div className="h-[2px] w-full bg-blue-700 mt-1"></div>}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
