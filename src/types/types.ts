type City = {
  country: string
  id: number
  name: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
}

type WeatherTemp = {
  feels_like: number
  grnd_level: number
  humidity: number
  pressure: number
  sea_level: number
  temp: number
  temp_kf: number
  temp_max: number
  temp_min: number
}

type List = {
  clouds: { all: number }
  dt: number
  dt_txt: string
  main: WeatherTemp
  visibility: number
  weather: {
    id: number
    main: string
    description: string
  }
  wind: Wind
}

type Wind = {
  deg: number
  gust: number
  speed: number
}

export interface IWeathersData {
  city: City
  list: [List]
}

export interface ICurrentWeatherDay {
  main: WeatherTemp
  name: string
  weather: {
    id: number
    main: string
    description: string
  }
  wind: Wind
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
}
