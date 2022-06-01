import React, { useEffect, useState, useRef } from "react";

export default function Editing() {
  const [isDisplay, setisDisplay] = useState(false);
  const [input, setInput] = useState();
  const inputRef = useRef();

  useEffect(() => {
    if (isDisplay) {
      inputRef.current.focus();
    }
  }, [isDisplay]);

  const focus = () => {
    setisDisplay(!isDisplay);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div>
      {!isDisplay && <button onClick={focus}>Edit</button>}
      {isDisplay && (
        <div>
          <input ref={inputRef} value={input} onChange={handleChange}></input>
          <button>Save</button>
        </div>
      )}
    </div>
  );
}
