export function TodoDetails({ todo }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{todo.title}</h2>
      <p className="text-gray-600 mb-4">{todo.description}</p>
      <p className="mb-2">
        <span className="font-semibold">Category:</span> {todo.category_id}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Deadline:</span> {todo.deadline}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Status:</span>{" "}
        <span className={todo.completed ? "text-green-600" : "text-red-600"}>
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </p>
    </div>
  );
}
