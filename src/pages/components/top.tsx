import React from 'react'
import styled from 'styled-components'
import { SvgKyoryu as Kyoryu } from './parts/icons'
import BreadCrumbs from './breadCrumbs'

const Root = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 5vh;
  margin-bottom: 10vh;
  width: 80%;
`

const Title = styled.p`
  font-size: 48px;
  font-weight: bold;
`

const Top = () => {
  return (
    <Root>
      <Kyoryu width={'80px'} height={'80px'} />
      <Title>{'Sey'}</Title>
      <BreadCrumbs />
    </Root>
  )
}

export default Top
