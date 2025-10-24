import { createLazyFileRoute } from '@tanstack/react-router'
import BadgeColorfix from '~/components/badge-colorfix'
import { colorDict, skillsAndTools } from '~/data/projects'
import cn from 'classnames'
import MonoCursiveName from '~/components/svgs/mono-cursive-name'
import { summary, experience } from '~/data/resume'
// import _ from 'lodash'

export const Route = createLazyFileRoute('/resume/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full max-w-256 mx-auto px-2 mt-20 flex-col items-center justify-center">
      <BadgeColorfix />
      <div className="w-full max-w-130 mx-auto flex flex-col items-center justify-center">
        <MonoCursiveName className="max-w-88 w-full fill-base-content stroke-base-content" />
      </div>
      <section className="mb-8 print-hoist">
        <p className="text-xl font-extralight italic">{summary}</p>
      </section>
      <section className="flex flex-col">
        <h2 className="text-3xl font-cascadia font-semibold mb-4">Professional Experience</h2>
        {experience.map((ex) => {
          return (
            <div key={ex.title} className="mb-8">
              <div className="">
                <div className="flex flex-row justify-between">
                  <h3 className="text-md font-bold italic">{ex.employer}, {ex.location}</h3>
                  <h3 className="font-regular opacity-70">{ex.tenure}</h3>
                </div>
                <h4 className="italic">{ex.title}</h4>
              </div>
              {ex.relevantSkills && ex.relevantSkills.length > 0 && (
                <div className="flex flex-row flex-wrap gap-1 my-2">
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
              <p className="mb-2">{ex.description}</p>
              {ex.clients && ex.clients.map((client, idx) => {
                return (
                  <div key={`client-${idx}`} className="mb-2">
                    <p><span className="font-semibold">{client.name}</span> — {client.description}</p>
                    <div className="flex flex-row flex-wrap gap-1 my-2">
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
                    <ul className="list-disc ml-8 mt-2 mb-4">
                      {client.bulletPoints && client.bulletPoints.map((point, i) => {
                        return (
                          <li key={`cpt-${i}`}>{point}</li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
              <ul className="list-disc ml-8">
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
        <h2 className="text-3xl font-cascadia font-semibold mb-4">Education</h2>
        <div className="flex flex-row justify-between">
          <h3 className="text-md font-bold">University of Minnesota — Twin Cities</h3>
          <h3 className="font-regular opacity-70">2015</h3>
        </div>
        <ul>
          <li className="italic">B.A. Computer Science</li>
          <li className="italic">B.A. Journalism</li>
        </ul>
      </section>
      <section className="flex flex-col w-full items-center">
        <a href="/kim-freechack-resume-print.pdf" download className="btn btn-lg btn-primary mt-8">
          Download
        </a>
      </section>
    </div>
  )
}
