"use client";



import { VStack, Text, Box} from "@chakra-ui/react";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ userName, points, accuracy }) => {
  
  // Ensure userByUsername and performance_data are present
console.log(userName, points, accuracy)

  return (
    <>

    <ResponsiveContainer width={"98%"} height={265}>
      <ComposedChart

margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
>

        <XAxis dataKey="date" scale="point" stroke="#ffffffff" />
        <YAxis stroke="#ffffffff" />
        <CartesianGrid stroke="#616161" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="accuracy" stroke="#ffffffff" />
        <Area
          type="monotone"
          dataKey="points"
          fill="#ffffffff"
          stroke="#ffffffff"
          />
      </ComposedChart>
    </ResponsiveContainer>
          </>
  );
};

export default Chart;
