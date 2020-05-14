/* eslint-disable no-undef */

const request = require('supertest');
const path = require('path');

const app = require('../app');

// eslint-disable-next-line no-undef
describe('Product', () => {
  afterAll((done) => {
    done();
  });

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

    product.title = 'Tomato';
    product.rating = 2;
    product.type = 'fruit';
    // eslint-disable-next-line no-underscore-dangle
    response = await request(app).put(`/products/${response.body._id}`).send(product);

    expect(response.body.title).toBe(product.title);
    expect(response.body.rating).toBe(product.rating);
    expect(response.body.type).toBe(product.type);
  });

  it('should be able not to update Product price', async () => {
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

    product.price = 30.0;

    // eslint-disable-next-line no-underscore-dangle
    response = await request(app).put(`/products/${response.body._id}`).send(product);

    expect(response.body.price).toBe(28.1);
  });
});
