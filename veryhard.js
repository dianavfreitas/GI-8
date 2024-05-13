class Person {
    constructor(name, job, age) {
      this.name = name;
      this.job = job;    //Properties
      this.age = age;    //this. keyword calls our properties
    }
  
    //Exercise is our method to display
    exercise() {
      console.log(`${this.name} says: Reading is so fun! It distracts me when I'm stressed`);
    }
    fetchJob() {
      console.log(`${this.name} is a ${this.job}.`);
    }
  }
  
  const person1 = new Person("Harold", "Backend Engineer", 20);

  person1.exercise();
  person1.fetchJob();
  console.log(person1);


  class Programmer extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true;
    }
  
    completeTask() {
      this.busy = false;
    }
    acceptNewTask() {
      this.busy = true;
    }
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
    learnLanguage(newLanguage) {
      this.languages.push(newLanguage);
    }
    listLanguages() {
      return this.languages;
    }
  }
  
  const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
  const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
  const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);
  
  c1.learnLanguage("CSS");
  c2.learnLanguage("C++");
  c3.learnLanguage("JAVA");
  
  console.log(c1.listLanguages());
  console.log(c2.listLanguages());
  console.log(c3.listLanguages());
  
  console.log(c1);
  console.log(c2);
  console.log(c3);
  
 




