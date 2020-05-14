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
});
