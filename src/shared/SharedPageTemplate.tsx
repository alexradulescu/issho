import { Outlet } from 'react-router-dom'

import { Navigation, NavigationDock } from './components'

const SharedPageTemplate = () => {
  return (
    <div>
      <h2>Shared page template</h2>
      <Navigation />
      <Outlet />
      <NavigationDock />
    </div>
  )
}

export default SharedPageTemplate
