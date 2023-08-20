export interface CommonProps {
  style?: React.CSSProperties
  prefixCls?: string
  className?: string
  rootClassName?: string
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
