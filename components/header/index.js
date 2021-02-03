import clsx from 'clsx'
import Link from "next/link"
import styles from './index.module.css'
import { useState, useEffect } from 'react'

const Header = () => {

    const [top, setTop] = useState(0)
    const [toggle, setToggle] = useState(false)

    const watchCurrentPosition = (e) => {
      const curt_top = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      )
      setTop(curt_top)
    }
  
    useEffect(() => {
      window.addEventListener("scroll", watchCurrentPosition)
      return() => {
        window.removeEventListener("scroll", watchCurrentPosition)
      }
    },[])

    return (
        <header className={clsx(styles.container, (top > 0) && styles.sticky)}>
            <Link href="/"><a className={styles.logo}>Nextjs Samples</a></Link>
            <div className={clsx(styles.menuToggle, toggle && styles.active)} onClick={() => setToggle(!toggle)}></div>
            <ul className={clsx(styles.navigation, toggle && styles.active)}>
                <li><Link href="/"><a onClick={()=> setToggle(!toggle)}>Home</a></Link></li>
                <li><Link href="/ssgcsr"><a onClick={()=> setToggle(!toggle)}>SSG+CSR</a></Link></li>
                <li><Link href="/ssrcsr"><a onClick={()=> setToggle(!toggle)}>SSR+CSR</a></Link></li>
            </ul>
        </header>
    )
}

export default Header