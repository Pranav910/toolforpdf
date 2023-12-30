'use client'

import Image from 'next/image'
import styles from '@/styles/page.module.css'
import {tools} from '@/tools/tools'
import PDFTools from '@/components/PDFTools'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.tools}>
      {
        tools.map((val, index) => {
          return <PDFTools link = {val.link} toolname = {val.name} key = {index} description={val.description} svg = {val.svg}/>
        })
      }
      </div>
    </main>
  )
}
