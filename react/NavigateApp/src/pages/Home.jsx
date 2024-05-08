import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    useEffect(() => {
        if (!user) {
            setTimeout(() => navigate('/'), 0);
        }
    }, []);

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };


    return (
        <div>
            <h1>Home</h1>
                    <p>Welcome, {user?.username}!</p>
                    <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;