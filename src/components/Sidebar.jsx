import React from "react";
import { Home, BarChart2, Users, Mail, Calendar, Settings, LogOut } from "lucide-react";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: <Home size={20} /> },
  { key: "analytics", label: "Analytics", icon: <BarChart2 size={20} /> },
  { key: "contacts", label: "Contacts", icon: <Users size={20} /> },
  { key: "mail", label: "Mail", icon: <Mail size={20} /> },
  { key: "calendar", label: "Calendar", icon: <Calendar size={20} /> },
  { key: "settings", label: "Settings", icon: <Settings size={20} /> },
];

export default function Sidebar({ route, onNavigate }) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold px-3 py-4">SPECTRA</h2>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`flex items-center gap-3 px-3 py-2 w-full text-left rounded-xl transition ${
                route === item.key
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-white/5 text-zinc-300"
              }`}
            >
              {item.icon}
              <span className="hidden lg:inline">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="px-3 py-4 border-t border-white/10">
        <button className="flex items-center gap-2 w-full px-3 py-2 rounded-xl hover:bg-white/5">
          <LogOut size={20} /> <span className="hidden lg:inline">Log out</span>
        </button>
      </div>
    </div>
  );
}
