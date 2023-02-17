

const myAverageScore = function(arr){
    let tot = 0;
    for (let nuf = 0; nuf < arr.length;nuf ++) {
        if (arr[nuf]>100){
            return
        }else{
            tot+=arr[nuf]
        }
    }
    let fi = tot/arr.length
    if (fi>=91 && fi<101) {
        console.log("A")
    }else if(fi>=81 && fi<91){
        console.log("B")
    }else if(fi>=71 && fi<81){
        console.log("C")
    }else{
        console.log("D")
    }
}



myAverageScore([100, 75, 81, 96])
myAverageScore([45, 63, 85, 70])
myAverageScore([77, 82, 60, 58])
myAverageScore([93, 99, 93, 96])