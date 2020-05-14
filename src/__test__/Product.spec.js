/* eslint-disable no-undef */
const request = require('supertest');
const path = require('path');

const app = require('../app');

// eslint-disable-next-line no-undef
describe('Product', () => {
  // eslint-disable-next-line no-undef
  it('should be able to create a new Products by Json file', async () => {
    const importJSON = path.resolve(__dirname, 'products.json');

    const response = await request(app).post('/products').attach('file', importJSON);

    expect(response.body).toMatchObject({
      ok: true,
    });
  });

  it('should be able to update Product title, price and type', async () => {
    const product = {
      title: 'Brown eggs',
      type: 'dairy',
      description: 'Raw organic brown eggs in a basket',
      filename: '0.jpg',
      height: 600,
      width: 400,
      price: 28.1,
      rating: 4,
    };

    let response = await request(app).post('/products/add').send(product);

    expect(response).toMatchObject(product);

    product.title = 'Tomato';
    product.price = 31.9;
    product.type = 'fruit';

    response = await request(app).put('/products').send(product);

    expect(response.body.data.title).toBe(product.title);
    expect(response.body.data.price).toBe(product.price);
    expect(response.body.data.type).toBe(product.type);
  });

  it('should be able not to update Product rating', async () => {
    const product = {
      title: 'Brown eggs',
      type: 'dairy',
      description: 'Raw organic brown eggs in a basket',
      filename: '0.jpg',
      height: 600,
      width: 400,
      price: 28.1,
      rating: 4,
    };

    let response = await request(app).post('/products/add').send(product);

    expect(response).toMatchObject(product);

    product.rating = 3;

    response = await request(app).put('/products').send(product);

    expect(response.body.data.rating).toBe(4);
  });
});
