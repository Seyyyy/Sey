import React from 'react'
import theme from '../GlobalTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SPMenu from './elements/SPMenu'
import PCMenu from './elements/PCMenu'

const Header = () => {
  const media = useMediaQuery(theme.breakpoints.down('xs'))
  return <React.Fragment>{media ? <SPMenu /> : <PCMenu />}</React.Fragment>
}

export default Header
