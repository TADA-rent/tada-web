import clsx from 'clsx'
interface Props {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm'
  className?: string
}

export const Title: React.FC<Props> = ({ as = 'h1', children, className = '', size = 'md' }: Props) => {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements

  const cn = clsx('title', className, size && `title-${size}`)

  return <CustomTag className={cn}>{children}</CustomTag>
}
