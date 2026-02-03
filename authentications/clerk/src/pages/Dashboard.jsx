import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import authmateLogo from '/authmate.svg';

export default function Dashboard() {
    const { user } = useUser();

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="logo-section">
                    <Link to="/">
                        <img src={authmateLogo} className="logo-small" alt="AuthMate logo" style={{ height: '60px' }} />
                    </Link>
                    <span className="brand-name">AuthMate</span>
                </div>
                <UserButton />
            </header>

            <main className="dashboard-content">
                <div className="card">
                    <h1>Hello, {user?.firstName}!</h1>
                    <p>Welcome to your secure dashboard.</p>
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="label">User ID</span>
                            <code className="value">{user?.id}</code>
                        </div>
                        <div className="info-item">
                            <span className="label">Email</span>
                            <code className="value">{user?.primaryEmailAddress?.emailAddress}</code>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
