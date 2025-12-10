import { useAsciiText } from 'react-ascii-text'
import { gsap } from 'gsap/gsap-core'
// import { slant, doom, diamond, fireFontS, bloody, ansiShadow } from 'react-ascii-text'
// use bloody for Halloweentime
// Someday: report the bug to [here](https://github.com/samuelweckstrom/react-ascii-text/issues/new) that ansiShadow looks weird on mobile no matter what you do, but normal on sim
import { slant } from 'react-ascii-text'
import { useEffect } from 'react'
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useGSAP } from '@gsap/react'
import { usePosts } from '~/data/strapi'
import dayjs from 'dayjs'
import LogoMinimal from '~/components/svgs/logo-minimal'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const asciiTextRef = useAsciiText({
    font: slant,
    text: 'Kim Freechack',
    // isAnimated: false,
    animationDelay: 0,
    animationInterval: 0,
    animationLoop: false,
    fadeInOnly: true,
    animationDirection: 'right',
    animationSpeed: 10,
  })

  gsap.registerPlugin(useGSAP)

  useEffect(() => {
    gsap.set('#logo', { rotation: 360 })
  }, [])

  const compassSpin = () => {
    gsap.to('#logo', {
      duration: 4,
      rotation: '+=360',
      ease: 'elastic.out(0.6,0.2)',
      overwrite: 'auto',
      stagger: 0.02,
    })
  }

  const navigate = useNavigate({ from: '/' })

  const { status, data, error } = usePosts()

  useEffect(() => {
    if (!data) {
      return
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key
      const keysThatLeadToPosts = ['j', 'k', 'l', 'm', 'n'].slice(0, data.data.length)
      
      if (!keysThatLeadToPosts.includes(key)) {
        return
      }

      const indexOfKey = keysThatLeadToPosts.indexOf(key)

      navigate({ to: `/blog/${data.data[indexOfKey].documentId}` })
      // window.location.href = `https://blog.kimfreechack.me/${data.data[indexOfKey].slug}`
    }
    document.addEventListener('keydown', handleKeyDown, true)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [data, navigate])

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-between">
        <div id="body" className="flex flex-col items-center gap-10">
          <div>
            <LogoMinimal
              id="logo"
              className="w-24 md:w-48"
              compassColor='fill-[#7b8496] stroke-[#7b8496]'
              kColor='fill-warning stroke-warning'
              lColor='fill-secondary stroke-secondary'
              jColor='fill-info stroke-info'
              hColor='fill-primary stroke-primary'
              onClick={compassSpin}
            />
          </div>
        </div>
        <figure
          className="scale-50 sm:scale-60 md:scale-70 lg:scale-80 xl:scale-90 2xl:scale-100 py-4"
        >
          <pre
            // @ts-ignore
            ref={asciiTextRef}>
          </pre>
          <figcaption className="hidden">My name, Kim Freechack, in ASCII art</figcaption>
        </figure>
      </div>
      {status === 'pending' ? (
        // TODO: Make an honest to god loading component that fits with the rest of the site's design and use that instead
        <div role="status">
          <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-base-300 fill-accent" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <table className="table-auto font-cascadia text-xs md:text-sm">
          <tbody>
            {data.data.map((post, idx) => {
              return (
                <tr key={idx}>
                  <td className="p-2">
                    {String.fromCharCode(idx + 74).toLowerCase()}
                  </td>
                  <td>
                    <a href={`blog/${post.documentId}`} className="underline hover:text-primary transition">
                      {post.title}
                    </a>
                  </td>
                  <td className="text-right p-2">
                    {post.published && dayjs(post.published).format('YYYY-MM-DD')}
                  </td>
                </tr>
              )
            })}
            <tr>
              <td className="p-2">h</td>
              <td>Help</td>
              <td className="text-right max-w-40 p-2">Hit the above keys to go to that post</td>
              {/* TODO: Create a Help popup in the upper right corner, like an error message */}
            </tr>
          </tbody>
        </table>
      )}
    </main>
  )
}
