import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function Task(props) {
  const [status, setStatus] = useState(props.state);
  function updateState(event) {
    setStatus(event.target.value);
    props.onChange(props.id, event.target.value);
  }

  return (
    <Card style={{ width: "18rem", border: "solid", margin: "5px" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <div className="task-state flex-column">
          <Form.Select className="testt" onChange={updateState} value={status}>
            <option
              disabled={status != "blocked" && status != "inQA"}
              value="toDO"
            >
              To Do
            </option>
            <option disabled={status != "toDO"} value="inProgress">
              In Progress
            </option>
            <option disabled={status != "inProgress"} value="blocked">
              Blocked
            </option>
            <option disabled={status != "inProgress"} value="inQA">
              In QA
            </option>
            <option disabled={status != "inQA"} value="done">
              Done
            </option>
            <option disabled={status != "done"} value="deployed">
              Deployed
            </option>
          </Form.Select>
        </div>
      </Card.Body>
    </Card>
  );
}
