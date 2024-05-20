"use client";

import { VStack, Text, Box, HStack } from "@chakra-ui/react";
import { useState } from "react";
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



const Chart = ({ userName, tasksData }) => {



  // Extract data from tasksData

  const [dataSet, setDataSet] = useState("Points");
  const ChartBox = [
    {
      title: "Accuracy",
    },

    {
      title: "Points",
    },
  ];

  const data = tasksData.map((task) => ({
    //dont mak edate on teh same day, is date is same then vpid
    name: new Date(task.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    value: dataSet === "Points" ? task.points : task.accuracy,
  }));
  // Ensure userByUsername and performance_data are present


  const CustomTooltip = ({ active, payload, label }) => {


  
    if (active && payload && payload.length) {
      const Value = payload[0].value.toLocaleString();
      return (
        <Box rounded={"lg"} w={"100%"} h={"100%"}  bg={"white"}  p={"3"}>
          <VStack justify={"center"} align={"center"} w={"100%"} h={"100%"} fontSize={"14"} color={"#212121"}>
          <Text fontWeight={"bold"}> {dataSet === "Points" ? "Points:" : "Accuracy:"} {Value}</Text>
          <Text>{label}</Text>
          </VStack>
  
       
        </Box>
      );
    }
  
    return null;
  };

  return (
    <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"} mt={"1"}>
      <Box
        w={"1125px"}
        h={"310px"}
        bgColor={"green.200"}
        rounded={"xl"}
        p={"5"}
      >
        <HStack w={"100%"} h={"100%"} justify={"left"} align={"start"}>
          {ChartBox.map(({ title }, index) => (
            <Box
              onClick={() => setDataSet(title)}
              key={index}
              w={"9%"}
              h={"40px"}
              bgColor={"green.400"}
              rounded={"xl"}
              _hover={{
                mx: "10px",
                bgColor: "green.300",
              }}
              transition={"all 0.3s ease-in-out"}
            >
              <HStack
                w={"100%"}
                h={"100%"}
                justify={"center"}
                align={"center"}
                fontFamily={"raleway"}
                cursor={"pointer"}
              >
                <Text color={"white"} fontWeight={"bold"} fontSize={"14"}>
                  {title}
                </Text>
              </HStack>
            </Box>
          ))}
        </HStack>

        <HStack
          justify="center"
          align="center"
          h={"100%"}
          w={"100%"}
          mt={"-230px"}
          rounded={"xl"}
        >
          <ResponsiveContainer width="98%" height={235}>
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
            >
              <XAxis dataKey="name" fontSize={"12"} />
              <YAxis fontSize={"12"} />
              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="value"
                fill="#68D391"
                stroke="#48BB78"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </HStack>
      </Box>
    </HStack>
  );
};

export default Chart;
