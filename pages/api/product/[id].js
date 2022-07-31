import { dbConnect } from '../../../src/dbConnect';
import { getProductById } from '../../../src/services/productsService';

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();

  if (request.method === 'GET') {
    const product = await getProductById(id);
    response.status(200).json(product);
  }
}
