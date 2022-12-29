import { ReactNode } from 'react'
import style from './fade.module.css'

type Props = {
  children: ReactNode
}

export const Fade = (props: Props) => {
  return <div className={style.root}>{props.children}</div>
}
