export const taskFirst = () => {
    const task = 'I prefer const when I can.';
    return task;
  };
  
  export const getLast = () => {
    return ' is okay';
  };
  
  export const taskNext = () => {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  };
  