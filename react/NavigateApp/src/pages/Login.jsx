import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        try {
            const loggedIn = await login(username, password);
            if (loggedIn) {
                navigate('/home');
            } else {
                setError('Invalid credentials!');
            }
        } catch (err) {
            setError('An error occurred during login.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" aria-label="Username" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" aria-label="Password" />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default Login;
