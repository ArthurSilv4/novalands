'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import styles from './pageLinks.module.css'

export const PageLinks = () => {
  return (
    <NavigationMenu.List className={styles.navigationList}>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">HOME</NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">GAME INFO</NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">NEWS</NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">SUPPORT</NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">SOCIALS</NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">COMMUNITY</NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  )
}
