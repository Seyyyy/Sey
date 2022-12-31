import { ComponentProps, ReactNode, FC } from 'react'
import styles from './Tooltip.module.css'
import { clsx } from 'clsx'

type Props = {
  children: ReactNode
  buttonProps?: ComponentProps<'button'>
  spanProps?: ComponentProps<'span'>
  tootipText: string
}

export const Tooltip: FC<Props> = (props) => {
  return (
    <button
      {...props.buttonProps}
      className={clsx(props.buttonProps?.className, styles.tooltip)}
    >
      {props.children}
      <span
        {...props.spanProps}
        className={clsx(props.spanProps?.className, styles.tooltipText)}
      >
        {props.tootipText}
      </span>
    </button>
  )
}
