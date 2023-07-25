import { Box, styled } from '@mui/material'

export const WeeklyWeatherContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`

export const WeeklyWeatherItem = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 1 10%;
  gap: 10px;
`

export const Image = styled('img')`
  width: 32px;
  height: 32px;
`
