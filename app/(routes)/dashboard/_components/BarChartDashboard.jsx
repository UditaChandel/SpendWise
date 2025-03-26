"use client";

import React, { useEffect, useState } from "react";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function BarChartDashboard({ budgetList }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (budgetList && Array.isArray(budgetList)) {
      const formattedData = budgetList.map((budget) => ({
        name: budget.name || "Unnamed", // Ensuring a valid name
        totalSpend: budget.totalSpend || 0, // Amount already spent
        amount: budget.amount - (budget.totalSpend || 0), // Remaining budget (but keeping the name `amount`)
      }));

      console.log("Formatted Chart Data:", formattedData); // Debugging
      setData(formattedData);
    }
  }, [budgetList]);

  if (data.length === 0) return <p>Loading chart...</p>; // Prevent hydration mismatch

  return (
    <div className="border rounded-lg p-5">
      <h2 className="font-bold text-lg">Activity</h2>
      <ResponsiveContainer width={'80%'} height={300}>
      <BarChart 
      data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        <Bar dataKey="totalSpend" stackId="a" fill="#02acb5" name="Total Spend" />
        
        <Bar dataKey="amount" stackId="a" fill="#95d5d9" name="Remaining Budget" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartDashboard;