export function TodoIndex({ todos, onShow }) {
  return (
    <div>
      <h1>Todo: ({todos.length} total)</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>{todo.deadline}</p>
          <p>{todo.completed}</p>
          <button onClick={() => onShow(todo)}>More Information</button>
        </div>
      ))}
    </div>
  );
}
