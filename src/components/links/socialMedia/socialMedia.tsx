import { TwitterLogoIcon, PersonIcon } from '@radix-ui/react-icons'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

interface SocialMediaProps {
  navigationListSocialMedia: string
  icon: string
}

export const SocialMedia = ({
  navigationListSocialMedia,
  icon,
}: SocialMediaProps) => {
  return (
    <NavigationMenu.List className={navigationListSocialMedia}>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="https://behemutt.com">
          <TwitterLogoIcon className={icon} />
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="https://behemutt.com">
          <PersonIcon className={icon} />
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  )
}
