'use client'

import { DropDown } from 'components/buttons/dropDown/dropLanguages/dropDownLanguages'
import { PageLinks } from 'components/links/pageLinks/pageLinks'
import { Logo } from 'components/logo/logo'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import styles from './header.module.css'
import { DropDownPageLinks } from 'components/buttons/dropDown/dropPageLinks/dropDownPageLinks'

export function Header() {
  return (
    <header>
      <div className={styles.container}>
        <NavigationMenu.Root className={styles.navigationRoot}>
          <Logo />
          <PageLinks navigationList={styles.navigationList} />
          <div className={styles.boxButtons}>
            <span className={styles.buttonPageLinks}>
              <DropDownPageLinks />
            </span>
            <DropDown />
          </div>
        </NavigationMenu.Root>
      </div>
    </header>
  )
}
