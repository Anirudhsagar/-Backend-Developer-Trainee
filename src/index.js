const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment= require('moment')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://anirudhsagar:fgAGHtahZoVNyIR3@cluster0.btvli.mongodb.net/Populate-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

// app.use('/', route);

// app.use (
//     function (req, res, next) {
//         const date=moment().format('DD-MM-YYYY, HH:mm:ss');
//         const ipAddress= req.ip;
//         const r=req.originalUrl
//         console.log (date," , ",ipAddress," , ",r);
//         next();
//   }
//   );

// app.use('/', route);







app.use (
    function (req, res, next){
        let time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        let ip= req.ip
        let url= req.originalUrl

        console.log(`${time} ${ip} ${url}`);

        next();
    }
);

app.use("/",route);


app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
