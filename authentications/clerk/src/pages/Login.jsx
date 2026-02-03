import { SignIn, useAuth } from "@clerk/clerk-react";
import authmateLogo from '/authmate.svg';
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSignedIn) {
            navigate('/dashboard');
        }
    }, [isSignedIn, navigate]);

    return (
        <div className="auth-container">
            <div className="logo-container">
                <Link to="/">
                    <img src={authmateLogo} className="logo authmateP" alt="AuthMate logo" />
                </Link>
            </div>
            <h1>Welcome Back</h1>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Sign in to continue to AuthMate</p>

            <div className="auth-card-wrapper">
                <SignIn signUpUrl="/register" forceRedirectUrl="/dashboard" />
            </div>
        </div>
    );
}
