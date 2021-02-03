import Head from 'next/head'
import Layout from '../../layout/main'
import styles from './index.module.css'
import { useState, useEffect } from 'react'

const URL = "https://jsonplaceholder.typicode.com/todos"

// SSR
export async function getServerSideProps(){

    const res = await fetch(URL)
    const data = await res.json()
    return {
      props: { data }
    }
}

const SsrcsrPage = (props) => {

    const [todos, setTodos] = useState([])

    useEffect(async () => {
        // CSR
        const res = await fetch(URL)
        const json = await res.json()
        setTodos(json)
    },[])

    return (
        <Layout>
            <Head>
                <title>SSR CSR Sample</title>
            </Head>
            <section className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col50}>
                        <h1 className={styles.titletext}>SS<span>R</span></h1>
                        <ul className={styles.titlelist}>
                            { props.data.map((d)=>{
                                return(
                                    <li key={d.id}>{d.title}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={styles.col50}>
                        <h1 className={styles.titletext}>CSR</h1>
                        <ul className={styles.titlelist}>
                            { todos.map((d)=>{
                                return(
                                    <li key={d.id}>{d.title}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default SsrcsrPage