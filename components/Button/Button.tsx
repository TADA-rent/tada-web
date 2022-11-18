'use client'

import Link from 'next/link'
import clsx from 'clsx'

export type ButtonProps = {
  /** Button children element */
  label: React.ReactNode
  /** onClick event */
  onClick?: (...args: any[]) => any
  /** URL that button should resolve to - makes a link  */
  url?: string
  /** Should link to open in new window  */
  openInNewWindow?: boolean
  /** What type of button element  */
  type?: 'button' | 'submit' | 'reset'
  /** Button size  */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Should link open interally and use NextJS Routing  */
  internal?: boolean
  /** Show forward chevron  */
  forward?: boolean
  /** Show back chevron  */
  back?: boolean
  /** Additional classNames  */
  className?: string

  withIcon?: JSX.Element
  /** Should button be disabled  */
  disabled?: boolean
  /** Rounded button  */
  rounded?: boolean
  /** Style of button  */
  variant?: 'primary' | 'secondary' | 'hollow'
} & React.ComponentPropsWithoutRef<'button'>

export const Button: React.FC<ButtonProps> = ({
  url,
  internal = false,
  label,
  rounded = false,
  type = 'button',
  variant = 'primary',
  onClick = () => null,
  openInNewWindow = false,
  size = 'md',
  className,
  forward = false,
  back = false,
  disabled = false,
  withIcon,
}: ButtonProps) => {
  const classNames = clsx(
    'btn',
    variant && `btn-${variant}`,
    rounded && 'btn-rounded',
    size && `btn-${size}`,
    className,
  )

  if (url) {
    if (internal) {
      return (
        <Link href={url} className={clsx('relative peer', classNames)}>
          {withIcon}
          {back ? <Chevron className="mr-2 rotate-180" /> : null}
          <span>{label}</span>
          {forward ? <Chevron className="ml-2" /> : null}
        </Link>
      )
    } else {
      return (
        <a
          href={url}
          className={clsx('relative peer', classNames)}
          target={openInNewWindow ? '_blank' : ''}
          rel="noreferrer"
        >
          {withIcon}
          {back ? <Chevron className="mr-2 rotate-180" /> : null}
          <span>{label}</span>
          {forward ? <Chevron className="ml-2" /> : null}
        </a>
      )
    }
  }
  return (
    <button className={clsx('relative peer', classNames)} type={type} onClick={onClick} disabled={disabled}>
      {withIcon}
      {back ? <Chevron className="mr-2 rotate-180" /> : null}
      <span>{label}</span>
      {forward ? <Chevron className="ml-2" /> : null}
    </button>
  )
}

const Chevron = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    width="15"
    height="15"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
)
