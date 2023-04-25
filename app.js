const express =  require('express');
const app = express();
 
const secondPage = require("./secondPage.js")
const thirdpage = require("./thirdpage.js")
const servicepage = require("./servicepage.js")

app.get("/", (request, response) => {
    response.send('GET Router pages from url');
});


app.use('/secondPage', secondPage);
app.use('/thirdpage', thirdpage)
app.use('/servicepage', servicepage)

app.listen(3800)