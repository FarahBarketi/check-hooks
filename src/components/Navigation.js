import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Navigation({setSearch, search}) {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <input type="text"  onChange={(event)=>setSearch( event.target.value)} value={search}/>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navigation;