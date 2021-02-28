import React, { useState } from "react";
import { Button, Input, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { userDataSlice } from "./Store/userDataSlice";
import { useDispatch } from "react-redux";
import { SERVER_URL } from "./globalMetadata";

function Login() {
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState("");
  const history = useHistory();
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const updateUserName = (value) => {
    setErrMsg("");
    const userDataCur = { ...userData };
    userDataCur.userName = value;
    setUserData(userDataCur);
  };

  const updateUserPW = (value) => {
    setErrMsg("");
    const userDataCur = { ...userData };
    userDataCur.password = value;
    setUserData(userDataCur);
  };

  const loginHandler = (evt) => {
    evt.preventDefault();
    if (userData.userName.length > 0 && userData.password.length > 0) {
      //As we will be using HTTPS so->> You should always use HTTPS and avoid homebrewed code. SSL will take care of hashing & encryption. That is the ONLY secure method.
      const url = `${SERVER_URL}/login?userName=${userData.userName}&password=${userData.password}`;

      const postBody = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      setErrMsg("");
      fetch(url, postBody)
        .then((res) => res.json())
        .then((res) => {
          if (res.loginSuccess) {
            localStorage.setItem("userName", res.newUser.userName);
            localStorage.setItem("userEmail", res.newUser.userEmail);
            const payload = {
              userName: res.newUser.userName,
              userEmail: res.newUser.userEmail,
            };
            dispatch(userDataSlice.actions.addUserData(payload));
            history.push("/home/");
          } else {
            setErrMsg("Internal Server Error!");
          }
        });
    } else {
      setErrMsg("Required Fields Missing!")
    }
  };
  return (
    <div className="login-div">
      <h2 style={{ color: "black" }}>Login to Mine blocks!</h2>
      <Form>
        <FormGroup>
          <Input
            type="text"
            name="UserName"
            id="userName"
            placeholder="UserName"
            size="40"
            onChange={(evt) => updateUserName(evt.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
            size="40"
            onChange={(evt) => updateUserPW(evt.target.value)}
          />
        </FormGroup>
        <p style={{ color: "red" }}>{errMsg}</p>
        <br />
        <Button onClick={loginHandler}>Log In</Button>
        <Link to="/signup">
          <Button className="btn-padding">Sign Up</Button>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
