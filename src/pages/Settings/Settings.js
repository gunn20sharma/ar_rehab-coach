import { useState } from 'react';
import { FaSave, FaUndo, FaCog } from 'react-icons/fa';
import './Settings.css';

const SettingsPage = () => {
  // Example preferences state
  const [preferences, setPreferences] = useState({
    theme: 'light',
    notifications: true,
    cameraQuality: 'medium',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Preferences saved!');
    // Add actual save logic here (e.g., API call)
  };

  // Reset to defaults
  const resetDefaults = () => {
    setPreferences({
      theme: 'light',
      notifications: true,
      cameraQuality: 'medium',
    });
  };

  return (
    <div className="settings-container">
      <h1><FaCog /> Settings</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="setting-group">
          <label>Theme:</label>
          <select 
            value={preferences.theme}
            onChange={(e) => setPreferences({...preferences, theme: e.target.value})}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="setting-group">
          <label>
            <input
              type="checkbox"
              checked={preferences.notifications}
              onChange={(e) => setPreferences({...preferences, notifications: e.target.checked})}
            />
            Enable Notifications
          </label>
        </div>

        <div className="setting-group">
          <label>Camera Quality:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="quality"
                value="low"
                checked={preferences.cameraQuality === 'low'}
                onChange={() => setPreferences({...preferences, cameraQuality: 'low'})}
              />
              Low
            </label>
            <label>
              <input
                type="radio"
                name="quality"
                value="medium"
                checked={preferences.cameraQuality === 'medium'}
                onChange={() => setPreferences({...preferences, cameraQuality: 'medium'})}
              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                name="quality"
                value="high"
                checked={preferences.cameraQuality === 'high'}
                onChange={() => setPreferences({...preferences, cameraQuality: 'high'})}
              />
              High
            </label>
          </div>
        </div>

        <div className="action-buttons">
          <button type="button" onClick={resetDefaults} className="reset-button">
            <FaUndo /> Reset Defaults
          </button>
          <button type="submit" className="save-button">
            <FaSave /> Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;