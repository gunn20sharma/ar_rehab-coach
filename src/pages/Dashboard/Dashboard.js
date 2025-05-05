import './Dashboard.css';

const Dashboard = ({ user }) => {
  const stats = [
    { label: 'Total Sessions', value: 12 },
    { label: 'Current Streak', value: 5 },
    { label: 'Completion Rate', value: '85%' },
    { label: 'Favorite Exercise', value: 'Shoulder Rotation' }
  ];

  const recentActivities = [
    { exercise: 'Shoulder Rotation', date: '2023-05-01', duration: '10 min' },
    { exercise: 'Leg Stretch', date: '2023-04-28', duration: '15 min' },
    { exercise: 'Arm Raises', date: '2023-04-26', duration: '20 min' }
  ];

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p className="welcome-message">Welcome back, {user?.name}!</p>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      
      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <table>
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {recentActivities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.exercise}</td>
                <td>{activity.date}</td>
                <td>{activity.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-button">Start New Session</button>
          <button className="action-button">View Progress</button>
          <button className="action-button">Update Preferences</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;