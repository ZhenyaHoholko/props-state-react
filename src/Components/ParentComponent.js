import React, { useState } from "react";
import { Button } from "antd";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent";

function ParentComponent() {
  const [counter, setCouter] = useState(0);
  function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    let result = Math.floor(rand);
    setCouter(result);
  }
  return (
    <div className="container">
      <Button className="btn" onClick={() => setCouter(counter + 1)}>
        Увеличить
      </Button>
      <Button
        className="btn"
        onClick={() => counter > 0 && setCouter(counter - 1)}
      >
        Уменьшить
      </Button>
      <Button className="btn" onClick={() => setCouter(0)}>
        Сбросить
      </Button>
      <Button className="btn" onClick={() => random(1, 10)}>
        Случайное значение
      </Button>
      <span className="counter">{counter}</span>
      <ChildComponent name="всем" counter={counter} />
      <SiblingComponent />
    </div>
  );
}

export default ParentComponent;
