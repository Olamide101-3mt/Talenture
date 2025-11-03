import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import useAuthStore from "./store/useAuthStore";

// attempt to hydrate current user from Appwrite session (if any)
useAuthStore.getState().fetchCurrentUser()
  .then(({ success, user }) => {
    if (success && user) {
      useAuthStore.getState().login(user);
    }
  })
  .catch(() => {
    useAuthStore.getState().logout();
  });

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
