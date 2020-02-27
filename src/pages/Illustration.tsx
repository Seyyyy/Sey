import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import theme from '../GlobalTheme'
import illustratonList from '../config/illustrationList'
import Dialog from '../components/elements/Dialog'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '80vw',
    margin: 'auto',
    paddingTop: '100px',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    height: '230px',
    [theme.breakpoints.down('xs')]: {
      padding: '0px',
      paddingBottom: '10px',
    },
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  buttonBase: {
    width: '100%',
    height: '100%',
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary.light,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imgDialog: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
})

type ImageProps = {
  src: string
  alt: string
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const DialogImage = () => {
    return <img className={classes.imgDialog} src={src} alt={alt} />
  }
  const hundleClick = () => {
    console.log(alt)
    setOpen(true)
  }

  const closeDialog = () => {
    setOpen(false)
  }
  return (
    <React.Fragment>
      <Dialog
        Component={DialogImage}
        title={alt}
        open={open}
        onCloseEvent={closeDialog}
      />
      <ButtonBase className={classes.buttonBase} onClick={hundleClick}>
        <span className={classes.imageBackdrop} />
        <img className={classes.img} src={src} alt={alt} />
      </ButtonBase>
    </React.Fragment>
  )
}

const Illustration = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={0} className={classes.root}>
      {illustratonList.map(obj => (
        <Grid item key={obj.img} md={4} sm={12} className={classes.gridItem}>
          <Image src={obj.img} alt={obj.title} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Illustration
