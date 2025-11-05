import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuthStore from "./store/useAuthStore";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./routes/Mainpage";
import Transactions from "./routes/Transactions";
import Invoices from "./routes/Invoices";
import Wallets from "./routes/Wallets";
import Settings from "./routes/Settings";
import Help from "./routes/Help";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import PrivateRoute from "./components/PrivateRoute";

export default function App(){
  const user = useAuthStore((s) => s.user);

  console.log("Project ID:", import.meta.env.VITE_APPWRITE_PROJECT_ID);

  if (!user && (window.location.pathname !== '/signin' && window.location.pathname !== '/signup')) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="min-h-screen flex">
      {user && <Sidebar />}
      <div className="flex-1">
        {user && <Topbar />}
        <main className={user ? "p-6 lg:p-10" : ""}>
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/transactions" element={<PrivateRoute><Transactions /></PrivateRoute>} />
            <Route path="/invoices" element={<PrivateRoute><Invoices /></PrivateRoute>} />
            <Route path="/wallets" element={<PrivateRoute><Wallets /></PrivateRoute>} />
            <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
            <Route path="/help" element={<PrivateRoute><Help /></PrivateRoute>} />

            <Route path="*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          </Routes>
          
        </main>
      </div>
    </div>
  );
}
