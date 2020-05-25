import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledPageLink = styled.a`
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
  return <Link href={to}><StyledPageLink>{text}</StyledPageLink></Link>
}

export const ExternalLink: React.FC<attribute> = ({ to, text }) => {
  return <StyledExternalLink href={to}>{text}</StyledExternalLink>
}
