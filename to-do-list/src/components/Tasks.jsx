import React, { useState } from "react";
import Task from "../components/Task";
export default function Tasks(props) {
  var tasks = props.task;
  const showTask = tasks.map((val) => {
    return (
      <Task
        title={val.title}
        text={val.text}
        state={val.state}
        onChange={props.onChange}
        key={val.id}
        id={val.id}
      />
    );
  });
  return <div className="tasks">{showTask}</div>;
}
