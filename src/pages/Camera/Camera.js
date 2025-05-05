import { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './Camera.css';

const CameraPage = () => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [facingMode, setFacingMode] = useState('user'); // 'user' or 'environment'

  const videoConstraints = {
    facingMode: facingMode,
    width: 1280,
    height: 720
  };

  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn);
  };

  const switchCamera = () => {
    setFacingMode(prev => prev === 'user' ? 'environment' : 'user');
  };

  const capturePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log('Captured photo:', imageSrc);
      // You can save this or use it elsewhere
    }
  };

  return (
    <div className="camera-container">
      <h1>Camera</h1>
      
      <div className="camera-controls">
        <button onClick={toggleCamera}>
          {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
        </button>
        
        {isCameraOn && (
          <>
            <button onClick={switchCamera}>
              Switch Camera ({facingMode === 'user' ? 'Front' : 'Back'})
            </button>
            <button onClick={capturePhoto}>Take Photo</button>
          </>
        )}
      </div>

      {isCameraOn && (
        <div className="camera-view">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </div>
      )}
    </div>
  );
};

export default CameraPage;