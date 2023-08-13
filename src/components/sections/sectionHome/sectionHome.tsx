import { Dowload } from 'components/buttons/dowload/dowload'
import styles from './sectionHome.module.css'

export function SectionHome() {
  return (
    <section className={styles.section} id="home">
      <Dowload />
    </section>
  )
}
