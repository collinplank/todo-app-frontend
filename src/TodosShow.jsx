export function TodosShow({ todo, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(todo, params, () => event.target.reset());
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Todo Details</h2>
      <div className="mb-6">
        <p className="text-lg">
          <span className="font-semibold">Title:</span> {todo.title}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Description:</span> {todo.description}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Deadline:</span> {todo.deadline}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Completed:</span> {todo.completed ? "Yes" : "No"}
        </p>
      </div>
      <h3 className="text-xl font-semibold mb-4">Edit Todo</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            defaultValue={todo.title}
            name="title"
            type="text"
            id="title"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            defaultValue={todo.description}
            name="description"
            id="description"
            rows="3"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Deadline:
          </label>
          <input
            defaultValue={todo.deadline}
            name="deadline"
            type="date"
            id="deadline"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex items-center">
          <input
            defaultChecked={todo.completed}
            name="completed"
            type="checkbox"
            id="completed"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="completed" className="ml-2 block text-sm text-gray-700">
            Completed
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Update Todo
        </button>
      </form>
    </div>
  );
}
