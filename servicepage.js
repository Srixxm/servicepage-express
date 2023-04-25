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

router.get('/', (request, response) => {
    response.send("welcome to Service page")
})

router.get("/:id", (request, response) => {
    const serviceid = Number(request.params.id);
    const getservice = listofservices.find((serve) => serve.id === serviceid );

    if(!getservice)
    {
        response.status(500).send("Invalid service code");
        console.log(request.params.id);
    }

    else
    {
        response.send(getservice.service)
    }
})




module.exports = router ;