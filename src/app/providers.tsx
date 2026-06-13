import React from 'react'
import { AuthProvider } from '@core/context/AuthContext'
import { ThemeProvider } from '@core/context/ThemeContext'
import { LanguageProvider } from '@core/context/LanguageContext'
import { NotificationProvider } from '@core/context/NotificationContext'

type Props = {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <NotificationProvider>
            {children}
          </NotificationProvider>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}
