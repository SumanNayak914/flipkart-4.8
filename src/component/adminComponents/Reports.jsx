// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function Reports() {
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Monthly Sales ($)",
//         data: [5000, 7000, 6000, 8000, 9000, 7500],
//         borderColor: "rgb(75, 192, 192)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Sales Overview",
//       },
//     },
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">📊 Reports</h1>
//       <div className="bg-white shadow p-4 rounded-lg">
//         <Line data={data} options={options} />
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function AnimatedReports() {
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: [5000, 7000, 6000, 8000, 9000, 7500, 9500],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Previous Year Sales ($)",
        data: [4500, 6500, 5500, 7500, 8500, 7000, 8800],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Revenue ($)",
        data: [3000, 4500, 4000, 5000, 6000, 5500, 6200],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            family: "Inter, sans-serif",
          },
        },
      },
      title: {
        display: true,
        text: "Sales & Revenue Overview",
        font: {
          size: 18,
          weight: "bold",
          family: "Inter, sans-serif",
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: {
          size: 14,
          family: "Inter, sans-serif",
        },
        bodyFont: {
          size: 12,
          family: "Inter, sans-serif",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200, 200, 200, 0.4)",
        },
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="p-8 bg-gray-100 min-h-screen font-inter"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">
          📊 Business Reports
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl"
          variants={itemVariants}
        >
          <h2 className="text-xl font-bold mb-4 text-gray-700">Sales Performance</h2>
          <Line data={salesData} options={{
            ...chartOptions,
            plugins: {
              ...chartOptions.plugins,
              title: {
                display: false,
              },
            },
          }} />
        </motion.div>

        <motion.div
          className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl"
          variants={itemVariants}
        >
          <h2 className="text-xl font-bold mb-4 text-gray-700">Revenue Trends</h2>
          <Line data={revenueData} options={{
            ...chartOptions,
            plugins: {
              ...chartOptions.plugins,
              title: {
                display: false,
              },
            },
          }} />
        </motion.div>
      </div>

      <motion.div
        className="mt-8 bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl"
        variants={itemVariants}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-700">Combined View</h2>
        <Line data={{
          labels: salesData.labels,
          datasets: [...salesData.datasets, ...revenueData.datasets],
        }} options={{
          ...chartOptions,
          plugins: {
            ...chartOptions.plugins,
            title: {
              ...chartOptions.plugins.title,
              text: "Combined Sales and Revenue",
            },
          },
        }} />
      </motion.div>
    </motion.div>
  );
}