import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Bread from './parts/bread'

const FlexRoot = styled.div`
  display: flex;
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 200px;
  justify-content: space-between;
`

const BreadCrumbs = () => {
  const router = useRouter()
  let root = true
  let profile = true

//   この方法は汎用的ではないのでhooksでbooleanがとってこれたら嬉しいよね
  if (router.asPath == '/') {
    root = true
    profile = false
  } else {
    root = false
    profile = true
  }

  return (
    <FlexRoot>
      <Bread to={'/'} text={'Top'} abled={root} />
      <p>{'>'}</p>
      <Bread to={'/profile'} text={'Profile'} abled={profile} />
    </FlexRoot>
  )
}

export default BreadCrumbs
