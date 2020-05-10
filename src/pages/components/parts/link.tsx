import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledPageLink = styled(Link)`
  color: blue;
  font-size: 16px;
  font-weight: bold;
  font-family: Arial;
  text-decoration: none;
  :hover {
    border-bottom: 2px solid blue;
  }
`
const StyledExternalLink = styled.a`
  color: blue;
  font-size: 16px;
  font-weight: bold;
  font-family: Arial;
  text-decoration: none;
  :hover {
    border-bottom: 2px solid blue;
  }
`
type attribute = {
  to: string
  text: string
}

export const PageLink: React.FC<attribute> = ({ to, text }) => {
  return <StyledPageLink to={to}>{text}</StyledPageLink>
}

export const ExternalLink: React.FC<attribute> = ({ to, text }) => {
  return <StyledExternalLink href={to}>{text}</StyledExternalLink>
}
