import clsx from 'clsx'
interface Props {
  children: React.ReactNode
  className?: string
}

export const Body: React.FC<Props> = ({ children, className = '' }: Props) => {
  const cn = clsx('body', className)

  return <p className={cn}>{children}</p>
}
