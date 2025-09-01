import React, { useState } from "react";
import { Bell, Search, User, Settings, LogOut } from "lucide-react";

export default function Topbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, message: "New user registered", time: "2m ago" },
    { id: 2, message: "Invoice #1234 paid", time: "10m ago" },
    { id: 3, message: "Server restarted", time: "1h ago" },
  ];

  return (
    <div className="flex items-center justify-between p-4 border-b border-white/10 relative">
      <h1 className="text-lg md:text-2xl font-semibold">Overview</h1>

      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search size={16} className="absolute left-3 top-2.5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="pl-10 pr-3 py-2 bg-zinc-800 border border-white/10 rounded-xl text-sm text-white w-40 sm:w-56"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="h-10 w-10 flex items-center justify-center rounded-xl bg-zinc-800 border border-white/10 relative"
          >
            <Bell size={18} />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute bg-gray-800  right-0 mt-2 w-64 bg-card border border-white/10 rounded-xl shadow-lg p-3 z-50">
              <h3 className="font-semibold mb-2">Notifications</h3>
              <ul className="space-y-2 text-sm">
                {notifications.map((n) => (
                  <li
                    key={n.id}
                    className="p-2 rounded-lg hover:bg-white/5 cursor-pointer"
                  >
                    <p className="text-white">{n.message}</p>
                    <span className="text-xs text-zinc-400">{n.time}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-2 text-xs text-indigo-400 hover:underline">
                View all
              </button>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="h-10 w-10 rounded-xl object-cover"
            />
          </button>

          {showProfile && (
            <div className="absolute bg-gray-800 right-0 mt-2 w-48 bg-card border border-white/10 rounded-xl shadow-lg p-2 z-50">
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5">
                <User size={16} /> Profile
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5">
                <Settings size={16} /> Settings
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-red-400">
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
