import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = () => {
  return (
    <Row>
      <Col lg={1}>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
        />
      </Col>
      <Col lg={11}>
        <div>최고은</div>
        <div>01074556002</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
