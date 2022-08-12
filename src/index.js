const express = require('express');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose')


const route = require('./routes/route.js');
// const router = require('./routes/route.js');
const app = express();
app.use('/', route);

mongoose.connect("mongodb+srv://anirudhsagar:sXwJbDVsE1CJNxvJ@cluster0.btvli.mongodb.net/anirudhfile-DB",{
    useNewUrlParser : true

})

.then( () => console.log("MongoDb is Connected"))
.catch( err => console.log(err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(process.env.PORT || 4001, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4001))
});


// module.exports=router