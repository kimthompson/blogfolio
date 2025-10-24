import { createLazyFileRoute } from '@tanstack/react-router'
import MonoCursiveName from '~/components/svgs/mono-cursive-name'
import { colorDict, skillsAndTools } from '~/data/projects'
import cn from 'classnames'
import { useEffect } from 'react'
import { summary, experience } from '~/data/resume'

export const Route = createLazyFileRoute('/resume/generate')({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'cyberdream-light')
  }, [])

  return (
    <div className="w-full max-w-256 mx-auto px-2 flex-col mb-24">
      <section className="flex flex-col w-full items-center">
        <button className="btn btn-lg btn-primary mt-8" onClick={() => window.print()}>
          Print
        </button>
      </section>
      <div className="w-full max-w-130 mx-auto flex flex-col -mb-12 mt-2">
        <MonoCursiveName className="max-w-88 w-full fill-base-content stroke-base-content" />
      </div>
      <section className="mb-4">
        <p className="text-md font-light italic">{summary}</p>
      </section>
      <section className="flex flex-col">
        <h2 className="text-xl font-cascadia font-semibold">Professional Experience</h2>
        {experience.map((ex) => {
          return (
            <div key={ex.title} className="mb-3">
              <div className="">
                <div className="flex flex-row justify-between">
                  <h3 className="text-sm font-bold italic">{ex.employer}, {ex.location}</h3>
                  <h3 className="text-sm font-regular text-stone-700">{ex.tenure}</h3>
                </div>
                <h4 className="text-sm italic -mt-1 mb-1">{ex.title}</h4>
              </div>
              {ex.relevantSkills && ex.relevantSkills.length > 0 && (
                <div className="flex flex-row flex-wrap gap-1 mb-2">
                  {ex.relevantSkills.map((skill, idx) => {
                    const tool = skillsAndTools.find((s) => s.toolName === skill)
                    if (tool) {
                      return (
                        <div
                          key={`skill-${idx}`}
                          className={cn(
                            'badge badge-xs',
                            'font-semibold',
                            `badge-${colorDict(tool.category)}`,
                            'cursor-default',
                          )}>
                          {tool.toolName}
                        </div>
                      )
                    }
                  })}
                </div>
              )}
              <p className="text-sm">{ex.description}</p>
              {ex.clients && ex.clients.map((client, idx) => {
                return ( <div key={`client-${idx}`} className="mb-1">
                    <p className="text-sm"><span className="font-semibold">{client.name}</span> — {client.description}</p>
                    <div className="flex flex-row flex-wrap gap-1 my-1">
                      {client.relevantSkills && client.relevantSkills.map((skill, idx) => {
                        const tool = skillsAndTools.find((s) => s.toolName === skill)
                        if (tool) {
                          return (
                            <div
                              key={`skill-${idx}`}
                              className={cn(
                                'badge badge-xs',
                                'font-semibold',
                                `badge-${colorDict(tool.category)}`,
                                'cursor-default',
                              )}>
                              {tool.toolName}
                            </div>
                          )
                        }
                      })}
                    </div>
                    <ul className="list-disc text-sm ml-8 mt-2 mb-2">
                      {client.bulletPoints && client.bulletPoints.map((point, i) => {
                        return (
                          <li key={`cpt-${i}`}>{point}</li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
              <ul className="list-disc ml-8 text-sm">
                {ex.bulletPoints && ex.bulletPoints.map((bullet, idx) => {
                  return (
                    <li key={`bullet-${idx}`}>{bullet}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </section>
      <section>
        <h2 className="text-xl font-cascadia font-semibold">Education</h2>
        <div className="flex flex-row justify-between">
          <h3 className="text-sm font-bold">University of Minnesota — Twin Cities</h3>
          <h3 className="text-sm font-regular opacity-70">2015</h3>
        </div>
        <ul>
          <li className="text-sm italic">B.A. Computer Science</li>
          <li className="text-sm italic">B.A. Journalism</li>
        </ul>
      </section>
    </div>
  )
}
