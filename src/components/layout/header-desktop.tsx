import { Link } from '@tanstack/react-router'
import { BriefcaseBusiness, Home, PenTool, Rss, SquareTerminal } from 'lucide-react'

import ThemeToggle from '../theme-toggle'

export default function Header() {
  return (
    <header id="buffer-header" className="flex flex-row justify-start pt-2">
      <nav className="hidden md:flex font-cascadia text-xs lg:text-sm">
        <ol className="flex flex-row navigation">
          <li className="nav-item border-r-1 border-base-content">
            <Link to="/" className="flex flex-row justify-center items-center gap-2">
              <Home className="w-3 h-3 stroke-secondary" />
              <span className="animated-gradient hover-gradient">Home</span>
            </Link>
          </li>
          <li className="nav-item border-r-1 border-base-content">
            <Link to="/blog" className="flex flex-row justify-center items-center gap-2">
              <PenTool className="w-3 h-3 stroke-primary" />
              <span className="animated-gradient hover-gradient">Blog</span>
            </Link>
          </li>
          <li className="nav-item border-r-1 border-base-content">
            <Link to="/projects" className="flex flex-row justify-center items-center gap-2">
              <SquareTerminal className="w-3 h-3 stroke-warning" />

              <span className="animated-gradient hover-gradient">Projects</span>
            </Link>
          </li>
          <li className="nav-item border-r-1 border-base-content">
            <Link to="/resume" className="flex flex-row justify-center items-center gap-2">
              <BriefcaseBusiness className="w-3 h-3 stroke-success" />
              <span className="animated-gradient hover-gradient">Resume</span>
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://feeds.kimfreechack.me/" className="flex flex-row justify-center items-center gap-2">
              <Rss className="w-3 h-3 stroke-error" />
              <span className="animated-gradient hover-gradient">Feeds</span>
            </a>
          </li>
        </ol>
      </nav>
      <div className="flex md:hidden navbar font-cascadia bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className="nav-item-mobile">
                <Link to="/" className="flex flex-row justify-start items-center gap-2 w-full">
                  <Home className="w-3 h-3 stroke-secondary" />
                  <span className="animated-gradient hover-gradient">Home</span>
                </Link>
              </li>
              <li className="nav-item-mobile">
                <Link to="/blog" className="flex flex-row justify-start items-center gap-2 w-full">
                  <PenTool className="w-3 h-3 stroke-primary" />
                  <span className="animated-gradient hover-gradient">Blog</span>
                </Link>
              </li>
              <li className="nav-item-mobile">
                <Link to="/projects" className="flex flex-row justify-start items-center gap-2 w-full">
                  <SquareTerminal className="w-3 h-3 stroke-warning" />
                  <span className="animated-gradient hover-gradient">Projects</span>
                </Link>
              </li>
              <li className="nav-item-mobile">
                <Link to="/resume" className="flex flex-row justify-start items-center gap-2 w-full">
                  <BriefcaseBusiness className="w-3 h-3 stroke-success" />
                  <span className="animated-gradient hover-gradient">Resume</span>
                </Link>
              </li>
              <li className="nav-item-mobile">
                <a href="https://feeds.kimfreechack.me/" className="flex flex-row justify-start items-center gap-2 w-full">
                  <Rss className="w-3 h-3 stroke-error" />
                  <span className="animated-gradient hover-gradient">Feeds</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
        </div>
        <div className="navbar-end">
          <ThemeToggle />
        </div>
      </div>
      {/* <nav className="flex md:hidden navbar font-cascadia text-xs bg-base-100 overflow-clip"> */}
      {/*   <div className="navbar-start"> */}
      {/*     <div className="dropdown"> */}
      {/*       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle"> */}
      {/*         <MenuIcon /> */}
      {/*       </div> */}
      {/*       <ul */}
      {/*         tabIndex={0} */}
      {/*         className="flex md:hidden menu menu-sm dropdown-content bg-base-100 rounded-box z-1 p-2 navigation"> */}

      {/*       </ul> */}
      {/*     </div> */}
      {/*   </div> */}
      {/*   <div className="navbar-center"> */}
      {/*   </div> */}
      {/*   <div className="navbar-end"> */}
      {/*     <ThemeToggle /> */}
      {/*   </div> */}
      {/* </nav> */}
    </header>
  )
}
