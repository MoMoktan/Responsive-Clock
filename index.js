
let hours = document.getElementById("hrs");
let minutes = document.getElementById("mins");
let seconds = document.getElementById("secs");


setInterval(()=>{

    const currentTime = new Date();


    if(currentTime.getHours() < 10){

    hours.innerHTML = '0' + currentTime.getHours();

     }

    else{
        hours.innerHTML=currentTime.getHours();
    }
   


   if( currentTime.getSeconds() < 10 ){

    seconds.innerHTML= '0' + currentTime.getSeconds();

    }else{
        seconds.innerHTML = currentTime.getSeconds();
    }


if(currentTime.getMinutes() < 10 ){

    minutes.innerHTML= '0' + currentTime.getMinutes();


}else{

    minutes.innerHTML=currentTime.getMinutes();

}

},1000)



