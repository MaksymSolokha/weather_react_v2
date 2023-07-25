import { Box, styled } from '@mui/material'

export const WeatherInfoCardContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 25px;
  width: 100%;
  padding: 15px;
  background-color: #fff;
  border-radius: 25px;
  border: 2px solid #ababcb;
`

export const WeatherInfoItemsContainer = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 25px;
  justify-content: space-between;
  flex-direction: column;
`
