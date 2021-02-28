import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Button } from "reactstrap";

function BlockCreationBlock(props) {
  return (
    <div className="block-page">
      <div style={{ marginLeft: "10px" }}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>DATA</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="With textarea"
            onChange={(evt) => props.setBlockData(evt.target.value)}
            value={props.newBlockData}
          />
        </InputGroup>
        <br />
        <Button
          className="btn-cls"
          onClick={() => {
            props.onAddBtnClick();
          }}
        >
          ADD NEW BLOCK
        </Button>
        <br />
      </div>
    </div>
  );
}

export default BlockCreationBlock;
