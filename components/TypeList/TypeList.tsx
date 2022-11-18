import clsx from 'clsx'
import { v4 } from 'uuid'

interface Props {
  items: React.ReactNode[]
  title?: React.ReactNode
  className?: string
}

export const TypeList: React.FC<Props> = ({ items, className = '', title }: Props) => {
  const cn = clsx('typelist', className)

  return (
    <>
      {title && <p className="body mb-0">{title}</p>}
      <ul className={cn}>
        {items.map((item) => (
          <li key={v4()}>{item}</li>
        ))}
      </ul>
    </>
  )
}
