import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://adeoyeemmanuel_db_user:V4qJzgLImq6ZMXme@cluster0.2nxmosm.mongodb.net/"
    );
    console.log("Database connected successfully 💯");
  } catch (e) {
    console.log(e);
  }
}
