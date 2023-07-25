import { Box, styled } from '@mui/material'

export const WeatherMaxMinTempContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  padding: 15px;
  background: linear-gradient(
    90deg,
    rgba(161, 171, 251, 1) 19%,
    rgba(128, 145, 254, 1) 53%
  );
  border-radius: 25px;
`

export const WeatherMaxMinItems = styled(Box)`
  display: flex;
  align-items: flex-start;
  height: 100%;
  gap: 15px;
  justify-content: space-between;
  flex-direction: column;
`
