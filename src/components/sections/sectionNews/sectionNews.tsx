'use client'

import { Subscribe } from 'components/forms/subscribe/subscribe'
import styles from './sectionNews.module.css'

export function SectionNews() {
  return (
    <section className={styles.section} id="news">
      <div className="container">
        <div>
          <Subscribe />
        </div>
      </div>
    </section>
  )
}
