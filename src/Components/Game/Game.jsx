import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './style.css';

function Game() {

  const [board, setBoard] = useState([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ]);

  return (
    <>
      {
        board.map((row, i) => {
          return (
            <Row className="m-0 p-0">
              <h6 className="m-0 p-0">
                {
                  row.map((item, j) => {
                    if (j === 3 || j === 6){
                      return (
                        <span className='box boxLeft'>
                          {item}
                        </span>
                      );
                    }
                    else {
                      return (
                        <span className='box'>
                          {item}
                        </span>
                      );
                    }
                  })
                }
              </h6>
            </Row>
          );
        })
      }
    </>
  );
}

export default Game;
