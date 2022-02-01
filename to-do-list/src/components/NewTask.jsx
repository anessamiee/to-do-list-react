import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export default function NewTask(props) {
  const [input, setInput] = useState([
    {
      title: "",
      text: "",
    },
  ]);
  const addTitle = (event) => {
    // console.log(event.target.value)
    event.preventDefault();
    input.title = event.target.value;
    setInput(input);
  };
  const addText = (event) => {
    event.preventDefault();
    input.text = event.target.value;
    setInput(input);
  };
  const addTask = (event) => {
    if (
      input.title != undefined &&
      input.text != undefined &&
      input.title != " " &&
      input.text != " "
    ) {
      event.preventDefault();
      props.onChange(input.title, input.text);
      setInput("");
    }
  };
  return (
    <div className="new-task">
      <Form
        onSubmit={addTask}
        style={{
          border: "solid",
          borderRadius: "10px",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          height: "50%",
          overflow: "hidden",
        }}
      >
        <Form.Label>Add a new Task</Form.Label>

        <Form.Group className="mb-3" controlId="taskId" id="title">
          <Form.Control type="text" placeholder="Title" onChange={addTitle} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="taskDescription">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description"
            onChange={addText}
          />
        </Form.Group>

        <Form.Group className="d-grid gap-2" controlId="addTask">
          <Button variant="dark" type="submit">
            + Add
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
