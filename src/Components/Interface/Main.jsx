import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Game from '../Game/Game';
import Leaderboard from '../Leaderboard/Leaderboard';

function Main() {
  return (
    <Container className="mt-5 pt-5">
      <Row className="row-eq-height">
        <Game />
        <Leaderboard />
      </Row>
    </Container>
  )
}

export default Main
