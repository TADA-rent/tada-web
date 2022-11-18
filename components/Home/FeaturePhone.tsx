import clsx from 'clsx'

type FeaturePhoneProps = {
  color?: 'black' | 'silver' | 'gold' | 'purple'
}

export const FeaturePhone: React.FC<FeaturePhoneProps> = ({ color = 'black' }) => {
  return (
    <div
      className={clsx(
        'aspect-[9/18] bg-no-repeat block bg-cover ',
        color === 'black' && `bg-blackphone`,
        color === 'silver' && 'bg-blackphone',
        color === 'purple' && 'bg-purplephone',
        color === 'gold' && 'bg-goldphone',
      )}
    />
  )
}
