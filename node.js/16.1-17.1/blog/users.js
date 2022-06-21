const users = [
  {
    userName: "Amir",
    address: { city: "Tel-Aviv", street: "" },
    contact: { phone: "050-4546754", email: "amir@gmail.com" },
    posts: [id, id],
    comments: [idanotherpersonpost, idmycomment],
  },

  {
    userName: "Dan",
    address: { city: "Ashkelon", street: "" },
    contact: { phone: "050-4673242", email: "dan@gmail.com" },
    posts: [],
    comments: [idanotherpersonpost, idmycomment],
  },
];

const posts = [
  { userId: " ", postDescription: "I love to eat!", comments: [id] },
  { userId: " ", postDescription: " I LOVE ski:)", comments: [] },
];
const comments = [
  { idpost: " ", userId: " ", commentDescription: "That'a great!" },
];

// one to many relationship with references
