"use client";

import { graphMockData } from "@/mock/data";
import { useInputFormStore } from "@/store/input.form";
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

export const CustomGraph = () => {
  const { inputForm } = useInputFormStore();
  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer>
        <LineChart
          data={graphMockData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {inputForm.tresorerie && (
            <Line
              type="monotone"
              dataKey="tresorerie"
              stroke="#FF0000"
              strokeWidth={2}
            />
          )}
          {inputForm.immobilisations && (
            <Line
              type="monotone"
              dataKey="immobilisations"
              stroke="#000000"
              strokeWidth={2}
            />
          )}
          {inputForm.obligations && (
            <Line
              type="monotone"
              dataKey="obligations"
              stroke="#FFFF00"
              strokeWidth={2}
            />
          )}
          <Line
            type="monotone"
            dataKey="patrimoine"
            stroke="#00FF00"
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
