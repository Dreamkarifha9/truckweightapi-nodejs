const express = require('express');
import config from './config';
const cors = require ("cors");
import loginkiwebRoutes from './router/loginkiweb.routes'
import grouptruckweight from './router/groupqtruckweight.routes'
import truckqcartype from './router/truckqcartype.routes'
import registertemp from './router/registertemp.routes'
import parkinglot from './router/truckqparkinglot.routes'




const app = express();

// settings
app.set('port', config.port);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(loginkiwebRoutes);
app.use(grouptruckweight);
app.use(truckqcartype);
app.use(registertemp);
app.use(parkinglot);


export default app