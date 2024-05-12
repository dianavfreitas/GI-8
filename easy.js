function exerciseOfTheDay() {
    let currentExercise = '';
    function setExercise(exerciseName) {
      currentExercise = exerciseName;
    }
    function getExercise() {
      return currentExercise;
    }
    return {
      setExercise,
      getExercise
    };
  }
 
  function printExerciseOfTheDay(exerciseManager) {
    const exercise = exerciseManager.getExercise(); 
    console.log(`Today's exercise: ${exercise}`);
  }
  
  const exerciseManager = exerciseOfTheDay();
 
  exerciseManager.setExercise('running');
  printExerciseOfTheDay(exerciseManager); 
  exerciseManager.setExercise('swimming');
  printExerciseOfTheDay(exerciseManager); 
  exerciseManager.setExercise('dancing');
  printExerciseOfTheDay(exerciseManager); 
  exerciseManager.setExercise('fencing');
  printExerciseOfTheDay(exerciseManager); 