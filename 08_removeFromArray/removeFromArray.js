
function removeFromArray(array, ...lista){
    let newArrays=[]
    array.forEach(item => {
        if(!lista.includes(item)){
            newArrays.push(item)
        }
    });
return newArrays
}

// Do not edit below this line
module.exports = removeFromArray;
