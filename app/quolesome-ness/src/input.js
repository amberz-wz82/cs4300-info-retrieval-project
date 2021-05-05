import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TagSelect from "./Components/TagSelect.js";

function Input(props) {
  const [selected, setSelected] = useState([]);
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState("");
  const [wholesome, setWholesome] = useState(0);

  return (
    <Container className="input">
      <Form className="input-container">

          <Row className="feeling">
            <Col>
              <Form.Group controlId="feelingDescription">
                <Form.Label className="text">What's on your mind?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="feelingInput"
                  value={text}
                  placeholder="School is stressful..."
                  onChange={({ target: { value } }) => {
                    setText(value);
                  }}
                />
                <Form.Text className="text-muted">
                  Feeling troubled by anything? Tell us about it :)
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row className="tags">
            <Col>
              <TagSelect selected={selected} setSelected={setSelected} />
            </Col>
          </Row>

          <Row className="moodbar">
            <Col>
              <Form.Group controlId="moodRange">
                <p className="text">
                  {"Indicate your emotional state: " + emoji}
                </p>
              </Form.Group>
              <Row className="emoji-row">
                <Col>
                  <p
                    className="emoji"
                    onClick={() => {
                      setEmoji("😐");
                      setWholesome(0.1);
                    }}
                  >
                    😐
                  </p>
                </Col>
                <Col>
                  <p
                    className="emoji"
                    onClick={() => {
                      setEmoji("🙁");
                      setWholesome(0.3);
                    }}
                  >
                    🙁
                  </p>
                </Col>
                <Col>
                  <p
                    className="emoji"
                    onClick={() => {
                      setEmoji("😢");
                      setWholesome(0.5);
                    }}
                  >
                    😢
                  </p>
                </Col>
                <Col>
                  <p
                    className="emoji"
                    onClick={() => {
                      setEmoji("😰");
                      setWholesome(0.7);
                    }}
                  >
                    😰
                  </p>
                </Col>
                <Col>
                  <p
                    className="emoji"
                    onClick={() => {
                      setEmoji("😭");
                      setWholesome(0.9);
                    }}
                  >
                    😭
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

        <Row>
          <Col>
            <Button
              variant="info"
              className="button"
              name="submit"
              disabled={text.length<1}
              onClick={(e) =>
                props.handleSubmit({
                  text: text,
                  tags: selected.map((item) => {
                    return item.value;
                  }),
                  emoji: emoji,
                  wholesome: wholesome,
                })
              }
            >
              Find Your Quotes
            </Button>{" "}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
export default Input;
