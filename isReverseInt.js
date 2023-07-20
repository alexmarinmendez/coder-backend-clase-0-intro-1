console.log(isReverseInt(234, -432))  //false
console.log(isReverseInt(234, 432))  //true
console.log(isReverseInt(-234, -432))  //true
console.log(isReverseInt(-234, -732))  //false

function isReverseInt(int, revInt) {
    const revString = int.toString().split('').reverse().join('')
    return (parseInt(revString) * Math.sign(int)) === revInt
}