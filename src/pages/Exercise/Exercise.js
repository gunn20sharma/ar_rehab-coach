import { useState } from 'react';
import './Exercise.css';

const Exercise = ({ user }) => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  
  const exercises = [
    { id: 1, name: 'Shoulder Rotation', category: 'Upper Body', duration: '10s', difficulty: 'beginner' },
    { id: 2, name: 'Sit Ups', category: 'Core', duration: '25s', difficulty: 'intermediate' },
    { id: 3, name: 'Leg Stretch', category: 'Lower Body', duration: '15s', difficulty: 'beginner' },
    { id: 4, name: 'Leg Raises', category: 'Core', duration: '25s', difficulty: 'advanced' },
    { id: 5, name: 'Arm Raises', category: 'Upper Body', duration: '20s', difficulty: 'beginner' },
    { id: 6, name: 'Squats', category: 'Lower Body', duration: '10s', difficulty: 'intermediate' },
    { id: 7, name: 'Pull Ups', category: 'Upper Body', duration: '10s', difficulty: 'advanced' },
  ];

  const filteredExercises = exercises.filter(ex => 
    user?.preferences?.exerciseDifficulty === 'beginner' ? 
    ex.difficulty === 'beginner' : 
    ['beginner', 'intermediate'].includes(ex.difficulty)
  );

  return (
    <div className="exercise-container">
      <h1>Exercise Library</h1>
      <p>Welcome back, {user?.name}! Here are exercises tailored for you.</p>
      
      <div className="exercise-grid">
        {filteredExercises.map(exercise => (
          <div key={exercise.id} className="exercise-card">
            <div className="exercise-header">
              <span className="category">{exercise.category}</span>
              <span className="duration">{exercise.duration}</span>
            </div>
            <h3>{exercise.name}</h3>
            <span className="difficulty">{exercise.difficulty}</span>
            <button 
              className="start-button"
              onClick={() => setSelectedExercise(exercise)}
            >
              Start
            </button>
          </div>
        ))}
      </div>
      
      {selectedExercise && (
        <div className="exercise-modal">
          <div className="modal-content">
            <h2>{selectedExercise.name}</h2>
            <p>Preparing your AR session...</p>
            <button onClick={() => setSelectedExercise(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercise;