import dbConnect from "@/db/connect";
import Product from "@/db/Models/Product";

export default async function handler(request, response) {
  await dbConnect();
  try {
    const products = await Product.find();
    response.status(200).json(products);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server error" });
    return;
  }
}
