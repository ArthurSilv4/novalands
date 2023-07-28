'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { GlobeIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import styles from './dropDown.module.css'

export const DropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.dropDownTrigger}>
        <span>
          <GlobeIcon className={styles.iconButton} />
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropDownContent}>
          <DropdownMenu.Label>LANGUAGES</DropdownMenu.Label>
          <DropdownMenu.Item>
            Português
            <span>
              <Image
                height={20}
                width={20}
                src={'./svgs/Brazil.svg'}
                alt="icon brazil"
              />
            </span>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            Inglês
            <span>
              <Image
                height={20}
                width={20}
                src={'./svgs/USA.svg'}
                alt="icon usa"
              />
            </span>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            Espanhol
            <span>
              <Image
                height={20}
                width={20}
                src={'./svgs/Spain.svg'}
                alt="icon spain"
              />
            </span>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            Japonês
            <span>
              <Image
                height={20}
                width={20}
                src={'./svgs/Japan.svg'}
                alt="iconFlag japan"
              />
            </span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
