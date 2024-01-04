import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'

const Page = () => (
  <main className={styles.main}>
    <div className={styles.description}>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>app/page.jsx</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>

    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>

    <div className={styles.grid}>
      <Link
        href="/"
        className={styles.card}
      >
        <h2>
          Go back <span>-&gt;</span>
        </h2>
        <p>This is going back</p>
      </Link>
    </div>
  </main>
)

export default Page
