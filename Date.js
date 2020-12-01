`<button onClick= 'kaal()'>Date and time</button>`
function kaal(){
    var date = new Date();
    var today = document.write (date.getDate() +'/'+ date.getMonth() + '/'+ date.getYear()+';'+date.getHours()+'/'+date.getMinutes()+'/'+
    date.getSeconds());
    return today
    }