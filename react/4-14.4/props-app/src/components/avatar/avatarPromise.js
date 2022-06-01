// import React from "react";
// import axios from "axios";

// class AvatarPromise extends React.Component {
//   state = {};
//   ///////////////////////////////////////////////////////////////////////
//   fetchedAvatars = (random) => {
//     const promises = [];
//     for (let i = 0; i < random; i++) {
//       const avatar = axios.get("https://randomuser.me/api/");
//       promises.push(avatar);
//     }
//     Promise.all(promises).then((vals) => this.getAvatarObjs(vals));
//   };

//   getAvatarObjs = (arrayOfObjs) => {
//     const cardArrOfObjs = arrayOfObjs.map((obj) => {
//       const objData = obj.data.results[0];
//       return {
//         firstName: objData.name.first,
//         picture: objData.picture.large,
//         city: objData.location.city,
//         country: objData.location.country,
//         age: objData.dob.age + "",
//       };
//     });
//     this.setState({ avatars: cardArrOfObjs, filtered: cardArrOfObjs });
//   };

//   componentDidMount = () => {
//     this.fetchedAvatar();
//   };

//   render() {
//     return <input />;
//   }
// }

// export default Avatar;
