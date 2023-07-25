import { Typography } from '@mui/material'
import { FC } from 'react'
import { IMaxMinTempCard } from './types.ts'
import { convertKelvinToCelsius } from '../../utils/utils.ts'
import { WeatherMaxMinItems, WeatherMaxMinTempContainer } from './styled.ts'

const WeatherMaxMinTempCard: FC<IMaxMinTempCard> = ({ maxTemp, minTemp }) => {
  return (
    <WeatherMaxMinTempContainer>
      <WeatherMaxMinItems>
        <Typography color={'#FFF'} variant={'h5'}>
          Max Temp
        </Typography>
        <Typography color={'#FFF'} fontSize={18}>
          {maxTemp !== undefined ? convertKelvinToCelsius(maxTemp) : 0}
        </Typography>
      </WeatherMaxMinItems>
      <WeatherMaxMinItems>
        <Typography color={'#FFF'} variant={'h5'}>
          Min Temp
        </Typography>
        <Typography color={'#FFF'} fontSize={18}>
          {minTemp !== undefined ? convertKelvinToCelsius(minTemp) : 0}
        </Typography>
      </WeatherMaxMinItems>
    </WeatherMaxMinTempContainer>
  )
}

export default WeatherMaxMinTempCard
