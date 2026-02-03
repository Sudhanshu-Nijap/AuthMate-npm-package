import { useEffect, useState } from 'react';
import { supabase } from '../auth/supabase';
import { useNavigate, Link } from 'react-router-dom';
import authmateLogo from '/authmate.svg';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            if (!session) {
                navigate('/login');
            }
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            if (!session) {
                navigate('/login');
            }
        });

        return () => subscription.unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
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
                            <span className="label">User ID</span>
                            <code className="value">{user.id}</code>
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
