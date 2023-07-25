import { Typography } from '@mui/material'
import sun from '../../assets/image/sun-2-svgrepo-com.svg'
import { Image, WeeklyWeatherContainer, WeeklyWeatherItem } from './styles.ts'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const WeeklyWeather = () => {
  return (
    <WeeklyWeatherContainer>
      {days.map((day) => (
        <WeeklyWeatherItem key={day}>
          <Typography fontSize={20}>{day}</Typography>
          <Image src={sun} alt="sun" />
          <Typography fontSize={18}>25</Typography>
        </WeeklyWeatherItem>
      ))}
    </WeeklyWeatherContainer>
  )
}

export default WeeklyWeather
