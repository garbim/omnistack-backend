const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

 /** Exemplos de rotas
  * Query params: Paginaçao, filtros
  * Route params: identificar recursos
  * Request Body: receber o recurso

 app.get('/query', (request, response) => {
    const params = request.query;
   return response.json({ 
       data: params
    });
});

app.get('/route/:id', (request, response) => {
   const params = request.params;
  return response.json({ 
      data: params
   });
});

app.post('/body', (request, response) => {
   const params = request.body;
  return response.json({ 
      data: params
   });
});
  */