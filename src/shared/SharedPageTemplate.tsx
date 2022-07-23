import { Outlet } from 'react-router-dom'

import { Logo, Navigation, NavigationDock } from './components'

const SharedPageTemplate = () => {
  return (
    <div>
      <header>
        <Logo /> Issho
      </header>
      <Navigation />
      <Outlet />
      <NavigationDock />
    </div>
  )
}

export default SharedPageTemplate
