import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { IWeatherBannerProps } from './types.ts'
import { WeatherBannerContainer } from './styles.ts'
import { convertKelvinToCelsius } from '../../utils/utils.ts'

const WeatherBanner: FC<IWeatherBannerProps> = ({ currentWeatherDayData }) => {
  return (
    <WeatherBannerContainer>
      <Box>
        <Typography color={'#FFFFFF'} variant={'h1'}>
          {currentWeatherDayData?.main?.temp
            ? convertKelvinToCelsius(currentWeatherDayData.main.temp)
            : '0'}
        </Typography>
        <Typography color={'#FFFFFF'} variant={'h4'}>
          {currentWeatherDayData !== undefined
            ? currentWeatherDayData?.name
            : 'Your city'}
        </Typography>
      </Box>
      <Box component={'div'}>
        <Typography color={'#FFFFFF'} variant={'h5'}>
          18:00
        </Typography>
        <Typography color={'#FFFFFF'} variant={'h4'}>
          Sunset time, Monday
        </Typography>
      </Box>
    </WeatherBannerContainer>
  )
}

export default WeatherBanner
