import WeatherInfo from '../WeatherInfo'
import humidityIcon from '../../assets/image/humidity-alt-svgrepo-com.svg'
import windIcon from '../../assets/image/wind.svg'
import sunsetIcon from '../../assets/image/sunset-svgrepo-com.svg'
import sunriseIcon from '../../assets/image/sunrise-svgrepo-com.svg'
import { FC } from 'react'
import { convertUtxToData } from '../../utils/utils.ts'
import { IWeatherInfoCard } from './types.ts'
import {
  WeatherInfoCardContainer,
  WeatherInfoItemsContainer,
} from './styled.ts'

const WeatherInfoCard: FC<IWeatherInfoCard> = ({
  wind,
  humidity,
  sunrise,
  sunset,
}) => {
  const sunsetTime = convertUtxToData(sunset!)
  const sunriseTime = convertUtxToData(sunrise!)
  return (
    <WeatherInfoCardContainer>
      <WeatherInfoItemsContainer>
        <WeatherInfo
          img={humidityIcon}
          weatherInfoTitle={'Humidity'}
          weatherInfoValue={humidity !== undefined ? `${humidity} %` : 0}
        />
        <WeatherInfo
          img={windIcon}
          weatherInfoTitle={'Wind'}
          weatherInfoValue={wind !== undefined ? wind : 0}
        />
      </WeatherInfoItemsContainer>
      <WeatherInfoItemsContainer>
        <WeatherInfo
          img={sunsetIcon}
          weatherInfoTitle={'Sunset'}
          weatherInfoValue={sunset !== undefined ? sunsetTime : 0}
        />
        <WeatherInfo
          img={sunriseIcon}
          weatherInfoTitle={'Sunrise'}
          weatherInfoValue={sunrise !== undefined ? sunriseTime : 0}
        />
      </WeatherInfoItemsContainer>
    </WeatherInfoCardContainer>
  )
}

export default WeatherInfoCard
