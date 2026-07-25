import { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

/**
 * Small illustrative KPI chart (interventions par mois) shown on the
 * featured project card — a nod to the actual Power BI dashboard.
 */
export default function ProjectChart() {
  const data = useMemo(
    () => ({
      labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"],
      datasets: [
        {
          label: "Interventions",
          data: [42, 55, 48, 63, 58, 71],
          backgroundColor: "rgba(37, 99, 235, 0.85)",
          borderRadius: 6,
          barThickness: 14,
        },
      ],
    }),
    []
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0F172A",
        titleFont: { family: "Inter" },
        bodyFont: { family: "JetBrains Mono" },
        padding: 8,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748B", font: { size: 10, family: "Inter" } },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="h-28 w-full">
      <Bar data={data} options={options} />
    </div>
  );
}
