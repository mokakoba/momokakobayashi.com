import { Notes } from 'app/components/posts'

export const metadata = {
  title: 'Notes',
  description: 'Technical essays and research notes.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Notes</h1>
      <Notes />
    </section>
  )
}
