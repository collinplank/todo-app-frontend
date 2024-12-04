export function TodosShow({ todo }) {
  return (
    <div>
      <h1>Todo Information</h1>
      <p>Title: {todo.title}</p>
      <p>Description: {todo.description}</p>
      <p>Deadline: {todo.deadline}</p>
      <p>Completed: {todo.completed}</p>
    </div>
  );
}
