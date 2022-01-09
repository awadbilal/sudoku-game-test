import { Route, Routes } from "react-router-dom";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import Footer from './Components/Footer/Footer';
import { Container } from "react-bootstrap";
import Game from "./Components/Game/Game";
import './App.css';

function App() {
  return (
    <Container>
      <Routes>
        <Route exact path="/" element={<Game />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
