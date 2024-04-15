import React, { PropsWithChildren } from 'react'

import ThemeProvider from './ThemeProvider'
import Web3ModalProvider from './Web3ModalProvider'

const RootProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <Web3ModalProvider>{children}</Web3ModalProvider>
    </ThemeProvider>
  )
}

export default RootProvider
