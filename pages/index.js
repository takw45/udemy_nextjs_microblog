// import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/Layout'
import utilStyle from '../styles/utils.module.css'
import { fetchPostsData } from '../lib/posts'
import Head from 'next/head'

export async function getStaticProps() {
  const allPostsData = fetchPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
   <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyle.headingMd}>
      <p>私はアプリケーションエンジニアです/C,C++, C#, Objective-C, Swift, Javaなどを使ったことがあります。</p>
    </section>
    <section>
      <div className={styles.grid}>
        {allPostsData.map(({id, data}) => (
            <article key={id}>
              <Link href={`posts/${id}`}>
                <Image src={data.thumbnail} width='640' height='320' alt='' 
                        className={styles.thumbnailImage}/>
              </Link>
              <br/>  
              <Link href={`posts/${id}`}>
                {data.title}
              </Link>
              <br/>
              <small className='utilStyle.lightText'> {data.date} </small>
            </article>
        ))}
      </div>
    </section>
   </Layout>
  )
}
