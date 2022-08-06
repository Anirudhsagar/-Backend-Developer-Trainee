const formatter = function (){

    const sagar = `      "Helloworld"     `;
    const sagar1 = "hello"
    const sagar2 = "HELLO"
    console.log('Helloworld without space '+ sagar.trim())
    console.log('hello  to  upper  case ' + sagar1.toUpperCase())
    console.log('HELLO  to  lower  case ' + sagar2.toLowerCase())
}
module.exports.form = formatter