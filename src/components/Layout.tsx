import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-12">
        <Outlet />
      </main>
      <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto flex justify-between items-center py-6">
        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
          Built for Maritime Excellence | {new Date().getFullYear()} Profile
        </div>
        <div className="flex gap-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-200"></div>
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-300"></div>
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-400"></div>
        </div>
      </footer>
    </div>
  );
}
