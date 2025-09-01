import React from "react";
import Card from "./Card";
import { Cpu, PlayCircle } from "lucide-react";

export default function AnalyticalAI() {
  const handleRunAI = () => {
    alert("Running AI analysis...");
  };

  const points = [10, 30, 20, 40, 25, 35];
  const max = Math.max(...points);

  return (
    <Card>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold flex items-center gap-2">
          <Cpu size={18} /> Analytical AI
        </h3>
        <button
          onClick={handleRunAI}
          className="flex items-center gap-1 px-2 py-1 text-xs rounded-lg bg-indigo-600 hover:bg-indigo-700"
        >
          <PlayCircle size={14} /> Run
        </button>
      </div>
      <svg viewBox="0 0 200 100" className="w-full h-36">
        <polyline
          points={points
            .map(
              (p, i) => `${(i / (points.length - 1)) * 200},${100 - (p / max) * 90}`
            )
            .join(" ")}
          fill="none"
          stroke="rgb(129 140 248)"
          strokeWidth="2"
        />
        <circle
          cx={(2 / (points.length - 1)) * 200}
          cy={100 - (points[2] / max) * 90}
          r="3"
          className="fill-white"
        />
      </svg>
    </Card>
  );
}
