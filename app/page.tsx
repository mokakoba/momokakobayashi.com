import Link from 'next/link'
import Image from 'next/image'
import { getNotes, getStories, formatDate } from 'app/notes/utils'

export default function Page() {
  const notes = getNotes().map((p) => ({ ...p, type: 'note', href: `/notes/${p.slug}` }))
  const stories = getStories().map((p) => ({ ...p, type: 'story', href: `/stories/${p.slug}` }))

  const all = [...notes, ...stories].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  )

  return (
    <section>
      <div className="relative -mx-2 md:-mx-4 h-[52vh] overflow-hidden mb-6 rounded-xl">
        <Image
          src="/living_room_v2.jpg"
          alt="Momoka's living room"
          fill
          className="object-cover [object-position:0%_70%]"
          priority
        />
      </div>

      <div className="mb-10">
        <p className="text-sm text-stone-400 dark:text-stone-500 leading-relaxed">
          Somewhere between engineer and artist, New York and somewhere else. I like building systems,
          maps that hold places, and stories that preserve what slips away.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-amber-700 dark:text-amber-600 uppercase">
            entries
          </span>
          <div className="flex-1 border-t border-dashed border-stone-300 dark:border-stone-700" />
        </div>

        <div className="border-l-2 border-amber-200 dark:border-amber-900 pl-4">
          {all.length === 0 ? (
            <p className="font-[family-name:var(--font-mono)] text-xs text-stone-400 py-3">
              — nothing here yet —
            </p>
          ) : (
            all.map((entry) => (
              <Link
                key={`${entry.type}-${entry.slug}`}
                href={entry.href}
                className="flex items-baseline gap-4 py-2.5 border-b border-dashed border-stone-200 dark:border-stone-800 group"
              >
                <span className="font-[family-name:var(--font-mono)] text-xs text-amber-600 dark:text-amber-700 w-20 shrink-0 tabular-nums">
                  {formatDate(entry.metadata.publishedAt, false).split(',')[0]}
                </span>
                <span className="text-sm text-stone-800 dark:text-stone-200 group-hover:text-stone-900 dark:group-hover:text-stone-100 flex-1 transition-colors">
                  {entry.metadata.title}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-xs text-stone-400 dark:text-stone-600 shrink-0">
                  {entry.type}
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
