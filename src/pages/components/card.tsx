import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from './parts/link'

const Grid = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 100%;
  display: block;
`

type attributes = {
  imgSrc: string
  title: string
  description: string
  to: string
  text: string
}

const Card: React.FC<attributes> = ({
  imgSrc,
  title,
  description,
  to,
  text,
}) => {
  return (
    <Grid>
      <img src={imgSrc} />
      <p>{title}</p>
      <p>{description}</p>
      <ExternalLink to={to} text={text}></ExternalLink>
    </Grid>
  )
}

export default Card
