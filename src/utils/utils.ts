import axios from 'axios'

export const convertUtxToData = (utx: number) => {
  const utxNum: number | null = utx
  const dateObject = new Date(utxNum * 1000)
  const hour = dateObject.toLocaleString('en-US', { hour: 'numeric' })
  return hour
}

export const convertKelvinToCelsius = (kelvin: number) => {
  return Math.round(kelvin - 273.15)
}

export const fetchCurrentDayWeatherData = async (city: string) => {
  const response = await axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20e48164ba2d3c013d422df5297f3530`,
  )
  const data = await response.data

  return data
}

export const fetchForecastWeathersData = async (city: string) => {
  const response = await axios(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=20e48164ba2d3c013d422df5297f3530`,
  )
  const data = await response.data
  return data
}
