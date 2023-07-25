import { Box, styled } from '@mui/material'

export const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding: 20px 40px;
`

export const MainContentContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  flex-shrink: 1;
  min-width: 100%;
`

export const MainInfoContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  flex: 1 1 auto;
`

export const MainChartContainer = styled(Box)`
  flex-grow: 1;
  height: 100%;
  width: 100%;
`

export const MainWeeklyContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 40px;
  flex-grow: 1;
  background-color: #fff;
  border-radius: 25px;
  border: 2px solid #ababcb;
  padding: 15px;
`
