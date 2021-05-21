
function lucky_seven(arr){
    if(arr.length<3){
        return "not possible"
    }
    for(var i=0;i<arr.length;i++){
        if(arr[i]+arr[i-1]+arr[i-2]===7){
            return true;
        }
    }
    return false;p
}
var a = lucky_seven([2,0,5,0]);
console.log(a);