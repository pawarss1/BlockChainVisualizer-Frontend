import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Moment from "react-moment";

function Block(props) {
  return (
    <div className="block-page">
      <div style={{ marginLeft: "10px" }}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>DATA</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="With textarea" value={props.block.data} />
        </InputGroup>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <label style={{ fontSize: "15px", color: "grey" }}>
            PREVIOUS HASH
          </label>
          <p style={{ marginLeft: "15px", fontSize: "11px", color: "green" }}>
            {props.block.previousHash}
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <label style={{ fontSize: "15px", color: "grey" }}>HASH</label>
          <div className="hash-cls">
            <p style={{ marginLeft: "15px", fontSize: "11px", color: "green" }}>
              {props.block.hash}
            </p>
          </div>
        </div>
        <Container fluid>
          <Row>
            <Col>
              {props.block.index === 0 ? (
                <p className="block-name">GENESIS BLOCK</p>
              ) : (
                <p className="block-name">BLOCK #{props.block.index}</p>
              )}
            </Col>
            <Col>
              <div style={{ display: "flex" }}>
                <p className="datetime">on</p>
                <Moment date={props.block.timestamp} className="datetime" />
              </div>
            </Col>
            <Col>
              <div className="nonce-div"><p>{props.block.nonce}</p></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Block;
