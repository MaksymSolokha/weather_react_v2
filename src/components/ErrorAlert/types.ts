import { SnackbarOrigin } from '@mui/material'

export interface IErrorAlert {
  open: boolean
  setOpen: (open: boolean) => void
}

export interface State extends SnackbarOrigin {
  open: boolean
}
