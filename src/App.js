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
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/exercise" element={<Exercise user={user} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/progress" element={<Progress user={user} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;