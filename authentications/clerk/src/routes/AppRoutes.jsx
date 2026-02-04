import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import '../App.css';

const pubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function ClerkRoutes() {
    const navigate = useNavigate();

    if (!pubKey) {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={
                    <div style={{ padding: '2rem', textAlign: 'center', marginTop: '50px' }}>
                        <h2>Login Page</h2>
                        <p>Login UI is not available without a Publishable Key.</p>
                        <p>Please add <code>VITE_CLERK_PUBLISHABLE_KEY</code> to your .env file.</p>
                        <a href="/">Go Home</a>
                    </div>
                } />
                <Route path="/register" element={
                    <div style={{ padding: '2rem', textAlign: 'center', marginTop: '50px' }}>
                        <h2>Register Page</h2>
                        <p>Register UI is not available without a Publishable Key.</p>
                        <p>Please add <code>VITE_CLERK_PUBLISHABLE_KEY</code> to your .env file.</p>
                        <a href="/">Go Home</a>
                    </div>
                } />
                <Route path="/dashboard" element={<Navigate to="/" replace />} />
            </Routes>
        );
    }

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
