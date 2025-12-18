import React from 'react';
import Navbar from './Navbar';
import './UserAnalysisPage.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from 'recharts';

const sampleData = {
  name: 'Jane Doe',
  totalTrashCollected: 125,
  totalRecycled: 80,
  totalPoints: 464,
  contributions: [
    { date: '2025-12-01', type: 'Plastic', amount: 10 },
    { date: '2025-12-03', type: 'Paper', amount: 5 },
    { date: '2025-12-05', type: 'Metal', amount: 8 },
    { date: '2025-12-07', type: 'Plastic', amount: 12 },
  ],
};

const lineChartData = sampleData.contributions.map(({ date, amount }) => ({
  date,
  amount,
}));

const barChartData = Object.entries(
  sampleData.contributions.reduce((acc, { type, amount }) => {
    acc[type] = (acc[type] || 0) + amount;
    return acc;
  }, {})
).map(([type, amount]) => ({ type, amount }));

const UserAnalysisPage = () => {
  return (
    <div>
      <Navbar showUserMenu={true} userName={sampleData.name} />
      <main className="analysis-main">
        <h1>User Analysis</h1>
        <p>Overview of your waste collection and recycling activities.</p>

        <div className="stats-cards">
          <div className="stat-card">
            <h2>{sampleData.totalTrashCollected} kg</h2>
            <p>Total Trash Collected</p>
          </div>
          <div className="stat-card">
            <h2>{sampleData.totalRecycled} kg</h2>
            <p>Total Recycled</p>
          </div>
          <div className="stat-card">
            <h2>{sampleData.totalPoints} pts</h2>
            <p>Points Earned</p>
          </div>
        </div>

        <div className="chart-container">
          <h2>Trash Collected Over Time</h2>
          <LineChart
            width={700}
            height={300}
            data={lineChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="amount"
              name="Trash Collected (kg)"
              stroke="#46d81a"
              strokeWidth={3}
            />
          </LineChart>
        </div>

        <div className="chart-container">
          <h2>Recycled Waste by Type</h2>
          <BarChart
            width={700}
            height={300}
            data={barChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" name="Amount (kg)" fill="#46d81a" />
          </BarChart>
        </div>

        <div className="contributions-section">
          <h2>Recent Contributions</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount (kg)</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.contributions.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default UserAnalysisPage;
