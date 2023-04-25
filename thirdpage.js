const express = require('express')

const router = express.Router()

router.get("/:id/:name", (request, response) => {
    response.send("Welcome to thrid page " + request.params.id + " " + request.params.name);
})

module.exports = router ;