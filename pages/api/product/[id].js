import { dbConnect } from '../../../src/dbConnect';
import Product from '../../../src/model/productModel';
import { getProductById } from '../../../src/services/productsService';

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();

  if (request.method === 'GET') {
    const product = await getProductById(id);
    response.status(200).json(product);
  } else if (request.method === 'PUT') {
    const data = JSON.parse(request.body);
    await Product.findByIdAndUpdate(id, data);
    response.status(200).json({ message: 'product updated' });
  }
}
