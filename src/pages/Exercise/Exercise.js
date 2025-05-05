// import { useState } from 'react';
// import './Exercise.css';
// import { Link } from 'react-router-dom';

// const Exercise = ({ user }) => {
//   const [selectedExercise, setSelectedExercise] = useState(null);
  
//   const exercises = [
//     { id: 1, name: 'Shoulder Rotation', category: 'Upper Body', duration: '10s', difficulty: 'beginner' },
//     { id: 2, name: 'Sit Ups', category: 'Core', duration: '25s', difficulty: 'intermediate' },
//     { id: 3, name: 'Leg Stretch', category: 'Lower Body', duration: '15s', difficulty: 'beginner' },
//     { id: 4, name: 'Leg Raises', category: 'Core', duration: '25s', difficulty: 'advanced' },
//     { id: 5, name: 'Arm Raises', category: 'Upper Body', duration: '20s', difficulty: 'beginner' },
//     { id: 6, name: 'Squats', category: 'Lower Body', duration: '10s', difficulty: 'intermediate' },
//     { id: 7, name: 'Pull Ups', category: 'Upper Body', duration: '10s', difficulty: 'advanced' },
//   ];

//   const filteredExercises = exercises.filter(ex => 
//     user?.preferences?.exerciseDifficulty === 'beginner' ? 
//     ex.difficulty === 'beginner' : 
//     ['beginner', 'intermediate'].includes(ex.difficulty)
//   );

//   return (
//     <div className="exercise-container">
//       <h1>Exercise Library</h1>
//       <p>Welcome back, {user?.name}! Here are exercises tailored for you.</p>
      
//       <div className="exercise-grid">
//         {filteredExercises.map(exercise => (
//           <div key={exercise.id} className="exercise-card">
//             <div className="exercise-header">
//               <span className="category">{exercise.category}</span>
//               <span className="duration">{exercise.duration}</span>
//             </div>
//             <h3>{exercise.name}</h3>
//             <span className="difficulty">{exercise.difficulty}</span>
//             <button 
//               className="start-button"
//               onClick={() => setSelectedExercise(exercise)}
//             >
//               Start
//             </button>
//             <Link 
//       to={`/ar-exercise/${exercise.id}`} 
//       className="start-button"
//     >
//       Start AR Guide
//     </Link>

//           </div>
//         ))}
//       </div>
      
//       {selectedExercise && (
//         <div className="exercise-modal">
//           <div className="modal-content">
//             <h2>{selectedExercise.name}</h2>
//             <p>Preparing your AR session...</p>
//             <button onClick={() => setSelectedExercise(null)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Exercise;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Exercise.css';

// const Exercise = ({ user }) => {
//   const [selectedExercise, setSelectedExercise] = useState(null);
  
//   const exercises = [
//     { id: 'shoulder-rotation', name: 'Shoulder Rotation', category: 'Upper Body', duration: '10s', difficulty: 'beginner' },
//     { id: 'sit-ups', name: 'Sit Ups', category: 'Core', duration: '25s', difficulty: 'intermediate' },
//     { id: 'leg-stretch', name: 'Leg Stretch', category: 'Lower Body', duration: '15s', difficulty: 'beginner' },
//     { id: 'leg-raises', name: 'Leg Raises', category: 'Core', duration: '25s', difficulty: 'advanced' },
//     { id: 'arm-raises', name: 'Arm Raises', category: 'Upper Body', duration: '20s', difficulty: 'beginner' },
//     { id: 'squats', name: 'Squats', category: 'Lower Body', duration: '10s', difficulty: 'intermediate' },
//     { id: 'pull-ups', name: 'Pull Ups', category: 'Upper Body', duration: '10s', difficulty: 'advanced' },
//   ];

//   const filteredExercises = exercises.filter(ex => 
//     user?.preferences?.exerciseDifficulty === 'beginner' ? 
//     ex.difficulty === 'beginner' : 
//     ['beginner', 'intermediate'].includes(ex.difficulty)
//   );

//   return (
//     <div className="exercise-container">
//       <h1>Exercise Library</h1>
//       <p>Welcome back, {user?.name}! Here are exercises tailored for you.</p>
      
//       <div className="exercise-grid">
//         {filteredExercises.map(exercise => (
//           <div key={exercise.id} className="exercise-card">
//             <div className="exercise-header">
//               <span className="category">{exercise.category}</span>
//               <span className="duration">{exercise.duration}</span>
//             </div>
//             <h3>{exercise.name}</h3>
//             <span className="difficulty">{exercise.difficulty}</span>
            
