import React, { PropsWithChildren } from 'react'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const RootLayout: React.FC<PropsWithChildren> = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Main {...props} />
      <Footer />
    </React.Fragment>
  )
}

export default RootLayout
