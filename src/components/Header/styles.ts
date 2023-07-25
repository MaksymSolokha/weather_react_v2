import { Box, styled } from '@mui/material'

export const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 15px;
`

export const CityInput = styled('input')`
  width: 200px;
  padding: 10px;
  border: 1px solid #c0c0d8;
  border-radius: 10px;
  background: #ffffff;
  font-size: 14px;
`

export const HeaderInputContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`
