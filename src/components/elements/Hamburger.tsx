import React from 'react'
import theme from '../../GlobalTheme'
import { makeStyles } from '@material-ui/core'
import SvgIcon from '@material-ui/core/SvgIcon'
import IconButton from '@material-ui/core/IconButton'

type HamburgerProps = {
  handleClick: () => void
  handleClose: () => void
  transform: boolean
}

const useStyles = makeStyles({
  root: (props: HamburgerProps) =>
    props.transform
      ? {
          '& > svg': {
            transition: '200ms',
            '& > #Hamburger2_svg__line1': {
              transitionDuration: '0.4s',
              transitionTimingFunction: 'ease-in-out',
              transformOrigin: 'top left',
              transform: 'translate(4px, -1px) rotate(45deg)',
              stroke: 'black',
            },
            '& > #Hamburger2_svg__line2': {
              transitionDuration: '0.4s',
              transitionTimingFunction: 'ease-in-out',
              transformOrigin: 'bottom left',
              transform: 'translate(4px, 3px) rotate(-45deg)',
              stroke: 'black',
            },
          },
        }
      : {
          '& > svg': {
            transition: '200ms',
            '& > #Hamburger2_svg__line1': {
              transitionDuration: '0.4s',
              transitionTimingFunction: 'ease-in-out',
              transformOrigin: 'top left',
              transform: 'translate(-0px, -0px) rotate(0deg)',
              stroke: 'black',
            },
            '& > #Hamburger2_svg__line2': {
              transitionDuration: '0.4s',
              transitionTimingFunction: 'ease-in-out',
              transformOrigin: 'bottom left',
              transform: 'translate(-4px, -3px) rotate(0deg)',
              stroke: 'black',
            },
          },
        },
})

const SvgHamburger = () => {
  return (
    <svg
      id="Hamburger2_svg__\u30EC\u30A4\u30E4\u30FC_1"
      data-name="\u30EC\u30A4\u30E4\u30FC 1"
      viewBox="0 0 19 10"
      width="1em"
      height="1em"
    >
      <defs>
        <style>
          {'.Hamburger2_svg__cls-1{fill:none;stroke:#000;stroke-miterlimit:10}'}
        </style>
      </defs>
      <path
        id="Hamburger2_svg__line2"
        className="Hamburger2_svg__cls-1"
        d="M0 9.5h19"
      />
      <path
        id="Hamburger2_svg__line1"
        className="Hamburger2_svg__cls-1"
        d="M0 .5h19"
      />
    </svg>
  )
}

const Hamburger: React.FC<HamburgerProps> = ({
  handleClick,
  handleClose,
  transform,
}) => {
  const classes = useStyles({ handleClick, handleClose, transform })
  return (
    <React.Fragment>
      {transform ? (
        <IconButton onClick={handleClose}>
          <SvgIcon className={classes.root}>
            <SvgHamburger />
          </SvgIcon>
        </IconButton>
      ) : (
        <IconButton onClick={handleClick}>
          <SvgIcon className={classes.root}>
            <SvgHamburger />
          </SvgIcon>
        </IconButton>
      )}
    </React.Fragment>
  )
}

export default Hamburger
