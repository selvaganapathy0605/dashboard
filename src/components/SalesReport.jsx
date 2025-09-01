import React, { useState } from "react";
import Card from "./Card";
import { BarChart2, RefreshCcw } from "lucide-react";

const weeklyData = [5, 7, 4, 12, 6, 5, 7];
const monthlyData = [10, 15, 12, 20, 18, 14, 22];

export default function SalesReport() {
  const [mode, setMode] = useState("week");
  const data = mode === "week" ? weeklyData : monthlyData;

  return (
    <Card>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold flex items-center gap-2">
          <BarChart2 size={18} /> Sales Report
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setMode(mode === "week" ? "month" : "week")}
            className="text-xs px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20"
          >
            {mode === "week" ? "Weekly" : "Monthly"}
          </button>
          <button
            onClick={() => alert("Refreshing data...")}
            className="p-1 rounded hover:bg-white/10"
          >
            <RefreshCcw size={16} />
          </button>
        </div>
      </div>
      <div className="flex items-end gap-2 h-36">
        {data.map((v, i) => (
          <div key={i} className="flex-1 flex items-end">
            <div
              style={{ height: `${v * 6}px` }}
              className={`w-full rounded ${
                i === 3 ? "bg-indigo-500" : "bg-white/20"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </Card>
  );
}
