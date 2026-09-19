const tasks = [
   { id: 1, title: "Build login", status: "done", priority: "high" },
   { id: 2, title: "Create dashboard", status: "todo", priority: "medium" },
   { id: 3, title: "Add search", status: "in_progress", priority: "high" },
   { id: 4, title: "Write tests", status: "todo", priority: "low" },
   { id: 5, title: "Deploy app", status: "done", priority: "high" }
];

const taskTitle = tasks.map(task => task.title);
console.log(taskTitle);

const taskPriority = tasks.filter(task => task.priority==="high");
console.log(taskPriority);

const taskStatus = tasks.filter(task => task.status === "done");
console.log(taskStatus);

const highPriorityCount = tasks.reduce((count, task) =>
  task.priority === "high" ? count + 1 : count, 0
);
console.log(highPriorityCount);
