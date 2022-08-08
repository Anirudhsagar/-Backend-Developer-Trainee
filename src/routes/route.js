const express = require('express');
const _ = require('underscore')
const lodash =require('lodash')
const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter') 
const helperModule = require('../util/helper');
const { fromPairs } = require('lodash');
const router = express.Router();



router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    loggerModule.printInfo()
    formatterModule.trimMyString()
    formatterModule.getUpperCaseString()
    formatterModule.changetoLowerCase()
    helperModule.getTodaysDate()
    helperModule.getCurrentMonth()
    helperModule.printBatchDetails()
    let weekdend = ['Saturday','Sunday','Monday']
    let result = _.first(weekdend, 2)
    console.log('Unserscore example resultr is ',result)



    const months = ["jan","feb","mar","april","may","june","july","august","sep","oct","nov","dec"]
    console.log(lodash.chunk(months, 4))

     
    const oddNumber =[1	,3,	5,7,9,11,13,15,17,19,21]
    console.log(lodash.tail(oddNumber));



    const num1 = [1,2,3,4,5];
    const num2 = [2,3,4,5,6];
    const num3 = [3,4,5,6,7];
    const num4 = [4,5,6,7,8];
    const num5 = [5,6,7,8,9];
    console.log(lodash.union(num1,num2,num3,num4,num5));


    const movie = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    const obj = lodash.fromPairs(movie);
    console.log(obj)






    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason