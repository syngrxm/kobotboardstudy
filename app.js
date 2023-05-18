const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('<h1>방귀뿡.<h1>');
});

app.listen(port, () => {
    console.log(`서버가 실행된다능. http://localhost:&{port}`);
});

app.use((req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} 라우터가 없띠영.`);
    error.status = 404;
    next(error);
  });
  
  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });