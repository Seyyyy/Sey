import React from 'react'
import styled from 'styled-components'

const UnderLine = styled.h1`
  border-bottom: solid 1px;
`
type attribute = {
  title: string
}
const Subtitle: React.FC<attribute> = ({ title }) => {
  return (
    <React.Fragment>
      <UnderLine>{title}</UnderLine>
    </React.Fragment>
  )
}

export default Subtitle
