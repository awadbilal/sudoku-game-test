import React from 'react'
import { Container } from 'react-bootstrap'
import Game from '../Game/Game';
import Leaderboard from '../Leaderboard/Leaderboard';

function Main() {
  return (
    <Container>
      <Game />
      <Leaderboard />
    </Container>
  )
}

export default Main
