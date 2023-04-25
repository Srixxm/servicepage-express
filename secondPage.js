const express = require('express')

const router = express.Router()

router.get("/", (request, response) => {
    response.send("Welcome to 2nd page");
})

module.exports = router ;