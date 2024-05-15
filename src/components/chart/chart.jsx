"use client";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart =  ({}) => {
  const data = [
    { name: "2000", AverageHousePrices: 295000 },
    { name: "2001", AverageHousePrices: 415000 },
    { name: "2002", AverageHousePrices: 445000 },
    { name: "2003", AverageHousePrices: 475000 },
    { name: "2004", AverageHousePrices: 435000 },
    { name: "2005", AverageHousePrices: 495000 },
    { name: "2006", AverageHousePrices: 505000 },
    { name: "2007", AverageHousePrices: 525000 },
    { name: "2008", AverageHousePrices: 385000 },
    { name: "2009", AverageHousePrices: 395000 },
    { name: "2010", AverageHousePrices: 505000 },
    { name: "2011", AverageHousePrices: 545000 },
    { name: "2012", AverageHousePrices: 575000 },
    { name: "2013", AverageHousePrices: 595000 },
    { name: "2014", AverageHousePrices: 635000 },
    { name: "2015", AverageHousePrices: 615000 },
    { name: "2016", AverageHousePrices: 655000 },
    { name: "2017", AverageHousePrices: 675000 },
    { name: "2018", AverageHousePrices: 675000 },
    { name: "2019", AverageHousePrices: 655000 },
    { name: "2020", AverageHousePrices: 645000 },
    { name: "2021", AverageHousePrices: 650000 },
    { name: "2022", AverageHousePrices: 675000 },
    { name: "2023", AverageHousePrices: 735000 },
    { name: "2024", AverageHousePrices: 775000 },

    { name: "2025", AverageHousePrices: 845000 },
    { name: "2026", AverageHousePrices: 865000 },
    { name: "2027", AverageHousePrices: 915000 },
    { name: "2028", AverageHousePrices: 1035000 },
    { name: "2029", AverageHousePrices: 1275000 },
    { name: "2030", AverageHousePrices: 1345000 },
  ];

  return (
    <>
        <ResponsiveContainer width={"98%"} height={265}>
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <XAxis dataKey="name" scale="point" stroke="#ffffffff" />

            <Area
              type="monotone"
              dataKey="AverageHousePrices"
              fill="#ffffffff"
              stroke="#ffffffff"
            />
          </ComposedChart>
        </ResponsiveContainer>

    </>
  );
};

export default Chart;
