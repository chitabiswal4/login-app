import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import truthtester from "truthtester";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await truthtester.starttest(
      "login apps",
      "login success",
      "chitabiswal4@gmail.com"
    );

    if (re.test(email)) {
      const res2 = await truthtester.steptest({
        "valid email": email,
      });

      if (password === "123456") {
        const res2 = await truthtester.steptest({
          "correct password": password,
        });

        const res3 = await truthtester.steptest("login successfull");
        const res5 = await truthtester.endtest();
        console.log(res5);

        // console.log(res6);
        const obj = { email: email, password: password };
        alert(JSON.stringify(obj));
      } else {
        alert("password incorrect!");
      }
    }
  };
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  style={{ boxShadow: "none" }}
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  style={{ boxShadow: "none" }}
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>

              <Button variant="success btn-block" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
