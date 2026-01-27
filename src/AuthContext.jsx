import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    connectWallet: () => { },
    registerUser: () => { },
    logout: () => { },
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        if (typeof window !== 'undefined') {
            try {
                const stored = window.localStorage.getItem('pw-auth');
                return stored ? JSON.parse(stored) : null;
            } catch (e) {
                return null;
            }
        }
        return null;
    });

    const isAuthenticated = !!user?.userId;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (user) {
                window.localStorage.setItem('pw-auth', JSON.stringify(user));
            } else {
                window.localStorage.removeItem('pw-auth');
            }
        }
    }, [user]);

    // Step 1: Connect Wallet (simulated)
    const connectWallet = () => {
        const mockAddress = '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        const shortAddress = `${mockAddress.substring(0, 6)}...${mockAddress.substring(38)}`;

        // We set a temporary state or just return the address to the caller to pass to register
        // For this simple flow, let's just update the user state with the wallet, but not fully "auth" until register
        setUser({ walletAddress: shortAddress });
    };

    // Step 2: Register
    const registerUser = (userId, referralCode) => {
        if (!user?.walletAddress) return;
        setUser(prev => ({ ...prev, userId, referralCode })); // Now isAuthenticated becomes true because userId is set
    };

    const logout = () => {
        setUser(null);
        if (typeof window !== 'undefined') {
            window.location.href = '/'; // Hard redirect to clear any component state if needed, or just navigate
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, connectWallet, registerUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
