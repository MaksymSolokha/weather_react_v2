import { Alert, Slide, Snackbar } from '@mui/material'
import { FC } from 'react'
import { IErrorAlert } from './types.ts'

const ErrorAlert: FC<IErrorAlert> = ({ open, setOpen }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      TransitionComponent={Slide}
    >
      <Alert variant="filled" severity="error">
        City not found!
      </Alert>
    </Snackbar>
  )
}

export default ErrorAlert
