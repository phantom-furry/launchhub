const appName = "LaunchHub";
let TaskCount = 0;
const tasks = ["task1", "task2", "task3"];
const user = {
  name: "manish",
  email: "abc@gmail.com",
  role: "member"
};
console.log(user.name);
console.log(user.email);
console.log(user.role);

function greet(name) {
  return "Hello, " + name;
};
const getTaskCount = (arr) => {
  return arr.length;
}

const greeet = greet("manish");
console.log(greeet);
const taskCount = getTaskCount(tasks);
console.log(taskCount);

const isTaskDone = (task) => task.completed;

const myTasks = [
   { title: "Build login", completed: true },
   { title: "Create dashboard", completed: false }
];

console.log(isTaskDone(myTasks[0]));

console.log(isTaskDone(myTasks[1]));
