import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './style.css';

function Game() {

  const [board, setBoard] = useState([
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '']
  ]);

  useEffect(() => {
    for(let i = 0; i < 30; i++){
      let randRow = Math.floor(Math.random() * 9),
          randCol = Math.floor(Math.random() * 9),
          randNumber = Math.floor(Math.random() * 9) + 1;
      const temp = board;
      temp[randRow][randCol] = randNumber;
      setBoard([...temp]);
    }
  }, [])
  

  const handleChange = (e) => {
    const row = parseInt(e.target.name.split(' ')[0], 10);
    const col = parseInt(e.target.name.split(' ')[1], 10);
    const temp = board;
    temp[row][col] = e.target.value;
    setBoard([...temp]);
  }

  console.log(board);

  return (
    <Col sm={12} md={8} lg={8}>
      {
        board.map((row, i) => {
          return (
            <Row key={i} className="eq-height-column justify-content-start">
              {
                row.map((item, j) => {
                  if (j === 3 || j === 6){
                    return (
                      <Col xs="auto" sm="auto" md="auto" lg="auto" key={i + j} className='p-0 m-0'>
                        <input 
                          className='box boxLeft'
                          value={board[i][j]}
                          name={`${i} ${j}`}
                          onChange={handleChange}
                          type="number"
                        />
                      </Col>
                    );
                  }
                  else {
                    return (
                      <Col xs="auto" sm="auto" md="auto" lg="auto" key={i + j} className='p-0 m-0'>
                        <input 
                          className='box'
                          value={board[i][j]}
                          name={`${i} ${j}`}
                          onChange={handleChange}
                          type="number"
                        />
                      </Col>
                    );
                  }
                })
              }
            </Row>
          );
        })
      }
    </Col>
  );
}

export default Game;
