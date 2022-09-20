let arr = [1, 2, [31 ,[22,4]]];

function flatarr(arr){
    let arr1=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            arr1 = arr1.concat(flatarr(arr[i]))
        }
        else
        {
            arr1.push(arr[i])
        }
    }
    return arr1
}
console.log(flatarr(arr))

