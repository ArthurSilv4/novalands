import { i18n } from 'translate/i18n'
import styles from './credits.module.css'
import Link from 'next/link'

export const Credits = () => {
  return (
    <div className={styles.credits}>
      <span>
        © Copyright © 2020-2023{' '}
        <Link href="https://behemutt.com">Behemutt.</Link>{' '}
        {i18n.t('messages.rights')}
      </span>
      <span>
        {i18n.t('messages.created')}{' '}
        <Link href="https://github.com/ArthurSilv4">Arthur Souza</Link>
      </span>
    </div>
  )
}
