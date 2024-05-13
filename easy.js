Easy
function ExerciseOfTheDay (){
    const today = new Date ();

    const dayOfWeek = today.getDay();

      if(dayOfWeek == 0 ){
       console.log( "running")
      }else if(dayOfWeek == 1){
       console.log( "swimming")
      }else if(dayOfWeek == 2){
       console.log("fencing")
      }else if(dayOfWeek == 3){
       console.log("weightlifting")
      }else if(dayOfWeek == 4){
       console.log( "Karate")
      }else if(dayOfWeek == 5){
       console.log( "Soccer")
      }else if (dayOfWeek == 6){
       console.log( "dancing")
      }else{
        console.log( "rest")
      }
}

ExerciseOfTheDay()



