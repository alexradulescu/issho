import { Global } from '@emotion/react'

import { cssReset, Routes } from 'src/shared'

export const App = () => {
  return (
    <>
      <Global styles={cssReset} />
      <p>App</p>

      <Routes />
    </>
  )
}
