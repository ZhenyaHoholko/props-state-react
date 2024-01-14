import React, { useState } from "react";
import { Button } from "antd";

function SiblingComponent() {
  const [text, setText] = useState("Home");
  return (
    <div className="sibling-content">
      <div className="changer">{text}</div>
      <Button className="btn" onClick={() => setText("Redev")}>
        Изменить
      </Button>
    </div>
  );
}

export default SiblingComponent;
