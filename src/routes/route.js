const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

router.post("/sagar", function(req,res){

    res.send ( {"name": "Anirudh", "age": 22, "girlfriend": null })
    console.log(req.body)
})



// Your player collection should be an ARRAY of player objects. Each player object should have the following attributes:

// e.g. the players array would look like this:
     let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

router.post("/sagar-api", function (req, res){

    let id = req.body     
    for (i =0; i<players.length; i++){
        let newPlayer = players[i];   


        if(id.name == newPlayer.name){
            return res.send ("this player exist")
        }
    }
    players.push(id)
    res.send({ data:players, status:true})
    
    
});



// router.post("/playes-api", function (req, res){
//     let element = req.body
//     for(i = 0; i < players.length; i++){
//         let sports = players[i]
//         if (sports.name == element.name){
//             return res.send("this player is exist")
//         }
//     }
//     players.push(element)
//     res.send({ data:players , status: true})
// })


// router.post("/player-api", function (req, res){
//     let newPlayer = req.body.players
//     for(i =0; i<players.length; i++){
//         let newPlayer = players[i]
//         if(newPlayer = players.newPlayer){
//             return res.send("this player exist")
//         }
//     }
//     players.push(newPlayer)
//     res.send({ data:players , status:true })
// })



// // let players = []

// router.post('/players', function (req, res) {
    
//     let newPlayer = req.body
//     let newPlayersName = newPlayer.name
//     let isNameRepeated = false

//     //let player = players.find(p => p.name == newPlayersName)

//     for(let i = 0; i < players.length; i++) {
//         if(players[i].name == newPlayersName) {
//             isNameRepeated = true;
//             break;
//         }
//     }

//     //undefined is same as false/ a falsy value
//     if (isNameRepeated) {
//         //Player exists
//         res.send("This player was already added!")
//     } else {
//         //New entry
//         players.push(newPlayer)
//         res.send(players)
//     }
// });





// router.post("/test-post-4", function (req, res) {
//     let arr = ["Anirudh", "Payal"]
//     let ele = req.body.element
//     let player = false

//     for (i = 0; i < arr.length; i++) {
//         if (ele == arr[i]) {
//             player = true
//             break;
//         }
//     }if (player == false ){
//         arr.push(ele)
//         res.send(arr)
//     }else {res.send("already exist")}
// }
// )






let persons = [
    {
        name : "pk",
        age : 10,
        votingstatus : false
    },
    {
        name : "SK",
        age : 20,
        votingstatus : false
    },
    {
        name : "AA",
        age : 70,
        votingstatus : false
    },
    {
        name : "SC",
        age : 5,
        votingstatus : false
    },
    {
        name : "HO",
        age : 40,
        votingstatus : false
    }
]


// router.post("/votingAge", function (req ,res){
//     let arr = [];
//     let personeage =  req.query.age;
//     for ( i = 0; i<persons.length; i++){
//         if(persons[i].age>personeage){
//             persons[i].votingstatus =true;
//             arr.push(persons[i]);
//         }

//     }
//     res.send(arr);
// })




router.post("/persons", function (req,res){

    let votingAge = req.query.votingAge
    let result = []
    for (let i = 0; i <persons.length; i++){
        let id = persons[i]
        if (id.age>votingAge){
            id.votingstatus=true
            result.push(id)
        }
    }
    return res.send({ data: result , status : true})
    
})












module.exports = router;