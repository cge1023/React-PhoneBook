import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control type="text" placeholder="Enter Name" />
      </Col>
      <Col lg={2}>
        <Button variant="primary">Search</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
