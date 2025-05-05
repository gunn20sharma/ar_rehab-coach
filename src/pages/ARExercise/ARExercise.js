import { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as poseDetection from '@tensorflow-models/pose-detection';
import Webcam from 'react-webcam';
import { useParams } from 'react-router-dom';
import './ARExercise.css';

const ARExercise = () => {
  const { exerciseId } = useParams();
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [detector, setDetector] = useState(null);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [feedback, setFeedback] = useState('Stand in view of the camera to begin');
  const [count, setCount] = useState(0);

  // Sample exercises data
  const exercises = {
    'shoulder-rotation': {
      name: 'Shoulder Rotation',
      instructions: ['Keep your back straight', 'Rotate arms slowly'],
      targetAngle: 90,
      keypoints: ['left_shoulder', 'right_shoulder']
    },
    'squats': {
      name: 'Squats',
      instructions: ['Keep knees behind toes', 'Maintain straight back'],
      targetAngle: 120,
      keypoints: ['left_hip', 'left_knee', 'left_ankle']
    }
  };

  useEffect(() => {
    setCurrentExercise(exercises[exerciseId]);
    
    const loadModels = async () => {
      await tf.ready();
      const model = await poseDetection.createDetector(
        poseDetection.SupportedModels.MoveNet,
        { modelType: poseDetection.movenet.modelType.SINGLEPOSE_THUNDER }
      );
      setDetector(model);
      detectPose();
    };

    loadModels();

    return () => {
      if (detector) {
        detector.dispose();
      }
    };
  }, [exerciseId]);

  const detectPose = async () => {
    if (webcamRef.current && detector) {
      const poses = await detector.estimatePoses(webcamRef.current.video);
      drawPose(poses);
      analyzeForm(poses);
      requestAnimationFrame(detectPose);
    }
  };

  const drawPose = (poses) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    poses.forEach(pose => {
      pose.keypoints.forEach(keypoint => {
        if (keypoint.score > 0.3) {
          ctx.beginPath();
          ctx.arc(keypoint.x, keypoint.y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = 'red';
          ctx.fill();
        }
      });
    });
  };

  const analyzeForm = (poses) => {
    if (poses.length > 0 && currentExercise) {
      const pose = poses[0];
      const keypoints = {};
      
      pose.keypoints.forEach(kp => {
        keypoints[kp.name] = kp;
      });

      // Example: Shoulder rotation analysis
      if (exerciseId === 'shoulder-rotation') {
        const leftShoulder = keypoints['left_shoulder'];
        const rightShoulder = keypoints['right_shoulder'];
        
        if (leftShoulder && rightShoulder) {
          const angle = calculateAngle(leftShoulder, rightShoulder);
          if (angle > currentExercise.targetAngle) {
            setFeedback('Great rotation! Keep going');
            setCount(prev => prev + 1);
          } else {
            setFeedback('Rotate your shoulders further');
          }
        }
      }
      // Add more exercise-specific analyses
    }
  };

  const calculateAngle = (point1, point2) => {
    // Simplified angle calculation
    return Math.abs(point1.x - point2.x);
  };

  return (
    <div className="ar-exercise-container">
      <h1>AR-Guided: {currentExercise?.name}</h1>
      <div className="instructions">
        {currentExercise?.instructions.map((inst, i) => (
          <p key={i}>• {inst}</p>
        ))}
      </div>
      
      <div className="ar-view">
        <Webcam
          ref={webcamRef}
          className="webcam-feed"
          width={640}
          height={480}
        />
        <canvas
          ref={canvasRef}
          className="pose-canvas"
          width={640}
          height={480}
        />
      </div>
      
      <div className="feedback-section">
        <h3>Real-Time Feedback:</h3>
        <p className="feedback">{feedback}</p>
        <p className="count">Reps: {count}</p>
      </div>
    </div>
  );
};

export default ARExercise;