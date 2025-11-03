import React from "react";
import InvoiceForm from "./InvoiceForm";
import InvoiceTable from "./InvoiceTable";

export default function InvoicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Invoices</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <InvoiceForm />
          </div>
          <div className="bg-white p-4 rounded shadow lg:col-span-1">
            <InvoiceTable />
          </div>
        </div>
      </div>
    </div>
  );
}
