import express from "express";

const array = [1, 2, 3, 4, 5, 6];
///////////////////////////////////////////////////////
const append = (num) => {
  array.push(num);
  return array;
};

////////////////////////////////////////////////////

const app = express(); // ← server
app.use(express.json());
app.use(express.urlencoded());

////////////////////////////////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("listening on port" + PORT);
});

app.get("/", (req, res) => {
  console.log("get request");
  try {
    res.status(200);
    res.send(array);
  } catch (e) {
    res.status(e.status).send(e.message);
  }
});

app.post("/", (req, res) => {
  console.log("post request");
  const newNum = req.body.num;
  if (array.indexOf(newNum) === -1) {
    ////////////////////////////////const {num} =
    const newArray = append(req.body.num);
    res.status(200).send(newArray);
  } else {
    res.status(400);
  }
  //   } catch (e) {
  //     res.status(e.status);
  //     res.send(e.message);
  //   }
});

app.delete("/:num", (req, res) => {
  console.log("delete request");

  try {
    console.log(req.params.num);
    const tobeDeleted = parseInt(req.params.num);
    if (array.indexOf(tobeDeleted) === -1) {
      res.status(404).send("the number doesn't exist");
    }
    console.log(typeof tobeDeleted);
    const filtered = array.filter((e) => e !== tobeDeleted);
    res.status(200).send(filtered);
  } catch (err) {
    res.status(err.status);
    res.send(err.message);
  }
});

app.put("/:num", (req, res) => {
  console.log("put request");
  try {
    const tobeUpdated = parseInt(req.params.num);
    console.log(tobeUpdated);
    if (array.indexOf(tobeUpdated) === -1) {
      res.status(404).send("the number doesn't exist");
    }
    //   const { num } = req.params;
    const newNum = req.body.num;
    console.log(newNum);
    const index = array.indexOf(tobeUpdated);
    console.log(index);

    const updatedArr = array.splice(index, 0, newNum);
    console.log(updatedArr);

    res.status(200).send(updatedArr);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

////body and params are objects
