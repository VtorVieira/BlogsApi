require('dotenv').config();
require('express-async-errors');
const app = require('./api');
const routers = require('./routers');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', routers.loginRouter);

app.use('/user', routers.userRouter);

app.use('/categories', routers.categoriesRouter);

app.use('/post', routers.postRouter);

app.use((err, _req, res, _next) => {
  res.status(err.status).json({ message: err.message });
});

app.listen(port, () => console.log('ouvindo porta', port));
