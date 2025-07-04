import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
import AdminLayout from "./components/Layouts/AdminLayout";
import CustomerLayout from "./components/Layouts/CustomerLayout";
import Accounts from "./components/Admin/Accounts";
import Loans from "./components/Admin/Loans";
import Transactions from "./components/Admin/Transactions";
import Branches from "./components/Admin/Branches";
import Employees from "./components/Admin/Employees";
import Customers from "./components/Admin/Customers";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Myaccount from "./components/Customer/MyAccount";
import Dashboard from "./components/Customer/Dashboard";
import Loan from "./components/Customer/Loan";
import Transfer from "./components/Customer/Transfer";
import Withdrawal from "./components/Customer/Withdraw";
import Login from "./pages/Auth/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/accounts" element={<Accounts />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/branches" element={<Branches />} />
          <Route path="/admin/loans" element={<Loans />} />
          <Route path="/admin/employees" element={<Employees />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route
            path="/admin/*"
            element={<Navigate to="/admin/dashboard" replace />}
          />
        </Route>

        {/* Customer Routes */}
        <Route
          element={
            <ProtectedRoute >
              <CustomerLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/customer/dashboard" element={<Dashboard />} />
          <Route path="/customer/accounts" element={<Myaccount />} />
          <Route path="/customer/loan" element={<Loan />} />
          <Route path="/customer/withdraw" element={<Withdrawal />} />
          <Route path="/customer/transfer" element={<Transfer />} />
          <Route
            path="/customer/*"
            element={<Navigate to="/customer/dashboard" replace />}
          />
        </Route>

        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
