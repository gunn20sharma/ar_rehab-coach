import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import PrivateRoute from './components/Auth/PrivateRoute';
import Home from './pages/Home/Home';
import Exercise from './pages/Exercise/Exercise';
import Dashboard from './pages/Dashboard/Dashboard';
import Progress from './pages/Progress/Progress';
import Login from './pages/Login/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
        <Route 
  path="/dashboard" 
  element={
    <PrivateRoute isAuthenticated={isAuthenticated}>
      <Dashboard user={user} />
    </PrivateRoute>
  } 
/>
<Route 
  path="/exercise" 
  element={
    <PrivateRoute isAuthenticated={isAuthenticated}>
      <Exercise user={user} />
    </PrivateRoute>
  } 
/>
<Route 
  path="/progress" 
  element={
    <PrivateRoute isAuthenticated={isAuthenticated}>
      <Progress user={user} />
    </PrivateRoute>
  } 
/>

      </Routes>
    </Router>
  );
}

export default App;