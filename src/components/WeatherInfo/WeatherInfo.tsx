import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { IWeatherInfoProps } from './types.ts'
import { Image, WeatherInfoContainer } from './styled.ts'

const WeatherInfo: FC<IWeatherInfoProps> = ({
  img,
  weatherInfoTitle,
  weatherInfoValue,
}) => {
  return (
    <WeatherInfoContainer>
      <Image src={img} alt={weatherInfoTitle} />
      <Box>
        <Typography fontSize={24}>{weatherInfoTitle}</Typography>
        <Typography fontSize={18}>{weatherInfoValue}</Typography>
      </Box>
    </WeatherInfoContainer>
  )
}

export default WeatherInfo
