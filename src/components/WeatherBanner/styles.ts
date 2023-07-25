import { Box, styled } from '@mui/material'
import background from '../../assets/image/1261682.jpg'

export const WeatherBannerContainer = styled(Box)`
  padding: 20px 15px;
  min-height: 400px;
  height: 100%;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 10px 5px 15px #76949c;
  border-radius: 25px;
  display: flex;
  gap: 50px;
  align-items: flex-end;
  justify-content: space-between;
`
