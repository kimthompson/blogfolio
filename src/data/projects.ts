export interface Project {
  name: string
  notes?: string
  link?: string // not applicable to internal projects
  technologies: Tool[] // recruiter-friendly keywords
  year: number // the year in which I remember doing most of the work
}

export interface SkillsAndTools {
  toolName: Tool;
  category: Category;
}

export interface SkillToggles extends SkillsAndTools {
  isActive: boolean;
}

export type Category = 'frontend' | 'fullstack' | 'mobile' | 'old' | 'platform' | 'tool' | 'ide'

export const colorDict = (category: Nullable<Category>) => {
  switch (category) {
    case 'frontend':
      return 'primary'
    case 'fullstack':
      return 'secondary'
    case 'mobile':
      return 'error'
    case 'platform':
      return 'accent'
    case 'old':
      return 'warning'
    case 'tool':
      return 'info'
    case 'ide':
      return 'success'
  }
}
export type Tool =
  'remix'
  | 'react'
  | 'backbonejs'
  | 'redux'
  | 'tanstack'
  | 'nextjs'
  | 'rails'
  | 'zustand'
  | 'ios'
  | 'windows'
  | 'android'
  | 'web'
  | 'react native'
  | 'objective-c'
  | 'uikit'
  | 'swiftui'
  | 'swift'
  | 'xcode'
  | 'android studio'
  | 'metro'
  | 'expo'
  | 'javascript'
  | 'typescript'
  | 'php'
  | 'java'
  | 'kotlin'
  | 'spring boot'
  | 'graphql'
  | 'node'
  | 'tailwind'
  | 'daisyui'
  | 'sass'
  | 'css'
  | 'html'
  | 'webpack'
  | 'gulp'
  | 'grunt'
  | 'aws'
  | 'd3'
  | 'npm'
  | 'ruby'
  | 'ruby on rails'
  | 'fastlane'
  | 'jenkins'
  | 'gitlab ci'
  | 'visual studio'
  | 'app center'
  | 'sentry'
  | 'opentelemetry'
  | 'openshift'
  | 'xamarin'
  | 'hubspot'
  | 'neovim'
  | 'c#'
  | 'kysely'
  | 'mysql';

