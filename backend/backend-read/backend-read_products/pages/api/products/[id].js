import dbConnect from "@/db/connect";
import Product from "@/db/Models/Product";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  try {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
  } catch (error) {
    console.log(Error);
    response.status(500).json({ message: "Internal Server Error" });
  }
}
