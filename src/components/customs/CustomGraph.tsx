"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  {
    date: "2024-07-01",
    tresorerie: 0,
    patrimoine: 0,
    immobilisations: 0,
    obligations: 0,
    creanceCresus: 0,
    creanceMyriade: 0,
    detteCresus: 0,
    detteMyriade: 0,
  },
  {
    date: "2024-07-02",
    tresorerie: 10000,
    patrimoine: 60000,
    immobilisations: 0,
    obligations: 0,
    creanceCresus: 0,
    creanceMyriade: 0,
    detteCresus: -20000,
    detteMyriade: 0,
  },
  {
    date: "2024-07-03",
    tresorerie: 15000,
    patrimoine: 65000,
    immobilisations: 10000,
    obligations: 0,
    creanceCresus: 0,
    creanceMyriade: 5000,
    detteCresus: -10000,
    detteMyriade: 0,
  },
  {
    date: "2024-07-04",
    tresorerie: 12000,
    patrimoine: 67000,
    immobilisations: 5000,
    obligations: 0,
    creanceCresus: 5000,
    creanceMyriade: 0,
    detteCresus: -5000,
    detteMyriade: -20000,
  },
  {
    date: "2024-07-05",
    tresorerie: 8000,
    patrimoine: 70000,
    immobilisations: 15000,
    obligations: 20000,
    creanceCresus: 0,
    creanceMyriade: 0,
    detteCresus: -5000,
    detteMyriade: -30000,
  },
  {
    date: "2024-07-06",
    tresorerie: 20000,
    patrimoine: 75000,
    immobilisations: 15000,
    obligations: 0,
    creanceCresus: 0,
    creanceMyriade: 0,
    detteCresus: 0,
    detteMyriade: -40000,
  },
  {
    date: "2024-07-07",
    tresorerie: 10000,
    patrimoine: 80000,
    immobilisations: 0,
    obligations: 30000,
    creanceCresus: 0,
    creanceMyriade: 0,
    detteCresus: -10000,
    detteMyriade: -10000,
  },
  {
    date: "2024-07-08",
    tresorerie: 5000,
    patrimoine: 60000,
    immobilisations: 20000,
    obligations: 10000,
    creanceCresus: 0,
    creanceMyriade: 5000,
    detteCresus: 0,
    detteMyriade: 0,
  },
  {
    date: "2024-07-09",
    tresorerie: 7000,
    patrimoine: 90000,
    immobilisations: 15000,
    obligations: 15000,
    creanceCresus: 20000,
    creanceMyriade: 0,
    detteCresus: -5000,
    detteMyriade: 0,
  },
  {
    date: "2024-07-10",
    tresorerie: 15000,
    patrimoine: 95000,
    immobilisations: 10000,
    obligations: 10000,
    creanceCresus: 10000,
    creanceMyriade: 10000,
    detteCresus: 0,
    detteMyriade: 0,
  },
  {
    date: "2024-07-11",
    tresorerie: 9000,
    patrimoine: 70000,
    immobilisations: 15000,
    obligations: 20000,
    creanceCresus: 0,
    creanceMyriade: 0,
    detteCresus: -5000,
    detteMyriade: -10000,
  },
  {
    date: "2024-07-12",
    tresorerie: 10000,
    patrimoine: 80000,
    immobilisations: 5000,
    obligations: 0,
    creanceCresus: 5000,
    creanceMyriade: 5000,
    detteCresus: 0,
    detteMyriade: 0,
  },
];

export const CustomGraph = () => {
  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer>
        <LineChart
          data={mockData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="tresorerie"
            stroke="#FF0000"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="patrimoine"
            stroke="#00FF00"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="immobilisations"
            stroke="#000000"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="obligations"
            stroke="#FFFF00"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="creanceCresus"
            stroke="#1E90FF"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="creanceMyriade"
            stroke="#8A2BE2"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="detteCresus"
            stroke="#FF6347"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="detteMyriade"
            stroke="#DAA520"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