export const skillsAndTools: SkillsAndTools[] = [
  { toolName: 'ios', category: 'platform' },
  { toolName: 'windows', category: 'platform' },
  { toolName: 'android', category: 'platform' },
  { toolName: 'web', category: 'platform' },
  { toolName: 'react', category: 'frontend' },
  { toolName: 'backbonejs', category: 'frontend' },
  { toolName: 'redux', category: 'frontend' },
  { toolName: 'zustand', category: 'frontend' },
  { toolName: 'tailwind', category: 'frontend' },
  { toolName: 'daisyui', category: 'frontend' },
  { toolName: 'css', category: 'frontend' },
  { toolName: 'html', category: 'frontend' },
  { toolName: 'hubspot', category: 'frontend' },
  { toolName: 'kysely', category: 'frontend' },
  { toolName: 'remix', category: 'fullstack' },
  { toolName: 'tanstack', category: 'fullstack' },
  { toolName: 'nextjs', category: 'fullstack' },
  { toolName: 'rails', category: 'fullstack' },
  { toolName: 'javascript', category: 'fullstack' },
  { toolName: 'typescript', category: 'fullstack' },
  { toolName: 'php', category: 'fullstack' },
  { toolName: 'java', category: 'fullstack' },
  { toolName: 'kotlin', category: 'fullstack' },
  { toolName: 'spring boot', category: 'fullstack' },
  { toolName: 'graphql', category: 'fullstack' },
  { toolName: 'node', category: 'fullstack' },
  { toolName: 'react native', category: 'mobile' },
  { toolName: 'xamarin', category: 'mobile' },
  { toolName: 'objective-c', category: 'mobile' },
  { toolName: 'uikit', category: 'mobile' },
  { toolName: 'swiftui', category: 'mobile' },
  { toolName: 'swift', category: 'mobile' },
  { toolName: 'metro', category: 'mobile' },
  { toolName: 'expo', category: 'mobile' },
  { toolName: 'c#', category: 'mobile' },
  { toolName: 'aws', category: 'tool' },
  { toolName: 'd3', category: 'tool' },
  { toolName: 'npm', category: 'tool' },
  { toolName: 'fastlane', category: 'tool' },
  { toolName: 'jenkins', category: 'tool' },
  { toolName: 'gitlab ci', category: 'tool' },
  { toolName: 'sentry', category: 'tool' },
  { toolName: 'opentelemetry', category: 'tool' },
  { toolName: 'openshift', category: 'tool' },
  { toolName: 'sass', category: 'old' },
  { toolName: 'webpack', category: 'old' },
  { toolName: 'gulp', category: 'old' },
  { toolName: 'grunt', category: 'old' },
  { toolName: 'visual studio', category: 'old' },
  { toolName: 'app center', category: 'old' },
  { toolName: 'mysql', category: 'old' },
  { toolName: 'xcode', category: 'ide' },
  { toolName: 'android studio', category: 'ide' },
  { toolName: 'neovim', category: 'ide' },
]
export const indieProjects: Project[] = [
  {
    name: "Messy 'lil Plate Calculator CodePen",
    link: 'https://codepen.io/KimicalBurn/pen/LEEOybM',
    technologies: ['web', 'react', 'tailwind', 'daisyui', 'typescript', 'neovim'],
    year: 2025,
  },
  {
    name: 'Spice Tower Entertainment (rebuild underway)',
    link: 'https://spicetower.games',
    technologies: [
      'web', 'react', 'tailwind', 'remix', 'typescript', 'neovim',
    ],
    year: 2023,
  },
  {
    name: 'Vyr (rebuild underway)',
    link: 'https://spicetower.games/vyr',
    technologies: [
      'web', 'react', 'tailwind', 'remix', 'typescript', 'neovim',
    ],
    year: 2023,
  },
]

