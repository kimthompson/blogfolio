import ThemeToggle from '../theme-toggle'

export default function Footer() {
  return (
    <footer id="powerline-footer" className="hidden md:flex flex-row gap-4 justify-end font-cascadia text-xs lg:text-sm p-4">
      <ThemeToggle />
      {/* Socials  - GitHub, LinkedIn, Bluesky, Insta, Codepen */}
    </footer>
  )
}
