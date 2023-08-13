import { i18n } from 'translate/i18n'
import styles from './backTop.module.css'
import { ArrowUpIcon } from '@radix-ui/react-icons'
import { Link } from 'react-scroll'

export const BackTop = () => {
  return (
    <div className={styles.bntBack}>
      <Link to="home" smooth={true}>
        <button>
          {i18n.t('button.back')}
          <ArrowUpIcon />
        </button>
      </Link>
    </div>
  )
}
