let x = [['karthik', 23],['vishnu', 24],['me',25]];
 console.log(x[0]);
  console.log(x[0][1]);
  x.push(['madupuri',92]);
   x.splice(1,0,['me',92]);
   x[1].pop();
   console.log(x);
   let sum = 0
   x.forEach((students) => {
   students.forEach((data)=>{
   console.log(data);
   sum += sum+data;
   console.log(data);
   })
   })