import { useState } from "react";
import Home from "./components/Home";
import RandomMusic from "./components/RandomMusic";
import MusicDetail from "./components/MusicDetail";
import { TEST_MUSIC } from "./TEST_MUSIC";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar} from "react-bootstrap";


function App() {
  
  const [musicList, setMusicList] = useState(TEST_MUSIC);
  
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="#home">Trending Music</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/random">Random Music</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home musicList={musicList} />}/>
          <Route path="/random" element={<RandomMusic musicList={musicList} />}/>
          <Route path="/music/:musicId" element={<MusicDetail musicList={musicList} />}/>
        </Routes>
      </Container>
      </div>  
    );
 }
export default App;
