import dayjs, { Dayjs } from 'dayjs'
import { Tool } from './projects'

export interface Experience {
  employer: string
  location: string
  tenure: string
  startDate: Dayjs
  title: string;
  description: string;
  bulletPoints?: string[];
  clients?: Client[];
  relevantSkills?: Tool[]
}

interface Client {
  name: string
  description: string;
  bulletPoints?: string[];
  relevantSkills: Tool[]
}

export const summary: string = 'A software engineer with ten years of experience creating applications for mobile, web, and desktop. Currently focused on cross-platform development with React Native, but with a extensive background of using React for web development and a proven ability to pick up new tools quickly and safely. Values communication and mentorship, empowering teammates and fostering a collaborative and supportive environment.'

export const experience: Experience[] = [
  {
    employer: 'Anderson Trucking Service',
    location: 'Saint Louis Park, MN',
    tenure: 'June 2023 — Present',
    startDate: dayjs('June 1, 2023'),
    title: 'Web/Mobile Engineer',
    description: "Joined a greenfield team taking over the development and maintenance of ATS's flagship React Native app, FreightMatch. Once that project stabilized, pivoted to a new maintenance team and cross-trained in how to maintain and sometimes rewrite legacy applications.",
    bulletPoints: [
      'Became the SME for all Apple and Xcode issues, in part due to my background developing in Swift and SwiftUI and, before that, Objective-C and UIKit.',
      'Replaced our clunky, dying Microsoft App Center build pipelines with a more reliable and transparent process using Fastlane and GitLab CI, for which I won an iDrive award for innovation in 2024..',
      "Aided the marketing team when the Drive4ATS site dropped in Google's rankings due to poor Lighthouse statistics. Managed to wring ~30 points of performance out of their existing HubSpot template.",
    ],
    relevantSkills: ['react native', 'swift', 'kotlin', 'react', 'typescript', 'html', 'css', 'node', 'fastlane', 'gitlab ci', 'tailwind', 'node', 'remix', 'tanstack', 'hubspot', 'php', 'opentelemetry', 'openshift'],
  },
  {
    employer: 'Daugherty Business Solutions',
    location: 'Bloomington, MN',
    tenure: 'Nov 2020 — May 2023',
    startDate: dayjs('Nov 1, 2020'),
    title: 'Consultant & Software Engineer',
    description: '',
    clients: [
      {
        name: 'Cox Communications',
        description: 'Joined and eventually led an international team of iOS engineers, working on maintaining and expanding Cox App on iOS. Collaborated with stakeholders to prioritize which features should be in each sprint. Managed the build and release processes on the developer side, communicating to QA, Product, and DevOps exactly what was in each build and when they were live.',
        bulletPoints: [
          "Reworked the role of iOS technical lead to be less of a bottleneck, teaching the team members how the application's build system worked and persuading the higher-ups to let them review each other's pull requests.",
          "Built the initial proof-of-concept for Cox's interactive \"Proactive & Preventative\" system. Demonstrated the power of SwiftUI animations to the lead architect, proving that it was easy to simulate screen transitions.",
          'Drove the effort to do as much new development as possible in SwiftUI.',
        ],
        relevantSkills: ['swift', 'swiftui', 'graphql', 'uikit', 'objective-c', 'aws', 'jenkins'],
      },
      {
        name: 'Best Buy',
        description: 'Mentored a team of full stack engineers on a rebuild of the CMS used by store leaders to lay out their store web pages. Participated in agile ceremonies and design meetings, sometimes with the rest of the team, sometimes just with leaders. Mentored a team of junior engineers, meeting with them regularly for career advice, pair programming, and Git detangling.',
        bulletPoints: [
          "Improved the Google Lighthouse score of Best Buy's CMS for store managers from 55 to 95, primarily through route-based chunking and import refactoring. The initial page load on mobile shrunk from three seconds to less than one.",
          "Defined the team's coding and testing standards and set up Jenkins pipelines to enforce those standards.",
          'Collaborated with the UX designer to revamp and expand our React component library, largely based on Material UI, and document it with a Storybook site.',
        ],
        relevantSkills: ['react', 'redux', 'typescript', 'html', 'css', 'java', 'spring boot', 'jenkins', 'graphql', 'mysql'],
      },
      {
        name: 'Express Scripts',
        description: 'Contributed to an internal application named PSCRF, which is used to model and price out treatments and pharmaceuticals for various health insurance plans. Implemented automated tests using Jest and JUnit and performed manual regression test planning and execution each sprint.',
        bulletPoints: [ 'Advocated for better development practices, such as linting and Git hooks, which would be more efficient and better for team morale than "swarming" on every code review.',
          "Served as the team's SME for troubleshooting and improving Webpack and NPM.",
        ],
        relevantSkills: ['react', 'redux', 'typescript', 'html', 'css', 'java', 'spring boot', 'jenkins', 'mysql', 'webpack'],
      },
    ],
  },
  {
    employer: 'Minnesota Public Radio',
    location: 'Saint Paul, MN',
    tenure: 'Aug 2018 — Nov 2020',
    startDate: dayjs('Aug 1, 2018'),
    title: 'Web Developer',
    description: 'Created new websites and applications for American Public Media while maintaining the legacy ones.',
    bulletPoints: [
      'Proposed that we use Next.js for our rebuild of MPR News when we ran into trouble getting React 16.x to play nice with server-side rendering. Built a vertical slice of our website in 48 hours that got all stakeholders on board with this plan.',
      "Reworked APM Reports to pass all of Google's AMP requirements, increasing traffic on their breaking stories threefold.",
      "Architected the first version of YourClassical for iOS, Android, and web built with React Native. Presented it to the whole technology division. This was also MPR's first TypeScript project.",
      'Published our React Component libraries on NPM, as MPR is in part a publicly-funded service.',
    ],
    relevantSkills: ['react', 'node', 'nextjs', 'javascript', 'react native', 'typescript', 'html', 'css', 'sass', 'php', 'ruby on rails', 'gitlab ci', 'graphql', 'webpack'],
  },
  {
    employer: 'Design Center Inc.',
    location: 'Saint Paul, MN',
    tenure: 'Feb 2017 — Aug 2018',
    startDate: dayjs('Feb 12, 2017'),
    title: 'Associate Software Developer',
    description: 'Developed applications for iOS, web, and Windows, ranging from large agile projects as part of a team to small solo works.',
    bulletPoints: [
      "Wrote the company's frontend web standards. Taught the designers how to write decent HTML and CSS, as well as how to use VSCode and Git. Stressed to the owner that frontend web development is truly software development and cannot simply be offloaded onto designers with no relevant experience.",
    ],
    relevantSkills: ['uikit', 'objective-c', 'swift', 'c#', 'xamarin', 'javascript', 'html', 'css', 'react', 'webpack'],
  },
  {
    employer: 'Ameriprise Financial',
    location: 'Minneapolis, MN',
    tenure: 'Jun 2015 — Feb 2017',
    startDate: dayjs('Jun 6, 2015'),
    title: 'Technology Leadership Development Program Trainee',
    description: 'Rotated between three entry-level full-time positions over 18 months as part of a competitive program for recent college graduates. Learned the basics of being both a business analyst and a developer, which solidified my desire to be a developer.',
    bulletPoints: [
      "Redesigned the frontend for Ameriprise's advisor compensation application, working within the limits of the old JSP, IE-only application that nobody could run locally anymore.",
      'Helped design, test, and polish a client-facing dashboard built with Backbone.js',
      "Conducted working sessions to complete disaster recovery plans for all my department's applications.",
    ],
    relevantSkills: ['javascript', 'backbonejs', 'html', 'css', 'gulp'],
  },
]
