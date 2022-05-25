import React from "react";

class Card extends React.Component {
  render() {
    return (
      <>
        {this.props.before1990.map((user, idx) => (
          <>
            <div key={user.name + idx}>{user.name}</div>
            <div> {user.birthday} </div>
            <div> {user.favoriteFoods.meats.join(", ")} </div>
            <div> {user.favoriteFoods.fish.join(", ")} </div>
          </>
        ))}
      </>
    );
  }
}
export default Card;

// const meats = user.favoriteFoods.meats.map((meat) => meat);
// const fish = user.favoriteFoods.fish.map((fish) => fish);
