import { Outlet } from 'react-router-dom'

const DashboardPage = () => {
  return (
    <div>
      <h2>Dashboard page template</h2>
      <Outlet />
    </div>
  )
}

export default DashboardPage
