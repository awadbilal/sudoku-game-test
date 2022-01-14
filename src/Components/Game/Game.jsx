import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./style.css";

function Game() {
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""]
  ]);

  useEffect(() => {
    for (let i = 0; i < 30; i++) {

      // Copying the existing board to a temp variable before editing it
      const temp = board;

      // Creating a random number and position
      let randRow = Math.floor(Math.random() * 9),
          randCol = Math.floor(Math.random() * 9),
          randNumber = Math.floor(Math.random() * 9) + 1,
          useable = false;
      
      // Checking if the row or column does not have a matching number
      while(useable === false) {
        for(let i = 0; i < 9; i++){
          while(temp[i][randCol] === randNumber){
            randNumber = Math.floor(Math.random() * 9) + 1;
          }
          while(temp[randRow][i] === randNumber){
            randNumber = Math.floor(Math.random() * 9) + 1;
          }
        }
        useable = true;
        temp[randRow][randCol] = randNumber;
      }      
      setBoard([...temp]);
    }
  }, []);

  const handleChange = (e) => {
    const row = parseInt(e.target.name.split(" ")[0], 10);
    const col = parseInt(e.target.name.split(" ")[1], 10);
    const temp = board;
    temp[row][col] = e.target.value;
    setBoard([...temp]);
  };

  return (
    <Col sm={12} md={12} lg={8}>
      {board.map((row, i) => {
        return (
          <Row key={i} className="eq-height-column justify-content-center">
            {row.map((item, j) => {
              return (
                <Col
                  xs="auto"
                  sm="auto"
                  md="auto"
                  lg="auto"
                  key={i + j}
                  className={`p-0 m-0 ${i === 3 || i === 6 ? "boxTop" : ""} ${
                    i === 2 || i === 5 ? "boxBottom" : ""
                  }`}
                >
                  <input
                    className={`box ${j === 3 || j === 6 ? "boxLeft" : ""} ${
                      j === 2 || j === 5 ? "boxRight" : ""
                    }`}
                    value={board[i][j]}
                    name={`${i} ${j}`}
                    onChange={handleChange}
                    type="number"
                    disabled={item === "" ? false : true}
                  />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Col>
  );
}

export default Game;
