function letters(n){
    let arr=[];
    for(let i=65;i<=90;i++){
        arr.push(String.fromCharCode(i));
    }
    for(let i=0;i<n;i++){
        let ltr='';
        for(let j=1;j<=n;j++){
            ltr=ltr+arr[((j*n)-i-1)%26]+" ";
        }
        console.log(ltr)
    }
}
letters(4)