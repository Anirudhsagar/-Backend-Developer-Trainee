// let axios = require("axios");

// const getMemes = async (req , res)=>{
//     try{
//         let options={
//             method: "get",
//             url: "http://api.imgflip.com/get_memes"
//         }
//         let result = await axios(options);
//         console.log(result)
//         res.status(200).send(result.data);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).send({msg:err.message})
//     }
// }

// const postMeme= async (req,res)=>{
//     try{
//         let memeId= req.query.template_id;
//         let text0= req.query.text0;
//         let text1= req.query.text1;
//         let username= req.query.username;
//         let password= req.query.password;
//         let options= {
//             method: 'post',
//             url:`https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`

//             // url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`

//         }
//         let result= await axios(options)
//         res.status(201).send( {data:result.data.data})
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).send({ msg:err.message});
//     }
// }

// module.exports.getMemes=getMemes

// module.exports.postMeme=postMeme


const { default: axios } = require("axios")

let memeHandler= async function(req,res){
    try{
        let template_id= req.query.template_id
        let text0= req.query.text0
        let text1=req.query.text1
        let user = req.query.username
        let password =req.query.password
        var options={
            method:"post",
            url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${user}&password=${password}`
        }
    let result=await axios(options)
        res.send({data:result.data})
    }catch(error){
        console.log(error)
        res.status(500).send({status:false, msg:"server error"})
    }
}

module.exports.memeHandler=memeHandler
