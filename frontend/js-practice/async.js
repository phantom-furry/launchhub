const fetchTaskById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, title: "Setup Django Backend", status: "todo" });
      }
      else {
        reject(new Error("Task Not Found"));
      }
    },1000)
  })
}

async function getTaskDetails(id) {
  try {
    const task = await fetchTaskById(id);
    console.log("Success: Task title is " + task.title);
  }
  catch (error){
    console.log(error);
  }
}

getTaskDetails(1)
getTaskDetails(99)
