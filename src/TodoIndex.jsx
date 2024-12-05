export function TodoIndex({ todos, onShow }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Todos ({todos.length})</h1>
      <div className="grid grid-cols-1 gap-6">
        {todos.map((todo) => (
          <div key={todo.id} className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-semibold">{todo.title}</h2>
            <p className="mt-2 text-gray-600">{todo.description}</p>
            <p className="mt-2 text-gray-500">
              Deadline: <span className="font-medium">{todo.deadline}</span>
            </p>
            <p className="mt-2 text-gray-500">{todo.category_id}</p>
            <p className="mt-2">
              Status:{" "}
              <span className={`${todo.completed ? "text-green-600" : "text-red-600"} font-medium`}>
                {todo.completed ? "Completed" : "Pending"}
              </span>
            </p>
            <button
              onClick={() => onShow(todo)}
              className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              More Information
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
