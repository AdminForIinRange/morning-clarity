// import {
//   ComposedChart,
//   Line,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const Chart = ({ userByUsername }) => {
//   // Ensure userByUsername and performance_data are present
//   if (!userByUsername || !userByUsername.performance_data) {
//     return <div>No data available</div>;
//   }

//   const { performance_data } = userByUsername;

//   // Ensure daily_tasks is an array
//   if (!Array.isArray(performance_data.daily_tasks)) {
//     return <div>No daily tasks data available</div>;
//   }

//   const data = performance_data.daily_tasks.map((data) => ({
//     date: new Date(data.date).toLocaleDateString(),
//     accuracy: data.accuracy,
//     points: data.points,
//   }));

//   return (
//     <ResponsiveContainer width={"98%"} height={265}>
//       <ComposedChart
//         data={data}
//         margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
//       >
//         <XAxis dataKey="date" scale="point" stroke="#ffffffff" />
//         <YAxis stroke="#ffffffff" />
//         <CartesianGrid stroke="#616161" strokeDasharray="5 5" />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="accuracy" stroke="#ffffffff" />
//         <Area
//           type="monotone"
//           dataKey="points"
//           fill="#ffffffff"
//           stroke="#ffffffff"
//         />
//       </ComposedChart>
//     </ResponsiveContainer>
//   );
// };

// export default Chart;
// a