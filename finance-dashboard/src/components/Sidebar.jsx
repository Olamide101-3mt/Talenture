import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon, CreditCardIcon, WalletIcon, CogIcon, ReceiptPercentIcon, QuestionMarkCircleIcon, ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";

/* Since heroicons isn't installed in package.json, these are small inline svgs.
   For simplicity here I will use basic emoji icons next to labels to match look.
*/

const Item = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition ${
        isActive ? "bg-emerald-300 text-emerald-900 font-medium" : "text-slate-500 hover:bg-slate-100"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Sidebar(){
  return (
    <aside className="w-64 bg-white border-r border-gray-100 min-h-screen hidden md:block">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center text-white font-bold">M</div>
          <div>
            <div className="text-lg font-semibold">Maglo.</div>
            <div className="text-xs text-slate-400">Financial</div>
          </div>
        </div>

        <nav className="space-y-2">
          <Item to="/">
            <span className="w-6">🏠</span>
            Dashboard
          </Item>
          <Item to="/transactions">
            <span className="w-6">📊</span>
            Transactions
          </Item>
          <Item to="/invoices">
            <span className="w-6">🧾</span>
            Invoices
          </Item>
          <Item to="/wallets">
            <span className="w-6">💼</span>
            My Wallets
          </Item>
          <Item to="/settings">
            <span className="w-6">⚙️</span>
            Settings
          </Item>
        </nav>

        <div className="mt-12">
          <Item to="/help">
            <span className="w-6">❓</span>
            Help
          </Item>
          <Item to="/signin">
            <span className="w-6">⤴️</span>
            Logout
          </Item>
        </div>
      </div>
    </aside>
  );
}
