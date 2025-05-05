import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Progress.css';

const data = [
  { name: 'Week 1', mobility: 65, strength: 70, pain: 40 },
  { name: 'Week 2', mobility: 68, strength: 72, pain: 38 },
  { name: 'Week 3', mobility: 72, strength: 75, pain: 35 },
  { name: 'Week 4', mobility: 75, strength: 78, pain: 32 },
  { name: 'Week 5', mobility: 78, strength: 80, pain: 30 },
  { name: 'Week 6', mobility: 82, strength: 82, pain: 28 },
];

const Progress = ({ user }) => {
  return (
    <div className="progress-container">
      <h1>Your Progress</h1>
      <p>Tracking your rehabilitation journey, {user?.name}</p>
      
      <div className="progress-chart">
        <h2>Improvement Over Time</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="mobility" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="strength" stroke="#82ca9d" />
              <Line type="monotone" dataKey="pain" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="progress-metrics">
        <div className="metric-card">
          <h3>Mobility Improvement</h3>
          <p className="improvement positive">+26%</p>
        </div>
        <div className="metric-card">
          <h3>Strength Gain</h3>
          <p className="improvement positive">+17%</p>
        </div>
        <div className="metric-card">
          <h3>Pain Reduction</h3>
          <p className="improvement positive">-30%</p>
        </div>
      </div>
      
      <div className="progress-goals">
        <h2>Current Goals</h2>
        <ul>
          <li>Complete 3 shoulder rotation sessions this week</li>
          <li>Increase mobility score to 85</li>
          <li>Reduce pain level below 25</li>
        </ul>
      </div>
    </div>
  );
};

export default Progress;