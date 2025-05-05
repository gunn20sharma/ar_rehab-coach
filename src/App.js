// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import Navbar from './components/Layout/Navbar';
// import PrivateRoute from './components/Auth/PrivateRoute';
// import Home from './pages/Home/Home';
// import Exercise from './pages/Exercise/Exercise';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Progress from './pages/Progress/Progress';
// import Login from './pages/Login/Login';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   return (
//     <Router>
//       <Navbar isAuthenticated={isAuthenticated} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
//         <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
//           <Route path="/exercise" element={<Exercise user={user} />} />
//           <Route path="/dashboard" element={<Dashboard user={user} />} />
//           <Route path="/progress" element={<Progress user={user} />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
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
=======
 import { useState } from 'react';
 import Navbar from './components/Layout/Navbar';
 import PrivateRoute from './components/Auth/PrivateRoute';
 import Home from './pages/Home/Home';
 import Exercise from './pages/Exercise/Exercise';
 import Dashboard from './pages/Dashboard/Dashboard';
 import Progress from './pages/Progress/Progress';
 import CameraPage from './pages/Camera/Camera';
 import ARExercise from './pages/ARExercise/ARExercise';
 import Login from './pages/Login/Login';
 import Settings from './pages/Settings/Settings';
 
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
    path="/ar-exercise/:exerciseId"
    element={
      <PrivateRoute isAuthenticated={isAuthenticated}>
        <ARExercise user={user} />
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
  <Route
          path="/camera"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <CameraPage user={user} /> {/* Pass user if needed */}
            </PrivateRoute>
          }
        />
        <Route 
   path="/settings" 
   element={
     <PrivateRoute isAuthenticated={isAuthenticated}>
       <Settings user={user} />
     </PrivateRoute>
   } 
 />
 
       </Routes>
     </Router>
   );
 }
 
 export default App;
>>>>>>> 1dffa65 (first commit)
