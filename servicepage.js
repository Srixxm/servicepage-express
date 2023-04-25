const express = require('express')

const router = express.Router()

// router.get("/:op", (request, response) => {
//     // if(request.params.op == 1)
//     // {
//     //     response.send("App development");
//     // }
//     // elseif (request.params.op==2)
//     // {
//     //     response.send("Mobile development");
//     // }
//     switch(request.params.op)
//     {
//         case "1":
//             response.send("App development ");
//             break;
//         case "2":
//             response.send("Web development");
//             break;
//         default:
//             response.send("Invalid number")
//             break;
//     }
// })
let listofservices = [
    {
        id : 1,
        service : "web development"
    },
    {
        id : 2,
        service : "Mobile development"
    },
    {
        id : 3,
        service : "Low level design "
    }
]
router.get("/", (request,response) => {
    response.send("Welcome to service page")
})
router.route("/:id")
   .get( (request,response) => {
    response.send(`service : ${request.services.service}`)
})

router.param("id", (request,response,next,id) => {
    request.services = listofservices[id]
    console.log(request.services)
    next()
})


module.exports = router ;