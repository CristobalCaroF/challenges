import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  console.log("I am in the API Product");
  console.log("request in ID jokes: ", request.query);

  const { id } = request.query;
  response.status(200).json(getProductById(id));
}
