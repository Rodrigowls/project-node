import express from 'express';
const app = express();

app.use(express.json());

app.get('/',  (request, response) => {
    response.json({name: 'paulo', age: 22})
});


app.listen(4000);