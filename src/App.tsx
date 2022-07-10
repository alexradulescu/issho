import { Global } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { cssReset } from 'src/shared'

export const App = () => {
  return (
    <>
      <Global styles={cssReset} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Main page template</>}>
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
