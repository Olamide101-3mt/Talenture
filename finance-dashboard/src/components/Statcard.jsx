import React from "react";

export default function StatCard({ title, value, icon, variant = "light" }) {
  return (
    <div className={`rounded-lg p-4 ${
      variant === "dark" 
        ? "bg-black text-white" 
        : "bg-white text-black border border-gray-100"
    }`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm ${variant === "dark" ? "text-gray-300" : "text-gray-500"}`}>
            {title}
          </p>
          <h3 className="text-xl font-semibold mt-1">{value}</h3>
        </div>
        <div className="text-2xl">{icon}</div>
      </div>
    </div>
  );
}