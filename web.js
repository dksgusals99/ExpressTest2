const cluster = require('cluster');
const path = require('path');
const express = require('express');
const app = express();

const port = 8080;
const doLog = (process.env.doLog==="true")?true:false;

if (doLog) {
    console.log("Product web.js");
}

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/',require('./routers/index'));
app.use('/user',require('./routers/user'));
app.use('/media',require('./routers/media'));
app.use('/w',require('./routers/w'));
app.use(require('./routers/error'));

app.listen(8080, function () {
    if (doLog) {
        console.log(`listening on port ${port}!`);
    }
});
