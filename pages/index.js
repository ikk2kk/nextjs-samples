import styles from '../styles/Home.module.css'
import Layout from '../layout/main'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Nextjs Samples</title>
      </Head>

      <div className={styles.container}>
        <h2>Hello Nextjs</h2>
      </div>
    </Layout>
  )
}
