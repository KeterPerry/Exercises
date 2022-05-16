import React from "react";
// import ""

// class exc3_1 extends React.Component {
//   render() {
//     return <div>{boxes()}</div>;
//   }
// }

// function exc3_1() {
// function boxes() {
//   return (
//     <div className="box-1" style={{ width: "70vw", height: "70vh", backgroundColor: "green" }}>
//       <div className="box-2" style={{ width: "60vw", height: "60vh", backgroundColor: "blue" }}>
//         <div className="box-3" style={{ width: "50vw", height: "50vh", backgroundColor: "pink" }}>
//           <div className="box-4" style={{ width: "40vw", height: "20vh", backgroundColor: "purple" }}></div>
//           <div className="box-4" style={{ width: "40vw", height: "20vh", backgroundColor: "purple" }}></div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Exercise3() {
  return (
    <div>
      <Box1/>
    </div>
  );
}

function Box1() {
  return (
    <div className="box-1" style={{ width: "70vw", height: "70vh", backgroundColor: "green",  display: "flex", justifyContent: "center"}}>
      <Box2 />
      {/* {Box2()} */}
    </div>
  );
}
function Box2() {
  return (
    <div className="box-2" style={{ width: "60vw", height: "60vh", backgroundColor: "blue" , display: "flex", justifyContent: "center"}}>
      <Box3 />
    </div>
  );
}
function Box3() {
  return (
    <div className="box-3" style={{ width: "50vw", height: "50vh", backgroundColor: "pink",  display: "flex", justifyContent: "center", flexDirection:"column", gap:"1rem", alignItems:"center" }}>
      <Box4 />
      <Box4 />
    </div>
  );
}
function Box4() {
  return <div className="box-4" style={{ width: "40vw", height: "20vh", backgroundColor: "purple" }}></div>;
}

export default Exercise3;



































// import React from "react";




// function Exercise3(){

//     return (
//         <div className="box1" style={{backgroundColor: "green", width: "300px", height: "200px", margin: "auto"}}> 
//         <div className="box2" style={{backgroundColor: "blue", width: "250px", height: "200px",margin: "auto"}}>
//         <div className="box3" style={{backgroundColor: "pink", width: "200px", height: "180px",margin: "auto"}}>
//         <div className="box4" style={{backgroundColor: "purple", width: "150px", height: "50px",margin: "auto"}}></div>
//         <br></br>
//         <div className="box4" style={{backgroundColor: "purple", width: "150px", height: "50px",margin: "auto"}}></div>
            

//          </div>
//         </div>
       
//         </div>
//     )
// }


// export default Exercise3