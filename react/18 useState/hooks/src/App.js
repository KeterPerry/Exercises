import "./App.css";
import Text from "./components/text";
import React, { useState } from "react";
// import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import Time from "./components/time";
import Todo from "./components/todo";

// export default function App()
//   const [text, setText] = useState("lorem");
//   const [maxLength, setmaxLength] = useState("1");

//   const handleClick = (maxLength) => {
//     setmaxLength(maxLength);
//   };

//   return (
//     <div>
//       <div className="text-wrapper">
//         <LoremIpsum p={maxLength} />
//       </div>
//       <Text text={text} maxLength={maxLength} handleClick={handleClick} />
//     </div>
//   );
// }
///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////

export default function App() {
  return (
    <div>
      {/* <Todo/> */}
      <Time />
    </div>
  );
}
