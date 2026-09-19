const task = {
  id: 1,
  title: "Build login",
  status: "todo",
  priority: "high",
  assignee: {
    name: "Manish",
    email: "manish@example.com"
  }
};

const tasks = ["Build login", "Create dashboard", "Deploy app"];

const {title, status:taskStatus, priority } = task;
console.log(title);
console.log(taskStatus);
console.log(priority);

const updatedTask = { ...task, status: "done", completedAt: "2024-01-15" };
console.log(updatedTask);

const [first, second, ...remaining] = tasks;
console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remaining);
