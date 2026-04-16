import express from 'express';
import categoriaRoutes from './routes/categoriaRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import produtoRoutes from './routes/produtosRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';
import entregaRoutes from './routes/entregaRoutes.js';

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/categoria',categoriaRoutes);
app.use('/pedido', pedidoRoutes);
app.use('/entrega', entregaRoutes);
app.use('/produto', produtoRoutes);
app.use('/avaliacoes', avaliacaoRoutes);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
