import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import styles from './dropDownPageLinks.module.css'
import { PageLinks } from 'components/links/pageLinks/pageLinks'

export const DropDownPageLinks = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.dropDownTrigger}>
        <span>
          <HamburgerMenuIcon className={styles.iconButton} />
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropDownContent}>
          <PageLinks navigationList={styles.navigationList} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
