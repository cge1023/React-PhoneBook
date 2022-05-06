import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <div className="contact-item">
      <Row>
        <Col lg="2">
          <img
            className="profile"
            width={50}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
          />
        </Col>
        <Col lg="10">
          <div>{item.name}</div>
          <div>{item.number}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
