import { SignUp, useAuth } from "@clerk/clerk-react";
import authmateLogo from '/authmate.svg';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Register() {
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
            <h1>Create Account</h1>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Get started with AuthMate today</p>

            <div className="auth-card-wrapper">
                <SignUp signInUrl="/login" forceRedirectUrl="/dashboard" />
            </div>
        </div>
    );
}
