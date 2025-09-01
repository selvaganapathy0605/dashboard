import React from "react";
import Card from "./Card";
import { User, Settings } from "lucide-react";

export default function Activity() {
  const handleProfile = () => {
    alert("Opening profile settings...");
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold flex items-center gap-2">
          <User size={18} /> Profile Activity
        </h3>
        <button
          onClick={handleProfile}
          className="p-1 rounded hover:bg-white/10"
          aria-label="Profile settings"
        >
          <Settings size={16} />
        </button>
      </div>
      <div className="flex items-center justify-center h-32">
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4ade80"
              strokeWidth="3"
              strokeDasharray="75, 100"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
            +13%
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-2 text-sm text-zinc-400">
        <li>Transactions: 452</li>
        <li>Payouts: 412</li>
        <li>Sales: 715</li>
        <li>Reports: 128</li>
      </ul>
    </Card>
  );
}
