import { createLazyFileRoute } from '@tanstack/react-router'
import BusinessCards from '~/components/business-cards'
import { colorDict, corpoProjects, indieProjects, Project, SkillToggles, skillsAndTools } from '~/data/projects'
import cn from 'classnames'
import { LinkIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import _ from 'lodash'
import BadgeColorfix from '~/components/badge-colorfix'
import SkillFilters from '~/components/skill-filters'

export const Route = createLazyFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  const defaultSkillToggles = skillsAndTools.map(s => {
    return {
      toolName: s.toolName,
      category: s.category,
      isActive: false,
    }
  })
  const [skillToggles, setSkillToggles] = useState<SkillToggles[]>(defaultSkillToggles)
  const [activeCorpoProjects, setActiveCorpoProjects] = useState<Project[]>(corpoProjects)
  const [activeIndieProjects, setActiveIndieProjects] = useState<Project[]>(indieProjects)

  const handleSkillToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // @ts-ignore
    const skillToggle = skillToggles.find((s) => s.toolName === e.target.value)
    // @ts-ignore
    const otherToggles = skillToggles.filter((s) => s.toolName !== e.target.value)
    if (skillToggle) {
      setSkillToggles([
        {
          toolName: skillToggle.toolName,
          category: skillToggle.category,
          isActive: !skillToggle.isActive,
        },
        ...otherToggles,
      ])
    }
  }

  useEffect(() => {
    const areFiltersActive = skillToggles.filter((s) => s.isActive).length
    if (areFiltersActive === 0) {
      setActiveCorpoProjects(corpoProjects)
      setActiveIndieProjects(indieProjects)
    } else {
      const activeFilters = skillToggles.map((t) => t.isActive ? t.toolName : null).filter((t) => t)
      const filteredCorpoProjects = corpoProjects.map((p) => {
        const intersection = _.intersection(p.technologies, activeFilters)
        if (intersection.length > 0) {
          return p
        }
      }).filter(p => p) as Project[]
      const filteredIndieProjects = indieProjects.map((p) => {
        const intersection = _.intersection(p.technologies, activeFilters)
        if (intersection.length > 0) {
          return p
        }
      }).filter(p => p) as Project[]
      setActiveCorpoProjects(filteredCorpoProjects)
      setActiveIndieProjects(filteredIndieProjects)
    }
  }, [skillToggles])

  return (
    <div className="w-full max-w-256 mx-auto px-2 mt-20 flex-col gap-4 items-center justify-center">
      <BadgeColorfix />
      <SkillFilters skillToggles={skillToggles} handleSkillToggle={handleSkillToggle} />

      {activeCorpoProjects.length > 0 && <h1 className="text-2xl font-cascadia font-semibold mt-8 mb-4">Corpo Projects</h1>}
      <div className="flex flex-col gap-4">
        {activeCorpoProjects.sort((a, z) => z.year - a.year).map((project) => {
          return (
            <div key={project.name} className="card bg-base-200 shadow-sm w-full">
              <div className="card-body">
                <h2 className="card-title flex flex-row justify-between">{project.name}<span className="text-xs opacity-50">{project.year}</span></h2>
                <p>{project.notes}</p>
              </div>
              <div className="card-actions justify-between items-center mx-4">
                <div className="flex flex-row flex-wrap gap-1">
                  {project.technologies.map((t, idx) => {
                    const tool = skillsAndTools.find((s) => s.toolName === t)
                    if (tool) {
                      return (
                        <div
                          key={idx}
                          className={cn(
                            'badge badge-xs',
                            'font-semibold',
                            `badge-${colorDict(tool.category)}`,
                            'cursor-default',
                            !project.link && 'mb-2',
                          )}>
                          {tool.toolName}
                        </div>
                      )
                    }
                  })}
                </div>
                {project.link && (
                  <button role="button" className="btn btn-sm btn-circle mb-1 -mr-2">
                    <LinkIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
      {activeIndieProjects.length > 0 && <h1 className="text-2xl font-cascadia font-semibold mt-8 mb-4">Indie Projects</h1>}
      <div className="flex flex-col gap-4">
        {activeIndieProjects.sort((a, z) => z.year - a.year).map((project) => {
          return (
            <div key={project.name} className="card bg-base-200 shadow-sm w-full">
              <div className="card-body">
                <h2 className="card-title flex flex-row justify-between">{project.name}<span className="text-xs opacity-50">{project.year}</span></h2>
                <p>{project.notes}</p>
              </div>
              <div className="card-actions justify-between items-center mx-4">
                <div className="flex flex-row flex-wrap gap-1">
                  {project.technologies.map((t, idx) => {
                    const tool = skillsAndTools.find((s) => s.toolName === t)
                    if (tool) {
                      return (
                        <div
                          key={idx}
                          className={cn(
                            'badge badge-xs',
                            'font-semibold',
                            `badge-${colorDict(tool.category)}`,
                            'cursor-default',
                            !project.link && 'mb-2',
                          )}>
                          {tool.toolName}
                        </div>
                      )
                    }
                  })}
                </div>
                {project.link && (
                  <button role="button" className="btn btn-sm btn-circle mb-1 -mr-2">
                    <LinkIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <BusinessCards />
    </div>
  )
}
