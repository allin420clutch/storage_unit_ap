import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Check local storage on initial load to persist login (simple mock)
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const savedAuth = localStorage.getItem('isAdmin');
        return savedAuth === 'true';
    });

    const login = (username, password) => {
        // Simple mock authentication point
        if (username === 'admin' && password === 'password123') {
            setIsAuthenticated(true);
            localStorage.setItem('isAdmin', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAdmin');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
