import Image from 'next/image'
import { Link } from 'react-scroll'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export const Logo = () => {
  return (
    <NavigationMenu.List>
      <NavigationMenu.Item style={{ cursor: 'pointer' }}>
        <Link to="home" smooth={true}>
          <Image
            width={150}
            height={100}
            src={'/logo.png'}
            alt="Logo Nova lands"
          />
        </Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  )
}
