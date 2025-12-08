import connectToDB from "./src/database/index.js";
import User from "./src/models/User.js";
import { hash } from "bcryptjs";

async function createAdminUser() {
  try {
    await connectToDB();

    const username = "admin";
    const password = process.env.ADMIN_PASSWORD || "#admin001"; // Change this to your preferred password

    const hashedPassword = await hash(password, 12);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("✅ Admin user created successfully!");
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log("\n⚠️  Please change the password after first login!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin user:", error.message);
    process.exit(1);
  }
}

createAdminUser();
