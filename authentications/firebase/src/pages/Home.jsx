import { Link } from 'react-router-dom';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import authmateLogo from '/authmate.svg';

export default function Home() {
    return (
        <>
            <div className="logo-container">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="#" target="_blank">
                    <img src={authmateLogo} className="logo authmate" alt="AuthMate logo" />
                </a>
            </div>
            {!import.meta.env.VITE_FIREBASE_API_KEY && (
                <div style={{ backgroundColor: '#ffcc00', color: '#000', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                    <strong>Warning:</strong> Missing Firebase API Key. Please add your config to <code>.env</code>.
                </div>
            )}
            <h1>AuthMate</h1>
            <p className="read-the-docs">
                The ultimate authentication solution for your React apps.
            </p>
            <div className="card">
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                    <Link to="/dashboard">
                        <button>Dashboard</button>
                    </Link>
                </div>
                <p>
                    Start building secure apps with <code>AuthMate</code>
                </p>
            </div>
        </>
    );
}
