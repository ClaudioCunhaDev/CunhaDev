import React, { useState, useEffect } from "react";

export const MaquinaDeEscrever = (props) => {
  const [text, setText] = useState("");
  const [mostrarCursor, setMostrarCursor] = useState(false);
  const escrever = (text, i = 0) => {
    if (i < text.length) {
      setMostrarCursor(true);

      setText(text.slice(0, i + 1));
      setTimeout(() => escrever(text, i + 1), 150);
    } else if (i >= text.length && props?.esconderCursor) {
      setMostrarCursor(false);
    }
  };

  useEffect(() => {
    setTimeout(() => escrever(props.text), props?.delay ?? 50);
  }, []);
  return (
    <div>
      {text}
      {mostrarCursor && <span className="">{"|"}</span>}
    </div>
  );
};
