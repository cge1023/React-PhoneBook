import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  let {contactList} = useSelector((state) => state.contactList);

  const searchByName = () => {
    dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
  };

  return (
    <div className="search-form">
      <Row>
        <Col lg={10}>
          <Form.Control
            onChange={(event) => setKeyword(event.target.value)}
            type="text"
            placeholder="Enter Name"
          />
        </Col>
        <Col lg={2}>
          <Button onClick={searchByName} variant="primary">
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;
