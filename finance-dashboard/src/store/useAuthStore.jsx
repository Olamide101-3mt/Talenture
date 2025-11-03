import { create } from "zustand";
import { nanoid } from "nanoid";
import { account, ID } from "../appwriteConfig";

const sampleInvoices = [
  {
    id: nanoid(),
    clientName: "Gadget Gallery LTD",
    clientEmail: "gadget@example.com",
    amount: 420.84,
    vatPercent: 7,
    vatAmount: 29.455,
    total: 450.295,
    dueDate: new Date(Date.now() + 5 * 24 * 3600 * 1000).toISOString(),
    status: "Unpaid",
    createdAt: new Date().toISOString(),
  },
];

const useAuthStore = create((set, get) => ({
  user: null, // will be populated after login
  invoices: sampleInvoices,
  // local setter (used by UI or after successful auth)
  login: (user) => set({ user }),
  // Appwrite-backed sign in
  signIn: async (email, password) => {
    try {
      // create session with Appwrite (SDK uses createEmailPasswordSession)
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      set({ user });
      return { success: true, user };
    } catch (error) {
      return { success: false, error };
    }
  },
  // Appwrite-backed sign up
  signUp: async (email, password, name) => {
    try {
      // create requires a userId first; use ID.unique() helper
      await account.create(ID.unique(), email, password, name);
      // after signup, create session
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      set({ user });
      return { success: true, user };
    } catch (error) {
      return { success: false, error };
    }
  },
  // Appwrite-backed sign out
  signOut: async () => {
    try {
      await account.deleteSession("current");
    } catch (err) {
      // ignore if already signed out
    }
    set({ user: null });
  },
  // fetch current user (useful on app init)
  fetchCurrentUser: async () => {
    try {
      const user = await account.get();
      set({ user });
      return { success: true, user };
    } catch (error) {
      set({ user: null });
      return { success: false, error };
    }
  },
  logout: () => set({ user: null }),
  addInvoice: (data) => {
    const invoice = { id: nanoid(), createdAt: new Date().toISOString(), ...data };
    set((s) => ({ invoices: [invoice, ...s.invoices] }));
  },
  updateInvoice: (id, patch) => {
    set((s) => ({ invoices: s.invoices.map(inv => inv.id === id ? { ...inv, ...patch } : inv) }));
  },
  deleteInvoice: (id) => {
    set((s) => ({ invoices: s.invoices.filter(inv => inv.id !== id) }));
  },
}));

export { useAuthStore };
export default useAuthStore;
