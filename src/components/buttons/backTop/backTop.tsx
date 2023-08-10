import { i18n } from 'translate/i18n'
import styles from './backTop.module.css'
import { ArrowUpIcon } from '@radix-ui/react-icons'

export const BackTop = () => {
  return (
    <div className={styles.bntBack}>
      <button>
        {i18n.t('button.back')}
        <ArrowUpIcon />
      </button>
    </div>
  )
}
