import Image from 'next/image'
import styles from './page.module.css'
import { CalendarComponent } from './component/calendar'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>testing page</h1>
        <CalendarComponent events={[]} />
    </main>
  )
}
