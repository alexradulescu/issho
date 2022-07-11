import { Outlet } from 'react-router-dom'

import { Navigation } from './components'

const SharedPageTemplate = () => {
  return (
    <div>
      <h2>Shared page template</h2>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default SharedPageTemplate
