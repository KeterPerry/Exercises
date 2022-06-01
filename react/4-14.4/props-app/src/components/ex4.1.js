
function ExerciseButtons() {
    return (
      <div className="container">
          <Button name="Important"/>
          <Button name="Not important"/>
      </div>
    )
 }
function Button({name}) {                       ///props.name
    return (
      <button>{name}</button>
    )
 }

 export default ExerciseButtons

