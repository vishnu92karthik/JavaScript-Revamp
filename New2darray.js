function twodarray(a,b){
    let arr = [];
     for(let i =0; i<a; i++){
     for(let j=0;j<b; j++){
     arr[i]=[];
     }
     }
     for(let i =0; i<a; i++){
     for(let j=0;j<b; j++){
     arr[i][j]=j;
     }
     }
     return arr;
    }
     const c = twodarray(4,5);
     console.log(c);
        document.write([c]);