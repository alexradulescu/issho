import { lazy } from 'react'
import { Global } from '@emotion/react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import { cssReset } from 'src/shared'

const LandingPage = lazy(() => import('./landing/LandingPage'))

export const App = () => {
  return (
    <>
      <Global styles={cssReset} />
      <p>Hallo</p>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route index element={<>Home Index</>} />
            <Route path="challenge" element={<>Challenge Root</>}>
              <Route path=":challengeId" element={<>Challenge ID</>}>
                <Route path="edit" element={<>Edit Challenge ID</>} />
                <Route index element={<>Challenge ID show</>} />
              </Route>
              <Route path="new" element={<>New Challenge</>} />
              <Route index element={<>All Challenges</>} />
            </Route>

            <Route path="result" element={<>Results Root</>}>
              <Route path=":resultId" element={<>Result ID</>} />
              <Route index element={<>All Results</>} />
            </Route>

            <Route path="dashboard" element={<>Dashboard</>} />
            <Route path="settings" element={<>Settings/Profile</>} />

            <Route path="login" element={<>Login</>} />
            <Route path="register" element={<>Register</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
