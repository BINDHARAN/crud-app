import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { list } from "./list";
import { useState } from "react";
import { Msg } from './Msg';
import { NotFound } from './NotFound';
import { Characters } from "./character";
import { AddCharacters } from "./addCharacters";
import { EditCharacters } from "./editCharacter";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap'


export default function App() {
  const [initialList, setInitialList] = useState(list)

  return (
    <div className="App">
  <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand>Marvel Characters</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Goto</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 ">

                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>

                    <Link to="/characters" >characters</Link>
                  </li>

                  <li>

                    <Link to="/characters/add" >Add-characters</Link>
                  </li>

                </ul>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

     <Switch>
        <Route path="/characters/add">
          <AddCharacters initialList={initialList} setInitialList={setInitialList} />
        </Route>

        <Route path="/characters/edit/:id">
          <EditCharacters initialList={initialList} setInitialList={setInitialList} />
        </Route>

        <Route path="/characters">
          <Characters initialList={initialList} setInitialList={setInitialList} />
        </Route>

        <Route exact path="/">
          < Msg />
        </Route>
        <Route path="**"> <NotFound /> </Route>
     </Switch>
    
    </div>
  );
}


