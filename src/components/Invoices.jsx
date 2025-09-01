import React, { useState } from "react";
import Card from "./Card";
import { Eye, Download, Edit, Trash2 } from "lucide-react";

const initialInvoices = [
  { id: "001423", name: "Arlene McCoy", date: "31 Aug 2023", amount: 3230.2, status: "Paid" },
  { id: "004533", name: "Jacob Jones", date: "30 Aug 2023", amount: 5630.5, status: "Unpaid" },
  { id: "001784", name: "Marvin Butcher", date: "30 Aug 2023", amount: 4230.0, status: "Paid" },
  { id: "001515", name: "Ralph Edwards", date: "29 Aug 2023", amount: 3082.2, status: "Paid" },
];

export default function Invoices() {
  const [invoices, setInvoices] = useState(initialInvoices);

  const handleView = (invoice) => {
    alert(`Viewing invoice for ${invoice.name} (ID: ${invoice.id})`);
  };

  const handleDownload = (invoice) => {
    alert(`Downloading invoice #${invoice.id}`);
  };

  const handleEdit = (invoice) => {
    alert(`Editing invoice for ${invoice.name}`);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this invoice?")) {
      setInvoices(invoices.filter((inv) => inv.id !== id));
    }
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="font-semibold">Invoices</h3>
          <p className="text-xs text-zinc-400">{invoices.length} invoices</p>
        </div>
        <button className="px-3 py-1 text-sm rounded-lg bg-white/10 border border-white/10 hover:bg-white/20">
          Report
        </button>
      </div>

      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-zinc-400">
            <tr className="text-left">
              <th className="py-2">Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>ID</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-t border-white/5">
                <td className="py-2">{inv.name}</td>
                <td>{inv.date}</td>
                <td>${inv.amount.toLocaleString()}</td>
                <td>{inv.id}</td>
                <td>
                  <span
                    className={`chip ${
                      inv.status === "Paid"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-yellow-500/20 text-yellow-300"
                    }`}
                  >
                    {inv.status}
                  </span>
                </td>
                <td className="text-right space-x-2">
                  <button
                    onClick={() => handleView(inv)}
                    className="p-1 rounded hover:bg-white/10"
                    aria-label="View invoice"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() => handleDownload(inv)}
                    className="p-1 rounded hover:bg-white/10"
                    aria-label="Download invoice"
                  >
                    <Download size={16} />
                  </button>
                  <button
                    onClick={() => handleEdit(inv)}
                    className="p-1 rounded hover:bg-white/10"
                    aria-label="Edit invoice"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(inv.id)}
                    className="p-1 rounded hover:bg-red-500/20 text-red-400"
                    aria-label="Delete invoice"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
