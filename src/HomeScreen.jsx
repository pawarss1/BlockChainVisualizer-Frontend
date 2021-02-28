import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./globalMetadata";
import { useDispatch } from "react-redux";
import { blockDataSlice } from "./Store/blockDataSlice";
import Block from "./Block";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

function HomeScreen() {
  const dispatch = useDispatch();
  const [blockList, setBlockList] = useState([]);
  const userData = useSelector((globalStore) => globalStore.users);
  const getPostsFromBackend = () => {
    const url = `${SERVER_URL}/home/blockchain`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          console.log(res);
          const payload = {
            blocks: res.blocks,
          };
          dispatch(blockDataSlice.actions.addNewBlockList(payload));
          setBlockList(res.blocks);
        } else {
          console.log("You are all caught up..");
        }
      });
  };
  useEffect(() => {
    getPostsFromBackend();
  }, []);
  return (
    <div className="block-container">
      <Container fluid>
        <Row>
          <Col>
            <div className="profile">
              <p className="text">{userData.userName[0]}</p>
              <p>{userData.userName}</p>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col></Col>
          <Col>
            {blockList.map((block, index) => {
              return (
                <div style={{ marginTop: "20px", marginBottom: "20px", }}>
                  <Block block={block} key={index}/>
                  {index !== blockList.length - 1 ? <h2>V</h2> : null}
                </div>
              );
            })}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeScreen;
