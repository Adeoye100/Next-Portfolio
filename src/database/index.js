import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    const mongoUri =
      process.env.MONGODB_URI ||
      "mongodb+srv://adeoyeemmanuel_db_user:V4qJzgLImq6ZMXme@cluster0.2nxmosm.mongodb.net/";

    await mongoose.connect(mongoUri);
    console.log("Database connected successfully 💯");
  } catch (e) {
    console.log("Database connection error:", e.message);
    throw e;
  }
}
