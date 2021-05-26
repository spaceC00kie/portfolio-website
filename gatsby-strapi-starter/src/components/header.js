import React, { useState } from "react"
import { Container, Collapse, Navbar, NavbarToggler } from "reactstrap"
import Link from "./link"
import Navigation from "reactstrap-json-nav"
import navigation from "../data/navigation"
import styled from "styled-components"

let StyledNavbar = styled((props) => <Navbar {...props} />)`
  position: sticky;
  top: 0;
  z-index: 10;
`

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <StyledNavbar color="dark" light expand="md">
      <Container>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Navigation
            json={navigation}
            link={Link.to}
            activeclassname="active"
          />
        </Collapse>
      </Container>
    </StyledNavbar>
  )
}

export default Header
