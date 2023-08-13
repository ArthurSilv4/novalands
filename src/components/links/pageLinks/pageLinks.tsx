'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { i18n } from 'translate/i18n'
import { Link } from 'react-scroll'

interface PageLinksProps {
  navigationList: string
  onItemClick?: () => void
}

export const PageLinks = ({ navigationList, onItemClick }: PageLinksProps) => {
  const handleLinkClick = () => {
    if (onItemClick) {
      onItemClick()
    }
  }

  return (
    <NavigationMenu.List className={navigationList}>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">
          <Link
            to="home"
            smooth={true}
            onClick={handleLinkClick}
            style={{ cursor: 'pointer' }}
          >
            {i18n.t('titles.home')}
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">
          <Link
            to="gameInfo"
            smooth={true}
            onClick={handleLinkClick}
            style={{ cursor: 'pointer' }}
          >
            {i18n.t('titles.game_info')}
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">
          <Link
            to="news"
            smooth={true}
            onClick={handleLinkClick}
            style={{ cursor: 'pointer' }}
          >
            {i18n.t('titles.news')}
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link
          href="https://steamcommunity.com/app/1501610/discussions/"
          target="_blank"
        >
          {i18n.t('titles.support')}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">
          <Link
            to="socials"
            smooth={true}
            onClick={handleLinkClick}
            style={{ cursor: 'pointer' }}
          >
            {i18n.t('titles.socials')}
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/">
          <Link
            to="community"
            smooth={true}
            onClick={handleLinkClick}
            style={{ cursor: 'pointer' }}
          >
            {i18n.t('titles.community')}
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  )
}
