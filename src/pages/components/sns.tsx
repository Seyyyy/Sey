import React from 'react'
import styled from 'styled-components'
import { SvgGithub, SvgNote, SvgTwitter } from './parts/icons'

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 5vh;
  margin-bottom: 10vh;
`

const Sns = () => {
  return (
    <Root>
      <a href="https://github.com/Seyyyy">
        <SvgGithub width={'40px'} height={'40px'} />
      </a>
      <a href="https://twitter.com/seyyyysaid">
        <SvgTwitter width={'40px'} height={'40px'} />
      </a>
      <a href="https://note.com/seyyyy">
        <SvgNote width={'40px'} height={'40px'} />
      </a>
    </Root>
  )
}

export default Sns
