import { Backdrop, CircularProgress } from '@mui/material'
import { FC } from 'react'
import { ILoadingProgress } from './types.ts'

const LoadingProgress: FC<ILoadingProgress> = ({ startLoading }) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={startLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default LoadingProgress
