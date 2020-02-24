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
  color?: string
}

const DialogUI: React.FC<DialogProps> = ({
  Component,
  title,
  open,
  color = theme.palette.primary.main,
}) => {
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'))
  const paperProps = {
    style: {
      backgroundColor: color,
    },
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth={'sm'}
      PaperProps={paperProps}
      open={open}
    >
      <DialogTitle>{title}</DialogTitle>
      <Component />
    </Dialog>
  )
}

export default DialogUI
