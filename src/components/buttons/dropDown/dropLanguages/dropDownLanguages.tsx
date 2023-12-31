'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { GlobeIcon, Cross2Icon } from '@radix-ui/react-icons'
import Image from 'next/image'
import styles from './dropDownLanguages.module.css'
import { useEffect, useState } from 'react'
import { i18n } from 'translate/i18n'

const I18N_STORAGE_KEY = 'i18nextLng'

export const DropDown = () => {
  const initialLanguage =
    typeof window !== 'undefined'
      ? localStorage.getItem('i18nextLng') || 'pt'
      : 'pt'

  const [language, setLanguage] = useState(initialLanguage)
  const [shouldReload, setShouldReload] = useState(false)

  useEffect(() => {
    localStorage.setItem(I18N_STORAGE_KEY, language)
    if (shouldReload) window.location.reload()
  }, [language, shouldReload])

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
    setShouldReload(true)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.dropDownTrigger}>
        <span>
          <GlobeIcon className={styles.iconButton} />
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropDownContent}>
          <DropdownMenu.Label className={styles.dropDownLabel}>
            {i18n.t('titles.language')}
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup
            value={language}
            onValueChange={handleLanguageChange}
            className={styles.dropDownRadioGroup}
          >
            <DropdownMenu.RadioItem
              value="pt-BR"
              className={styles.dropDownRadioItem}
            >
              <DropdownMenu.ItemIndicator className={styles.dropDownIndicator}>
                <Cross2Icon />
              </DropdownMenu.ItemIndicator>
              Português
              <span>
                <Image
                  height={20}
                  width={20}
                  src={'./svgs/Brazil.svg'}
                  alt="icon brazil"
                />
              </span>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="en-USA">
              <DropdownMenu.ItemIndicator className={styles.dropDownIndicator}>
                <Cross2Icon />
              </DropdownMenu.ItemIndicator>
              Inglês
              <span>
                <Image
                  height={20}
                  width={20}
                  src={'./svgs/USA.svg'}
                  alt="icon usa"
                />
              </span>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
