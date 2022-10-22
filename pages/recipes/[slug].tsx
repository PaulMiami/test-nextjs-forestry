import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allRecipies, Recipie } from 'contentlayer/generated'

export async function getStaticPaths() {
  const paths = allRecipies.map((recipie) => recipie.url)
  return {
    paths,
    fallback: false,
  }
}

interface Params  {
    params: {
        slug: string
      }
}


export async function getStaticProps({ params }: Params) {
  const recipie = allRecipies.find((recipie) => recipie._raw.flattenedPath.endsWith(params.slug))
  return {
    props: {
      recipie,
    },
  }
}

interface Props  {
  recipie: Recipie
}

const RecipieLayout = ({ recipie }: Props) => {
  return (
    <>
      <Head>
        <title>{recipie.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">
            <a className="text-center text-sm font-bold uppercase text-blue-700">Home</a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{recipie.title}</h1>
        </div>
        <div className="cl-post-body" dangerouslySetInnerHTML={{ __html: recipie.body.html }} />
      </article>
    </>
  )
}

export default RecipieLayout