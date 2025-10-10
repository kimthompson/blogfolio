import cn from 'classnames'
import { colorDict, SkillToggles } from '~/data/projects'

interface SkillFiltersProps {
  skillToggles: SkillToggles[]
  handleSkillToggle: Function
}

export default function SkillFilters({ skillToggles, handleSkillToggle }: SkillFiltersProps) {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-2">
        {skillToggles.map((s) => {
          return (
            <button
              key={s.toolName}
              value={s.toolName}
              // @ts-ignore
              onClick={handleSkillToggle}
              className={cn(
                'badge',
                'font-semibold',
                'hover:opacity-80',
                'hover:cursor-pointer',
                `badge-${colorDict(s.category)}`,
                !s.isActive && 'badge-outline',
                s.isActive,
              )}>
              {s.toolName}
            </button>
          )
        })}
      </div>
    </>
  )
}
