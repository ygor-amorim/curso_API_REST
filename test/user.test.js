const request = require('supertest');

const app = require('../src/app');

test('Deve listar todos os usuários', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
      expect(res.body[0]).toHaveProperty('name', 'Fulano');
    });
});

test('Deve inserir usuário com sucesso', () => {
  return request(app).post('/users')
    .send({ name: 'Jane Doe', mail: 'janedoe@mail.com' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Jane Doe');
      expect(res.body.mail).toBe('janedoe@mail.com');
    });
});
