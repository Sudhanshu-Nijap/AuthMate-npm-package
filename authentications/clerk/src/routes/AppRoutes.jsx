import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import '../App.css';

const pubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!pubKey) {
    throw new Error("Missing Publishable Key")
}

function ClerkRoutes() {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            publishableKey={pubKey}
            navigate={(to) => navigate(to)}
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </ClerkProvider>
    );
}

function AppRoutes() {
    return (
        <BrowserRouter>
            <ClerkRoutes />
        </BrowserRouter>
    );
}

export default AppRoutes;
