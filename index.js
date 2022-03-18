function newTask(title, description){
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    markCompleted: function () {
      task.complete = true;
    }
  };
  return task;
}


//Driver Code Below

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task2.logState(); // Clean Cat Litter has not been completed
task2.markCompleted();
task2.logState(); // Clean Cat Litter has been completed




