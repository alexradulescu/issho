import { Global } from '@emotion/react'

import { Challenge } from 'src/challenges'
import { cssReset } from 'src/shared'

export const App = () => {
  return (
    <main>
      <Global styles={cssReset} />

      <h1>Welcome to Issho</h1>
      <p>May consensus be with you</p>

      <Challenge />
    </main>
  )
}
