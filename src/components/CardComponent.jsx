import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

import romance from "../json/romance.json";
import fantasy from "../json/fantasy.json";
import horror from "../json/horror.json";
import history from "../json/history.json";
import scifi from "../json/scifi.json";

const allGenres = [romance, fantasy, horror, history, scifi];
console.log(allGenres);

function DropdownList() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  function handleItemClick(index) {
    setSelectedGenre(index);
  }

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Scegli il genere
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleItemClick(0)}>Romance</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick(1)}>Fantasy</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick(2)}>Horror</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick(3)}>History</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItemClick(4)}>Sci-fi</Dropdown.Item>
        </Dropdown.Menu>
        {selectedGenre !== null && generateCard(selectedGenre)}
      </Dropdown>
    </>
  );
}

function generateCard(genre) {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <h2 className="my-3 text-center">Ecco i nostri Libri!!</h2>
        {allGenres[genre].map((book, i) => {
          if (i < 10) {
            return (
              <Col xs={2}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={book.img} style={{ height: "400px" }} />
                  <Card.Body>
                    <Card.Title style={{ height: "100px" }}>{book.title}</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    <small className="">{book.category}</small>
                    <Button variant="primary">BUY IT</Button>
                    <small className="">{book.price}€</small>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
          return null;
        })}
      </Row>
    </Container>
  );
}

export default DropdownList;
