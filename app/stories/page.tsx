import { Stories } from 'app/components/posts'

export const metadata = {
  title: 'Stories',
  description: 'Fiction and literary work.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Stories</h1>
      <Stories />
    </section>
  )
}
