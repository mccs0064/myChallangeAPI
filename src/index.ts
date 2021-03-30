import express from 'express';

const app = express();
const port = 8080 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/health', require('express-healthcheck')());
// app.use('/api', routes);

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );