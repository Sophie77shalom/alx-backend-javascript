 
interface DirectorInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workDirectorTasks: () => string;
  }
  
  
  interface TeacherInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workTeacherTasks: () => string;
  }
  
   
  class Director implements DirectorInterface {
    workFromHome = () => 'Working from home';
    getCoffeeBreak = () => 'Getting a coffee break';
    workDirectorTasks = () => 'Getting to director tasks';
  }
  
   
  class Teacher implements TeacherInterface {
    workFromHome = () => 'Cannot from home';
    getCoffeeBreak = () => 'Cannot have a break';
    workTeacherTasks = () => 'Getting to work';
  }
  
   
  function createEmployee(salary: number | string): Teacher | Director {
    return isNaN(Number(salary)) && salary > 500 ? new Director() : new Teacher();
  }
  
  // Solution for task 6:
  function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  function executeWork(employee: Director | Teacher): string {
    return isDirector(employee)
      ? (employee as Director).workDirectorTasks()
      : (employee as Teacher).workTeacherTasks();
  }
  
  // Solution for task 7:
  type Subjects = "Math" | "History";
  
  function teachClass(todayClass:Subjects): string {
      return `Teaching ${todayClass}`;
  }
  
  // Examples:
  
  // task 5:
  console.log(createEmployee(200));
  console.log(createEmployee(1000));
  console.log(createEmployee('$500'));
  // console.log(createEmployee(true));
  
  // task 6:
  console.log(executeWork(createEmployee(200)))
  console.log(executeWork(createEmployee(1000)))
  // console.log(executeWork("Teacher");
  
  // task 7
  console.log(teachClass('Math'));
  console.log(teachClass('History'));
  // console.log(teachClass('Science'));