//             <div className="exercise-actions">
//               <button 
//                 className="info-button"
//                 onClick={() => setSelectedExercise(exercise)}
//               >
//                 View Details
//               </button>
//               <Link 
//                 to={`/ar-exercise/${exercise.id}`} 
//                 className="start-button"
//               >
//                 Start AR Guide
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       {selectedExercise && (
//         <div className="exercise-modal">
//           <div className="modal-content">
//             <h2>{selectedExercise.name}</h2>
//             <div className="exercise-details">
//               <p><strong>Category:</strong> {selectedExercise.category}</p>
//               <p><strong>Duration:</strong> {selectedExercise.duration}</p>
//               <p><strong>Difficulty:</strong> {selectedExercise.difficulty}</p>
//             </div>
//             <div className="modal-actions">
//               <button 
//                 className="close-button"
//                 onClick={() => setSelectedExercise(null)}
//               >
//                 Close
//               </button>
//               <Link 
//                 to={`/ar-exercise/${selectedExercise.id}`} 
//                 className="ar-button"
//               >
//                 Launch AR Mode
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Exercise;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Exercise.css';

const Exercise = ({ user }) => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const exercises = [
    { id: 'shoulder-rotation', name: 'Shoulder Rotation', category: 'Upper Body', duration: '10s', difficulty: 'beginner' },
    { id: 'sit-ups', name: 'Sit Ups', category: 'Core', duration: '25s', difficulty: 'intermediate' },
    { id: 'leg-stretch', name: 'Leg Stretch', category: 'Lower Body', duration: '15s', difficulty: 'beginner' },
    { id: 'leg-raises', name: 'Leg Raises', category: 'Core', duration: '25s', difficulty: 'advanced' },
    { id: 'arm-raises', name: 'Arm Raises', category: 'Upper Body', duration: '20s', difficulty: 'beginner' },
    { id: 'squats', name: 'Squats', category: 'Lower Body', duration: '10s', difficulty: 'intermediate' },
    { id: 'pull-ups', name: 'Pull Ups', category: 'Upper Body', duration: '10s', difficulty: 'advanced' },
  ];

  const filteredExercises = exercises.filter(ex => 
    user?.preferences?.exerciseDifficulty === 'beginner' ? 
    ex.difficulty === 'beginner' : 
    ['beginner', 'intermediate'].includes(ex.difficulty)
  );

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.2 }
    },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <div className="exercise-container">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Exercise Library
      </motion.h1>
      
      <motion.p 
        className="welcome-message"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Welcome back, <span className="user-name">{user?.name}</span>! Here are exercises tailored for you.
      </motion.p>
      
      <div className="exercise-grid">
        {filteredExercises.map((exercise, index) => (
          <motion.div
            key={exercise.id}
            className={`exercise-card ${exercise.difficulty}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: index * 0.05 }}
            onMouseEnter={() => setHoveredCard(exercise.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="exercise-header">
              <span className="category">{exercise.category}</span>
              <span className="duration">{exercise.duration}</span>
            </div>
            <h3>{exercise.name}</h3>
            <div className="difficulty-badge">{exercise.difficulty}</div>
            
            <div className="exercise-actions">
              <motion.button 
                className="info-button"
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedExercise(exercise)}
              >
                View Details
              </motion.button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to={`/ar-exercise/${exercise.id}`} 
                  className="start-button"
                >
                  Start AR Guide
                </Link>
              </motion.div>
            </div>

            {hoveredCard === exercise.id && (
              <motion.div 
                className="hover-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.div>
        ))}
      </div>
      
      <AnimatePresence>
        {selectedExercise && (
          <motion.div 
            className="exercise-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExercise(null)}
          >
            <motion.div 
              className="exercise-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-modal"
                onClick={() => setSelectedExercise(null)}
              >
                &times;
              </button>
              
              <h2>{selectedExercise.name}</h2>
              <div className="exercise-details">
                <p><strong>Category:</strong> {selectedExercise.category}</p>
                <p><strong>Duration:</strong> {selectedExercise.duration}</p>
                <p><strong>Difficulty:</strong> 
                  <span className={`difficulty-badge ${selectedExercise.difficulty}`}>
                    {selectedExercise.difficulty}
                  </span>
                </p>
                <div className="exercise-description">
                  <p>Detailed instructions for {selectedExercise.name} will appear here.</p>
                </div>
              </div>
              <div className="modal-actions">
                <motion.button 
                  className="close-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedExercise(null)}
                >
                  Close
                </motion.button>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to={`/ar-exercise/${selectedExercise.id}`} 
                    className="ar-button"
                  >
                    Launch AR Mode
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Exercise;