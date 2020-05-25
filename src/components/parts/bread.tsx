import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

type link = {
  active: boolean
}

// props.activeがタグ付きテンプレートリテラルでbooleanからstringになってる？
// なのでwarningがでているのでなおす必要あり
const CustomLink = styled.a<link>`
  pointer-events: ${(props) => (props.active == true ? 'none' : 'auto')};
  text-decoration: ${(props) =>
    props.active == true ? 'line-through' : 'none'};
  color: ${(props) => (props.active == true ? '#283238' : 'blue')};
  margin: auto 0;
  font-size: 16px;
  font-family: Arial;
  font-weight: bold;
`

type attribute = {
  to: string
  text: string
  abled: boolean
}

const Bread: React.FC<attribute> = ({ to, text, abled }) => {
  return (
    <React.Fragment>
      <Link href={to}>
        <CustomLink active={abled}>
          {text}
        </CustomLink>
      </Link>
    </React.Fragment>
  )
}

export default Bread
