import React from 'react'
import styled from 'styled-components'
// import Card from './components/card'
import Subtitle from './components/subtitle'
import { PageLink } from './components/parts/link'
import Sns from './components/sns'

//flexboxにしてコンポーネントの上下間隔を一気に設定したほうが個別にmarginを設定するよりか統一性が取りやすい
const Root = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 5vh;
  font-weight: bold;
`

const Home = () => {
  return (
    <Root>
      <Subtitle title={'About'} />
      <p>{'Hello World!'}</p>
      <p>{'Sey(セイ)と申します。'}</p>
      <p>
        {
          '普段はイラストやコーディングをしています。波長が合うと思った人はTwitterでDMをくれたら嬉しいです。'
        }
      </p>
      <PageLink to={'/profile'} text={'Profile >'} />
      <Sns />
      {/* <Subtitle title={'Work'}/>
        <Card 
          imgSrc={''}
          title={''}
          description={''}
          to={''}
          text={'more info >'}
        /> */}
    </Root>
  )
}

export default Home
