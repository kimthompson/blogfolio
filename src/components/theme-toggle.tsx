import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  return (
    <div className="flex flex-row gap-4 justify-end font-cascadia text-xs lg:text-sm p-4">
      <button data-set-theme="cyberdream-dark" data-act-class="ACTIVECLASS">
        <span className="font-semibold text-secondary hover:text-base-content transition flex flex-row gap-2 items-center">
          <Moon className="w-3 h-3" /> Dark
        </span>
      </button>
      <button data-set-theme="cyberdream-light" data-act-class="ACTIVECLASS">
        <span className="font-semibold text-warning hover:text-base-content transition flex flex-row gap-2 items-center">
          <Sun className="w-3 h-3" /> Light
        </span>
      </button>
    </div>
  )
}
