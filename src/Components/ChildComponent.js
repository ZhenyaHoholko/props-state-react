import React, { useState } from "react";

function ChildComponent(props) {
  const [change, setChange] = useState(false);
  return (
    <div>
      <p
        onClick={() => setChange((prev) => !prev)}
        className={change ? "crossing" : "crossing-2"}
      >
        Привет {props.name}!
      </p>{" "}
      <p>Текущий счетчик: {props.counter}</p>
    </div>
  );
}

export default ChildComponent;
