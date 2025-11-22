import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const penaltyData = [
  { name: 'Day 1', penalty: 37500 },
  { name: 'Day 2', penalty: 75000 },
  { name: 'Day 3', penalty: 112500 },
  { name: 'Day 4', penalty: 150000 },
];

const ImpactCharts: React.FC = () => {
  return (
    <div className="flex justify-center mt-12">
      
      {/* Chart: The Cost of Non-Compliance */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 w-full max-w-2xl">
        <h3 className="text-lg font-bold text-slate-800 mb-2">The Cost of Non-Compliance</h3>
        <p className="text-sm text-slate-500 mb-6">Cumulative EPA fines for continuous violation ($37,500/day). Source: EPA</p>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={penaltyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} tickFormatter={(value) => `$${value/1000}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px', border: 'none' }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Potential Fine']}
              />
              <Bar dataKey="penalty" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default ImpactCharts;