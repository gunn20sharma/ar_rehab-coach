import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Button, TextField } from '@mui/material';

const Login = ({ setIsAuthenticated, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication
    setIsAuthenticated(true);
    setUser({
      name: "John Doe",
      email: email,
      preferences: {
        theme: "light",
        exerciseDifficulty: "beginner"
      }
    });
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to AR Rehab Coach</h2>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            style={{ marginTop: '20px' }}
          >
            Login
          </Button>
        </form>
        <div className="login-footer">
          <p>Don't have an account? <a href="/">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;