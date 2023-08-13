import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import styles from './dropDownPageLinks.module.css'
import { PageLinks } from 'components/links/pageLinks/pageLinks'
import { useState } from 'react'

export const DropDownPageLinks = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handlePageLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger className={styles.dropDownTrigger}>
        <span>
          <HamburgerMenuIcon className={styles.iconButton} />
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropDownContent}>
          <PageLinks
            navigationList={styles.navigationList}
            onItemClick={handlePageLinkClick}
          />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