export const corpoProjects: Project[] = [
  {
    name: 'Internal PHP site rebuilds',
    notes: "We had some PHP5 sites out on a 2008 server that were proving to be a bit of a liability. Some of them were in too poor shape to simply lift-and-shift, and we're not really looking to be a PHP shop. Therefore, I did some quick-n-dirty rebuilds with our new ATS component library.",
    technologies: [
      'web', 'react', 'tailwind', 'kysely', 'remix', 'php', 'typescript', 'npm', 'opentelemetry', 'openshift', 'mysql', 'neovim',
    ],
    year: 2025,
  },
  {
    name: 'HubSpot Website Maintenance and low-key improvements',
    notes: "We are (unfortunately) using HubSpot for a number of our internal apps. I have linked to one of them below. The template we're using was made by a third party about 5 years back, and proved very difficult to safely edit. That being said, I've learned my way around enough to troubleshoot and keep our Google PageSpeed score in the yellow. Green is asking far too much of this architecture.",
    link: 'https://www.drive4ats.com/',
    technologies: [
      'web', 'hubspot', 'html', 'css', 'javascript', 'metro', 'xcode', 'android studio',
    ],
    year: 2024,
  },
  {
    name: 'ATS FreightMatch',
    notes: "This is the app I was initially hired to work on, and I'm still most proud of it. This was my first enterprise-scale React Native app, though I had dabbled with Expo in my final months at MPR. The Nerdery created the first draft and made a number of choices I wouldn't have made (including not using Expo), but as part of this new team, we have now put out versions 2 through 4 of this application, and it's in a much better place.",
    link: 'https://apps.apple.com/us/app/ats-freightmatch/id1670566484',
    technologies: [
      'ios', 'android', 'redux', 'react native', 'metro', 'sentry', 'fastlane', 'app center', 'xcode', 'android studio', 'neovim',
    ],
    year: 2023,
  },
  {
    name: 'Cox App',
    notes: "The first enterprise-scale iOS app I ever worked on. I hadn't touched iOS development in a few years, but not only did it come back to me pretty quickly, it was much easier to get back into than before. SwiftUI is soooooo much nicer than UIKit. Code is better than clunky user interfaces any day.",
    link: 'https://apps.apple.com/us/app/cox-app/id415894489',
    technologies: [
      'ios', 'swift', 'aws',
    ],
    year: 2022,
  },
  {
    name: 'Internal Application for Best Buy',
    technologies: [
      'web', 'react', 'redux', 'css', 'java', 'aws', 'neovim',
    ],
    year: 2021,
  },
  {
    name: 'Internal Application for Express Scripts',
    technologies: [
      'web', 'react', 'redux', 'css', 'java', 'aws',
    ],
    year: 2020,
  },
  {
    name: 'Your Classical',
    notes: 'My first React Native app. After a few years away from iOS development, I found this surprisingly easy to work with as compared to the nightmare that was Xamarin. It probably helped that I was able to stick to Expo, at least for the initial feature set.',
    link: 'https://apps.apple.com/us/app/yourclassical/id1564157090',
    technologies: [
      'ios', 'android', 'web', 'react', 'css', 'react native', 'expo', 'webpack', 'neovim',
    ],
    year: 2020,
  },
  {
    name: 'APM Podcast Site Engine',
    notes: "We created an engine that allowed us to quickly and easily stand up React/NextJS sites for MPR's podcasts. We initially thought the different sites would have few differences outside of logos and colors, but the final configuration file ended up quite expansive!",
    link: 'https://www.slowdownshow.org/',
    technologies: [
      'web', 'react', 'nextjs', 'node', 'sass', 'webpack', 'neovim',
    ],
    year: 2019,
  },
  {
    name: 'MPR News complete site rebuild',
    notes: "This was a Herculean effort to rebuild the site in React while the backend team built a new CMS from the ground up. It's honestly kind of a blur to reflect on now, and I'm not even sure how we met that launch date. My main contribution I remember is suggesting that we use Next.js for SSR (both kind of new at the time!) instead of trying to roll our own. I made the POC, proving the concept and releasing my boss from his two-week voluntary purgatory.",
    link: 'https://www.mprnews.org/',
    technologies: [
      'web', 'react', 'nextjs', 'node', 'sass', 'webpack', 'neovim',
    ],
    year: 2019,
  },
  {
    name: 'MPR News 2020 Election Visualizations',
    link: 'https://www.mprnews.org/2020-11-03/',
    technologies: [
      'web', 'react', 'd3', 'sass', 'neovim',
    ],
    year: 2019,
  },
  {
    name: 'React Component Libraries for MPR',
    link: 'https://www.npmjs.com/search?q=%40apmg',
    notes: "At some point, we decided to publish our component libraries on NPM. This was so that 1) we could reuse a lot of the assets we made for MPR News and 2) we could share our work with the public. That was a key point for me, though I can't imagine these components were all that useful to anyone not also using our CMS. I just thought it was important for a non-profit that receives public funds to make as much of their work accessible as possible. Fortunately, I didn't have to do too much convincing!",
    technologies: [
      'web',
      'react',
      'npm',
      'sass',
      'webpack',
      'neovim',
    ],
    year: 2019,
  },
  {
    name: 'Internal Application for Cargill',
    notes: 'boo hiss Xamarin is pain',
    technologies: [
      'windows',
      'ios',
      'xamarin',
      'objective-c',
      'c#',
      'visual studio',
    ],
    year: 2018,
  },
  {
    name: 'Internal Application for Renewal by Anderson',
    technologies: [
      'ios',
      'objective-c',
      'uikit',
      'xcode',
    ],
    year: 2017,
  },
  {
    name: 'Internal Application for Aramark',
    technologies: [
      'windows',
      'c#',
      'visual studio',
    ],
    year: 2017,
  },
]
