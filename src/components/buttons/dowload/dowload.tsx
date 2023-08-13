'use client'

import { i18n } from 'translate/i18n'
import styles from './dowload.module.css'
import Link from 'next/link'

export const Dowload = () => {
  return (
    <Link href={'https://store.steampowered.com/cart/'}>
      <button className={styles.button}>{i18n.t('button.download')}</button>
    </Link>
  )
}
