Task Manager API Backend Projets

> Goal :- Building a REST APIs for managing task

> Task APIs : 
-> POST /tasks → create task
-> GET /tasks → get all tasks
-> GET /tasks/:id → get single task
-> PATCH /tasks/:id → update task
-> DELETE /tasks/:id → delete task


> Task Schema 
{
 title: String,
 description: String,
 status: "pending | completed",
 dueDate: Date
}


