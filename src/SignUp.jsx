import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useHistory, Link } from "react-router-dom";
import { SERVER_URL } from "./globalMetadata";

function SignUp() {
  const history = useHistory();
  const [userData, setUserData] = useState({
    userEmail: "",
    password: "",
    userName: "",
  });
  const updateUserEmail = (value) => {
    const userDataCur = { ...userData };
    userDataCur.userEmail = value;
    setUserData(userDataCur);
  };

  const updateUserName = (value) => {
    const userDataCur = { ...userData };
    userDataCur.userName = value;
    setUserData(userDataCur);
  };

  const updateUserPW = (value) => {
    const userDataCur = { ...userData };
    userDataCur.password = value;
    setUserData(userDataCur);
  };

  const signUpHandler = (evt) => {
    evt.preventDefault();
    if (
      userData.userEmail.trim().length > 0 &&
      userData.password.trim().length > 0
    ) {
      const url = `${SERVER_URL}/signup`;
      const postBody = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: userData.userName,
          userEmail: userData.userEmail,
          password: userData.password,
        }),
      };
      fetch(url, postBody)
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            console.log(res);
            history.push("/login");
          } else {
            console.log(res.errorMsg);
          }
        });
    } else {
      console.log("not ");
    }
  };

  return (
    <div className="login-div">
      <h2 style={{ color: "white" }}>Signup to Mine blocks!</h2>
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
            type="email"
            name="email"
            id="emailId"
            placeholder="Email"
            size="40"
            onChange={(evt) => updateUserEmail(evt.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
            size="40"
            required
            onChange={(evt) => updateUserPW(evt.target.value)}
          />
        </FormGroup>
        <br />
        <Link to="/">
          <Button>Log In</Button>
        </Link>
        <Button className="btn-padding" onClick={(evt) => signUpHandler(evt)}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
