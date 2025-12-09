import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    const mongoUri =
      process.env.MONGODB_URI ||
      "mongodb+srv://adeoyeemmanuel_db_user:V4qJzgLImq6ZMXme@ac-2fdpjkx-shard-00-00.2nxmosm.mongodb.net:27017,ac-2fdpjkx-shard-00-01.2nxmosm.mongodb.net:27017,ac-2fdpjkx-shard-00-02.2nxmosm.mongodb.net:27017/portfolio?retryWrites=true&w=majority";

    const connectionOptions = {
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
    };

    console.log("Attempting to connect to MongoDB...");
    console.log("Connection URI:", mongoUri.replace(/\/\/.*@/, "//***:***@"));

    await mongoose.connect(mongoUri, connectionOptions);
    console.log("Database connected successfully 💯");
  } catch (e) {
    console.log("Database connection error:", e.message);
    console.log("Error details:", e);

    // Check if it's a network/timeout issue
    if (
      e.name === "MongooseServerSelectionError" ||
      e.name === "MongoTimeoutError"
    ) {
      console.log("\n🔍 TROUBLESHOOTING TIPS:");
      console.log(
        "1. Check if your MongoDB Atlas cluster is paused (log into Atlas dashboard)"
      );
      console.log("2. Verify your IP address is whitelisted in Atlas");
      console.log("3. Ensure the cluster status is 'Available' in Atlas");
      console.log(
        "4. Try connecting from a different network if behind firewall"
      );
    }

    throw e;
  }
}
