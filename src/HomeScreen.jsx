import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./globalMetadata";
import { useDispatch } from "react-redux";
import { blockDataSlice } from "./Store/blockDataSlice";
import { userDataSlice } from "./Store/userDataSlice";
import Block from "./Block";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import BlockCreationBlock from "./BlockCreationBlock";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
//Toast Configuration.

function HomeScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newBlockData, setBlockData] = useState("");
  const [blockList, setBlockList] = useState([]);
  const userData = useSelector((globalStore) => globalStore.users);
  const onAddBtnClick = () => {
    const url = `${SERVER_URL}/home/blockchain`;
    setBlockData("");
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ text: newBlockData }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setBlockList(res.blocks);
          const payload = {
            blockList: res.blocks,
          };
          dispatch(blockDataSlice.actions.addNewBlockList(payload));
        } else {
          toast.error("Internal Server Error!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2 * 1000,
          });
        }
      });
  };
  const getPostsFromBackend = () => {
    const url = `${SERVER_URL}/home/blockchain`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          const payload = {
            blocks: res.blocks,
          };
          dispatch(blockDataSlice.actions.addNewBlockList(payload));
          setBlockList(res.blocks);
        } else {
          toast.error("Internal Server Error!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2 * 1000,
          });
          // history.push("/login");
        }
      });
  };
  const logout = () => {
    localStorage.setItem("userName", "");
    localStorage.setItem("userEmail", "");
    history.push("/login");
    const payload = {
      userName: "",
      userEmail: "",
    };
    dispatch(userDataSlice.actions.addUserData(payload));
  };
  useEffect(() => {
    if (
      localStorage.getItem("userName") !== "" &&
      localStorage.getItem("userEmail") !== ""
    ) {
      const payload = {
        userName: localStorage.getItem("userName"),
        userEmail: localStorage.getItem("userEmail"),
      };
      dispatch(userDataSlice.actions.addUserData(payload));
      getPostsFromBackend();
    } else if (
      typeof userData.userName === "undefined" ||
      typeof userData.userEmail === "undefined"
    ) {
      toast.error("Login to Create Blocks!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2 * 1000,
      });
      history.push("/login");
    }
  }, []);
  return (
    <div className="block-container">
      <Container fluid>
        <Row>
          <Col>
            <div className="profile">
              <p className="text">
                {userData.userName !== undefined ? userData.userName[0] : null}
              </p>
              <p>{userData.userName}</p>
              <button onClick={logout}>Logout</button>
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
            <h1 style={{ color: "black" }}>BLOCKCHAIN</h1>
            {blockList.map((block, index) => {
              return (
                <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                  <Block block={block} key={index} />
                  {index !== blockList.length - 1 ? <h2>V</h2> : null}
                </div>
              );
            })}
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div style={{ marginTop: "20px", marginBottom: "40px" }}>
              <BlockCreationBlock
                setBlockData={setBlockData}
                onAddBtnClick={onAddBtnClick}
                newBlockData={newBlockData}
              />
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeScreen;
