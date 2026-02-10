import type { AppProps } from 'next/app'
import { ThemeProvider, useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { EthereumProvider } from 'context/ethereumContext'
import { SettingsProvider } from 'context/settingsContext'

import '../styles/globals.css'
import '../styles/highlight/atom-one-light.css'
import '../styles/highlight/atom-one-dark.css'

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  const label = resolvedTheme === 'dark' ? 'Dark' : 'Light'

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="fixed top-4 right-4 z-50 rounded border px-3 py-2 text-xs font-medium bg-white/90 text-gray-900 border-gray-200 shadow-sm backdrop-blur dark:bg-black-600/90 dark:text-gray-100 dark:border-black-500"
      aria-label="Toggle theme"
    >
      {label}
    </button>
  )
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SettingsProvider>
        <EthereumProvider>
          <Component {...pageProps} />
          <ThemeToggle />
        </EthereumProvider>
      </SettingsProvider>
    </ThemeProvider>
  )
}

export default App
