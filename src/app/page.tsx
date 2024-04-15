import { NextPage } from 'next'

import ModeToggle from '@/components/common/ModeToggle'

const HomePage: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-x-2">
      <ModeToggle />
      <w3m-button />
    </div>
  )
}

export default HomePage
