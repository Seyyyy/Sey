import React from 'react'
import styled from 'styled-components'
import Subtitle from './components/subtitle'

//flexboxにしてコンポーネントの上下間隔を一気に設定したほうが個別にmarginを設定するよりか統一性が取りやすい
const Root = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 5vh;
  font-weight: bold;
`

const Profile = () => {
  return (
    <Root>
      <Subtitle title={'Profile'} />
      <table>
        <tbody>
          <tr>
            <td>{'スキル'}</td>
            <td>
              {'TypeScript'}
              <br />
              {'Node js'}
              <br />
              {'Ruby'}
              <br />
              {'Python'}
              <br />
              {'React'}
              <br />
              {'Google apps script'}
              <br />
            </td>
          </tr>
          <tr>
            <td>{'やってること'}</td>
            <td>
              {'Webデザイン'}
              <br />
              {'Webフロントエンド'}
              <br />
              {'UI/UX'}
              <br />
              {'色彩心理学'}
              <br />
              {'イラスト'}
              <br />
              {'チームリーディング'}
              <br />
            </td>
          </tr>
          <tr>
            <td>{'好きなもの'}</td>
            <td>
              {'アトリエシリーズ'}
              <br />
              {'ボードゲーム'}
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </Root>
  )
}

export default Profile
