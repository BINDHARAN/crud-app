//import
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import { list } from "./list";
import { useState } from "react";
import { Msg } from './Msg';
import { NotFound } from './NotFound';
import { Characters } from "./character";
import { AddCharacters } from "./addCharacters";
import { EditCharacters } from "./editCharacter";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap'
import Button from '@mui/material/Button';

// App component

export default function App() {

  const [initialList, setInitialList] = useState(list)

  const history = useHistory()
  return (
    <div className="App">
      {/* bootstrap  offcanvas Navabr */}
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand className="nav_title">Marvel Characters</Navbar.Brand>
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

              <Nav className="justify-content-end flex-grow-1 pe-3">

                <ul>

                  <li>
                    <Button color="inherit" onClick={() => history.push("/")}>Home</Button>

                  </li>

                  <li>
                    <Button color="inherit" onClick={() => history.push("/characters")}>characters</Button>
                  </li>

                  <li>
                    <Button color="inherit" onClick={() => history.push("/characters/add")}>Add characters</Button>
                  </li>

                </ul>
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* switching and routing and also passing props */}
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


