import clientPromise from "../src/lib/mongodb.js";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const client = await clientPromise;

    const db = client.db("landing");

    await db.collection("emails").insertOne({
      email: email.toLowerCase().trim(),
      createdAt: new Date()
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Database error" });
  }
}