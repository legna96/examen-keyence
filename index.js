require('dotenv').config({path : './variables.env'});
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/', require('./routes/pages'));

function main() {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`server on port ${process.env.PORT}`);
    })
}

main();