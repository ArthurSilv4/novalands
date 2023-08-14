'use client'

import { useEffect } from 'react'

export const Alert = () => {
  const Alert = () => {
    alert('Esse site não é o oficial, é apenas um site feito por fã')
  }

  useEffect(() => {
    Alert()
  }, [])
}
