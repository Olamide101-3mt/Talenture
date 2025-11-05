import React from "react";
import StatCard from "../components/Statcard";
import WorkingChart from "../components/WorkingChart";
import RecentInvoices from "../components/RecentInvoices";

export default function Dashboard(){
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Total invoice" value="$5240.21" icon="💳" variant="dark" />
          <StatCard title="Amount Paid" value="$250.80" icon="💵" />
          <StatCard title="Pending Payment" value="$550.25" icon="⏳" />
        </div>

        <div className="hidden lg:block"></div>
      </div>

      <WorkingChart />

      <RecentInvoices />
    </div>
  );
}
