import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post, allRecipies, Recipie } from 'contentlayer/generated'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  const recipies = allRecipies
  return { props: { posts, recipies } }
}

function PostCard(post: Post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <h2 className="text-lg">
        <Link href={post.url}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
    </div>
  )
}

function RecipieCard(recipie: Recipie) {
  return (
    <div className="mb-6">
      <h2 className="text-lg">
        <Link href={recipie.url}>
          <a className="text-blue-700 hover:text-blue-900">{recipie.title}</a>
        </Link>
      </h2>
    </div>
  )
}

interface Props {
  posts: [Post]
  recipies: [Recipie]
}

const Home: NextPage<Props> = ({ posts, recipies }: Props) => {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Learning center</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">

        <h1 className="mb-8 text-3xl font-bold">Blog</h1>

        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}

        <h1 className="mb-8 text-3xl font-bold">Recipies</h1>

        {recipies.map((recipie, idx) => (
          <RecipieCard key={idx} {...recipie} />
        ))}
        
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
