import React from "react";
import Card from "./card";

function MappingAvatars({ people, input }) {
  const filterAvatars = () => {
    return people.filter((avatar) => {
      const fullName = (avatar.firstName + avatar.lastName).toLowerCase();
      return fullName.includes(input.toLowerCase());
    });
  };

  const insertAvatars = () => {
    const filteredAvatars = filterAvatars();
    return filteredAvatars.map((avatar) => (
      <Card
        key={avatar.id}
        imgUrl={avatar.img}
        firstName={avatar.firstName}
        lastName={avatar.lastName}
      />
    ));
  };
  return <>{insertAvatars()}</>;
}

export default MappingAvatars;
