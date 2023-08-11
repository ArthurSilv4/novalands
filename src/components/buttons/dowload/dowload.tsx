'use client'

import { i18n } from 'translate/i18n'
import styles from './dowload.module.css'

export const Dowload = () => {
  return <button className={styles.button}>{i18n.t('button.download')}</button>
}
