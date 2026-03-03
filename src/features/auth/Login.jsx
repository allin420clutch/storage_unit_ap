import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // The path they tried to go to, or home by default
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const success = login(username, password);

        if (success) {
            navigate(from, { replace: true });
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="container flex items-center justify-center min-h-[70vh] animate-fade-in">
            <div className="card w-full max-w-md p-8 shadow-xl border-t-4 border-t-primary">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-main mb-2">Admin Portal</h1>
                    <p className="text-muted">Sign in to access restricted areas.</p>
                </div>

                {error && (
                    <div className="bg-danger/10 text-danger px-4 py-3 rounded-md mb-6 text-sm font-medium animate-shake">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-main mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input w-full"
                            placeholder="Enter your username"
                            required
                            autoFocus
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-main mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input w-full"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full text-lg py-3 mt-4">
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-muted">
                    <p>Demo Credentials:</p>
                    <p className="font-mono mt-1 text-main">admin / password123</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
