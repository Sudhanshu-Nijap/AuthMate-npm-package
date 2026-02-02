import { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';
import authmateLogo from '/authmate.svg';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                navigate('/login');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login');
    };

    if (!user) return <div className="auth-container">Loading...</div>;

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="logo-section">
                    <Link to="/">
                        <img src={authmateLogo} className="logo-small" alt="AuthMate logo" style={{ height: '60px' }} />
                    </Link>
                    <span className="brand-name">AuthMate</span>
                </div>
                <button onClick={handleLogout} className="auth-button" style={{ width: 'auto', padding: '0.5rem 1rem' }}>
                    Sign Out
                </button>
            </header>
            <main className="dashboard-content">
                <div className="card">
                    <h1>Hello!</h1>
                    <p>Welcome to your secure dashboard.</p>
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="label">User UID</span>
                            <code className="value">{user.uid}</code>
                        </div>
                        <div className="info-item">
                            <span className="label">Email</span>
                            <code className="value">{user.email}</code>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
