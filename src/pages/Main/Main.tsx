import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import WeatherBanner from '../../components/WeatherBanner'
import WeatherInfoCard from '../../components/WeatherInfoCard'
import WeatherMaxMinTempCard from '../../components/WeatherMaxMinTempCard'
import WeatherChart from '../../components/WeatherChart'
import { ICurrentWeatherDay, IWeathersData } from '../../types/types.ts'
import useCurrentPosition from '../../hooks/useCurrenttPosition.ts'
import { API_KEY } from '../../constants/constants.ts'
import {
  MainContainer,
  MainContentContainer,
  MainInfoContainer,
  MainWeeklyContainer,
} from './styled.ts'
import {
  fetchCurrentDayWeatherData,
  fetchForecastWeathersData,
} from '../../utils/utils.ts'
import LoadingProgress from '../../components/LoadingProgress/LoadingProgress.tsx'
import axios from 'axios'

const Main = () => {
  const [currentWeatherDayData, setCurrentWeatherDayData] =
    useState<ICurrentWeatherDay>()

  const [weathersData, setWeathersData] = useState<IWeathersData>()

  const [open, setOpen] = useState(false)

  const [loading, setLoading] = useState<boolean>(false)

  const currentPosition = useCurrentPosition()

  useEffect(() => {
    const fetchCurrentWeatherPosition = async () => {
      if (!currentPosition) return
      const { latitude, longitude } = currentPosition || {}
      const response = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
      )
      const data = await response.data
      setCurrentWeatherDayData(data)
    }
    const fetchForecastWeathersPosition = async () => {
      if (!currentPosition) return
      const { latitude, longitude } = currentPosition || {}
      const response = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
      )
      const data = await response.data
      setWeathersData(data)
    }
    try {
      fetchCurrentWeatherPosition()
      fetchForecastWeathersPosition()
    } catch (e) {
      console.log(e)
    }
  }, [currentPosition])

  const onSearch = async (value: string) => {
    try {
      setLoading(true)
      const currentWeather = await fetchCurrentDayWeatherData(value)
      setCurrentWeatherDayData(currentWeather)
      const forecast = await fetchForecastWeathersData(value)
      setWeathersData(forecast)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setOpen(true)
    } finally {
      setLoading(false)
    }
  }
  console.log(currentWeatherDayData, weathersData)

  return (
    <MainContainer>
      <LoadingProgress startLoading={loading} />
      <Header open={open} setOpen={setOpen} onSearch={onSearch} />
      <WeatherBanner currentWeatherDayData={currentWeatherDayData} />
      <MainContentContainer>
        <MainInfoContainer>
          <WeatherInfoCard
            wind={currentWeatherDayData?.wind?.speed}
            humidity={currentWeatherDayData?.main?.humidity}
            sunrise={currentWeatherDayData?.sys?.sunrise}
            sunset={currentWeatherDayData?.sys?.sunset}
          />
          <WeatherMaxMinTempCard
            maxTemp={currentWeatherDayData?.main?.temp_max}
            minTemp={currentWeatherDayData?.main?.temp_min}
          />
        </MainInfoContainer>
        <MainWeeklyContainer>
          <WeatherChart weathersData={weathersData} />
          {/*<WeeklyWeather />*/}
        </MainWeeklyContainer>
      </MainContentContainer>
    </MainContainer>
  )
}

export default Main
