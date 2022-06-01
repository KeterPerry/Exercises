// export default function Todo() {
//   const [data, setData] = useState([
//     { name: "CSS", completed: true },
//     { name: "JavaScript", completed: true },
//     { name: "Learn React", completed: false },
//     { name: "Learn mongoDB", completed: false },
//     { name: "Learn Node JS", completed: false },
//   ]);

//   useEffect = () => {};
//     handleClick= () => {
//         setData(data.map((subject)=> (
//         if (subject.completed===true)
//        { ...subject, completed: subject.completed: false}
//         else
//         { ...subject, completed: subject.completed: true}
//         )

//     }

//   console.log(data);
//   return (
//     <div>
//       {data.map((subject, index) => (
//         <div>
//           <h4 key={index}>{subject.name}</h4>
//           <button onClick={handleClick}>Completed</button>
//           <button onClick={handleClick}>Not Completed</button>
//         </div>
//       ))}
//     </div>
//   );
// }
