import React, { useState, useEffect } from "react";
import useAuthStore from "../store/useAuthStore";
import toast from "react-hot-toast";

export default function InvoiceForm({ editInvoice }) {
  const addInvoice = useAuthStore(s => s.addInvoice);
  const updateInvoice = useAuthStore(s => s.updateInvoice);

  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [vatPercent, setVatPercent] = useState(7);
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Unpaid");

  const [vatAmount, setVatAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const a = parseFloat(amount || 0);
    const v = parseFloat(vatPercent || 0);
    const vat = (a * v) / 100;
    setVatAmount(Number.isFinite(vat) ? Number(vat.toFixed(2)) : 0);
    setTotal(Number.isFinite(a + vat) ? Number((a + vat).toFixed(2)) : 0);
  }, [amount, vatPercent]);

  const reset = () => {
    setClientName(""); setClientEmail(""); setAmount(""); setVatPercent(7); setDueDate(""); setStatus("Unpaid");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !amount || !dueDate) return toast.error("Please fill required fields");
    const payload = {
      clientName, clientEmail, amount: Number(amount), vatPercent: Number(vatPercent),
      vatAmount, total, dueDate, status
    };
    if (editInvoice) {
      updateInvoice(editInvoice.id, payload);
      toast.success("Invoice updated");
    } else {
      addInvoice(payload);
      toast.success("Invoice created");
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="text-sm">Client Name</label>
        <input value={clientName} onChange={e => setClientName(e.target.value)} className="w-full border p-2 rounded" />
      </div>
      <div>
        <label className="text-sm">Client Email</label>
        <input value={clientEmail} onChange={e => setClientEmail(e.target.value)} className="w-full border p-2 rounded" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-sm">Amount (₦)</label>
          <input value={amount} onChange={e => setAmount(e.target.value)} className="w-full border p-2 rounded" type="number" />
        </div>
        <div>
          <label className="text-sm">VAT (%)</label>
          <input value={vatPercent} onChange={e => setVatPercent(e.target.value)} className="w-full border p-2 rounded" type="number" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-sm">Due Date</label>
          <input value={dueDate} onChange={e => setDueDate(e.target.value)} className="w-full border p-2 rounded" type="date" />
        </div>
        <div>
          <label className="text-sm">Status</label>
          <select value={status} onChange={e => setStatus(e.target.value)} className="w-full border p-2 rounded">
            <option>Unpaid</option>
            <option>Paid</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">VAT: ₦{vatAmount}</div>
          <div className="text-lg font-semibold">Total: ₦{total}</div>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          {editInvoice ? "Update Invoice" : "Create Invoice"}
        </button>
      </div>
    </form>
  );
}
