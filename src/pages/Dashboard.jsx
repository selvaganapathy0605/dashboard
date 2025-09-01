import React from "react";
import ProfitCard from "../components/ProfitCard";
import SalesReport from "../components/SalesReport";
import AnalyticalAI from "../components/AnalyticalAI";
import Invoices from "../components/Invoices";
import Activity from "../components/Activity";

export default function Dashboard() {
  return (
    <div className="grid gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ProfitCard />
      <SalesReport />
      <AnalyticalAI />
      <div className="md:col-span-2">
        <Invoices />
      </div>
      <Activity />
    </div>
  );
}
    