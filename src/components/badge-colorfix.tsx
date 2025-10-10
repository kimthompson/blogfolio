import cn from 'classnames'

export default function BadgeColorfix() {
  return (
    <div className={cn(
      'badge-primary',
      'badge-secondary',
      'badge-accent',
      'badge-success',
      'badge-warning',
      'badge-error',
      'badge-info',
      'hidden',
    )}>colorfix</div>
  )
}
