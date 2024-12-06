import { useState } from "react";

export function CategoryIndex({ categories, onShow, onUpdate, onDelete }) {
  // Add onDelete to props
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");

  const handleEdit = (category) => {
    setEditingId(category.id);
    setEditName(category.name); // Initialize input with current category name
  };

  const handleSubmit = (category) => {
    onUpdate(category, { name: editName });
    setEditingId(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Categories ({categories.length})
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow-md rounded-md p-6">
            {editingId === category.id ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                />
                <button
                  onClick={() => handleSubmit(category)}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-semibold">{category.name}</h2>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => onShow(category)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => handleEdit(category)}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this category?"
                        )
                      ) {
                        onDelete(category);
                      }
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
