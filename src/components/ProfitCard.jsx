import React from "react";
import Card from "./Card";
import { TrendingUp, MoreVertical, Download } from "lucide-react";

export default function ProfitCard() {
  const handleDownload = () => {
    alert("Downloading profit report...");
  };

  return (
    <Card className="bg-indigo-500/10">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Profit</h3>
        <button
          onClick={handleDownload}
          className="p-1 rounded hover:bg-white/10"
          aria-label="Download report"
        >
          <Download size={18} />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-32">
        <TrendingUp size={40} className="text-indigo-400" />
      </div>
      <p className="text-sm text-zinc-400">+14% Since last week</p>
      <p className="text-2xl font-bold">$12,895.5</p>
    </Card>
  );
}
