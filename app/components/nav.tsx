import Link from 'next/link'

const navItems = {
  '/maps': { name: 'maps' },
  '/projects': { name: 'projects' },
}

export function Navbar() {
  return (
    <nav className="flex items-center justify-between mb-8 py-2">
      <Link
        href="/"
        className="font-[family-name:var(--font-cormorant)] text-lg font-light tracking-widest text-stone-800 dark:text-stone-200 hover:opacity-70 transition-opacity"
      >
        Momoka Kobayashi
      </Link>
      <div className="flex gap-6">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="text-xs tracking-widest text-stone-400 dark:text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
