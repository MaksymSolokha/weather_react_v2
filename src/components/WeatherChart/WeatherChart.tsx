import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { FC } from 'react'
import { IWeatherChart } from './types.ts'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
)

export const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
]

const WeatherChart: FC<IWeatherChart> = ({ weathersData }) => {
  const wind = weathersData?.list.map((wind) => wind.wind.speed)
  const days = weathersData?.list.map((day) => day.dt_txt)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Wind',
      },
    },
  }
  const data = {
    responsive: true,
    labels: days,
    datasets: [
      {
        fill: true,
        label: 'Wind',
        data: wind,
        borderColor: 'rgb(129,146,241)',
        backgroundColor: 'rgba(161,171,251,1)',
      },
    ],
  }
  return <Line options={options} data={data} />
}

export default WeatherChart
