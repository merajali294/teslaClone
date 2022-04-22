import React from "react";

export default function App() {
  const name = "Jane Doe";

  return <Hello name={name} />;
}

function Hello(props) {
  return (
    <div>
      <h1>Hello World~ </h1>
      <Greeting name={props.name} />
    </div>
  );
}

function Greeting(props) {
  return "My name is " + props.name;
}
