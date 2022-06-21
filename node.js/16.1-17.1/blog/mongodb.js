const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blogs";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    //     const db = client.db(databaseName);
    //     db.collection("users").insertOne({
    //       userName: "Amir",
    //       address: { city: "Tel-Aviv", street: "" },
    //       contact: { phone: "050-4546754", email: "amir@gmail.com" },
    //       posts: ["id", "id"],
    //     });
    //   }
    // );
    const db = client.db(databaseName);
    // db.collection("users").insertMany(
    //   [
    //     {
    //       userName: "Amir",
    //       address: { city: "Tel-Aviv", street: "" },
    //       contact: { phone: "050-4546754", email: "amir@gmail.com" },
    //       posts: [],
    //       comments: [],
    //     },

    //     {
    //       userName: "Dan",
    //       address: { city: "Ashkelon", street: "" },
    //       contact: { phone: "050-4673242", email: "dan@gmail.com" },
    //       posts: [],
    //       comments: [],
    //     },
    //   ],
    //   (err, result) => {
    //     if (err) {
    //       console.log("Unable to insert data");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    /////////////////////////////////////////////////////////

    //     db.collection("posts").insertMany(
    //       [
    //         {
    //           userId: ObjectID("62b0506b38056a1c7d78f24b"),
    //           postDescription: "I love to eat!",
    //           comments: [],
    //         },
    //         {
    //           userId: ObjectID("62b0506b38056a1c7d78f24c"),
    //           postDescription: " I LOVE ski:)",
    //           comments: [],
    //         },
    //       ],
    //       (err, result) => {
    //         if (err) {
    //           console.log("Unable to insert data");
    //         }
    //         console.log(result.ops);
    //       }
    //     );
    //   }
    // );
    ///////////////////////////////////////////////////////////////////////////////////////////
    db.collection("comments").insertMany(
      [
        {
          postId: "62b05b297d4c49b1de84be60",
          userId: "62b0506b38056a1c7d78f24b",
          commentDescription: "That's great!",
        },
      ],
      (err, result) => {
        if (err) {
          console.log("Unable to insert data");
        }
        console.log(result.ops);
      }
    );
  }
);
