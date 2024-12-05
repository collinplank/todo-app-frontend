export function CategoryIndex({ categories, onShow }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Categories ({categories.length})</h1>
      <div className="grid grid-cols-1 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <button
              onClick={() => onShow(category)}
              className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Todos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
