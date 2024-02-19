import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const SpendingChart = () => {
  const originalTransactions = useSelector(state => state.transactions.originalTransactions);

  // Generate random colors based on the number of transactions
  const generateRandomColors = () => {
    const COLORS = [];
    for (let i = 0; i < originalTransactions.length; i++) {
      COLORS.push(`#${Math.floor(Math.random()*16777215).toString(16)}`); 
    }
    return COLORS;
  };

  const categories = {};

  originalTransactions.forEach(transaction => {
    categories[transaction.category] = (categories[transaction.category] || 0) + Number(transaction.amount);
  });

  const totalSpending = Object.values(categories).reduce((acc, cur) => acc + cur, 0);

  const data = Object.keys(categories).map(category => ({
    name: category,
    value: categories[category] / totalSpending * 100, 
  }));

  // Generate random colors
  const COLORS = generateRandomColors();

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "900px", marginTop: "-180px" }}>
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend align="right" verticalAlign="middle" layout="vertical" />
        </PieChart>
      </div>
      <div>
        <h3>Spending Breakdown</h3>
        <ul>
          {data.map((entry, index) => (
            <li key={index} style={{ color: COLORS[index % COLORS.length] }}>
              {entry.name}: {entry.value.toFixed(2)}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpendingChart;
