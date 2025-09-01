import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [route, setRoute] = useState("dashboard");

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 p-4 bg-card">
        <Sidebar route={route} onNavigate={setRoute} />
      </aside>

      {/* Main Section */}
      <main className="flex-1 flex flex-col">
        <Topbar />
        {route === "dashboard" && <Dashboard />}
      </main>
    </div>
  );
}
