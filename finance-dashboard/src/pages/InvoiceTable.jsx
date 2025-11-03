import React, { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import toast from "react-hot-toast";

export default function InvoiceTable() {
  const invoices = useAuthStore(s => s.invoices);
  const updateInvoice = useAuthStore(s => s.updateInvoice);
  const delInvoice = useAuthStore(s => s.deleteInvoice);

  const [filter, setFilter] = useState("All");

  const filtered = invoices.filter(i => {
    if (filter === "All") return true;
    return filter === "Paid" ? i.status === "Paid" : i.status !== "Paid";
  });

  const markPaid = (id) => {
    updateInvoice(id, { status: "Paid" });
    toast.success("Marked as paid");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="space-x-2">
          <button onClick={() => setFilter("All")} className={`px-3 py-1 rounded ${filter==="All"? "bg-blue-600 text-white": "bg-gray-100"}`}>All</button>
          <button onClick={() => setFilter("Paid")} className={`px-3 py-1 rounded ${filter==="Paid"? "bg-blue-600 text-white": "bg-gray-100"}`}>Paid</button>
          <button onClick={() => setFilter("Unpaid")} className={`px-3 py-1 rounded ${filter==="Unpaid"? "bg-blue-600 text-white": "bg-gray-100"}`}>Unpaid</button>
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map(inv => {
          const due = new Date(inv.dueDate);
          const daysLeft = Math.ceil((due - new Date()) / (1000*60*60*24));
          return (
            <div key={inv.id} className="p-3 border rounded flex items-center justify-between">
              <div>
                <div className="font-medium">{inv.clientName}</div>
                <div className="text-sm text-gray-500">{inv.clientEmail} • {new Date(inv.createdAt).toLocaleDateString()}</div>
                <div className="text-sm mt-1">Due in: <strong>{daysLeft} day(s)</strong></div>
              </div>

              <div className="text-right">
                <div className="text-lg font-semibold">₦{Number(inv.total).toFixed(2)}</div>
                <div className="text-sm text-gray-500">VAT: ₦{Number(inv.vatAmount).toFixed(2)}</div>
                <div className="mt-2 space-x-2">
                  {inv.status !== "Paid" && <button onClick={() => markPaid(inv.id)} className="px-3 py-1 bg-green-600 text-white rounded">Mark Paid</button>}
                  <button onClick={() => delInvoice(inv.id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
