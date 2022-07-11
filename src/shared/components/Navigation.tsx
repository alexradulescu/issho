import { NavLink as RouterLink } from 'react-router-dom'

import { Link } from '@chakra-ui/react'

export const Navigation = () => {
  return (
    <nav>
      <Link as={RouterLink} to="/">
        Home
      </Link>
      <Link as={RouterLink} to="/challenge">
        All Challenges
      </Link>
      <Link as={RouterLink} to="/challenge/new">
        New Challenge
      </Link>
      <Link as={RouterLink} to="/challenge/123">
        Individual Challenge
      </Link>
      <Link as={RouterLink} to="/challenge/123/edit">
        Edit Individual Challenge
      </Link>
      <Link as={RouterLink} to="/result">
        Results
      </Link>
      <Link as={RouterLink} to="/result/456">
        Individual Result
      </Link>
      <Link as={RouterLink} to="/profile">
        Profile
      </Link>
      <Link as={RouterLink} to="/login">
        Login
      </Link>
      <Link as={RouterLink} to="/register">
        Register
      </Link>
    </nav>
  )
}
