import { NavLink } from 'react-router-dom'
import { styled } from '@linaria/atomic';

// import { Link } from '@chakra-ui/react'

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/challenge">
        All Challenges
      </NavLink>
      <NavLink to="/challenge/new">
        New Challenge
      </NavLink>
      <NavLink to="/challenge/123">
        Individual Challenge
      </NavLink>
      <NavLink to="/challenge/123/edit">
        Edit Individual Challenge
      </NavLink>
      <NavLink to="/result">
        Results
      </NavLink>
      <NavLink to="/result/456">
        Individual Result
      </NavLink>
      <NavLink to="/profile">
        Profile
      </NavLink>
      <NavLink to="/login">
        Login
      </NavLink>
      <NavLink to="/register">
        Register
      </NavLink>
    </nav>
  )
}

