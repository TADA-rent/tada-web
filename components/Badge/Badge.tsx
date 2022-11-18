import clsx from 'clsx'

interface BadgeProps {
  label: React.ReactNode
  large?: boolean
  withDot?: boolean
  rounded?: boolean
  // withRemove?: boolean
  color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
  // onRemove?: () => void
}

export const Badge = ({
  label,
  large = false,
  withDot = false,
  rounded = false,
  // withRemove = false,
  color = 'green',
}: // onRemove = () => null,
BadgeProps) => (
  <span className={clsx('badge', color && `badge-${color}`, large && 'badge-lg', rounded && 'badge-rounded')}>
    {withDot && (
      <svg className={clsx('badge-dot', large && 'badge-dot-lg')} fill="currentColor" viewBox="0 0 8 8">
        <circle cx={4} cy={4} r={3} />
      </svg>
    )}

    {label}
  </span>
)
