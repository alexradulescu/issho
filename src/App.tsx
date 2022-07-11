import { Global } from '@emotion/react'

import { cssReset } from 'src/shared'

import { Routes } from './Routes'

export const App = () => {
  return (
    <>
      <Global styles={cssReset} />
      <p>App</p>

      <Routes />
    </>
  )
}
