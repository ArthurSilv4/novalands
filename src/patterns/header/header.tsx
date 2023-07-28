'use client'

import { DropDown } from 'components/buttons/dropDown/dropDown'
import { PageLinks } from 'components/links/pageLinks/pageLinks'
import { Logo } from 'components/logo/logo'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import styles from './header.module.css'

export function Header() {
  return (
    <header>
      <div className={styles.container}>
        <NavigationMenu.Root className={styles.navigationRoot}>
          <Logo />
          <PageLinks />
          <DropDown />
        </NavigationMenu.Root>
      </div>
    </header>
  )
}
