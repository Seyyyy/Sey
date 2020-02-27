import React, { ComponentType } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
// import { makeStyles } from '@material-ui/core/styles'
import theme from '../../GlobalTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// const useStyle = makeStyles({
//   root: {},
// })

type DialogProps = {
  Component: ComponentType
  title: string
  open: boolean
  onCloseEvent: () => void
  color?: string
}

const DialogUI: React.FC<DialogProps> = ({
  Component,
  title,
  open,
  onCloseEvent,
  color = theme.palette.primary.main,
}) => {
  const paperProps = {
    style: {
      backgroundColor: color,
    },
  }

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'md'}
      PaperProps={paperProps}
      open={open}
      onBackdropClick={onCloseEvent}
    >
      {/* <DialogTitle>{title}</DialogTitle> */}
      <Component />
    </Dialog>
  )
}

export default DialogUI
