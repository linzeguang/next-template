import React from 'react'

import ModeToggle from '../common/ModeToggle'

const Header: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-between px-8">
      <h2>NEXT-TEMPLATE</h2>
      <div className="flex items-center gap-x-4">
        <w3m-button />
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
