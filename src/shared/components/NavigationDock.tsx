import { HStack, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const NavigationDock = () => {
  return (
    <HStack as={'nav'}>
      <Button as={NavLink} to="/home">
        Home
      </Button>
      <Button as={NavLink} to="/challenges">
        Challenges
      </Button>
      <Button as={NavLink} to="/results">
        Results
      </Button>
      <Button as={NavLink} to="/profile">
        Profile
      </Button>
    </HStack>
  )
}
