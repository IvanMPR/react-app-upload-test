import React from "react";

export default function Title(props) {
  return <h1>Turn the light {`${props.state ? "on" : "off"}`} with React</h1>;
}
