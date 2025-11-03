import React from "react";
import { Link } from "react-router-dom";

export default function Topbar(){
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-xl font-semibold hidden lg:block">Dashboard</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 text-slate-500">
              <input type="text" placeholder="Search" className="rounded-lg border border-gray-100 px-3 py-2 text-sm bg-gray-50" />
            </div>

            <button className="p-2 rounded-full hover:bg-gray-100">
              🔔
            </button>

            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/40" alt="avatar" className="w-9 h-9 rounded-full" />
              <div className="text-sm">
                <div className="font-medium">Mahfuzul Nabil</div>
                <div className="text-xs text-slate-400">Admin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
