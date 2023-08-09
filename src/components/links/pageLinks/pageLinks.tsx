'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { i18n } from 'translate/i18n'

interface PageLinksProps {
  navigationList: string
}

export const PageLinks = ({ navigationList }: PageLinksProps) => {
  return (
    <NavigationMenu.List className={navigationList}>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">
          {i18n.t('titles.home')}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">
          {i18n.t('titles.game_info')}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">
          {i18n.t('titles.news')}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">
          {i18n.t('titles.support')}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">
          {i18n.t('titles.socials')}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">
          {i18n.t('titles.community')}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  )
}
