import app from "./app.js";
import "./db/mongoose.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server is up! is listening to port ${PORT}`)
);
