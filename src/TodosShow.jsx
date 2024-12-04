export function TodosShow({ todo, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(todo, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Todo Information</h1>
      <p>Title: {todo.title}</p>
      <p>Description: {todo.description}</p>
      <p>Deadline: {todo.deadline}</p>
      <p>Completed: {todo.completed}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={todo.title} name="title" type="text" />
        </div>
        <div>
          Description: <input defaultValue={todo.desctiption} name="title" type="text" />
        </div>
        <div>
          Deadline: <input defaultValue={todo.deadline} name="title" type="text" />
        </div>
        <div>
          Completed: <input defaultValue={todo.completed} name="title" type="boolean" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
