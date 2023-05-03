import app from "./src/app";
import mongoose from "mongoose";

const PORT = 8080;

const mongoUrl =
  "mongodb://user:SM2xURpnJduBEExI@ac-uynjg2u-shard-00-00.tqaeshh.mongodb.net:27017,ac-uynjg2u-shard-00-01.tqaeshh.mongodb.net:27017,ac-uynjg2u-shard-00-02.tqaeshh.mongodb.net:27017/spree?ssl=true&replicaSet=atlas-zrwf38-shard-0&authSource=admin&retryWrites=true&w=majority";

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
  mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((e: any) => {
      console.log("Error connecting to the DB");
      console.log(e.message);
    });
});
