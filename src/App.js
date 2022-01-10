import { Route, Routes } from "react-router-dom";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import Footer from './Components/Footer/Footer';
import { Container } from "react-bootstrap";
import Main from "./Components/Interface/Main";
import './App.css';

function App() {
  return (
    <Container>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
